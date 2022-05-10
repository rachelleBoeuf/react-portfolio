const router = require('express').Router();

router.get('/', async (req, res) => {
    console.log('here');
    try {
        res.render('home');
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;
