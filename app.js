import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import PaymentRoutes from "./routes/PaymentRoutes.js";

const app = express();
const PORT = 1000;

app.get("/", (req, res) => {
  res.send(`Server berjalan di port ${PORT}`);
});

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/payment", PaymentRoutes);

app.listen(PORT, console.log(`Running on port ${PORT}`));
