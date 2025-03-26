import express from "express";
const router=express.Router();

import orderRoutes from "./order.routes";
import userRoutes from "./user.routes";
import resRoutes from "./restaurant.routes";
import foodRoutes from "./food.routes";


router.use("/orders",orderRoutes);
router.use("/food",foodRoutes);
router.use("/user",userRoutes)
router.use("/rest",resRoutes);



export default router;
