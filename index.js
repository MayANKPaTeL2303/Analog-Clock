setInterval(()=>{
    const hour = document.getElementById("hour");
    let second = document.getElementById("second");
    let minute = document.getElementById("minute");

    console.log("Hello");
    date = new Date();
    htime = date.getHours();
    mtime = date.getMinutes();
    stime = date.getSeconds();
    hrot = 30*htime+mtime/2;
    minrot = 6*mtime;
    secrot = 6*stime;
    
    hour.style.transform = `rotate(${hrot}deg)`;
    minute.style.transform = `rotate(${minrot}deg)`;
    second.style.transform = `rotate(${secrot}deg)`;

},1000);

// function updateClock() {
//     const hourElement = document.getElementById('hour');
//     const minuteElement = document.getElementById('minute');
//     const secondElement = document.getElementById('second');
  
//     const now = new Date();
//     const hours = now.getHours() % 12;
//     const minutes = now.getMinutes();
//     const seconds = now.getSeconds();
  
//     const hourRotation = (hours + minutes / 60) * 360 / 12;
//     const minuteRotation = (minutes + seconds / 60) * 360 / 60;
//     const secondRotation = seconds * 360 / 60;
  
//     hourElement.style.transform = `rotate(${hourRotation}deg)`;
//     minuteElement.style.transform = `rotate(${minuteRotation}deg)`;
//     secondElement.style.transform = `rotate(${secondRotation}deg)`;
//   }