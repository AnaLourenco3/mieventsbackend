const { Router } = require("express");
const Category = require("../models").category;
const BlogData = require("../models").blogData;
require("dotenv").config();

const router = new Router();

// Get all categories
router.get("/", async (req, res) => {
  try {
    const categories = await Category.findAll();
    res.status(200).send({ message: "ok", categories });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: "Something went wrong, sorry" });
  }
});

//Get all blogs belonging to a category

router.get("/:id/blogs", async (req, res) => {
  const { id } = req.params;

  if (isNaN(parseInt(id))) {
    return res.status(400).send({ message: "category id is not a number" });
  }

  try {
    const category = await Category.findByPk(id, {
      include: [BlogData],
      order: [[BlogData, "createdAt", "DESC"]],
    });
    const blogs = category.blogData;
    delete category.dataValues.blogData;
    res.status(200).send({ message: "ok", blogs, category });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: "Something went wrong, sorry" });
  }
});

module.exports = router;
