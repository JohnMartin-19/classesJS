

class Rectangle{
    constructor(length, width){
        this.width = width
        this.length = length
    }
}

function api(){
    fetch('https://api-nba-v1.p.rapidapi.com/seasons')
        .then(response => response.json())
        .then(data => {
            console.log(data)
    })
}

btn = document.getElementsByClassName('btn')
btn.addEventListener('click', api()) 

//document.addEventListener('DOMContentLoaded',api())