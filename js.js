let personalName=prompt("Lütfen İsim Giriniz: ");
let myName =document.querySelector("#myName");
myName.innerHTML=`${personalName}`;



function showTime(){
    let date=new Date()
    let myClock=document.querySelector("#myClock")
    let day=["Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi","Pazar"]
    let p=day[date.getDay()-1];

    let hour=date.getHours();
    let minute=date.getMinutes();
    let second=date.getSeconds();
    myClock.innerHTML=`${hour}:${minute}:${second}  ${p}`
}

setInterval(showTime, 1000)