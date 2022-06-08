const People = require("../models/people");

// Index
const index = async (req, res) => {
  try {
    res.json(await People.find({}));
  } catch (error) {
    // send error to user
    res.status(400).json(error);
  }
};

// Delete
const del = async (req, res) => {
  try {
    res.json(await People.findByIdAndDelete(req.params.id));
  } catch (error) {
    res.status(400).json(error);
  }
};

// Update
const update = async (req, res) => {
  try {
    res.json(
      await People.findByIdAndUpdate(req.params.id, req.body, { new: true })
    );
  } catch (error) {
    res.status(400).json(error);
  }
};

// Create
const create = async (req, res) => {
  try {
    res.json(await People.create(req.body));
  } catch (error) {
    res.status(400).json(error);
  }
};

// Show
const show = async (req, res) => {
  try {
    res.json(await People.findById(req.params.id));
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = {
  index,
  del,
  update,
  create,
  show,
};