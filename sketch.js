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
  
  createP("Your Title is " + s.length + " character long. Please use 10 up to 60 characters.");
  createP("Meta Description is " + md.length + " character long. Best length is 70 to 160 characters.");
  createP("Main Text is " + mt.length + " character long. Please enter at least 1500 characters.");
}
