// //Make a new HTML page with a button which changes the title of the page
// include a heading and subheadings with paragraphs
// add buttons to change and add elements to the page
// add a button to remove an entire subheading and its text from the page

function changeText(changeText) {
    document.getElementbyId(changeText).innerText = new Date();
}

function removeInformation(removeInformation) {
    document.getElementById(removeInformation).remove ();
}

function addInfo(addInfo) {
    const Element = document.createElement("div");
    Element.innerText = "im sleepy "
    document.getElementById(addInfo).appendChild(Element);
}