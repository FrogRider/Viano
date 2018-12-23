
$(document).ready(function() { // Ждём загрузки страниц

var picNumber = 0;

	$(".image").click(function(){	// Событие клика на маленькое изображение
		// console.log($(this).attr('src'));
	  	var img = $(this); // Получаем изображение, на которое кликнули
		var src = img.attr('src'); // Достаем из этого изображения путь до картинки
		$("body").append("<div class='popup' id='picture'>"+ //Добавляем в тело документа разметку всплывающего окна
						 "<div class='popup_bg'><div class='cross' onclick='closeImg()'><a onclick='closeImg()'><img src='img/crossWhite.svg'></a></div><div class='next'><a onclick='next()'><img src='img/next.svg' class='ico'></a></div><div class='prev'><a onclick='prev()'><img src='img/back.svg' class='ico'></a></div></div>"+ // Блок, который будет служить фоном затемненным
						 "<img src='"+src+"' class='popup_img' />"+ // Само увеличенное фото
						 "</div>"); 
		$(".popup").fadeIn(500); // Медленно выводим изображение
	});
});

var imagesSrcs = []; //тэги src всех нужных изображений будут храниться тут
var images = document.getElementsByName("pic");//берем все элементы с именем pic (это картинки)

for (var i = 0; i < images.length; i++) {//проходимся по ним циклом
	imagesSrcs.push(images[i].attributes.src.nodeValue)//и из атрибут src пушим в массив
}


var count = 0;
$(".mobileImages").append("<div class='mobileContent' id='mobileContent'> <a href='#' class='left' onclick='prevMobile()'><img src='img/back.svg' style='width:20px'></a><img src='"+imagesSrcs[count]+"'><a href='#' class='right' onclick='nextMobile()'><img src='img/next.svg' style='width:20px'></a></div>");

var nextMobile = function(){
	count++;
	if((count == imagesSrcs.length && imagesSrcs.length != 2) || imagesSrcs.length == 1 || count > imagesSrcs.length-1){count=0}
	document.getElementById("mobileContent").remove();
console.log("next");
	$(".mobileImages").append("<div class='mobileContent' id='mobileContent'> <a href='#' class='left' onclick='prevMobile()'><img src='img/back.svg' style='width:20px'></a><img src='"+imagesSrcs[count]+"'><a href='#' class='right' onclick='nextMobile()'><img src='img/next.svg' style='width:20px'></a></div>");
}
var prevMobile = function(){
	count--;
	if(count < 0){count=imagesSrcs.length-1}
	document.getElementById("mobileContent").remove();
	$(".mobileImages").append("<div class='mobileContent' id='mobileContent'> <a href='#' class='left' onclick='prevMobile()'><img src='img/back.svg' style='width:20px'></a><img src='"+imagesSrcs[count]+"'><a href='#' class='right' onclick='nextMobile()'><img src='img/next.svg' style='width:20px'></a></div>");
}

$(".image").click(function(){//по клику на картинку
	var img = $(this); //берем эту картинку
	var src = img.attr('src'); //берем ее атрибут src
	picNumber = imagesSrcs.indexOf(src); //запоминаем номер этой картинки в массиве всех картинок
	// console.log("Pic num = " + picNumber);
}); 

$(document).keydown(function(e) { //closing at ESC
    if( e.keyCode != 37 && e.keyCode != 39) {//закрываем увеличенную картинку на все кнопки кроме стелки в лево и право
        $(".popup").fadeOut(500)
			setTimeout(function() {	
			  $(".popup").remove();
			}, 800); 
    } else {
    	var key = e.keyCode; //смотрим, какая кнопка нажата
    	// console.log(e);
    	if (e.keyCode == 39){//если стрелка в право- листаем в право (прибавляем к индексу картинки)
    		next();
    	} else if (e.keyCode == 37){ //если влево- от индекса картинки отнимаем
    		prev(); 
    	} 
    }
});

var next = function(){
	picNumber++;
    if((picNumber == imagesSrcs.length && imagesSrcs.length != 2) || imagesSrcs.length == 1 || picNumber > imagesSrcs.length-1) { //проверка, не дошли ли мы до последней картинки
		picNumber = 0; //если да- начинаем с первой снова
	}
	console.log(picNumber);
    document.getElementById("picture").remove();
    $("body").append("<div class='popup' id='picture'>"+ //Добавляем в тело документа разметку всплывающего окна
				 	 "<div class='popup_bg'><div class='cross' onclick='closeImg()'><a onclick='closeImg()'><img src='img/crossWhite.svg'></a></div><div class='next'><a onclick='next()'><img src='img/next.svg' class='ico'></a></div><div class='prev'><a onclick='prev()'><img src='img/back.svg' class='ico'></a></div></div>"+  // Блок, который будет служить фоном затемненным
				 	 "<img src='"+imagesSrcs[picNumber]+"' class='popup_img' />"+ // Само увеличенное фото
				 	 "</div>");
				 	 $(".popup").fadeIn(0); 
}

var prev = function(){
picNumber--;
    if(picNumber < 0) { //проверка первой картинки. если с первой листаем влево- переключаемся на последюю картинку
    	picNumber = imagesSrcs.length-1
    }
    console.log("prev");
    document.getElementById("picture").remove();
    $("body").append("<div class='popup' id='picture'>"+ //Добавляем в тело документа разметку всплывающего окна
					 "<div class='popup_bg'><div class='cross' onclick='closeImg()'><a onclick='closeImg()'><img src='img/crossWhite.svg'></a></div><div class='next'><a onclick='next()'><img src='img/next.svg' class='ico'></a></div><div class='prev'><a onclick='prev()'><img src='img/back.svg' class='ico'></a></div></div>"+ // Блок, который будет служить фоном затемненным
					 "<img src='"+imagesSrcs[picNumber]+"' class='popup_img' />"+ // Само увеличенное фото
					 "</div>");
					 $(".popup").fadeIn(0);
}

var closeImg = function(){
	$(".popup").fadeOut(500);	
			setTimeout(function() {
			  $(".popup").remove();
			}, 800);
	// console.log('close');
}