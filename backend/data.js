import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "Jimmy",
      email: "admin@email.com",
      password: bcrypt.hashSync("123", 8),
      isAdmin: true,
    },
    {
      name: "Timmy",
      email: "user@email.com",
      password: bcrypt.hashSync("123", 8),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: "Two Pound Mix",
      image: "/images/img-seafood-party.jpg",
      price: 20,
      category: "platter",
      stock: 10,
    },
    {
      name: "Seafood Party",
      image: "/images/img-seafood-party.jpg",
      price: 30,
      category: "platter",
      stock: 7,
    },
    {
      name: "Luxury Seafood Party",
      image: "/images/img-seafood-party.jpg",
      price: 40,
      category: "platter",
      stock: 5,
    },
    {
      name: "Shrimp (1 lb)",
      image: "/images/img-seafood-party.jpg",
      price: 50,
      category: "boil",
      stock: 7,
    },
    {
      name: "Clams (1 lb)",
      image: "/images/img-seafood-party.jpg",
      price: 60,
      category: "boil",
      stock: 2,
    },
    {
      name: "Green Shell Mussels (1 lb)",
      image: "/images/img-seafood-party.jpg",
      price: 70,
      category: "boil",
      stock: 1,
    },
    {
      name: "Black Shell Mussels (1 lb)",
      image: "/images/img-seafood-party.jpg",
      price: 80,
      category: "boil",
      stock: 0,
    },
  ],
};
export default data;
