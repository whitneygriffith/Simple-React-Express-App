const express = require('express');
const router = express.Router();

// This middleware fires for all routes visited on this router.
// next() hands off the res, req objects to the next suitable
// router call.
router.use((req, res, next) => {
    console.log("[Admin Area]");
    next();
});

router.get('/', (req,res) => {
    res.send({
        status: 301,
    });
});

module.exports = router;