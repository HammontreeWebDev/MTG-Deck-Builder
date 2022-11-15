const router = require("express").Router();
const userRoutes = require("./userRoutes");
const deckRoutes = require("./deckRoutes");
const scryRoutes = require("./scryRoutes");

router.use("/user", userRoutes);
router.use("/deck", deckRoutes);
router.use("/scry", scryRoutes);

module.exports = router;
