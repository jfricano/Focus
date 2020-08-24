// old code using sans jQuery syntax
// const contents = document.getElementById('content');
// contents.parentNode.removeChild(contents);

// ***** pull relevant elements from fb, youtube ******
// const contents = $('#content');
let contents;
if (
	window.location.hostname === 'www.facebook.com' ||
	window.location.hostname === 'web.facebook.com'
) {
	contents = $('#globalContainer');
}
else if (window.location.hostname === 'www.youtube.com') {
	contents = $('#content');
}
// console.log(contents);
const parent = contents.parent();

// *********** remove main container ************
contents.remove();

// *********** define new elements **************
// image
const image = document.createElement('img');
image.src =
	'https://www.shadygrovefertility.com/blog/wp-content/uploads/2014/07/hang-in-there.jpg';

// background
const background = document.createElement('div');
background.id = 'background';

// text
const textContainer = document.createElement('div');
const text = document.createTextNode('Get back to building your dreams');
textContainer.id = 'beautText';

// assemble new elements
parent.append(background);
background.append(textContainer);
textContainer.append(text);
background.append(image);
