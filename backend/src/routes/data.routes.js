import express from "express";
import {
    getAdded,
  getAllData,
  getCountry,
  getIntensity,
  getLikelihood,
  getPestle,
  getPublished,
  getRegionData,
  getRelevance,
  getSource,
  getTopic,
  getSector
} from "../controller/data.controler.js";

const router = express.Router();

router.get("/alldata", getAllData);
router.get("/regiondata", getRegionData);
router.get("/relevance", getRelevance);
router.get("/pestle", getPestle);
router.get("/likelihood", getLikelihood);
router.get("/topic", getTopic);
router.get("/intensity", getIntensity);
router.get("/source", getSource);
router.get("/country", getCountry);
router.get("/add", getAdded);
router.get("/published", getPublished);
router.get("/sector", getSector);


export default router;
