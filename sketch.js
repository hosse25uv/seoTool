let output;
let submit;
let metadesc;
let maintxt;


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
  let s = seotitle.value();
  let md = metadesc.value();
  let mt = maintxt.value();
  
  createP(`Your title is ${s.length} character long. Consider using 10 to 60 characters.`);
  createP(`Meta description is ${md.length} character long. The best length is 70 to 160 characters.`);
  createP(`Main text is ${mt.length} character long. It should contain at least 1500 characters.`);
}
