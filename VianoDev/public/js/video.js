$(document).ready(function() { // Ждём загрузки страниц
	$(".opacity").click(function(){	// Событие клика на маленькое изображение
		console.log("+");
	}); 
console.log("obj");
});

$(document).keydown(function(e) { //closing at ESC
    if( e.keyCode != 37 && e.keyCode != 39) {//закрываем увеличенную картинку на все кнопки кроме стелки в лево и право
        $(".popup").fadeOut(500)
			setTimeout(function() {	
			  $(".popup").remove();
			}, 800); 
    }
});

var closeImg = function(){
	$(".popup").fadeOut(500);	
			setTimeout(function() {
			  $(".popup").remove();
			}, 800);
	// console.log('close');
}