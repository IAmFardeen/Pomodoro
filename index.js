let width = 0;
var height=0;
var heightcont=0;
var a = document.getElementById("stop");
var button = document.getElementById("button");
document.getElementById("button").addEventListener("click",function(e){
        button.classList.toggle("add");
        a.classList.toggle("add")
    let totalSeconds=25*60;
    var time2=setInterval(function countdown(){
        let minutes= Math.floor(totalSeconds/60);
        let seconds = totalSeconds%60;
        seconds = seconds<10 ? '0' + seconds : seconds;
        document.getElementById("time").innerText=minutes +" : "+seconds;
        console.log("time is running");
        totalSeconds--;
        a.addEventListener("click",function(){
            clearInterval(time2);
        })
    },1000)

    var bc = setInterval(function(){
        heightcont=heightcont+25;
        document.getElementById("energy").style.height=heightcont+"px";
        if(heightcont>600){
            document.getElementById("energy").style.height="600px";
            clearInterval(bc);
         }
    },60000)
    var id =setInterval(function(){
        var school = new Audio("/Music/schoolbell.wav");
      
    width = width+75;
    height=height+75; 
    
     document.getElementById("color").style.width=width +"px";
     document.getElementById("color").style.height=height +"px";
    
     if(width>375 && height>375 ){
        document.getElementById("color").style.width="100%";
        document.getElementById("color").style.height="100%";
        school.play();
        clearInterval(id);
     }
     a.addEventListener("click",function(){
        clearInterval(id);
     })
    },300000);
})



let songs = 0;
x=document.getElementById("audio");
y=document.getElementById("audio2");


function playaudio(event){  
   songs=0;
   if(songs==0){
    y.pause();
    x.play();
   }
}

function pauseaudio(){
    x.pause();

    y.pause();
}
function nextsong(){
    pauseaudio();
    songs++;
    console.log(songs);
    for(var i =0; i<2;i++){
        if(songs==0){
           
            x.play();
            y.pause();
           
        }
        else if(songs>1){
            x.play();
        }
        else{
            
            y.play();
           
        }
    }
}


  function prevsong(){
    songs--;
    console.log(songs);
    for(var i =0; i<2;i++){
        if(songs==0){
            x.play();
            y.pause();
           
        }
        else{
            y.play();
            x.pause();
        }
    }
}
    









