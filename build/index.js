"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var server_1 = require("./server");
var typeorm_1 = require("typeorm");
var ormconfig_1 = __importDefault(require("./ormconfig"));
var PORT = parseInt(process.env.PORT) || 5000;
typeorm_1.createConnection(ormconfig_1.default)
    .then(function () {
    console.log('Database connected!');
    var server = server_1.Server.getInstance();
    server.init(PORT);
})
    .catch(function (err) {
    console.log('Error during database connection: ', err);
});
