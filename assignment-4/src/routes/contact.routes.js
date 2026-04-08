import express from "express";
import {
  showContactForm,
  submitContact
} from "../controller/contact.controller.js";

const router = express.Router();

router.get("/", showContactForm);
router.post("/", submitContact);

export default router;