let cats_api= document.querySelector("#cats_api")
let catsbutton=document.querySelector("#catsbutton")
function catsfetch(){
    cats_api.innerHTML=""
    fetch(`https://api.thecatapi.com/v1/images/search`)
    .then(result=>result.json())
    .then(data=>data.forEach(item=> {
        cats_api.innerHTML += `
        <img src="${item.url}" alt="" width="300">`
    }))
}
catsfetch()
catsbutton.addEventListener("click", catsfetch)
let become_stronger=document.querySelector("#become_stronger")
let clickertext=document.querySelector("#clickertext")
let count = 0;

become_stronger.addEventListener("click", () => {
    (count += 1), (clickertext.innerText = `${count} followers`);
});