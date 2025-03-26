"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var RESPONSE = {
    SuccessResponse: function (res, status, data) {
        return res.status(status).json(data);
    },
    FailureResponse: function (res, status, data) {
        return res.status(status).json(__assign(__assign({}, data), { status: status }));
    }
};
exports.default = RESPONSE;
