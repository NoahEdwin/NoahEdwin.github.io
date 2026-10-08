// Select the image by its ID
const mainImage = document.getElementById('mainImage');
const caption = document.getElementById('caption');
// Array of slides (3 images)
const slides = [
{ src: 'images/opening1.jpg',
alt: 'opening1',
caption: 'Quiet, empty.'
},
{ src: 'images/opening2.jpg',
alt: 'second',
caption: 'Something is brewing, but the team is not cooking'
},
{ src: 'images/heroic.jpg',
alt: 'third',
caption: 'Everyone has a role. Learning to trust someone elses role is harder'
},
	{ src: 'images/firstdeath.jpg',
alt: 'foorth',
caption: 'bang. The first person to die is rarely the person who makes the first mistake'
},
	{ src: 'images/firstloss.jpg',
alt: 'fifth',
caption: 'Tick. 1-0'
},
	
	{ src: 'images/los2.jpg',
alt: 'los2',
caption: 'For a while, we stopped playing together. We were five people trying to win the same game.'
},
{ src: 'images/regroup1.jpg',
alt: 'regroup',
caption: 'finally someone speaks up, a regroup occurs'
},
{ src: 'images/firstwin.jpg',
alt: 'firstwin',
caption: 'Tick. 2-1'
},
	{ src: 'images/warwon.jpg',
alt: 'warwon',
caption: 'The moment we started listening to each other, individual plays became one play'
},
	{ src: 'images/win2.jpg',
alt: 'win2',
caption: 'Tick. 2-2 Tie game'
},
	{ src: 'images/trying.jpg',
alt: 'trying',
caption: 'They thought they had a chance'
},
	{ src: 'images/win3.jpg',
alt: 'won',
caption: 'But it was over the moment we started playing together'
}
];
let currentIndex = 0;
// Preload images
slides.forEach(({ src }) => {
const i = new Image();
i.src = src;
});
// Helper to show slide
function showSlide(index) {
const slide = slides[index];
mainImage.src = slide.src; // replaces the image
mainImage.alt = slide.alt; // replaces the alt of the image
caption.textContent = slide.caption; // updates caption text
}
// Advance on click
function nextSlide() {
currentIndex = (currentIndex + 1) % slides.length;
showSlide(currentIndex);
}
// Initialize
showSlide(currentIndex);
mainImage.addEventListener('click', nextSlide);