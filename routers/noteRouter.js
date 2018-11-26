const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Note = require('../models/Note');

router.get('/', (req, res, next) => {
    Note.find()
        .select('title description')
        .exec()
        .then(docs => {
            res.status(200).json(docs)
        })
        .catch(err => {
            res.status(500).json({ error: err })
        })
})

router.post('/', (req, res, next) => {
    const note = new Note({
        _id: new mongoose.Types.ObjectId(),
        title: req.body.title,
        description: req.body.description
    });
    note.save().then(result => {
        res.status(201).json({
            message: 'Note is created successfully',
            note: {
                title: result.title,
                description: result.description,
                _id: result._id,
            }
        });
    }).catch(err => {
        res.status(500).json({ error: err })
    });
});

router.delete('/', (req, res, next) => {
    Note.remove({ _id: req.query.id })
        .exec()
        .then(result => {
            res.status(200).json(result);
        })
        .catch(err => {
            res.status(500).json({ error: err })
        });
});

router.put('/', (req, res, next) => {
    const id = req.query.id
    const updateOps = {
        title: req.body.title,
        description: req.body.description
    }
    Note.update({ _id: id }, { $set: updateOps })
        .exec()
        .then(result => {
            res.status(200).json(result);
        })
        .catch(err => {
            res.status(500).json({ error: err })
        });
});

module.exports = router;