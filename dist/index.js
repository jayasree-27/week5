"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var db_1 = __importDefault(require("./database/db"));
var dotenv_1 = __importDefault(require("dotenv"));
var morgan_1 = __importDefault(require("morgan"));
var mongoose_1 = __importDefault(require("mongoose"));
var all_routes_1 = __importDefault(require("./routes/all.routes"));
dotenv_1.default.config();
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, morgan_1.default)('combined'));
mongoose_1.default.set("debug", true);
(0, db_1.default)();
app.use('/api', all_routes_1.default);
var PORT = process.env.PORT || 5000;
app.listen(PORT, function () {
    console.log("Server running on port ".concat(PORT));
});
