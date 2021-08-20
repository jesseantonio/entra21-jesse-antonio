const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
const usuariosRoutes = require("./routes/usuariosRoutes");

const porta = 3000;

app.use(express.json());
app.use(morgan("dev"));
app.use(helmet());
app.use(cors({
    origin: "http//localhost:5500"
}));
app.use("/usuarios", usuariosRoutes)

app.get("/", (req, res) => {
res.send("Hello World!");
});

app.post("/", (req, res) => {
res.send("post endpoint");
});

app.put("/", (req, res) => {
res.send("put endpoint");
});

app.delete("/", (req, res) => {
res.send("delete endpoint");
});

// Middleware de tratamento de erros
app.use((error, req, res, next) => {
res.status(error.status);
res.json({ message: error.message });
});

app.listen(porta, () => {
console.log(`Servidor está rodando em http://localhost:${porta}`);
});