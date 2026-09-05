const tours = [];

const addOne = (title, description, image, price, location) => {
  const tour = {
    id: tours.length + 1,
    title,
    description,
    image,
    price,
    location,
  };

  tours.push(tour);

  return tour;
};

const getAll = () => {
  return tours;
};

module.exports = {
  addOne,
  getAll,
};

if (require.main === module) {
  addOne(
    "Paris in 7 Days",
    "Explore Paris.",
    "https://example.com/paris.jpg",
    "1,995",
    "Paris, France"
  );

  addOne(
    "Helsinki Weekend",
    "Discover Helsinki.",
    "https://example.com/helsinki.jpg",
    "795",
    "Helsinki, Finland"
  );

  console.log(getAll());
}