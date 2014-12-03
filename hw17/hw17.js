var HTMLWriter = (function(){
    //если вам они не понадобятся - ок, не заморачивайтесь :)
    var tags = [
        "a", "abbr", "acronym", "address", "applet", "area",
        "b", "base", "basefont", "bdo", "big", "blockquote",
        "body", "br", "button",
        "caption", "center", "cite", "code", "col", "colgroup",
        "dd", "del", "dir", "div", "dfn", "dl", "dt",
        "em",
        "fieldset", "font", "form", "frame", "frameset",
        "h1", "h2", "h3", "h4", "h5", "h6", "head", "hr", "html",
        "i", "iframe", "img", "input", "ins", "isindex",
        "kbd",
        "label", "legend", "li", "link",
        "map", "menu", "meta",
        "noframes", "noscript",
        "object", "ol", "optgroup", "option",
        "p", "param", "pre",
        "q",
        "s", "samp", "script", "select", "small", "span", "strike",
        "strong", "style", "sub", "sup",
        "table", "tbody", "td", "textarea", "tfoot", "th", "thead",
        "title", "tr", "tt",
        "u", "ul",
        "var"
    ];

    function InternalHTMLWriter(){
        this._work = [];
    }

    InternalHTMLWriter.prototype = {

        escape: function (text){
            return text.replace(/[><"&]/g, function(c){
                switch(c){
                    case ">": return "&gt;";
                    case "<; ": return "&lt;";
                    case "\"": return "&quot;";
                    case "&": return "&amp;";
                }
            });
        },

        startTag: function(tagName, attributes){
            this._work.push("<" + tagName);

            if (attributes){
                var name, value;
                for (name in attributes){
                    if (attributes.hasOwnProperty(name)){
                        value = this.escape(attributes[name]);
                        this._work.push(" " + name + "=\"" + value + "\"");
                    }
                }
            }

            this._work.push(">");
            return this;
        },

        text: function(text){
            this._work.push(this.escape(text));
            return this;
        },

        endTag: function(tagName){
            this._work.push("</" + tagName + ">");
            return this;
        },

        toString: function(){
            return this._work.join("");
        }

    };

    return function(){
        var writer = new InternalHTMLWriter(),    
            proxy = Proxy.create({
                get: function(receiver, name){
                //ваш код - здесь :)
                    if (name == 'toString'){
                        return function(){
                            return writer.toString();
                        }
                    } else if (name == 'text'){
                        return function(text){
                            writer.text(text);
                            return receiver;
                        }
                    } else {
                        return function(){
                            if (name[0] != 'x'){
                                writer.startTag(name);
                            } else {
                                writer.endTag(name.slice(1));
                            }
                            return receiver
                        }
                    }
                }
            });
        return proxy;
    };
})();

var w = new HTMLWriter();
w
    .html()
        .head()
            .title()
                .text("Example & Test")
            .xtitle()
        .xhead()
        .body()
            .text("Hello world!")
        .xbody()
    .xhtml();

console.log(w.toString());

