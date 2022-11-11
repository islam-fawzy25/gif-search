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
const getGif = async function () {
    // if(input.value=""){}
   const response=await fetch(`http://api.giphy.com/v1/gifs/search?q=${input.value}&api_key=${gifApi}&limit=${numberOfGif.value}`)
      const data = await  response.json();     
            sendData(data)
}


// send data to elements in html 
function sendData(gif) {
    const gifsArray = gif.data
    ul.innerHTML = ''
    gifsArray.forEach(item => {
        const li = document.createElement('li')
        ul.appendChild(li)
        const img = new Image(300, 300)
        li.appendChild(img)
        img.src = item.images.original.url
    })
}

button.addEventListener('click', () => {
    getGif();
    input.value=" ";    
})

