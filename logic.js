var td = document.querySelectorAll("td");

document.body.style.zoom = "90%";

for (var i = 0; i < 54; i++)
  td[i].textContent = '';


  function Create2DArray(rows) {
    var arr = [];

    for (var i=0;i<rows;i++) {
       arr[i] = [];
    }

    return arr;
  }

  var arr = Create2DArray(9);
  for(var i=0;i<9;i++)
  for(var j=0;j<6;j++)
  arr[i][j] = 0;

var chance = 0;
var x = 0;
var y = 0;

var dbx = document.getElementById("dialogbox");
dbx.style.left = window.innerWidth / 2 - 300 + "px";
dbx.style.top = "400px";

var table = document.querySelector("table");


var wrapperdb = document.getElementById("wrapper");
wrapperdb.style.width = window.innerWidth + "px";
wrapperdb.style.height = window.innerHeight + "px";
var wrapperdb2 = document.getElementById("wrapper2");
wrapperdb.style.width = window.innerWidth + "px";
wrapperdb.style.height = window.innerHeight + "px";
var wrapperdb3 = document.getElementById("wrapper3");
wrapperdb.style.width = window.innerWidth + "px";
wrapperdb.style.height = window.innerHeight + "px";

var green = document.getElementById("dgreen");
green.style.left = window.innerWidth / 2 - 300 + "px";
green.style.top = "400px";

var red = document.getElementById("dred");
red.style.left = window.innerWidth / 2 - 300 + "px";
red.style.top = "400px";

function ins() {
  window.open('./ins.html', '_blank');
}

function tdborderred() {
  for (var i = 0; i < 54; i++)
    td[i].style.border = "2px solid red";
}

function tdbordergreen() {
  for (var i = 0; i < 54; i++)
    td[i].style.border = "2px solid green";
}

function redw() {
  red.style.display = "block";
  wrapperdb2.style.display = "block";
}

function greenw() {
  green.style.display = "block";
  wrapperdb3.style.display = "block";
  console.log("green");
}

function reset() {

  red.style.display = "none";
  green.style.display = "none";
  wrapperdb2.style.display = "none";
  wrapperdb3.style.display = "none";
  dbx.style.display = "block";
  wrapperdb.style.display = "block";

}

function yes() {
  chance = 0;x=0;y=0;chancer=0;table.style.border = "red";tdborderred();
  for (var i = 0; i < 54; i++)
    td[i].textContent = '';
  dbx.style.display = "none";
  wrapperdb.style.display = "none";
}

function no() {
  dbx.style.display = "none";
  wrapperdb.style.display = "none";
}
var chancer;
function memoize() {
  for (var i = 0; i < 9; i++){
    for (var j = 0; j < 6; j++) {console.log(td[((i) * 6 + j)]);
      if(td[((i) * 6 + j)].textContent.length == 0)
      {  arr[i][j] = 0;}
        else
      { arr[i][j] = td[((i) * 6 + j)].textContent;}
    }
}chancer = chance;
}

function undo() {
  if(chance - chancer==1){
  for (var i = 0; i < 9; i++)
    for (var j = 0; j < 6; j++) {
      if(arr[i][j] == 0)
        td[((i) * 6 + j)].textContent = '';
        else
        td[((i) * 6 + j)].textContent = arr[i][j];
    }
    if(chance%2==0)
  {
    table.style.border = "5px solid green";
    tdbordergreen();}
    else {

      table.style.border = "5px solid red";
      tdborderred();
    }
    chance--;}

}
//logic-starts

