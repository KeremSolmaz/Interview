"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Mfuncs = require("./myfunction");
const routes = (0, express_1.Router)();
routes.get('/:order', (req, res) => {
    var n = req.params.order;
    if (parseInt(n) <= 0)
        return (res.json({ Status: "Error", Result: "Number Must Be Pozitive" }));
    if (isNaN(parseInt(n)))
        return (res.json({ Status: "Error", Result: "It Must Be Number" }));
    const getResult = Mfuncs.countnumber(req.params.order);
    //var mArray = [2,3,5,7,11,13,17,19,23];
    const getMed = Mfuncs.getMedian(getResult);
    return res.json({ Status: "Okay", Result: getResult, median: getMed });
});
exports.default = routes;
//# sourceMappingURL=routes.js.map