const days = document.querySelector('.days'),
hours = document.querySelector('.hours'),
mins = document.querySelector('.min'),
sec = document.querySelector('.sec');



let dayVal = 9,
hourVal = 0,
minuteVal = 0,
secondVal = 0;

const intervalID = setInterval(()=>{
    timer(dayVal, hourVal, minuteVal, secondVal);
}, 1000);


function timer(d, h, m, s){
    s = s - 1;
    if(s < 0){
        s= s + 60;
        m = m -1 ;
    };
    if(m < 0){
        m= m + 60;
        h = h -1 ;
    };
    if(h < 0){
        h= h + 24;
        d = d -1 ;
    }

    days.textContent = addPriffix(d);
    hours.textContent = addPriffix(h);
    mins.textContent = addPriffix(m);
    sec.textContent = addPriffix(s);

    dayVal = d;
    hourVal= h;
    minuteVal = m;
    secondVal = s;

    if(dayVal == 0 && hourVal == 0 && minuteVal == 0 && secondVal == 0){
        clearInterval(intervalID);
    };
}

function addPriffix(num){
    return num < 10? `0${num}`:num;
}