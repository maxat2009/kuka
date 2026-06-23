const els = [
    document.querySelector('.sostav'), document.querySelector('.history'), 
    document.querySelector('.legends'),document.querySelector('.dobicha'), document.querySelector('.upotreblenie')
]

function perehod(n){
    for(let i = 0; i < 5; i++){
        if(i == n){
            els[i].style.display = 'block'
        }
        else{
            els[i].style.display = 'none'
        }
    }
}