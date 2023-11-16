const newtime = document.getElementById('timer')
let curentTime = Date.now()
let curentDate = new Date(curentTime)
let intervalTime

const startCount = () => {
    
    let hour = curentDate.getHours();
    let minute = curentDate.getMinutes();
    let second = curentDate.getSeconds();
    let day = curentDate.getDate();
    let month = curentDate.getMonth();
    let year = curentDate.getFullYear()
    
    intervalTime = setInterval(() => {
        newtime.innerHTML =
        (day + '-' + month + '-' + year +'  ') + 
        (hour ? hour + ':' : '') + 
        (minute < 10 ? '0' + minute : minute) + ':' +
        (second < 10 ? '0' + second : second) 
    
        second++

        if(second === 60) {
            minute ++
            second = 0
        }

        if(minute === 60) {
            hour++
            minute = 0
        }

    }, 1000)

}

