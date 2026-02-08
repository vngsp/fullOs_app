import express from 'express';
import { createOrderController, deleteOrderController, getOrderByDateController, getOrderByIdController } from './order.controller';

export const orderRouter = express.Router();

orderRouter.post('/create', createOrderController);
orderRouter.delete('/delete/:id', deleteOrderController);
orderRouter.get('/list', getOrderByDateController);
orderRouter.get('/read/:id', getOrderByIdController);