const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Define the list of clothing items
const items = [
  {
    name: "T-Shirt",
    description: "Cotton T-Shirt",
    price: 20,
    image_url: "https://uxwing.com/wp-content/themes/uxwing/download/clothes-and-accessories/men-t-shirt-icon.png",
  },
  {
    name: "Jeans",
    description: "Denim Jeans",
    price: 40,
    image_url: "https://img.freepik.com/premium-vector/jeans-vector-clip-art-illustration_296703-1629.jpg",
  },
  {
    name: "Jeans",
    description: "Denim Jeans 2",
    price: 80,
    image_url: "https://img.freepik.com/premium-vector/jeans-vector-clip-art-illustration_296703-1629.jpg",
  },
  {
    name: "Jacket",
    description: "Leather Jacket",
    price: 60,
    image_url: "https://cdn-icons-png.freepik.com/512/1926/1926322.png",
  },
  {
    name: "Sneakers",
    description: "Running Sneakers",
    price: 50,
    image_url: "https://img.freepik.com/premium-vector/running-shoe-sneakers-icon-with-outline_116137-5862.jpg",
  },
];

// Search Route
app.get("/api/search", (req, res) => {
  try {
    const query = req.query.query;
    // console.log(query);
    let results = [];
    if (query.length > 3) {
      // Filter items based on the search query
      results = items.filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase())
      );
    }
    res.json(results);
  } catch (error) {
    console.error("Error searching:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
