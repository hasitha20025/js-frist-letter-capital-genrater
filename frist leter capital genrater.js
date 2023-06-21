
function FristLetterCapital() {

// js code  frist charcter capital genrater

var name = prompt("Ener you name");
var name_capital = name.slice(0,1);

var frist_capital_char = name_capital.toUpperCase();

var rest_name = name.slice(1,name.length);

var rest_name = rest_name.toLowerCase();

alert(frist_capital_char + rest_name);

    
}

FristLetterCapital();


