// my Api 

//1- creat url with api 
//2- fetch data and found array of gighes linkes and 
//3- add that by foreach to element in html 
//4- implement addeventlistner to searched word by keypress
//5- implement onclick to button 
//6- implement limit of gighes images 

//get elements ready for work
const input = document.getElementById('input')
const button = document.getElementById('button')
const numberOfGif = document.getElementById('numberOfGif')
const main = document.querySelector('main')
const ul = document.createElement('ul')
main.appendChild(ul)

// get data from json link 
const getGif = function () {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${input.value}&api_key=${gifApi}&limit=${numberOfGif.value}`)
        .then(request => request.json())
        .then(data => {
            sendData(data)
            console.log(data);
        })
}

// send data to elements in html 
function sendData(gif) {
    const gifsArray = gif.data
    ul.innerHTML = ''
    gifsArray.forEach(item => {
        const li = document.createElement('li')
        const a = document.createElement('a')

        ul.appendChild(li)
        const img = new Image(300, 300)
        li.appendChild(a)
         a.appendChild(img)
        img.src = item.images.original.url
        a.href=item.url
         a.target="_blank"
    })
}

button.addEventListener('click', () => {
    getGif()
    sendData()
})
