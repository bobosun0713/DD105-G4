function openClass(evt, className) {
    var i, x, tablinks;
    x = document.getElementsByClassName("class");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < x.length; i++) {
       tablinks[i].classList.remove("red");
    }
    document.getElementById(className).style.display = "block";
    evt.currentTarget.classList.add("red");
  }
  
  var mybtn = document.getElementsByClassName("testbtn")[0];
  mybtn.click();




function preview1(file) {
var img = new Image(), url = img.src = URL.createObjectURL(file)
var $img = $(img)
img.onload = function() {
URL.revokeObjectURL(url)
$('#preview').empty().append($img)
}
}

function preview2(file) {
var reader = new FileReader()
reader.onload = function(e) {
var $img = $('<img>').attr("src", e.target.result)
$('#preview').empty().append($img)
}
reader.readAsDataURL(file)
}

$(function() {
$('[type=file]').change(function(e) {
var file = e.target.files[0]
preview1(file)
})
})


document.getElementById("mem_time").innerHTML = Date();

