const Track = require('../models/track.js');
const express = require('express');
const router = express.Router();

// CREATE - POST - /Tracks
router.post('/', async (req, res) => {
  try {
      const createdTracks = await Track.insertMany(req.body);
      res.status(201).json(createdTracks);
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
});

// READ - GET - /Tracks
router.get('/', async (req, res) => {
  try {
    const foundTracks = await Track.find();
    res.status(200).json(foundTracks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
  
// READ - GET - /Tracks/:TrackId
router.get('/:TrackId', async (req, res) => {
  try {
    console.log(req.params.TrackId);
    const foundTrack = await Track.findById(req.params.TrackId);

    if (!foundTrack) {
      res.status(404);
      throw new Error('Track not found.');
    }

    res.status(200).json(foundTrack);
  } catch (error) {
    if (res.statusCode === 404) {
      res.json({ error: error.message });
    } else {
      res.status(500).json({ error: error.message });
    }
  }
})
  
// DELETE - DELETE - /Tracks/:TrackId
router.delete('/:TrackId', async (req, res) => {
  try {
    const deletedTrack = await Track.findByIdAndDelete(req.params.TrackId);

    if (!deletedTrack) {
      res.status(404);
      throw new Error('Track not found.');
    }

    res.status(200).json({ message: `Track titled "${deletedTrack.title}" has been deleted.` });
  } catch (error) {
    if (res.statusCode === 404) {
      res.json({ error: error.message });
    } else {
      res.status(500).json({ error: error.message });
    }
  }
});
  
// UPDATE - PUT - /Tracks/:TrackId
router.put('/:TrackId', async (req, res) => {
  try {
    const updatedTrack = await Track.findByIdAndUpdate(req.params.TrackId, req.body, { new: true });

    if (!updatedTrack) {
      res.status(404);
      throw new Error('Track not found.');
    }

    res.status(200).json(updatedTrack);
  } catch (error) {
    if (res.statusCode === 404) {
      res.json({ error: error.message });
    } else {
      res.status(500).json({ error: error.message });
    }
  }
});
  
// Export the router at the bottom of the file
module.exports = router;