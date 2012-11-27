"use strict";

var snippet = {
    text:  "<input type='text' name='{{ name }}'></input>"
}



function Composer(params) {
    var self = this;

    self.id = "composer";
    if ( typeof params.id !== "undefined" ){
        self.id = params.id;
    }

    self.fields = {};
    if ( typeof params.fields !== "undefined" ){
        self.fields = params.fields;
    }

    self.render =  function() {
        var rendering = "";
        rendering += "<div id='" + self.id + "'>";
        
        for (var propt in self.fields){
            rendering += Mustache.to_html(snippet[self.fields[propt].type], {name: propt});
        }

        rendering += "</div>";
        return rendering;
    }
}
