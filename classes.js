

class Rectangle{
    constructor(length, width){
        this.width = width
        this.length = length
    }
}

function api(){
    
    fetch('https://anapioficeandfire.com/api/books')
        .then(response => response.json())
        .then(data => {
            console.log(data)
    })
}

btn = document.getElementsByClassName('btn').addEventListener('click', api()) 

document.addEventListener('DOMContentLoaded',api())