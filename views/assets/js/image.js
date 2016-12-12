var imagesArray = ["../assets/img/sky.jpg", "../assets/img/vr.jpg", "../assets/img/meeting.jpg", "../assets/img/fox.jpg", "../assets/img/tech.jpg", "../assets/img/space.jpg", "../assets/img/traffic.png", "../assets/img/works.jpg", "../assets/img/war.jpg", "../assets/img/ocean.jpeg"];


//create a function named displayImage
//it should not have any values passed into it

function displayImage(){

    //the first statement should generate a random number in the range 0 to 6 (the subscript values of the image file names in the imagesArray)
    var num = Math.floor(Math.random() * 10); // 0...9
    //the second statement display the random image from the imagesArray array in the canvas image using the random number as the subscript value
    document.canvas.src = imagesArray[num];

}
