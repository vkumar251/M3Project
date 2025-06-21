document.addEventListener("DOMContentLoaded", function()
{
    var image = document.getElementById("ai_image"); // get image ID named 'ai_image'
    document.addEventListener("keydown", function(event) // listen for keydown (pressing keyboard button) event
    {
        if (event.key === "Enter") // key pressed is Enter?
        {
            image.src = "images/stocks/data/data_science.jpg"; // change image source to data science image
        }
    });
});