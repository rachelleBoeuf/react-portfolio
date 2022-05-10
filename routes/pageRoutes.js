const router = require('express').Router();

router.get('/', async (req, res) => {
    try {
        res.render('home');
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.post('/submit', async (req, res) => {
    try {
        res.status(200).json({ success: true });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;
