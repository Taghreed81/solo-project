
// //creat popup for the image
// let ourGallery = document.querySelectorAll(".box");
//     ourGallery.forEach(img => {
// 	$('.box').click( function(){
// 		$('img').show();
// 	});
// }



// ourGallery.forEach(img => {
// 	img.addEventListener('click', (e) => {
// 		// i need to creat overlay element  so that popup will be on it

// 		let overlay = document.creatElement("div");
// 		// here we will add a class
// 		overlay.className = 'popup-overlay';
// 		//append the ovrlay to the body

// 		document.body.appendChild("overlay");
// 		// creat the popup box
// 		let popupBox = document.creatElement("div");
// 		//add class to our popup
// 		popupBox.className = 'popup-box';
// 		// creat the image
// 		let popupImage = document.creatElement("img");
// 		//console.log(img.src);
// 		popupImage.src = img.src;
// 		// add image to popup bpx
// 		popupBox.appendChild(popupImage);
// 		document.body.appendChild(popupBox);

// 	});


// })

// var allLinks = document.querySelectorAll(".links");
// allLinks.forEach(link => {
// 	link.addEventListener("click", (e) =>{
// 		e.preventDefault();
// 	})
// })

$('.about').click(function(){
	$(".next-page").show();
	$('.logo').hide();
})



// $("a").bind("click", function(e) {
//     e.preventDefault();
//     var id = $(this).data("section");
//       $("#content section:visible").fadeOut();
//       $(id).fadeIn();
// });


$(document).ready(function(){
	$(".about").click(function(){
		$(".about-us").show();
	});

})