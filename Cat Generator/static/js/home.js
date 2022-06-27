function catGenerator(){
    var img = document.createElement('img');
    img.setAttribute("src", "static/images/catGIF.gif");
    img.setAttribute("height", "180px");
    document.getElementById('flex-box-result').appendChild(img);
}