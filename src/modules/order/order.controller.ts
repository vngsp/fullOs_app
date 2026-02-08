import { RequestHandler } from "express";
import { orderService } from "./order.service";

export const createOrderController: RequestHandler = async (req, res) => {
    const createdUser = await orderService.createOrder(req.body);
    return res.status(201).json(createdUser);
}

export const getOrderByIdController: RequestHandler = async (req, res) => {
    const id = Number(req.params.id);
    const user = await orderService.getOrderById(id);
    return res.status(200).json(user);
}

export const getOrderByDateController: RequestHandler = async (req, res) => {
    const { start_datetime } = req.query;

    if (!start_datetime) {
        return res.status(400).json({ error: 'start_datetime is required' });
    }

  const [year, month, day] = (start_datetime as string)
    .split('-')
    .map(Number);

  const start = new Date(year, month - 1, day, 0, 0, 0);
  const end   = new Date(year, month - 1, day, 23, 59, 59, 999);

  const orders = await orderService.getOrdersByDate(start, end);

  return res.json({ data: orders });
}

export const deleteOrderController: RequestHandler = async (req, res) => {
    const id = Number(req.params.id);
    const deletedUser = await orderService.deleteOrder(id);
    return res.status(200).json(deletedUser);
}