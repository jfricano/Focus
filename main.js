// old code using sans jQuery syntax
// const contents = document.getElementById('content');
// contents.parentNode.removeChild(contents);

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
const imageID = Math.floor(Math.random() * 993);	// webpage provides selection of 993 jpgs
const imageURL = `https://unsplash.it/1200/800?image=${imageID}`;
const imageElement = document.createElement('img');
imageElement.src = imageURL;

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

// EXPERIMENTAL - functionality to make elements disappear when clicked
// $(imageElement).click(function() {
// 	imageElement.remove();
// 	setTimeout( () => alert('An image was clicked!\nImage Removed'), 200);
// });

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
