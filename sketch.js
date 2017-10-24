var output;
var submit;
var metadesc;
var maintxt;


function setup() {
  noCanvas();
  // textfield = createInput("your favorite food");
  seotitle = select("#SEOTitle");
  metadesc = select("#metaDesc");
  maintxt = select("#mainTxt");
  //textfield.changed(newText);
  output = select('#output');
  submit = select("#submit");
  submit.mousePressed(newText);

}
/*
  function newTyping() {
  output.html(textfield.value());
  //createP(textfield.value());
}
*/
function newText() {
  var s = seotitle.value();
  var md = metadesc.value();
  var mt = maintxt.value();
  
  createP("<em>Your Title is </em>" + s.length + "<em> character long. Please use 10 up to 60 characters.</em>");
  createP("<em>Meta Description is </em>" + md.length + "<em> character long. Best length is 70 to 160 characters.</em>");
  createP("<em>Main Text is </em>" + mt.length + "<em> character long. Please enter at least 1500 characters.</em>");
}
