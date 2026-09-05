const tours = [];

const addOne = (name, info, image, price, location) => {
  const tour = {
    id: tours.length + 1,
    name,
    info,
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

const update = (id, data) => {
  const tour = tours.find(
    (tour) => tour.id === Number(id)
  );

  if (!tour) {
    return null;
  }

  Object.assign(tour, data);

  return tour;
};

module.exports = {
  addOne,
  getAll,
  update,
};

if (require.main === module) {
  addOne(
    "Best of Paris in 7 Days Tour",
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

  console.log(
    update(1, {
      price: "2,095",
    })
  );

  console.log(getAll());
}