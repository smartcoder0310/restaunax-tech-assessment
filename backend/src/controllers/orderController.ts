import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllOrders = async (req: Request, res: Response) => {
  const orders = await prisma.order.findMany({ include: { items: true } });
  res.json(orders);
};

export const getOrderById = async (req: Request, res: Response) => {
  const order = await prisma.order.findUnique({
    where: { id: req.params.id },
    include: { items: true },
  });
  res.json(order);
};

export const createOrder = async (req: Request, res: Response) => {
  const {
    customerName,
    customerEmail,
    orderType,
    items,
    total,
    scheduledFor,
    preparationNotes,
  } = req.body;
  const order = await prisma.order.create({
    data: {
      customerName,
      customerEmail,
      orderType,
      total,
      scheduledFor,
      preparationNotes,
      status: "pending",
      items: {
        create: items,
      },
    },
  });
  res.status(201).json(order);
};

export const updateOrder = async (req: Request, res: Response) => {
  const { status, preparationNotes } = req.body;
  const order = await prisma.order.update({
    where: { id: req.params.id },
    data: { status, preparationNotes },
  });
  res.json(order);
};