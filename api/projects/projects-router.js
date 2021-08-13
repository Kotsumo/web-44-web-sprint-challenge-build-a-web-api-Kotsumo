// Write your "projects" router here!
const { json } = require('express');
const express = require('express');
const Post = require('./projects-model');

const router = express.Router();

router.get('/', (req, res) => {
    Post.find()
    .then(found => {
        res.json(found)
    })
    .catch(err => {
        res.status(500).json({
            message: "The posts information could not be retrieved",
            err: err.message,
            stack: err.stack,
        })
    })
});

router.get('/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        if(!post) {
            res.status(404).json({
                message: "The post with the specific ID does not exist"
            })
        } else {
            res.json(post)
        }
    }
    catch (err) {
        res.status(500).json({
            message: "The post information could not be retrieved",
            err: err.message,
            stack: err.stack,
        })
    }
});

router.post('/', (req, res) => {
    
})

router.put('/:id', (req, res) => {
    
})

router.delete('/:id', async (req, res) => {
    
})

router.get('/:id/actions', async (req, res) => {
    
})

module.exports = router;