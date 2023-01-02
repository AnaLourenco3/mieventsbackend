const { Router } = require("express");
// const authMiddleware = require("../auth/middleware");
// const BlogImages = require("../models").blogImage;
const BlogData = require("../models").blogData;
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
    const blog = await BlogData.findByPk(id);

    if (blog === null) {
      return res.status(404).send({ message: "Blog not found" });
    }

    res.status(200).send({ message: "ok", blog });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: "Something went wrong, sorry" });
  }
});

router.post("/", async (req, res) => {
  // console.log(req.body);
  const { date, title, text, mainImage, categoryId } = req.body;

  if (!date || !title || !text || !mainImage || !categoryId) {
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
    const uploadedImage = await cloudinary.uploader.upload(mainImage, {
      upload_preset: "Homepage",
      allowed_formats: ["png", "jpg", "jpeg", "svg", "ico", "jfif", "webp"],
    });

    const newBlogPost = await BlogData.create({
      date,
      title,
      text,
      mainImageUrl: uploadedImage.secure_url,
      publicId: uploadedImage.public_id,
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

// router.put("/:id/", async (req, res) => {
//   const { date, title, text, mainImageUrl, publicId, categoryId } = req.body;
//   const { id } = req.params;

//   console.log(id);
//   if (isNaN(parseInt(id))) {
//     return res.status(400).send({ message: "Blog id is not a number" });
//   }
//   try {
//     const blogData = await BlogData.findByPk(id);

//     if (!blogData) {
//       return res.status(404).send({ message: "Blog not found" });
//     }

//     console.log("sending file to cloudinary");
//     const uploadedImage = await cloudinary.uploader.upload(mainImageUrl, {
//       upload_preset: "Homepage",
//       allowed_formats: ["png", "jpg", "jpeg", "svg", "ico", "jfif", "webp"],
//     });

//     await BlogData.update({
//       date,
//       title,
//       text,
//       mainImageUrl: uploadedImage.secure_url,
//       publicId: uploadedImage.public_id,
//       categoryId: category.id,
//     });

//     res.status(200).send({ message: "ok", blogData });
//   } catch (error) {
//     console.log(error);
//     return res.status(503).send({ message: "Something went wrong, sorry" });
//   }
// });

// router.post("/", async (req, res) => {
//   const { images } = req.body;
//   const uploadedImgs = images.map(async (image) => {
//     const upload = await cloudinary.uploader.upload(
//       image,
//       {
//         upload_preset: "unsigned_upload",
//         allowed_formats: ["png", "jpg", "jpeg", "svg", "ico", "jfif", "webp"],
//       },
//       function (error, result) {
//         if (error) {
//           console.log(error);
//         }
//       }
//     );
//     return upload;
//   });

//   try {
//     const fulfilled = await Promise.all(uploadedImgs).then((values) => {
//       return values;
//     });
//     const publicIds = fulfilled.map((image) => {
//       return image.public_id;
//     });
//     console.log(publicIds);
//     res.status(200).json(publicIds);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;
