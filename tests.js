"use strict";

describe("DDI", function() {

  it("Should create a with the id", function() {
    var composer = new Composer({id: "myComposer"});
    expect(composer.render()).toBe("<div id='myComposer'></div>");
  });
  it("Should create an int with an input", function() {
    var composer = new Composer({fields: {
            name: {type: "text"}
        }
    });
    expect(composer.render()).toBe("<div id='composer'><input type='text' name='name'></input></div>");
  });
  
});
