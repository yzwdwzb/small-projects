let str = '987654321'
let arr = []
let btn = document.getElementById('btn')
btn.addEventListener('click', start)

function init() {
    arr = str.split('')
    let len = arr.length - 1;
    for (let i = 0; i < len; i++) {
        document.getElementById('number').innerHTML += `<div class="box">
        <span class="num" style="transform: translateY(0%);">0123456789</span>
    </div>`
    }
}
init()

function start() {
    let numberItems = document.querySelectorAll('.num')
    Array.from(numberItems).forEach((c, index) => {
        // setTimeout(() => {
        let i = 0
        let inter = setInterval(() => {
            i++
            if (i >= arr[index] * 10) {
                clearInterval(inter)
            } else {
                c.style = `transform:translateY(-${i}%);`
            }
        }, 10)
        // }, index * 300)
    });
}