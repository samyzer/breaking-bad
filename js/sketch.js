var offsetTextColor = 10;
var offsetBackgroundColor = 0;
var richtingx = 1;
var coloredText = true;
var maxText = 10;
var rainbowColors = false;

var colors = [];
var textArray = [];

$(document).ready(function () {

  $("#coloredtext").click(function () {
    coloredText = !coloredText;

  });

  $("#rainbowcolors").click(function () {
    rainbowColors = !rainbowColors;

  });


});


$(function () {
  $("#slider").slider({
    range: "min",
    value: 37,
    min: 0,
    max: 100,
    slide: function (event, ui) {
      $("#amount").val("$" + offsetBackgroundColor);

      offsetBackgroundColor = $("#slider").slider("value");

    }

  });
  $("#amount").val("$" + $("#slider").slider("value"));

});





function setup() {

  createCanvas(800, 600);

  colors = [19];
  colors[0] = color("#98b9a4");
  colors[1] = color("#dcddd5");
  colors[2] = color("#aca4a1");
  colors[3] = color("#746666");
  colors[4] = color("#77593f");

  colors[5] = color("#a48569");
  colors[6] = color("#b8d7e9");
  colors[7] = color("#1c7d38");
  colors[8] = color("#e8f695");
  colors[9] = color("#00461f");

  colors[10] = color("#4d89bd");
  colors[11] = color("#aa9600");
  colors[12] = color("#4d6849");
  colors[13] = color("#e1b183");
  colors[14] = color("#e3d3b9");

  colors[15] = color("#97a8ed");
  colors[16] = color("#a8b7f0");
  colors[17] = color("#bac5f3");
  colors[18] = color("#cbd4f6");


  for (var i = 0; i < maxText; i++) {
    var breedte = random(15, 70);
    textArray.push(new TextLine(createVector(random(50, width - 50), random(50, height - 50)), breedte, "I'M NOT IN THE METH BUSINESS. I'M IN THE EMPIRE BUSINESS.", int(random(0, 18))));
  }
}

function draw() {
  background(0 + offsetBackgroundColor);
  noStroke();
  for (var i = 0; i < textArray.length; i++) {
    var d = textArray[i];
    d.update();
    d.teken();

  }
}

function TextLine(tempMidden, tempBreedte, tempText, tempStartkleur) {
  var midden;
  var richtingy, breedte, tekst;
  var startkleur;
  midden = tempMidden;
  startkleur = tempStartkleur;

  richtingy = 1;
  breedte = tempBreedte;
  tekst = tempText;

  this.teken = function () {
    push();
    translate(midden.x, midden.y);

    textSize(breedte);
    if (coloredText == true) {
      if (startkleur + offsetTextColor > 18) {
        startkleur = 0;
      }
      fill(colors[startkleur + offsetTextColor]);
    } else {
      fill(255);
    }
    if (rainbowColors) {

      fill(random(255), random(255), random(255));
    }
    text(tekst, 0 - breedte / 2, 0 + breedte / 2);

    pop();

  }

  this.update = function () {
    midden.x = midden.x + richtingx;
    midden.y = midden.y + richtingy;

    if (midden.x > width + breedte / 2) {
      midden.x = -20;
    }
    if (midden.y > height + breedte / 2) {
      midden.y = -20;
    }
  }
}