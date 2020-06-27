"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
require("dotenv/config");
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var helmet_1 = __importDefault(require("helmet"));
var property_1 = require("./property");
var Server = /** @class */ (function () {
    function Server(middlewares, controllers) {
        this.app = express_1.default();
        this.initializeMiddlewares.apply(this, middlewares);
        this.initializeControllers.apply(this, controllers);
    }
    Server.prototype.initializeMiddlewares = function () {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        args.forEach(function (arg) {
            _this.app.use(arg);
        });
    };
    Server.prototype.initializeControllers = function () {
        var _this = this;
        var controllers = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            controllers[_i] = arguments[_i];
        }
        controllers.forEach(function (controller) {
            _this.app.use(controller.path, controller.router);
        });
    };
    Server.prototype.init = function (port) {
        this.app.listen(port, function () {
            console.log("Server running on port " + port);
        });
    };
    Server.getInstance = function () {
        if (!Server.instance) {
            Server.instance = new Server([cors_1.default(), helmet_1.default(), express_1.default.json()], [new property_1.PropertyController('/properties')]);
        }
        return Server.instance;
    };
    return Server;
}());
exports.Server = Server;
