var li_elements = document.querySelectorAll(".login-area");

  for(var i = 0; i < li_elements.length; i++){
    li_elements[i].addEventListener("click", function(){
      li_elements.forEach(function(li){
        li_classList.remove("active");
      })
      this.classList.add("active");
      var li_value = this.getAtrribute("data_li");
     // li_elements.forEach(function(li){
      //  li_classList.remove("active");
    //  })
      
      if(li_value == "login"){
        document.querySelector("." + li_value).style.display = "block";
      }
      
      else if(li_value == "choice"){
        document.querySelector("." + li_value).style.display = "block";
      }
      
    })
  }