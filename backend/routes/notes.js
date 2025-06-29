const express = require('express');
const router = express.Router();
const Note = require('../models/Notes');

// Get all the notes
router.get('/', async (req, res) => {
    try {
        const notes = await Note.find();
        res.json(notes);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get a specific note by ID
router.get('/:id', async (req, res) => {
    try {
        const particularNote = await Note.findById(req.params.id);
        if (!particularNote) {
            return res.status(404).json({ message: 'Note not found' });
        }
        res.json(particularNote);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

//post notes
router.post('/notespost', async (req, res) => {
        const note = new Note({
            title: req.body.title,
            content:req.body.content
        })
    try {
        const newNote = await note.save();
        res.status(201).json(newNote);
    }
    catch (err) {
        res.status(400).json({ messgae: err.message })
    }
})

//delete the note

// DELETE a note by ID
router.delete('/deletenote/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const deletedNote = await Note.findByIdAndDelete(id);
        if (!deletedNote) {
            return res.status(404).json({ message: 'Note not found' });
        }
        res.json({ message: 'Note deleted successfully', note: deletedNote });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


//update
router.put('/updatenote/:id', (req, res) => {
    const id = req.params.id;
    try {
        const note = Note.findById(id);
        if (req.body.title) {
            note.title = req.body.title;
        }
        if (req.body.content) {
            note.content = req.body.content
        }
        const updatednote = note.save();
        res.status(200).json(updatednote)
    }
    catch(err)
    {
     res.status(500).json({message:err.message})
    }
})

module.exports = router;
