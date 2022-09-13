

let prize_card = document.getElementsByClassName('card')



Array.from(prize_card).forEach(element => {
   
    element.addEventListener('click',()=>{
        console.log(element.classList)
        removeClass()
        setTimeout(() => {
            element.classList.add('prize')
        }, 0);
        
    })
});

function removeClass(){
    Array.from(prize_card).forEach(e=>{
        e.classList = ''
    })
}

function replaceCard(arr){
    for(let i =0;i<arr.length;i++){
        arr[i] = arr[i]=='card' ? 'prize' : arr[i]
    }
    console.log(arr)
    return arr
}