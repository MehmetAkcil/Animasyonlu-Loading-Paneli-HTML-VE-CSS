const loader = document.querySelector('.loader'),
    counter = document.querySelector('.loader-counter')
let count = 0, interval = setInterval(() => {
    count++;
    if(count <= 100){
        counter.innerHTML = `${count}%`
    }else{
        clearInterval(interval)
    }

}, 30)
window.onload = () => {
    let intval2 = setInterval(() => {
        if(count == 100){
            loader.classList.remove('active')
            setTimeout(() => {
                loader.classList.add('none')
            }, 1000)
            clearInterval(intval2)
        }
    }, 1000);
}