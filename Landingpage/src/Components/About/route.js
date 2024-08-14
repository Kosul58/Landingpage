import express from "express";
import cors from "cors";
import foodsort from "./foodsort.js"; // Adjust the import if necessary

const app = express();
app.use(express.json());
app.use(cors());

const userid = "kosul";

app.get("/fetchmeal", async (req, res) => {
  try {
    const data = await foodsort(userid);
    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching meal:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
