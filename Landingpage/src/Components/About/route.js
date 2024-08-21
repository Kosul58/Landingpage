import express from "express";
import cors from "cors";
import foodsort from "./foodsort.js"; // Adjust the import if necessary
import closeconnection from "../../../ai/dataprc copy.js";

const app = express();
app.use(express.json());
app.use(cors());

app.get("/fetchmeal", async (req, res) => {
  try {
    const bmr = req.query.bmr || 2330;
    const uid = req.query.uid || "kosul";
    const ftype = req.query.ftype || "nonveg";
    const diab = req.query.diab || 1;
    const lbp = req.query.lbp || 0;
    const hbp = req.query.hbp || 0;
    await closeconnection(bmr, uid, ftype, diab, lbp, hbp);
    const data = await foodsort(uid);
    res.status(200).json(data);
    console.log(diab, lbp, hbp);
  } catch (error) {
    console.error("Error fetching meal:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
