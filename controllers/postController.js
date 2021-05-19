const models = require("../models");
const Validator = require("fastest-validator");
// const { default: Validator } = require("fastest-validator");

let save = (req, res) => {
    const post = {
        title: req.body.title,
        content: req.body.content,
        imageUrl: req.body.image_url,
        categoryId: req.body.category_id,
        userId: req.userData.userId
    }

    console.log("Token==", req.userData.userId);

    models.Category.findByPk(req.body.category_id).then(result => {
        if(result !== null){
            models.Post.create(post).then(result => {
                res.status(200).json({
                    message: "Post Created!",
                    post: result
                })
            }).catch(error => {
                res.status(500).json({
                    message: "Something ERR",
                    post: error
                })
            })            
        } else {
            res.status(400).json({
                message: "Category not found"
            })
        }
    });
    
}

let show = (req, res) => {
    const id = req.params.id

    models.Post.findByPk(id).then(result => {
        // res.status(200).json(result)
        if(result){
            res.status(200).json(result);
        } else {
            res.status(404).json({message : "Post nou found"});
        }
    }).catch(error => {
        res.status(500).json({
            message: "Show Err",
            error
        });
    });
}

let showAll = (req, res) => {
    models.Post.findAll().then(result => {
        // res.status(200).json(result)
        if(result.length === 0){
            res.status(404).json({message : "No Post"});
        } else {
            res.status(200).json(result);
        }
    }).catch(error => {
        res.status(500).json({
            message: "Get All Post Err",
            error
        });
    });
};

let update = (req, res) => {
    const id = req.params.id
    const updatedPost = {
        title: req.body.title,
        content: req.body.content,
        imageUrl: req.body.image_url,
        categoryId: req.body.category_id,
        userId: req.userData.userId
    };

    // const userId = 1;
    models.Post.update(updatedPost, {where: {id:id, userId:userId}}).then(result => {
        
        if(result){
            res.status(200).json({
                message: 'Updated post successfully',
                post: result
            })
        } else {
            res.status(404).json({message : "Post not found"});
        }
        }).catch(error => {
            res.status(500).json({
                message: 'UPdate failed',
                error: error
            });
    })
}

let destroy = (req, res) => {
    const id = req.params.id;
    const userId = 1
    models.Post.destroy({where: {id:id, userId:userId}}).then(result => {
        if(result){
            res.status(200).json({
                message: 'Delete post successfully',
                post: result
            });
        } else {
            res.status(404).json({message : "Post nots found"});
        };
    }).catch(error => {
        res.status(500).json({
            message: 'Delete Failed',
            error: error
        })
    })
}

module.exports = {
    save: save,
    show: show,
    showAll: showAll,
    update: update,
    destroy: destroy
}