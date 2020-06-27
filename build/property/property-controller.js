"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropertyController = void 0;
var express_1 = __importDefault(require("express"));
var PropertyController = /** @class */ (function () {
    function PropertyController(path) {
        var _this = this;
        this.path = path;
        this.router = express_1.default.Router();
        this.properties = [
            {
                address: '2113 Cannes drive',
                city: 'Plano',
                zip: 75025,
                rooms: 4,
                bathrooms: 3,
                sqft: 2800,
            },
        ];
        this.getProperties = function (req, res) {
            res.send(_this.properties);
        };
        this.createProperty = function (req, res) {
            var property = req.body;
            _this.properties.push(property);
            res.send(property);
        };
        this.initializeRoutes();
    }
    PropertyController.prototype.initializeRoutes = function () {
        this.router.get(this.path, this.getProperties);
        this.router.post(this.path, this.createProperty);
    };
    return PropertyController;
}());
exports.PropertyController = PropertyController;
