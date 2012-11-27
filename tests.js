"use strict";

describe("DDI", function() {

  it("should create a with the id", function() {
    var composer = new Composer({id: "myComposer"});
    expect(composer.render()).toBe("<div id='myComposer'></div>");
  });

  it("should create an interface with an input", function() {
    var composer = new Composer({fields: {
            name: {type: "text"}
        }
    });
    expect(composer.render()).toBe("<div id='composer'><input type='text' name='name'></input></div>");
  });


  it("should create a customised input field", function() {
    var composer = new Composer({fields: {
            label: {type: "text"},
        }
    });

    composer.override("text", "prop name {{ name }}");
    expect(composer.render()).toBe("<div id='composer'>prop name label</div>");
  });
  
});
