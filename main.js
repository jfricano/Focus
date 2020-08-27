// returns random image from unsplash.it catalog of 993 images
function randomImage() {
	const imageID = Math.floor(Math.random() * 993);	
	return `https://unsplash.it/1200/800?image=${imageID}`;
}

// ***** pull relevant elements from fb, youtube ******
let contents;
if (
	window.location.hostname === 'www.facebook.com' ||
	window.location.hostname === 'web.facebook.com'
) {
	contents = $('#globalContainer');
}
if (window.location.hostname === 'www.youtube.com') {
	contents = $('#content');
}
const parent = contents.parent();

// *********** remove main container ************
contents.remove();

// *********** define new elements **************
// image
const imageElement = document.createElement('img');
imageElement.src = randomImage();

// background
const background = document.createElement('div');
background.id = 'background';

// text
const textContainer = document.createElement('div');
const text = document.createTextNode('Get back to building your dreams');
textContainer.id = 'beautText';

// assemble new elements
parent.prepend(background);
background.append(textContainer);
textContainer.append(text);
background.append(imageElement);

// reload new image when clicked
$(imageElement).click(function() {
	imageElement.src = randomImage();
	imageElement.load();	
	setTimeout( () => alert('An image was clicked!\nImage Removed'), 200);
});

// EXPERIMENTAL STUFF -----------------------------
// $(textContainer).click(function() {
// 	textContainer.remove();
// 	setTimeout( () => alert('The text was clicked\nText Removed'), 200);
// });

// EXPERIMENTAL - learn about AJAX
// $.ajax({
//   method: 'GET',
//   url: 'https://unsplash.it/',
//   success: function(result) {
// 	 console.log(result);
//   },
//   error: function(err) {
//    // if any errors occur during the process you can check out the
//    // the error by logging the 'err' argument
//   }
// });
