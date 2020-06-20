// JavaScript Document
var timeElapsed = 0;
var timerID = -1;
var isStop = false;

function tick() {
    timeElapsed++
	var timeElapsedAsString = timeElapsed.toString().toHHMMSS();
    document.getElementById("timer").innerHTML = timeElapsedAsString;
}

function start() {
    if(timerID == -1){
        timerID = setInterval(tick, 1000);
    }
}

function stop() {
    if(timerID != -1){
        clearInterval(timerID)
        timerID = -1
    }
}

function reset() {
    stop();
    timeElapsed = -1;
    tick()
}

function alternateStopReset(){
	isStop = !isStop;
	if(isStop){
		stop();
	} else {
		reset();
	}
}

String.prototype.toHHMMSS = function () {
    var sec_num = parseInt(this, 10);
    var hours   = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);

    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    return hours+':'+minutes+':'+seconds;
}



