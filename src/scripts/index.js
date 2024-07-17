function changeTshirt(color){
    var imgPreview = document.getElementById('preview');
    var heading = document.getElementById('heading');
    if(color == "redBlock"){
        imgPreview.src = "./public/images/redShirt.jpg";
        heading.innerHTML = "Red T-Shirt";
    }
    if(color == "greenBlock"){
        imgPreview.src = "./public/images/greenShirt.jpg";
        heading.innerHTML = "Green T-Shirt";
    }
    if(color == "blueBlock"){
        imgPreview.src = "./public/images/blueShirt.jpg";
        heading.innerHTML = "Blue T-Shirt";
    }
    if(color == "orangeBlock"){
        imgPreview.src = "./public/images/orangeShirt.jpg";
        heading.innerHTML = "Orange T-Shirt";
    }
}

function whiteTshirt(){
    var imgPreview = document.getElementById('preview');
    var heading = document.getElementById('heading');
    imgPreview.src = "./public/images/whiteShirt.jpg"
    heading.innerHTML = "T-Shirt";
}