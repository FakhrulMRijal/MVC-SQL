let uploadImage = (req, res) => {
    if(req.file.filename){
        res.status(201).json({
            message: "Image upload success!!",
            url: req.file.filename
        });
    } else {
        res.status(500).json({
            message: "Failed send image"
        });
    }
}

module.exports = {
    uploadImage: uploadImage
}