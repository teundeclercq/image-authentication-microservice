const router = require('express').Router();
const Image = require('../models/Image');

router.post('/', async (req, res) => {
    // post the image to the database.
    const Image = new Image({
        type: req.file.mimetype,
        name: req.file.originalname,
        data: req.file.buffer,
    });

    try {
        const savedImage = await Image.save();
        res.send(savedImage);
    } catch (e) {
        res.status(400).send(e);
    }
});

router.get('/{id}', async (req, res) => {
   // get the image by id.
});

module.exports = router;
