// fetch(`https://jsonplaceholder.typicode.com/todos`)
// .then(response => response.json())
// .then(data =>{
//     console.log(data)
//     const ul = document.createElement("ul")
//     document.body.appendChild(ul)
//     data.forEach(item => {
//         const li = document.createElement("li")
//         li.innerText = item.title
//         ul.appendChild(li)
//         if(item.completed === true) {
//             li.innerHTML = `<s>${item.title}</s>`
//         }
//     })
// })

async function todos(){
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos`)
    const data = await response.json();
    console.log(data)
    const ul = document.createElement("ul")
    document.body.appendChild(ul)
    data.forEach(item => {
        const li = document.createElement("li")
        li.innerText = item.title
        ul.appendChild(li)
        if(item.completed === true) {
            li.innerHTML = `<s>${item.title}</s>`
        }
    })
}

todos();



// fetch(`https://jsonplaceholder.typicode.com/todos`)
// .then(response => response.json())
// .then(data =>{
// })