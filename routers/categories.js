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

// Get category by id
router.get("/:id", async (req, res) => {
  const { id } = req.params;

  if (isNaN(parseInt(id))) {
    return res.status(400).send({ message: "category id is not a number" });
  }
  try {
    const categoryData = await Category.findByPk(id);

    if (categoryData === null) {
      return res.status(404).send({ message: "Category not found" });
    }
    const category = {
      name: categoryData.name,
      quote: categoryData.quote,
      description: categoryData.description,
      imageUrl: categoryData.imageUrl,
    };
    res.status(200).send({ message: "ok", category });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: "Something went wrong, sorry" });
  }
});

router.put("/:id", async (req, res) => {
  const { quote, description } = req.body;
  const { id } = req.params;

  if (isNaN(parseInt(id))) {
    return res.status(400).send({ message: "Blog id is not a number" });
  }

  if (!quote || !description) {
    return res.status(400).send({
      message:
        "To edit you need to specify a quote and a description for the category",
    });
  }
  try {
    const category = await Category.findByPk(id);
    if (!category) {
      return res.status(404).send({ message: "Can't find that category" });
    }

    await category.update({
      quote,
      description,
    });

    res.status(200).send({ message: "ok", category });
  } catch (error) {
    console.log(error);
    return res.status(503).send({ message: "Something went wrong, sorry" });
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
      order: [[BlogData, "updatedAt", "DESC"]],
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
