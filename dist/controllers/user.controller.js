"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var userService_1 = __importDefault(require("../services/userService"));
var user_validation_1 = __importDefault(require("../validations/user.validation"));
var response_1 = __importDefault(require("../utils/response"));
var createUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, name_1, email, password, newUser, error, errorMessage, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 3, , 4]);
                _a = req.body, name_1 = _a.name, email = _a.email, password = _a.password;
                console.log(name_1, email, password);
                return [4 /*yield*/, userService_1.default.createUserService(name_1, email, password)];
            case 1:
                newUser = _b.sent();
                return [4 /*yield*/, user_validation_1.default.createUserValidation.validate(req.body)];
            case 2:
                error = (_b.sent()).error;
                if (error) {
                    errorMessage = error.details[0].message.replace(/['"]/g, "");
                    response_1.default.FailureResponse(res, 422, { message: errorMessage });
                    return [2 /*return*/];
                }
                response_1.default.SuccessResponse(res, 201, { message: "User created successfully", data: newUser });
                return [3 /*break*/, 4];
            case 3:
                error_1 = _b.sent();
                console.error("Error creating user:", error_1.message);
                response_1.default.FailureResponse(res, 500, { message: error_1.message });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
var getAllUsers = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var users, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, userService_1.default.getAllUsersService()];
            case 1:
                users = _a.sent();
                response_1.default.SuccessResponse(res, 200, { message: "Users retrieved successfully", data: users });
                return [3 /*break*/, 3];
            case 2:
                error_2 = _a.sent();
                console.error("Error fetching users:", error_2.message);
                response_1.default.FailureResponse(res, 500, { message: error_2.message });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
var getUserById = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, user, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                id = req.params.id;
                return [4 /*yield*/, userService_1.default.getUserByIdService(id)];
            case 1:
                user = (_a.sent());
                if (!id) {
                    response_1.default.FailureResponse(res, 404, { message: "user not found." });
                    return [2 /*return*/];
                }
                return [4 /*yield*/, userService_1.default.getUserByIdService(id)];
            case 2:
                _a.sent();
                response_1.default.SuccessResponse(res, 200, { message: "User retrieved successfully", data: user });
                return [3 /*break*/, 4];
            case 3:
                error_3 = _a.sent();
                console.error("Error fetching user:", error_3.message);
                response_1.default.FailureResponse(res, 500, { message: error_3.message });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
var updateUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, _a, name_2, email, existingUser, updatedUser, error_4;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 3, , 4]);
                id = req.params.id;
                _a = req.body, name_2 = _a.name, email = _a.email;
                return [4 /*yield*/, userService_1.default.getUserByIdService(id)];
            case 1:
                existingUser = _b.sent();
                if (!existingUser) {
                    response_1.default.FailureResponse(res, 404, { message: "user not found." });
                    return [2 /*return*/];
                }
                return [4 /*yield*/, userService_1.default.updateUserService(id, { name: name_2, email: email })];
            case 2:
                updatedUser = _b.sent();
                response_1.default.SuccessResponse(res, 200, { message: "User updated successfully", data: updatedUser });
                return [3 /*break*/, 4];
            case 3:
                error_4 = _b.sent();
                console.error("Error updating user:", error_4.message);
                response_1.default.FailureResponse(res, 500, { message: error_4.message });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
var deleteUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, existingUser, error_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                id = req.params.id;
                return [4 /*yield*/, userService_1.default.getUserByIdService(id)];
            case 1:
                existingUser = _a.sent();
                if (!existingUser) {
                    response_1.default.FailureResponse(res, 404, { message: "user not found." });
                    return [2 /*return*/];
                }
                return [4 /*yield*/, userService_1.default.deleteUserService(id)];
            case 2:
                _a.sent();
                response_1.default.SuccessResponse(res, 200, { message: "User deleted successfully" });
                return [3 /*break*/, 4];
            case 3:
                error_5 = _a.sent();
                console.error("Error deleting user:", error_5.message);
                response_1.default.FailureResponse(res, 500, { message: error_5.message });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.default = {
    createUser: createUser,
    getAllUsers: getAllUsers,
    getUserById: getUserById,
    updateUser: updateUser,
    deleteUser: deleteUser
};
