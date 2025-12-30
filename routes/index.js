import express from "express";

import { ping } from "../api/ping.js";

const router = express.Router();

router.get("/ping", ping);

export default router;
