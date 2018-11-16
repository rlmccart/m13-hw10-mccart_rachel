//JavaScript Functionalit Part 1 Goes Here. Comment it all out once finsihed.
var section = document.getElementByTagName('section');
var button = document.getElementbyTagName('button');

function slideToggle() {
    section.classList.toggle('hide');
};

for (i=0; i < button.length; i++) {
    button[i].addEventListener('click', slideToggle);
}; 

//jQuery functionality will go here. Make sure to iclude the document.ready function.
