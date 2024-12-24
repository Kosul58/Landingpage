import express from "express";
import cors from "cors";
import foodsort from "./foodsort.js"; // Adjust the import if necessary
import closeconnection from "../../../ai/dataprc copy.js";
import emailadderr from "../Database/emailadder.js";
import emailsend from "../admin/emailsender.js";
import searchfood from "../admin/searchfood.js";
import searchuser from "../admin/searchuser.js";
import data5 from "../admin/admindata5.js";
import deleteuser from "../admin/deleteuser.js";
import searchuserregisterandsave from "../Registerpage/registeruser.js";
import searchuserandlogin from "../Loginpage/logger.js";
import addfoodindb from "../Dashboard/foodaddindash.js";
import addwtindb from "../Dashboard/userwt.js";
import fetchdata from "../Dashboard/fetchdata.js";

const app = express();
app.use(express.json());
app.use(cors());

app.post("/fetchmeal", async (req, res) => {
  const data = req.body;
  let diab, lbp, hbp;
  if (data.healthIssues == "diabities") {
    diab = 1;
    lbp = 0;
    hbp = 0;
  } else if (data.healthIssues == "lowbp") {
    diab = 0;
    lbp = 1;
    hbp = 0;
  } else if (data.healthIssues == "highbp") {
    diab = 0;
    lbp = 0;
    hbp = 1;
  } else if (data.healthIssues == "none") {
    diab = 0;
    lbp = 0;
    hbp = 0;
  } else if (data.healthIssues == "diabities lowbp") {
    diab = 1;
    lbp = 1;
    hbp = 0;
  } else if (data.healthIssues == "diabities highbp") {
    diab = 1;
    lbp = 0;
    hbp = 1;
  }
  try {
    const bmr = data.bmr;
    const uid = data._id;
    const ftype = data.dietaryPreferences;
    console.log(bmr, uid, ftype, diab, lbp, hbp);
    await closeconnection(bmr, uid, ftype, diab, lbp, hbp);
    console.log("Process1 complete");
    const data2 = await foodsort(uid);
    // console.log(data);
    res.status(200).json(data2);
  } catch (error) {
    console.error("Error fetching meal:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.post("/addfoodindb", async (req, res) => {
  const data = req.body;
  // console.log(data);
  await addfoodindb(data);
  res.status(200).json(data);
});
app.post("/addwtindb", async (req, res) => {
  const data = req.body;
  // console.log(data);
  await addwtindb(data);
  res.status(200).json(data);
});

app.post("/registeruser", async (req, res) => {
  try {
    const { data } = req.body;

    const registrationResult = await searchuserregisterandsave(data);

    if (registrationResult === 1) {
      // Registration successful
      res.status(200).json({
        message: "Registration successful",
      });
      console.log("Registration successful");
    } else if (registrationResult === 0) {
      // User already exists
      res.status(400).json({ error: "User already exists" });
      console.log("User already exists");
    } else {
      // Unexpected error during registration
      res.status(500).json({ error: "Registration failed" });
      console.log("Registration failed");
    }
  } catch (error) {
    console.error("Error during registration:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.post("/login", async (req, res) => {
  const data = req.body;
  console.log(data);

  const user = await searchuserandlogin(data);

  if (user) {
    console.log(user);
    res.status(200).json(user); // Send user data on success
  } else {
    res.status(401).json({ error: "Invalid credentials" });
  }
});

app.post("/getuserdata", async (req, res) => {
  const data = req.body.user_id;
  const date = req.body.date;
  const user = await fetchdata(data, date);
  res.status(200).json(user);
});

app.post("/email", async (req, res) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }

  try {
    await emailadderr(email);
    res.status(200).json({ message: "Email added/updated successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error adding/updating email", error });
  }
});

app.post("/sendmail", async (req, res) => {
  const { subject, message } = req.body;
  if (!subject || !message) {
    return res
      .status(400)
      .json({ message: "Subject and message are required" });
  }

  try {
    await emailsend(subject, message);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error sending email", error });
  }
});

app.post("/foodsearch", async (req, res) => {
  try {
    const { search } = req.body;
    const food = await searchfood(search);
    res.status(200).json({ food });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

app.post("/usersearch", async (req, res) => {
  try {
    const { search } = req.body;
    const user = await searchuser(search);
    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/admindata5", async (req, res) => {
  const data = await data5();
  res.send(data);
});

app.delete("/deleteuser", async (req, res) => {
  try {
    const { uname, user_id } = req.body;
    await deleteuser(uname, user_id);
    // console.log(uname, user_id);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
