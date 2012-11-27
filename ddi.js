"use strict";




function Composer(params) {
    var self = this;

    self.snippet = {
        input:  "<input type='text' name='{{ name }}'></input>",
        text:  "{{ text }}",
    }

    self.id = "composer";
    if ( typeof params.id !== "undefined" ){
        self.id = params.id;
    }

    self.fields = {};
    if ( typeof params.fields !== "undefined" ){
        self.fields = params.fields;
    }

    self.override = function(pattern, value){
        self.snippet[pattern] = value;
    }

    self.render =  function() {
        var rendering = "";
        rendering += "<div id='" + self.id + "'>";
        
        for (var propt in self.fields){
            var context = self.fields[propt];
            context.name = propt;
            rendering += Mustache.to_html(self.snippet[self.fields[propt].type], context);
        }

        rendering += "</div>";
        return rendering;
    }
}
