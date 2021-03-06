// my Api 
const gifApi = 'cryDd2N06MslIPCYgQc7yBrOH3WucmCo'

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

let gifyUrl;


// get data from json link 

const getGif = async function (url) {
    try {
        const response = await fetch(url)
        const gifData = await response.json()

        gifData.data.forEach(item => {
            const li = document.createElement('li')
            const a = document.createElement('a')
            ul.appendChild(li)
            const img = new Image(300, 300)
            li.appendChild(a)
            a.appendChild(img)
            img.src = item.images.original.url
            a.href = item.url
            a.target = "_blank"
        })
    } catch (err) { throw err }
}

// send data to elements in html 
const sendData = async function (gif) {
    ul.innerHTML = ''
    const searchValue = input.value
    const numberOfGifValue = numberOfGif.value
    gifyUrl = `https://api.giphy.com/v1/gifs/search?api_key=${gifApi}&q=${searchValue}&limit=${numberOfGifValue}&offset=0&rating=g&lang=en`
    getGif()
}

button.addEventListener('click', () => {  
         sendData()
})