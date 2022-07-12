function clock() {
    let hours = document.getElementById('hour');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');
    let ampm = document.getElementById('AM');
    
    var time = new Date();

    var a = time.getHours();
    var b = time.getMinutes();
    var c = time.getSeconds();
    const value=parseInt(a)>=12?'PM':'AM';
    ampm.innerText=value;
    
    hours.innerHTML= a;
    minutes.innerHTML = b;
    seconds.innerHTML = c ;
    }
    setInterval(clock,1000);

    function Alarm() {
        let alarmTime = document.getElementById('alarm');
        alarmTime.innerText = "Party Time";

        var time = new Date();
        let hours = time.getHours();
        var a = document.getElementById('wakeup').value;
        var b = document.getElementById('lunchtime').value;
        var c = document.getElementById('eveningtime').value;
        var d = document.getElementById('nighttime').value;
        console.log(a);
        
        if(a >= hours){
            document.getElementById("GM").innerHTML="GOOD MORNING!!";
            document.getElementById("breakfast").innerHTML="GRAB SOME HEALTHY";
            document.getElementById("image").style.backgroundImage="url('wakeup_image.jpg')";
            document.getElementById("time").innerText="Wake up Time :8am-9am";
        }
        if(b >= hours) {
            document.getElementById("GM").innerHTML="GOOD AFTERNOON!!";
            document.getElementById("breakfast").innerHTML="LET'S HAVE SOME LUNCH";
            document.getElementById("image").style.backgroundImage="url('lunch_image.jpg')";
            document.getElementById("time").innerText="Lunch Time :11am-12pm";
        }
        if(c >= hours){
            document.getElementById("GM").innerHTML="GOOD EVENING!!";
            document.getElementById("breakfast").innerHTML="STOP YAWING, GET SOME TEA";
            document.getElementById("image").style.backgroundImage="url('evening_image.jpg')";
            document.getElementById("time").innerText="Nap Time :5pm-6pm";
        }
        if(d >= hours){
            document.getElementById("GM").innerHTML="GOOD NIGHT!!";
            document.getElementById("breakfast").innerHTML="CLOSE YOUR EYES AND GO TO SLEEP";
            document.getElementById("image").style.backgroundImage="url('goodnight_image.jpg')";
            document.getElementById("time").innerText="Night Time :8pm-9pm";
        }
       
    }
