    
    var slider = document.getElementById("myRange");
    var output = document.getElementById("value");

    output.innerHTML = slider.value;

    slider.oninput = function() {
    output.innerHTML = this.value;
  }


document.querySelectorAll('[tab]').forEach(tab => {
    let n = tab.getAttribute('tab');
    document.querySelector(`#tab-${n}`).addEventListener('click', e => {
    document.querySelectorAll('.containerCard').forEach(tab => tab.style.display = 'none');
        switch(n) {
          case (n):
            document.querySelector(`#teste-${n}`).style.display = 'block';
              break;
          default:
        }
    });
});