"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-Parser");
class App {
    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }
    config() {
        this.app.use(express.static(__dirname + './../')); //serves the index.html
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        // this.app.use(cors());
    }
    //api
    routes() {
        const router = express.Router();
        router.get('/start/of/api/route', (req, res) => {
            //your logic here
        });
        this.app.use('/', router);
    }
}
;
exports.default = new App().app;
//# sourceMappingURL=App.js.map