function play(x, y) {
  if (td[((x - 1) * 6 + y) - 1].textContent.length == 0 || (chance % 2 == 0 && td[((x - 1) * 6 + y) - 1].style.color === "red") || (chance % 2 != 0 && td[((x - 1) * 6 + y) - 1].style.color === "green")) {
      memoize();
    if (chance % 2 == 0) {
      td[((x - 1) * 6 + y) - 1].style.color = "red";
      table.style.border = "5px solid green";
      tdbordergreen();
    } else {
      td[((x - 1) * 6 + y) - 1].style.color = "green";
      table.style.border = "5px solid red";
      tdborderred();
    }

    if (x - 1 == 0) {

      if (y - 1 == 0) {
        if (td[((x - 1) * 6 + y) - 1].textContent.length == 0)
          td[((x - 1) * 6 + y) - 1].textContent++;
        else {
          td[((x - 1) * 6 + y) - 1].textContent = '';
          play2(x + 1, y);
          play2(x, y + 1);
        }
      } else if (y - 1 == 5) {
        if (td[((x - 1) * 6 + y) - 1].textContent.length == 0)
          td[((x - 1) * 6 + y) - 1].textContent++;
        else {
          td[((x - 1) * 6 + y) - 1].textContent = '';
          play2(x + 1, y);
          play2(x, y - 1);
        }
      } else {
        if (td[((x - 1) * 6 + y) - 1].textContent.length == 0)
          td[((x - 1) * 6 + y) - 1].textContent++;
        else {

          if (td[((x - 1) * 6 + y) - 1].textContent == 1)
            td[((x - 1) * 6 + y) - 1].textContent++;

          else {
            td[((x - 1) * 6 + y) - 1].textContent = '';
            play2(x + 1, y);
            play2(x, y - 1);
            play2(x, y + 1);
          }
        }
      }
    }

    if (x - 1 == 8) {
      if (y - 1 == 0) {
        if (td[((x - 1) * 6 + y) - 1].textContent.length == 0)
          td[((x - 1) * 6 + y) - 1].textContent++;
        else {
          td[((x - 1) * 6 + y) - 1].textContent = '';
          play2(x - 1, y);
          play2(x, y + 1);
        }
      } else if (y - 1 == 5) {
        if (td[((x - 1) * 6 + y) - 1].textContent.length == 0)
          td[((x - 1) * 6 + y) - 1].textContent++;
        else {
          td[((x - 1) * 6 + y) - 1].textContent = '';
          play2(x - 1, y);
          play2(x, y - 1);
        }
      } else {
        if (td[((x - 1) * 6 + y) - 1].textContent.length == 0)
          td[((x - 1) * 6 + y) - 1].textContent++;
        else {

          if (td[((x - 1) * 6 + y) - 1].textContent == 1)
            td[((x - 1) * 6 + y) - 1].textContent++;

          else {
            td[((x - 1) * 6 + y) - 1].textContent = '';
            play2(x - 1, y);
            play2(x, y - 1);
            play2(x, y + 1);
          }
        }
      }
    }

    if (x - 1 > 0 && x - 1 < 8) {
      if (y - 1 == 0) {
        if (td[((x - 1) * 6 + y) - 1].textContent.length == 0)
          td[((x - 1) * 6 + y) - 1].textContent++;

        else {

          if (td[((x - 1) * 6 + y) - 1].textContent == 1)
            td[((x - 1) * 6 + y) - 1].textContent++;

          else {
            td[((x - 1) * 6 + y) - 1].textContent = '';
            play2(x - 1, y);
            play2(x + 1, y);
            play2(x, y + 1);
          }
        }
      } else if (y - 1 == 5) {

        if (td[((x - 1) * 6 + y) - 1].textContent.length == 0)
          td[((x - 1) * 6 + y) - 1].textContent++;

        else {

          if (td[((x - 1) * 6 + y) - 1].textContent == 1)
            td[((x - 1) * 6 + y) - 1].textContent++;

          else {
            td[((x - 1) * 6 + y) - 1].textContent = '';
            play2(x - 1, y);
            play2(x + 1, y);
            play2(x, y - 1);
          }
        }
      } else {
        if (td[((x - 1) * 6 + y) - 1].textContent.length == 0 || td[((x - 1) * 6 + y) - 1].textContent == 1 || td[((x - 1) * 6 + y) - 1].textContent == 2)
          td[((x - 1) * 6 + y) - 1].textContent++;

        else {
          td[((x - 1) * 6 + y) - 1].textContent = '';
          play2(x - 1, y);
          play2(x + 1, y);
          play2(x, y - 1);
          play2(x, y + 1);
        }
      }
    }
    chance++;checkwin();
  }
}
//chain function
function play2(x, y) {

  if (chance % 2 == 0) {
    td[((x - 1) * 6 + y) - 1].style.color = "red";
  } else {
    td[((x - 1) * 6 + y) - 1].style.color = "green";
  }


  if (x - 1 == 0) {

    if (y - 1 == 0) {
      if (td[((x - 1) * 6 + y) - 1].textContent.length == 0)
        td[((x - 1) * 6 + y) - 1].textContent++;
      else {
        td[((x - 1) * 6 + y) - 1].textContent = '';
        play2(x + 1, y);
        play2(x, y + 1);
      }
    } else if (y - 1 == 5) {
      if (td[((x - 1) * 6 + y) - 1].textContent.length == 0)
        td[((x - 1) * 6 + y) - 1].textContent++;
      else {
        td[((x - 1) * 6 + y) - 1].textContent = '';
        play2(x + 1, y);
        play2(x, y - 1);
      }
    } else {
      if (td[((x - 1) * 6 + y) - 1].textContent.length == 0)
        td[((x - 1) * 6 + y) - 1].textContent++;
      else {

        if (td[((x - 1) * 6 + y) - 1].textContent == 1)
          td[((x - 1) * 6 + y) - 1].textContent++;

        else {
          td[((x - 1) * 6 + y) - 1].textContent = '';
          play2(x + 1, y);
          play2(x, y - 1);
          play2(x, y + 1);
        }
      }
    }
  }

  if (x - 1 == 8) {
    if (y - 1 == 0) {
      if (td[((x - 1) * 6 + y) - 1].textContent.length == 0)
        td[((x - 1) * 6 + y) - 1].textContent++;
      else {
        td[((x - 1) * 6 + y) - 1].textContent = '';
        play2(x - 1, y);
        play2(x, y + 1);
      }
    } else if (y - 1 == 5) {
      if (td[((x - 1) * 6 + y) - 1].textContent.length == 0)
        td[((x - 1) * 6 + y) - 1].textContent++;
      else {
        td[((x - 1) * 6 + y) - 1].textContent = '';
        play2(x - 1, y);
        play2(x, y - 1);
      }
    } else {
      if (td[((x - 1) * 6 + y) - 1].textContent.length == 0)
        td[((x - 1) * 6 + y) - 1].textContent++;
      else {

        if (td[((x - 1) * 6 + y) - 1].textContent == 1)
          td[((x - 1) * 6 + y) - 1].textContent++;

        else {
          td[((x - 1) * 6 + y) - 1].textContent = '';
          play2(x - 1, y);
          play2(x, y - 1);
          play2(x, y + 1);
        }
      }
    }
  }

  if (x - 1 > 0 && x - 1 < 8) {
    if (y - 1 == 0) {
      if (td[((x - 1) * 6 + y) - 1].textContent.length == 0)
        td[((x - 1) * 6 + y) - 1].textContent++;

      else {

        if (td[((x - 1) * 6 + y) - 1].textContent == 1)
          td[((x - 1) * 6 + y) - 1].textContent++;

        else {
          td[((x - 1) * 6 + y) - 1].textContent = '';
          play2(x - 1, y);
          play2(x + 1, y);
          play2(x, y + 1);
        }
      }
    } else if (y - 1 == 5) {

      if (td[((x - 1) * 6 + y) - 1].textContent.length == 0)
        td[((x - 1) * 6 + y) - 1].textContent++;

      else {

        if (td[((x - 1) * 6 + y) - 1].textContent == 1)
          td[((x - 1) * 6 + y) - 1].textContent++;

        else {
          td[((x - 1) * 6 + y) - 1].textContent = '';
          play2(x - 1, y);
          play2(x + 1, y);
          play2(x, y - 1);
        }
      }
    } else {
      if (td[((x - 1) * 6 + y) - 1].textContent.length == 0 || td[((x - 1) * 6 + y) - 1].textContent == 1 || td[((x - 1) * 6 + y) - 1].textContent == 2)
        td[((x - 1) * 6 + y) - 1].textContent++;

      else {
        td[((x - 1) * 6 + y) - 1].textContent = '';
        play2(x - 1, y);
        play2(x + 1, y);
        play2(x, y - 1);
        play2(x, y + 1);
      }
    }
  }
  checkwin();
}

function checkwin() {
  var r = 0;
  var g = 0;
  for (var i = 0; i < 54; i++) {
    if (td[i].style.color === "red")
      r++;
    if (td[i].style.color === "green")
      g++;
  }
  if (r == 0 && g!=0 && chance!=1) {
    greenw();
  }
  if (g == 0 && r!=0 && chance!=1) {
    redw();
  }
}
