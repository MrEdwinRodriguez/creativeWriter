var imagesArray = ["assets/img/sky.jpg", "assets/img/vr.jpg", "assets/img/meeting.jpg", "assets/img/fox.jpg", "assets/img/tech.jpg", "assets/img/space.jpg", "assets/img/traffic.png", "assets/img/works.jpg", "assets/img/war.jpg", "assets/img/ocean.jpeg"];



function displayImage() {
  var num = Math.floor(Math.random() * 10);
  document.canvas.src = imagesArray[num];
}
