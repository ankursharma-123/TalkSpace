import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("sever is running");
});

export default router;
