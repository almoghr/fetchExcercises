async function delay (ms) {
    let m = setTimeout(() => {
        showPic();
    }, ms)
    return m
}

async function anyDelay() {
    await delay(5000)
};

anyDelay()
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