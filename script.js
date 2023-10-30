let miliSec = 00;
let sec = 00;
let minute = 00;
let timer;
let Num_Of_Laps = 0;
var lapDiv = document.querySelector("#mainContent");           //for showing laps


document.getElementById('start').addEventListener('click', () => {
    timer = true;
    start();
});


document.getElementById('pause').addEventListener('click', () => {
    timer = false;
})

document.getElementById('reset').addEventListener("click", () => {
    timer = false;
    miliSec = 0;
    sec = 0;
    minute = 0;
    document.getElementById("minute").innerHTML = "00";
    document.getElementById("sec").innerHTML = "00";
    document.getElementById("miliSec").innerHTML = "00";
})


function start() {
    if (timer) {
        miliSec++;
        if (miliSec == 100) {
            sec++;
            miliSec = 0;
            if (sec == 60) {
                minute++;
                sec = 0;
                miliSec = 0;
            }
        }

        displayMinute = minute;
        displaySec = sec;
        displayMili = miliSec;

        if (minute < 10) {
            displayMinute = "0" + minute;
        }
        if (sec < 10) {
            displaySec = "0" + sec;
        }
        if (miliSec < 10) {
            displayMili = "0" + miliSec;
        }

        document.getElementById("minute").innerHTML = displayMinute;
        document.getElementById("sec").innerHTML = displaySec;
        document.getElementById("miliSec").innerHTML = displayMili;
        setTimeout(start, 6.5);

    }
}


document.getElementById("lap").addEventListener("click", (e) => {

    e.preventDefault();
    const CurrTime = displayMinute + " : " + displaySec + " : " + displayMili;

    //to create Laps Div                                        //refer line 45 of HTML
    const Lapsinfo = document.createElement("div");
    Lapsinfo.classList.add("LapInfo");

    const Laps = document.createElement("div");
    Laps.classList.add("Laps");

    Lapsinfo.appendChild(Laps);


    //to create input and append it to Laps div                 //refer line 46 of HTML           
    LapNum = document.createElement("h2");
    LapNum.classList.add("lapNum");
    LapNum.innerHTML = "Lap";
    Laps.appendChild(LapNum);

    LapVal = document.createElement("h2");
    LapVal.classList.add("lap-NumVal");
    LapVal.innerText = `${++Num_Of_Laps}`;
    Laps.appendChild(LapVal);


    //to create Laptime h2 and append it to Laps div            //refer line 47 of HTML
    LapTime = document.createElement("h2");
    LapTime.classList.add("lapTime");
    LapTime.innerHTML = CurrTime;
    Laps.appendChild(LapTime);


    //finally adding Lapsinfo div to lapDiv(main container)

    lapDiv.appendChild(Lapsinfo);

    document.getElementById("clear").addEventListener("click", () => {
        lapDiv.removeChild(Lapsinfo);
        Num_Of_Laps = 0;
    })
})

const element = document.body;
const modeBtn = document.querySelector('.mode-btn');

function changeMode() {
    element.classList.toggle('dark-mode');
    element.classList.contains('dark-mode') ? modeBtn.innerText = "Light Mode" : modeBtn.innerText = "Dark Mode"
}

const mode = document.querySelector('.mode-btn');

mode.addEventListener('click', changeMode);