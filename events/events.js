/* Randomize box positions - prototypal inheritance */
(function() {
	'use strict';
	
	/*
	*  Create a box object
	*/
	var Box = function (el) {
		if (!(this instanceof Box)) {
			return new Box(el);
		}
		this.leftPos = 0;
		this.topPos = 0;
		this.randomizePos();
		el.style.left = this.leftPos + 'px';
		el.style.top = this.topPos + 'px';
	};
	Box.prototype.randomizePos = function() {
		this.leftPos = Math.floor((Math.random()*960)+1);
		this.topPos = Math.floor((Math.random()*500)+1);
	}
	
	/*
	*  Grab all the boxes and randomize positions
	*/
	var boxes = bunchesOfBoxes.getElementsByTagName('li');
	for (var i=0; i<boxes.length; i++) {
		new Box(boxes[i]);
	}
	
})();

/* Randomize box positions - functional inheritance */
(function() {
	'use strict';
	
	/*
	*  Create event handler
	*/
	function addListener(obj) {
		document.getElementById([obj.id]).addEventListener('click', function(e) {
			stopProp(e);
			if (e.target.tagName === obj.targetEl) {
				changeColor(e.target);
			}
		}, false);
	}
	function changeColor(el) {
		el.style.backgroundColor = 'red';
	}
	function stopProp(e) {
		e = e || event;
		(e.stopPropagation) ? e.stopPropagation() : e.cancelBubble();
		e.preventDefault();
	}
	
	var bunchesOfBoxesObj = {
		id: 'bunchesOfBoxes',
		targetEl: 'LI'
	}
	
	addListener(bunchesOfBoxesObj);
	
})();