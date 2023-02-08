for(i=0;i<7;i++){


document.querySelectorAll("button")[i].addEventListener("click",songz);




function songz(){
 var Inner= this.innerHTML;
 switch(Inner){
    case "w":
        var song1=new Audio('sounds/crash.mp3');
        song1.play();
        break;
   case "a":
    var song2=new Audio('sounds/kick-bass.mp3');
    song2.play();
    break;
  case "s":
    var song3=new Audio('sounds/snare.mp3');
    song3.play();
    break;

  case "d":
    var song4=new Audio('sounds/tom-1.mp3');
    song4.play();
    break;  
    case "j":
        var song5=new Audio('sounds/tom-2.mp3');
        song5.play();
        break;
    case "k":
      var song6=new Audio('sounds/tom-3.mp3');
        song6.play();
        break;   
        
        case "l":
            var song7=new Audio('sounds/tom-4.mp3');
            song7.play();
            break;
            
         default:
         
            break;   
 }
   
}

}

for(i=0;i<8;i++){
  document.getElementsByTagName("button")[i].addEventListener("keypress",fun2 );
}

function fun2(event){
 let inner=event.key;
 switch(inner){
  case "w":
    case "w":
      var song1=new Audio('sounds/crash.mp3');
      song1.play();
      document.getElementsByTagName("body")[0].style.backgroundColor="orange";

      break;
 case "a":
  var song2=new Audio('sounds/kick-bass.mp3');
  song2.play();
  document.getElementsByTagName("body")[0].style.backgroundColor="violet";
  break;
case "s":
  var song3=new Audio('sounds/snare.mp3');
  song3.play();
  document.getElementsByTagName("body")[0].style.backgroundColor="yellow";
  break;

case "d":
  var song4=new Audio('sounds/tom-1.mp3');
  song4.play();
  document.getElementsByTagName("body")[0].style.backgroundColor="lime";
  break;  
  case "j":
      var song5=new Audio('sounds/tom-2.mp3');
      song5.play();
      document.getElementsByTagName("body")[0].style.backgroundColor="lightgreen";
      break;
  case "k":
    var song6=new Audio('sounds/tom-3.mp3');
      song6.play();
      document.getElementsByTagName("body")[0].style.backgroundColor="aqua";
      break;   
      
      case "l":
          var song7=new Audio('sounds/tom-4.mp3');
          song7.play();
          document.getElementsByTagName("body")[0].style.backgroundColor="lavender";
          break;
          
       default:
       alert("Key Not Found");
          break;   
 }
}



//  document.getElementsByTagName("body")[0].addEventListener("keypress",fun);

// function fun(event){
//  if(event.key=="w"){
//   var song1=new Audio('sounds/crash.mp3');
//   song1.play();
//   document.getElementsByTagName("body")[0].style.backgroundColor="orange";
//  }
//  else if(event.key=="a"){
//   var song2=new Audio('sounds/kick-bass.mp3');
//   song2.play();
//   document.getElementsByTagName("body")[0].style.backgroundColor="violet";
//  }
//  else if(event.key=="s"){
//   var song3=new Audio('sounds/snare.mp3');
//   song3.play();
//   document.getElementsByTagName("body")[0].style.backgroundColor="yellow";
//  }
//  else if(event.key=="d"){
//   var song4=new Audio('sounds/tom-1.mp3');
//   song4.play();
//   document.getElementsByTagName("body")[0].style.backgroundColor="lime";
//  }
//  else if(event.key=="j"){
//   var song5=new Audio('sounds/tom-2.mp3');
//   song5.play();
//   document.getElementsByTagName("body")[0].style.backgroundColor="lightgreen";
//  }

//  else if(event.key=="k"){
//   var song6=new Audio('sounds/tom-3.mp3');
//         song6.play();
//         document.getElementsByTagName("body")[0].style.backgroundColor="aqua";
//  }
//  else if(event.key=="l"){
//   var song7=new Audio('sounds/tom-4.mp3');
//   song7.play();
//   document.getElementsByTagName("body")[0].style.backgroundColor="lavender";
//  }
//  else {
  
//   document.getElementsByTagName("body")[0].style.backgroundColor="white";
 
//   document.getElementsByTagName("p")[0].innerHTML="Key Not Found"
// }
//  }

