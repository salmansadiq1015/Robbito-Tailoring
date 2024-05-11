import express from "express";
import {
  createGallery,
  deleteGallery,
  getAllGallery,
  getSingleGallery,
  updateGallery,
} from "../controllers/galleryController.js";

const router = express.Router();

// Create Gallery
router.post("/create/gallery", createGallery);

// Update Gallery
router.patch("/update/gallery/:id", updateGallery);

// Get ALl Galleries
router.get("/all/galleries", getAllGallery);

// Single Gallery
router.get("/single/gallery/:id", getSingleGallery);

// Delete Gallery
router.delete("/delete/gallery/:id", deleteGallery);

export default router;
