function setProp(selector, property, sessionKey){
  document.querySelector(selector).style[property] = sessionStorage[sessionKey];
}
function setProps(selectors, property, sessionKey){
  var elements = document.querySelectorAll(selectors);
  for(var i = 0; i < elements.length; i++){
    elements[i].style[property] = sessionStorage[sessionKey];
  }
}
if(sessionStorage["background"]){
  setProp("html", "backgroundColor", "background");
}
if(sessionStorage["width"]){
  setProp("body", "width", "width");
}
if(sessionStorage["lineHeight"]){
  setProp("#content", "lineHeight", "lineHeight");
}
if(sessionStorage["fontSize"]){
  setProp("#content", "fontSize", "fontSize");
}
if(sessionStorage["color"]){
  setProp("#content", "color", "color");
}
if(sessionStorage["borderRadius"]){
  setProp("#sidebar", "borderRadius", "borderRadius");
}
if(sessionStorage["boxShadow"]){
  setProp("#sidebar", "boxShadow", "boxShadow");
}
function setSelect(theSelectElement, property){
  var options = theSelectElement.options;
  for(var i = 0; i < options.length; i++) {
    if(options[i].value == sessionStorage[property]) {
        theSelectElement.selectedIndex = i;
        break;
    }
  }
}
