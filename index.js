var li_elements = document.querySelectorAll(".login-area");
var item_elements = document.querySelectorAll(".item");

  for(var i = 0; i < li_elements.length; i++){
    li_elements[i].addEventListener("click", function(){
      li_elements.forEach(function(li){
        li_classList.remove("active");
      })
      this.classList.add("active");
      var li_value = this.getAtrribute("data_li");
        item_elements.forEach(function(item){
          item.style.display = "none";
        })
      
      if(li_value == "login-area"){
        document.querySelector("." + li_value).style.display = "block";
      }
      
      else if(li_value == "choice-area"){
        document.querySelector("." + li_value).style.display = "block";
      }
      
      else{
        console.log("")
      }
    })
  }