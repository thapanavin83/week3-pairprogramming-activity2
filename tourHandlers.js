const Tour = require("./tourLib");

const getAllTours = (req, res) => {
  const tours = Tour.getAll();
  res.json(tours);
};

const createTour = (req, res) => {
  res.json({ message: "Hello from createTour" });
};

const getTourById = (req, res) => {
  const tour = Tour.findById(req.params.tourId);

  if (!tour) {
    return res.status(404).json({ message: "Tour not found" });
  }

  res.json(tour);
};

const updateTour = (req, res) => {
  res.json({ message: "Hello from updateTour" });
};

const deleteTour = (req, res) => {
  const deleted = Tour.deleteOne(req.params.tourId);

  if (!deleted) {
    return res.status(404).json({ message: "Tour not found" });
  }

  res.status(204).send();
};

module.exports = {
  getAllTours,
  createTour,
  getTourById,
  updateTour,
  deleteTour,
};