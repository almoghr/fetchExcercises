function delay (ms) {
    let promised = new Promise((resolve => setTimeout(resolve, ms)))
    promised.then(()=> showPic())
}

delay(1000);

function showPic() {
    let img = document.createElement("img");
fetch(`https://api.thecatapi.com/v1/images/search`)
.then((response) => {
    return response.json();    
}).then(data => {
    img.src = data[0].url;
    document.body.append(img);
});
}