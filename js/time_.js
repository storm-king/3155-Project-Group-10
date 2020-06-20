// JavaScript Document
var timer = document.getElementById('timer');
var toggb = document.getElementById('togg');
var resetb = document.getElementById('reset');

var watch = new W(timer);

function start() {
  toggb.textContent = 'Stop';
  watch.start();
}

function stop() {
  toggb.textContent = 'Start';
  watch.stop();
}

toggb.addEventListener('click', function() {
  watch.isOn ? stop() : start();
});

resetb.addEventListener('click', function() {
  watch.reset();
});


function W(elem) {
	
	var time = 0;
	var i;
	var o;
	
	function update() {
		if (this.isOn){
		time += d();
		}
		
		elem.textContent = format(time);
	}
	
	
	function d() {
		var now = Date.now();
		var tp = now - o;
		o = now;
		return tp;
		
	}
	
	function format(time){
		
		time = new Date(time);
		
		var hours = time.getHours().toString();	
		var min = time.getMinutes().toString();
		var seconds = time.getSeconds().toString();
		
		
		if (hours.length < 2){
			
			hours = '0' + hours;
			
		}
		
		if (min.length < 2){
			
			min = '0' + min;
			
		}
		
		if (seconds.length < 2){
			
			seconds = '0' + seconds;
			
		}
		
		return hours + ' : ' + min + ' : ' + seconds;
		
	}
	

	
	this.start = function() {
		if(!this.isOn){
			i = setInterval(update.bind(this), 10);
			o = Date.now();
			this.ison = true;
		}
	};		
		this.stop = function() {
			
				clearInterval(i);
				
				i = null;
				this.isOn = false;
			
		};
	
	this.reset = function() {
		time = 0;
		update();
	};
	
	this.ison = false;
		
	}



