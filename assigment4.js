const mainul = document.createElement("ul")
document.body.append(mainul)
let divPopup = document.createElement("div");
document.body.append(divPopup);
divPopup.style.display = "none";
const closeBtn = document.createElement("button");
closeBtn.innerHTML = "close";
divPopup.append(closeBtn);



fetch(`https://reqres.in/api/users/`)
    .then(response => response.json())
    .then(info =>{
        console.log(info);
        info.data.forEach(item =>{
            let liItem = document.createElement("li")
            let nestedUL = document.createElement("ul")
            let nestedLI = document.createElement("li");
            mainul.append(liItem)
            liItem.append(nestedUL)
            nestedUL.append(nestedLI)
            liItem.style.display = "block";
            nestedLI.innerHTML = `id: ${item.id}, first Name: ${item.first_name},
             last Name: ${item.last_name}, email: ${item.email}, avatar:<img src="${item.avatar}"> <button class="btn"> more info on me </button>`
             const btn = nestedLI.querySelector(".btn");
                btn.addEventListener('click', async () => {
                    divPopup.style.position = 'fixed'
                    divPopup.style.top = 0;
                    divPopup.style.left = 0;
                    divPopup.style.right = 0;
                    divPopup.style.bottom = 0;
                    divPopup.style.display = "block";
                    divPopup.style.backgroundColor = "rgba(0,0,255,0.3)";
                    closeBtn.addEventListener("click", () =>{
                        divPopup.style.display = "none";
                    });
                    const response = await fetch(`https://reqres.in/api/users/${item.id}`)
                    const data = await response.json();
                    console.log(data)
                    const innerUl = document.createElement("ul");
                    divPopup.append(innerUl);
                    const innerLi = document.createElement("li");
                    innerUl.append(innerLi);
                    for (element in data.ad) {
                        innerLi.innerHTML += data.ad[element];
                    }
                    for (element in data.data) {
                        innerLi.innerHTML += data.data[element];
                    }
                })   
             })
        })