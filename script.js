const hourPointer = document.getElementsByClassName("hour-pointer")[0];
const minutePointer = document.getElementsByClassName("minute-pointer")[0];
const secondPointer = document.getElementsByClassName("second-pointer")[0];
const dateMark = document.getElementById("data");
const getTime = () => {
    const data = new Date();
    return {
        day: data.getDate(),
        month: data.getMonth(),
        year: data.getFullYear(),
        hours: data.getHours(),
        minutes: data.getMinutes(),
        seconds: data.getSeconds(),
    };
};


setInterval(() => {
    const { seconds, minutes, hours, day, month, year } = getTime();
    dateMark.innerHTML = `${day} / ${month+1} / ${year} `
    
    secondPointer.style.transform = `translate(0,-50%) rotate(${seconds * 6}deg)`;
    minutePointer.style.transform = `translate(0,-50%) rotate(${minutes * 6}deg)`;
    hourPointer.style.transform = `translate(0,-50%) rotate(${(hours % 12) * 30 + minutes * 0.5}deg)`; // Para corrigir o ponteiro das horas com base nos minutos.
}, 1000);