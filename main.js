$("h1").text("Мои друзья");

let massFriend = ['Anna', 'Viola', 'Anton', 'Nik'];

for (let i = 0; i < massFriend.length; i++ ){
  $("body").append('<p>' + massFriend[i] + '</p>');
}

$("p").append(" лучший");

let i = 5
for(;i > 0 ; i--){
  $("h1").fadeOut(1000).fadeIn(1000)
}

$("p").fadeTo(2000, 0.1);


var counter = 1;
var printMessage = function () { 
  $("body").append("Ты смотришь в консоль уже " + counter + " сек" + "<br>");
counter++;
  if(counter > 15){clearInterval(intervalId);}
};
var intervalId = setInterval(printMessage, 1000);


// вывод кординат в консоль при клике

let clickHandler = function (event){
  console.log("Клик! " + event.pageX + " " + event.pageY);
}

$("body").click(clickHandler);

// смена места н1 на место клика

// let clickHandler2 = function (event){
//     $("h1").offset({
//       left: event.pageX,
//       top: event.pageY
//     });

// }

// $("html").click(clickHandler2);


// движение по квадрату

var leftOffSet = 0;
var downOffSet = 0;

let moveH1 = function (){
  if (leftOffSet < 200 && downOffSet <= 0){
    $("h1").offset({ left: leftOffSet++ });
  }
  else if(leftOffSet >= 200 && downOffSet < 200){
  $("h1").offset({ top: downOffSet++ });
  }
  else if (leftOffSet > 0 && downOffSet >= 200){
    $("h1").offset({ left: leftOffSet-- });
  }
  else if (leftOffSet <= 0 && downOffSet > 0){
    $("h1").offset({ top: downOffSet-- });
  }
}


// игра кликни по заголовку

let moveSpeed = 16

let moveH1Set = setInterval(moveH1,moveSpeed);

let clickHandler3 = function (){
  clearInterval(moveH1Set)
  moveSpeed-=2
  setInterval(moveH1,moveSpeed)
  if(moveSpeed < 2 ){
    $("h1").text("You won") 
  }
}

$("h1").click(clickHandler3);

