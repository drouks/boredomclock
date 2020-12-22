var uga = 0;

var basesecrot = 6;
var baseminrot = 0.1;
var basehourrot = 0.0083333;

var totalsecrot = 0;
var totalminrot = 0;
var totalhourrot = 0;

function adjustTime(){
    var secstartingrot = 0;
    var minstartingrot = 0;
    var hourstartingrot = 0;
    
    var d = new Date();   
    var secpassed = d.getSeconds();
    var secsd = document.getElementById("secs");
    secsd.style.transform = 'rotate('+secpassed*basesecrot+'deg)';
    secstartingrot = secpassed*basesecrot;

    var minpassed = parseInt(d.getMinutes());
    var minstosecs = minpassed*60+secpassed;
    var minsd = document.getElementById("mins");
    minsd.style.transform = 'rotate('+minstosecs*baseminrot+'deg)';
    minstartingrot = minstosecs*baseminrot

    var hourspassed = parseInt(d.getHours());
    var hourstomins = (hourspassed*60)+minpassed;
    var hourstominstosec = hourstomins*60;
    var hoursd = document.getElementById("hours");
    hoursd.style.transform = 'rotate('+hourstominstosec*basehourrot+'deg)';
    hourstartingrot = hourstominstosec*basehourrot

    totalsecrot = secstartingrot;
    totalminrot = minstartingrot;
    totalhourrot = hourstartingrot
}

adjustTime();

function rotation(){

    secRotation();
    minRotation();
    hourRotation();
}

setInterval(rotation, 1000);

function secRotation(){
    totalsecrot = totalsecrot+basesecrot;
    var secs = document.getElementById("secs");
    secs.style.transform = 'rotate('+totalsecrot+'deg)'; 
    
    
}

function minRotation(){
    totalminrot = totalminrot+baseminrot;
    var mins = document.getElementById("mins");
    mins.style.transform = 'rotate('+totalminrot+'deg)';
}


function hourRotation(){
    totalhourrot = totalhourrot+basehourrot
    var hours = document.getElementById("hours");
    hours.style.transform = 'rotate('+totalhourrot+'deg)';
   
}