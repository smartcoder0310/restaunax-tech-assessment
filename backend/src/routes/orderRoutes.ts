import express from "express";
import {
  getAllOrders,
  getOrderById,
  createOrder,
  updateOrder
} from "../controllers/orderController";

const router = express.Router();

router.get("/", getAllOrders);
router.get("/:id", getOrderById);
router.post("/", createOrder);
router.patch("/:id", updateOrder);

export default router;