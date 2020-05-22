  
  document.getElementById("btn1").addEventListener("click",function(){
    var box1=document.getElementById("login").fadeIn();
    if (box1.style.display=="none") {
      box1.style.display="block";
    }else{
      box1.style.display="none";
    }
  })

/*
  var slider = document.getElementById("myRange");
  var output = document.getElementById("value");

  output.innerHTML = slider.value;

  slider.oninput = function() {
  output.innerHTML = this.value;
  }
  */