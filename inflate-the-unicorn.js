  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //
//create count variable for each unicorn image
var count1= 0
var count2= 0
var count3= 0

//add the eventListener for the click event
document.getElementById("unicorn1").addEventListener("click", changeIMG1);
document.getElementById("unicorn2").addEventListener("click", changeIMG2);
document.getElementById("unicorn3").addEventListener("click", changeIMG3);

//create a function to call the click event for Unicorn 1
function changeIMG1() {
  if (count1 == 0) {
    document.getElementById("unicorn1").src = "images/unicorn-1.png"
    playAudio('blow')
  }
  
  else if (count1 == 1) {
    document.getElementById("unicorn1").src = "images/unicorn-2.png"
    playAudio('blow')
  } 

  else if (count1 == 2) {
    document.getElementById("unicorn1").src = "images/unicorn-3.png"
    playAudio('happy')
  }
  
    else if (count1 == 3) {
    document.getElementById("unicorn1").src = "images/unicorn-0.png"
    playAudio('pop')
  }

  if (count1 === 3) {
    count1 = 0;
    playAudio('scared')
  } else {
    count1++
  } 
  console.log(count1)
}

//create a function to call the click event for Unicorn 2
function changeIMG2() {
  if (count2 == 0) {
    document.getElementById("unicorn2").src = "images/unicorn-1.png"
    playAudio('blow')
  }

  else if (count2 == 1) {
    document.getElementById("unicorn2").src = "images/unicorn-2.png"
    playAudio('blow')
  }

  else if (count2 == 2) {
    document.getElementById("unicorn2").src = "images/unicorn-3.png"
    playAudio('happy')
  }

  else if (count2 == 3) {
    document.getElementById("unicorn2").src = "images/unicorn-0.png"
    playAudio('pop')
  }

  if (count2 === 3) {
    count2 = 0;
    playAudio('scared')

  } else {
    count2++
  }
  console.log(count2)
}

//create a function to call the click event for Unicorn 3
function changeIMG3() {
  if (count3 == 0) {
    document.getElementById("unicorn3"). src = "images/unicorn-1.png"
    playAudio('blow')
  }

  else if (count3 == 1) {
    document.getElementById("unicorn3"). src = "images/unicorn-2.png"
    playAudio('blow')
  }

  else if (count3 == 2) {
    document.getElementById("unicorn3"). src = "images/unicorn-3.png"
    playAudio('happy')
  }

  else if (count3 == 3) {
    document.getElementById("unicorn3"). src = "images/unicorn-0.png"
    playAudio('pop')
  }

  if (count3 === 3) {
    count3 = 0;
    playAudio("scared")

  } else {
    count3++
  }
  console.log(count3)
}

//Function to play sounds
function playAudio(id){
  document.getElementById(id).play();
}
