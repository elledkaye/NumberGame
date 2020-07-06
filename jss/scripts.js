var timeLimit, timerStart, currentDot, progress;
var timer = document.getElementById('timer');
var progressBar = document.getElementById('gameBar');
var playingField = document.getElementById('playingField');
var levelNum = document.getElementById('levelNum'); 
var btnPlay = document.getElementById('playButton');  
const maxTimeLimit = 10;
const initialState = "Start";
const restartState = "Try Again";
const second_interval = 1000;
const dotsPerLevel = 10; 

function play(_btnPlay){
    if(playButton.innerHTML === initialState){
        playButton.innerHTML = restartState;
        timeLimit = maxTimeLimit;
        currentDot = 1;
        setLevelNum();
        removeDots();
        addDots();
        timerStart = setInterval(time, second_interval);
    }
    else{
        playButton.innerHTML = initialState;
        clearInterval(timerStart);
        removeDots();
        setTimeLimit();
    }

}

function timeStop(){
    if(currentDot === dotsPerLevel && timer.innerHTML !== "0"){
        clearInterval(timer);

    }
}
function time(){
    timeLimit--;
    if(timeLimit >= 0){ 
        //update the progress bar 
       /* $("gameBarProgress").css('width',(progress+'%')); 
        if(progress <= 66 && progress > 33){
            $("gameBarProgress").removeClass('bg-success');
            $("gameBarProgress").addClass('bg-warning');
        }
        else if(progress <= 33){
            $("gameBarProgress").removeClass('bg-warning');
            $("gameBarProgress").addClass('bg-danger');
 
        } 
        else if(progress === 100){
            $("gameBarProgress").removeClass('bg-warning');
            $("gameBarProgress").removeClass('bg-danger');
            $("gameBarProgress  ").addClass('bg-success');
        } 
        progress = progress - maxTimeLimit;*/
        timer.innerHTML = ":" + timeLimit;
    }  
    else{
        if(currentDot === dotsPerLevel && timer.innerHTML !== "0" )
            alert("You Won!");
            clearInterval(time, second_interval);
        currentDot++;  
    }
    
    if(currentDot < dotsPerLevel && timer.innerHTML =="0"){ 
        alert("You Lost!"); 
        clearInterval(time, timer);
        removeDots(); 
    }        
    
}

function setTimeLimit(){
    timer.innerHTML = ":" + maxTimeLimit;
}

function setLevelNum(){
    levelNum.innerHTML = "1";
    /*if user wins increment level #*/
}

function addDots(){
    for(var num = 1; num <= dotsPerLevel; num++){
        var dot = document.createElement('div');
        dot.className="dot";
        dot.id = "dot"+num;
        dot.innerHTML = num;
        dot.onclick = verify;
        playingField.append(dot);
    }
}

function removeDots(){
    if(playingField.children.length > 0){
        for(var num = 1; num <= dotsPerLevel; num++){
            var dot = document.getElementById("dot"+num);
            playingField.removeChild(dot); 
        }
    }
}

function verify(element){
    if(currentDot == element.srcElement.innerHTML){
        element.srcElement.className = "correct-dot";
        if(currentDot === dotsPerLevel && timer.innerHTML !== "0" )
            alert("You Won!");
            clearInterval(time, second_interval);
        currentDot++;
        /*if user wins stop timer*/
    }
    else
    {
        if(element.srcElement.className !== "correct-dot")
            element.srcElement.className = "incorrect-dot";
    }


}