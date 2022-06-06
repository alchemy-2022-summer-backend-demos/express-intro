const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
  return res.json([
    { id: 1, name: "Benny" },
    { id: 2, name: "Finley" },
    { id: 3, name: "Ruby" },
    { id: 4, name: "Jeep" },
  ]);
});

module.exports = router;
