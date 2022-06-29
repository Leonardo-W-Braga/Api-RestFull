import express from 'express';
import db from './config/dbConnect.js';
import routes from "./routes/index.js";
import cors from "cors";
db.on("error", console.log.bind(console, "erro de conexão"));
db.once("open", () => {
    console.log("conexão com o banco feita com sucesso");
});
const app = express();
app.use(cors({
    origin: "*"
}));
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    next();
});
app.use(express.json());
routes(app);
export default app;
//# sourceMappingURL=app.js.map