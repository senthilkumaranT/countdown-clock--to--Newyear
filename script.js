const da=document.querySelector("#days");
const ho=document.querySelector("#hours");
const mi=document.querySelector("#minutes");
const se=document.querySelector("seconds");


function updatetime(){
const current_year=new Date().getFullYear();

const newYEar=new Date(`january 1 ${current_year +1} 00:00:00`);


const currentdate =new Date();


const diff=newYEar-currentdate;

const d=Math.floor(diff/1000/60/60/24)

const h=Math.floor((diff/1000/60/60)%24);

const m=Math.floor((diff/1000/60)%60);

const s=Math.floor((diff/1000)%60);

days.innerHTML= d<10?"0"+d:d;
hours.innerHTML= h<10?"0"+h:h;
minutes.innerHTML= m<10?"0"+m:m;
seconds.innerHTML= s<10?"0"+s:s;

}
setInterval(updatetime,1000);




















