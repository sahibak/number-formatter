'use strict';

const expect = require('chai').expect;
const queue = require("../library/queue.js");

describe("#numFormatter", function() {
    it("should convert single digits", function() {
        let result = numFormatter(1);
        expect(result).to.equal('1');
    });
});