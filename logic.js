var td = document.querySelectorAll("td");


var ar = new Array(6);
for (var k = 0; k < 9; k++)
  ar[k] = new Array(9);

var ti = 0;

for (var i = 0; i < 9; i++) {
  for (var j = 0; j < 6; j++) {
    ar[i][j] = td[ti];
    ti++;
  }
}

for (var i = 0; i < 54; i++)
  td[i].textContent = '';

var chance = 0;
var x = 0;
var y = 0;

var dbx = document.getElementById("dialogbox");
dbx.style.left = window.innerWidth / 2 - 300 + "px";
dbx.style.top = "400px";

var wrapperdb = document.getElementById("wrapper");
wrapperdb.style.width = window.innerWidth + "px";
wrapperdb.style.height = window.innerHeight + "px";

function ins() {
  window.open('./ins.html', '_blank');
}

function reset() {
  dbx.style.display = "block";
  wrapperdb.style.display = "block";
}

function yes() {
  for (var i = 0; i < 54; i++)
    td[i].textContent = '';
  dbx.style.display = "none";
    wrapperdb.style.display = "none";
}

function no() {
  dbx.style.display = "none";
    wrapperdb.style.display = "none";
}

//logic-starts

function play(x, y) {
  if (td[((x - 1) * 6 + y) - 1].textContent.length == 0 || (chance % 2 == 0 && td[((x - 1) * 6 + y) - 1].style.color === "red") || (chance % 2 != 0 && td[((x - 1) * 6 + y) - 1].style.color === "green")) {
    if (chance % 2 == 0)
      td[((x - 1) * 6 + y) - 1].style.color = "red";
    else
      td[((x - 1) * 6 + y) - 1].style.color = "green";

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
    chance++;
  }
}
//chain function
function play2(x, y) {

  if (chance % 2 == 0)
    td[((x - 1) * 6 + y) - 1].style.color = "red";
  else
    td[((x - 1) * 6 + y) - 1].style.color = "green";

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
  if (r == 0)
    console.log("g");
  if (g == 0)
    console.log("r");
}
