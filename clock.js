
 let name =prompt("Adınızı Giriniz:");
 document.getElementById("myName").innerHTML=name;


function showTime (){
     
    date= new Date();
    hour=date.getHours();
    minute=date.getMinutes();
    second=date.getSeconds();
    date2=date.getDay()+"/"+date.getMonth()+"/"+date.getFullYear();
    currentTime=hour+":"+minute+":"+second +" "+ date2;
    document.getElementById("myClock").innerHTML=currentTime;
    setTimeout(showTime,1000)
}
showTime();
