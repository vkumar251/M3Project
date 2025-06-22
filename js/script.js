function changeTag()
{
    // Create two variables for storing the old and new elements
    var heading = document.getElementById("heading"); // get heading element
    var newParagraph = document.createElement("p"); // create new paragraph element

    newParagraph.textContent = "This is a new dynamic paragraph."; // add text content to new paragraph
    heading.parentNode.replaceChild(newParagraph, heading); // variable p will replace ID 'heading'
}