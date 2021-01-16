const router = require("express").Router();
const views = require("../controllers/views.controller");

router.get("/dashboard", views.dashboard);
router.get("/category", views.category);
router.get("/bank", views.bank);
router.get("/item", views.item);

module.exports = router;
