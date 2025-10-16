const eventDate = new Date("November 17, 2025 10:00:00").getTime();

const countDown = setInterval(function() {
    const now = new Date().getTime();
    const timeLeft = eventDate - now;
    //Time
    //No. of Days left as js uses milliseconds so we have to divide timeleft by  milliseconds in a day
    const days = Math.floor(timeLeft/(24*60*60*1000));
    //the remainder will give us the number of milliseconds left for hour,minutes or seconds
    const hours = Math.floor((timeLeft%(24*60*60*1000))/(60*60*1000));
    //same on
    const minutes = Math.floor(((timeLeft%(24*60*60*1000))%(60*60*1000))/(60*1000));
    
    const seconds = Math.floor(((timeLeft%(24*60*60*1000))%(60*60*1000))%(60*1000)/(1000));

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
    //If event is started
    if (timeLeft < 0) {
        clearInterval();
        document.getElementById("countdown").innerHTML = "<h3>Event Started!</h3>";
    }
},1000);

const btn1 = document.getElementById("lineup-col-btn1");
const btn2 = document.getElementById("lineup-col-btn2");
const btn3 = document.getElementById("lineup-col-btn3");
const btn1Info = document.getElementById("lineup-col-btn1-info");
const btn2Info = document.getElementById("lineup-col-btn2-info");
const btn3Info = document.getElementById("lineup-col-btn3-info");
const arrow1 = document.getElementById("arrow1");
const arrow2 = document.getElementById("arrow2");
const arrow3 = document.getElementById("arrow3");

btn1.addEventListener("click", () =>{
    if (btn1Info.style.display === "none") {
        btn1Info.style.display = "block";
        arrow1.style.transform = "rotate(180deg)";
    }else {
        btn1Info.style.display = "none";
        arrow1.style.transform = "rotate(0deg)";
    }
});

btn2.addEventListener("click", () =>{
    if (btn2Info.style.display === "none") {
        btn2Info.style.display = "block";
        arrow2.style.transform = "rotate(180deg)";
    }else {
        btn2Info.style.display = "none";
        arrow2.style.transform = "rotate(0deg)";
    }
});

btn3.addEventListener("click", () =>{
    if (btn3Info.style.display === "none") {
        btn3Info.style.display = "block";
        arrow3.style.transform = "rotate(180deg)";
    }else {
        btn3Info.style.display = "none";
        arrow3.style.transform = "rotate(0deg)";
    }
});

const form1 = document.getElementById("register-form");
const form2 = document.getElementById("contact-form");
form1.addEventListener("submit", function(e) {
    e.preventDefault();
    alert("You have successfully registered for the event!");
    form1.reset();
});

form2.addEventListener("submit", () => {
    alert("You have successfully submitted your query");
    form2.reset();
});