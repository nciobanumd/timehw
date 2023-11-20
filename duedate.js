const dateToSelect = document.getElementById('selectday')
const reverseTime = document.getElementById('afiseazaTimpRamas')

const reverseCount = () => {

    setInterval(() => {
        const curentTime = Date.now()
        const selectTime = new Date(dateToSelect.value).getTime()

        
        if(selectTime <= curentTime) {
            alert('selectati o data in viitor')
            return;
        }
        
        const diferenceTime = new Date(selectTime - curentTime)

        const hour = diferenceTime.getHours()
        const minute = diferenceTime.getMinutes()
        const second = diferenceTime.getSeconds()
        const month = diferenceTime.getMonth()
        const day = diferenceTime.getDay()

        const formatHour = hour < 10 ? '0' + hour : hour
        const formatMinute = minute < 10 ? '0' + minute : minute
        const formatSecond = second < 10 ? '0' + second : second
        const formatMonth = month < 10 ? + month : month
        const formatDay = day < 10 ? + day : day
        
        
        reverseTime.innerHTML = `
        ${formatMonth}month, ${formatDay}day ${formatHour}:${formatMinute}:${formatSecond}`
        
        

    }, 1000)
        
    
}