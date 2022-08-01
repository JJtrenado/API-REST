"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express")); // para que esto no de error tenemos que instalar: npm install @types/express -D
const diaries_1 = __importDefault(require("./routes/diaries"));
const app = (0, express_1.default)();
app.use(express_1.default.json()); // midelware que transforma la req.body a un json
// creamos el puerto
const PORT = 3000;
// creamos el endpoint llamado ping con request y response
app.get('/ping', (_req, res) => {
    console.log('someone pinged here!!');
    res.send('pong');
});
app.use('/api/diaries', diaries_1.default);
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});
