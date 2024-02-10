const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import planetControllers module for handling planet-related operations
const planetControllers = require("./controllers/planetControllers");

// Route to get a list of planets
router.get("/planets", planetControllers.browse);

// Route to get a specific planet by ID
router.get("/planets/:id", planetControllers.read);

/* ************************************************************************* */

module.exports = router;
