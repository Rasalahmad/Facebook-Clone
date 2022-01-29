const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("User route is here");
});

module.exports = router;
