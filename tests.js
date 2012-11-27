"use strict";

describe("DDI", function() {

  it("should create a with the id", function() {
    var composer = new Composer({id: "myComposer"});
    expect(composer.render()).toBe("<div id='myComposer'></div>");
  });

  it("should create an interface with an input", function() {
    var composer = new Composer({fields: {
            name: {type: "input"}
        }
    });
    expect(composer.render()).toBe("<div id='composer'><input type='text' name='name'></input></div>");
  });

  it("should accept extra arguments", function() {
    var composer = new Composer({fields: {
            name: {type: "text", text: "Awesome interface"}
        }
    });
    expect(composer.render()).toBe("<div id='composer'>Awesome interface</div>");
  });

  it("should create a customised input field", function() {
    var composer = new Composer({fields: {
            label: {type: "input"},
        }
    });

    composer.override("input", "prop name {{ name }}");
    expect(composer.render()).toBe("<div id='composer'>prop name label</div>");
  });
  
});
