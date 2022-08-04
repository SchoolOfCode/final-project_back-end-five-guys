import express from "express";
const router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("Home page not in use");
});

router.get("/diary", async function (req, res, next) {
  res.send("Home page not in use");
});

export default router;
