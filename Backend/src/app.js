import express from "express";
import productRouter from "./routers/product.js";
import categoryRouter from "./routers/category";
import authRouter from "./routers/auth.js"
import mongoose from "mongoose";
import cors from "cors"
const app = express();
// middleware
app.use(express.json());
app.use(cors());
//router
app.use("/api", productRouter);
app.use("/api", categoryRouter);
app.use("/api", authRouter)

// app.listen(8083, function () {
//     console.log("Server running on port 8080");
// });

// connect to db

mongoose.connect("mongodb://127.0.0.1:27017/we17309");

export const viteNodeApp = app;
// -> workspace
// -> collection ( thư mục chứa)
// -> request


//B1: npm i vite vite-plugin-node -D
// B2: tạo file vite.config.(.js|.ts) trong thư mục gốc. Copy code từ github của thầy
// B3: Trong file app.js, thêm đoạn code sau:
//     export const viteNodeApp = app;
// B4: trong file package.json, thay đổi đoạn code sau
//      "dev": "concurrently \"vite\" \"json-server --watch db.json --port 3002\""
// B5: npm run dev