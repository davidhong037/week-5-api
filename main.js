const residentBtn = document.querySelector('.residents')

function buttonClick(){
    // console.log('button clicked!')
    axios.get("https://swapi.dev/api/planets/2").then(res  => loopResidents(res.data.residents))
}


function loopResidents(arr){
    for (let i = 0; i < arr.length; i++){
        axios.get(arr[i]).then(res => printName(res.data.name))
    }
}

function printName(name) {
    const h2 = document.createElement('h2')
    h2.innerHTML = name
    document.body.appendChild(h2)
}

residentBtn.addEventListener('click', buttonClick)