const { Router } = require("express");
// const authMiddleware = require("../auth/middleware");
// const BlogImages = require("../models").blogImage;
const BlogData = require("../models").blogData;
const BlogImages = require("../models").blogImage;
const Category = require("../models").category;
const cloudinary = require("../cloudinary/cloudinary");
require("dotenv").config();

const router = new Router();

// Get all blogs
router.get("/", async (req, res) => {
  try {
    const blogs = await BlogData.findAll();
    res.status(200).send({ message: "ok", blogs });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: "Something went wrong, sorry" });
  }
});

// GET blogs by id.
router.get("/:id", async (req, res) => {
  const { id } = req.params;

  if (isNaN(parseInt(id))) {
    return res.status(400).send({ message: "blog id is not a number" });
  }
  try {
    const blogs = await BlogData.findAll({
      include: [Category, BlogImages],
      where: {
        categoryId: id,
      },
      order: [[BlogData, "updatedAt", "DESC"]],
    });

    if (blogs.length === 0) {
      return res
        .status(404)
        .send({ message: "No blogs found for the specified category" });
    }

    res.status(200).send({ message: "ok", blogs });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: "Something went wrong, sorry" });
  }
});

router.post("/", async (req, res) => {
  // console.log(req.body);
  const { date, title, text, mainImage, videoUrl, categoryId } = req.body;

  if (!date || !title || !categoryId) {
    return res.status(400).send({
      message:
        "To post you need to specify a date, title, a text, a main image url, and a categoryId",
    });
  }

  try {
    const category = await Category.findByPk(categoryId);
    if (!category) {
      return res.status(404).send({ message: "Can't find that category" });
    }

    console.log("sending file to cloudinary");
    let uploadedImage;
    if (mainImage) {
      uploadedImage = await cloudinary.uploader.upload(mainImage, {
        upload_preset: "Homepage",
        allowed_formats: ["png", "jpg", "jpeg", "svg", "ico", "jfif", "webp"],
      });
    }
    const newBlogPost = await BlogData.create({
      date,
      title,
      text,
      mainImageUrl: uploadedImage?.secure_url,
      videoUrl,
      publicId: uploadedImage?.public_id,
      categoryId: category.id,
    });

    res.status(201).send({ message: "new blog post created", newBlogPost });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: "Something went wrong, sorry" });
  }
});

router.delete("/:id", async (req, res, next) => {
  const { id } = req.params;

  if (isNaN(parseInt(id))) {
    return res.status(400).send({ message: "Blog id is not a number" });
  }

  try {
    const blogData = await BlogData.findByPk(id);
    if (!blogData) {
      return res.status(404).send("Blog not found");
    }

    await cloudinary.uploader.destroy(blogData.publicId, {});

    await blogData.destroy();

    res.send({ message: "blog deleted", id });
  } catch (e) {
    console.log(e);
    return res.status(500).send({ message: "Something went wrong, sorry" });
  }
});

router.put("/:id", async (req, res) => {
  const { date, title, text, categoryId, videoUrl } = req.body;
  const { id } = req.params;

  console.log(id);
  if (isNaN(parseInt(id))) {
    return res.status(400).send({ message: "Blog id is not a number" });
  }
  try {
    const category = await Category.findByPk(categoryId);
    if (!category) {
      return res.status(404).send({ message: "Can't find that category" });
    }

    const blogData = await BlogData.findByPk(id, {
      include: [BlogImages],
    });

    if (!blogData) {
      return res.status(404).send({ message: "Blog not found" });
    }

    await blogData.update({
      date,
      title,
      text,
      categoryId,
      videoUrl,
    });

    res.status(200).send({ message: "ok", blogData });
  } catch (error) {
    console.log(error);
    return res.status(503).send({ message: "Something went wrong, sorry" });
  }
});

router.post("/:blogId/images", async (req, res) => {
  const { blogId } = req.params;

  if (isNaN(parseInt(blogId))) {
    return res.status(400).send({ message: "Blog id is not a number" });
  }
  try {
    const { image } = req.body;

    const blogData = await BlogData.findByPk(blogId);

    if (!blogData) {
      return res.status(404).send({ message: "Blog not found" });
    }

    console.log("sending file to cloudinary");
    const uploadedImage = await cloudinary.uploader.upload(image, {
      upload_preset: "Homepage",
      allowed_formats: ["png", "jpg", "jpeg", "svg", "ico", "jfif", "webp"],
    });

    console.log(uploadedImage.secure_url);
    const newImageBlog = await BlogImages.create({
      blogId,
      imagesUrl: uploadedImage.secure_url,
      publicId: uploadedImage.public_id,
    });

    res.json({ msg: "images correctly added", image: newImageBlog });
  } catch (err) {
    console.error(err);
    res.status(500).json({ err: "Something went wrong" });
  }
});

router.put("/:id/main-image", async (req, res) => {
  const { mainImage } = req.body;
  const { id } = req.params;

  console.log(id);
  if (isNaN(parseInt(id))) {
    return res.status(400).send({ message: "Blog id is not a number" });
  }
  try {
    const blogData = await BlogData.findByPk(id);

    if (!blogData) {
      return res.status(404).send({ message: "Blog not found" });
    }

    await cloudinary.uploader.destroy(blogData.publicId, {});

    const uploadedImage = await cloudinary.uploader.upload(mainImage, {
      upload_preset: "Homepage",
      allowed_formats: ["png", "jpg", "jpeg", "svg", "ico", "jfif", "webp"],
    });

    await blogData.update({
      mainImageUrl: uploadedImage.secure_url,
      publicId: uploadedImage.public_id,
    });

    res.status(200).send({ message: "ok", blogData });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: "Something went wrong, sorry" });
  }
});

module.exports = router;
