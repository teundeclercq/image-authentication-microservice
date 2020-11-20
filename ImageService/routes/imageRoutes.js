const router = require('express').Router();
const Image = require('../models/Image');
const verify = require('./verifyToken');


router.post('/', verify, async (req, res) => {
    // post the image to the database.
    const image = new Image({
        type: req.file.mimetype,
        name: req.file.originalname,
        data: req.file.buffer,
    });

    try {
        const savedImage = await image.save();
        res.send(savedImage);
    } catch (e) {
        res.status(400).send(e);
    }
});

router.get('/:id', verify, async (req, res) => {
    const imageId = req.params.id;
    const image = await Image.findOne({where: {uuid: imageId}});
    console.log(image)
    res.send(image);
});

module.exports = router;
