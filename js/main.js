"use strict";
function myModule() {
  this.hello = function () {
    console.log("hello");
  };
  this.goodBye = function () {
    console.log("goodBye");
  };
}
module.exports = myModule;
