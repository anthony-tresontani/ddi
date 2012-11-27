"use strict";


function Field(name, context){
    var self = this;

    self.name = name;
    self.context = context;

    self.render = function(snippets){
        self.context.name = self.name;
        if (self.context.type == "section"){
            var rendering = '';
            for (var f in self.context.fields){
               var field = new Field(f, self.context.fields[f]);
               rendering += field.render(snippets); 
            }
           self.context.fields = rendering; 
        }
        return Mustache.to_html(snippets[self.context.type], self.context);
    };
}

function Composer(params) {
    var self = this;

    self.snippet = {
        input:  "<input type='text' name='{{ name }}'></input>",
        text:  "{{ text }}",
        section: "<div class='section'>{{ fields }}</div>"
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
            var field = new Field(propt, self.fields[propt])
            rendering += field.render(self.snippet);
        }

        rendering += "</div>";
        return rendering;
    }
}
