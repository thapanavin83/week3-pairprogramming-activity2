const Tour = require("./tourLib");

const getAllTours = (req, res) => {
  const tours = Tour.getAll();

  res.json(tours);
};

const createTour = (req, res) => {
  const { name, info, image, price, location } = req.body;

  if (!name || !info || !image || !price || !location) {
    return res.status(400).json({
      message: "All tour fields are required",
    });
  }

  const tour = Tour.addOne(
    name,
    info,
    image,
    price,
    location
  );

  res.status(201).json(tour);
};

const getTourById = (req, res) => {
  res.json({
    message: `Hello from getTourById for tour ${req.params.tourId}`,
  });
};

const updateTour = (req, res) => {
  const { name, info, image, price, location } = req.body;

  if (
    name === "" ||
    info === "" ||
    image === "" ||
    price === "" ||
    location === ""
  ) {
    return res.status(400).json({
      message: "Tour fields cannot be empty",
    });
  }

  const tour = Tour.update(
    req.params.tourId,
    req.body
  );

  if (!tour) {
    return res.status(404).json({
      message: "Tour not found",
    });
  }

  res.json(tour);
};

const deleteTour = (req, res) => {
  res.json({
    message: `Hello from deleteTour for tour ${req.params.tourId}`,
  });
};

module.exports = {
  getAllTours,
  createTour,
  getTourById,
  updateTour,
  deleteTour,
};