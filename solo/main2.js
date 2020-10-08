var ourGallery = document.querySelectorAll('#gallery');
ourGallery.forEach(img => {
	img.addEventListener('click', (e) => {
		// i need to creat overlay element  so that popup will be on it

		let overlay = document.creatElement("div");
		// here we will add a class
		overlay.className = 'popup-overlay';
		//append the ovrlay to the body

		document.body.appendChild("overlay");
		// creat the popup box
		let popupBox = document.creatElement("div");
		//add class to our popup
		popupBox.className = 'popup-box';
		// creat the image
		let popupImage = document.creatElement("img");
		//console.log(img.src);
		popupImage.src = img.src;
		// add image to popup bpx
		popupBox.appendChild(popupImage);
		document.body.appendChild(popupBox);

	});


})


$('.about').click(function(){
	//when i click on About show the next page and hide this one.
	$(".next-page").show();
	$('.logo').hide();
})


// $(document).ready(function(){
// 	$(".about").click(function(){
// 		$(".about-us").show();
// 	});

// })

var images = ['bedroom/bed.jpg', 'bedroom/bed2.jpg', 'bedroom/bed3.jpg', 'bedroom/bed4.jbg', 'bedroom/bed5.jpg', 'bedroom/bed6.jpg'];

$('#box').click(function(){
	//go inside the array and check for the image.
	for(var x = 0; x < images.length; x++){
		//check if the image is excite.
		if(images[x] !== null)
			//if the image is there show it in another window.
			window.open(images[x]);
	}
	
})

let btnBack = document.querySelector('#btn');
let goBack = function(){
	window.back('second index.html');
};
btnBack.addEventListener('click', function(){
	goBack()
})