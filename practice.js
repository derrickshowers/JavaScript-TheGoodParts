/*
*  Quo function
*/
var quo = function (status) {
	return {
		get_status: function () {
			return status;
		}
	}
}

/*
*  Augmenting Types
*/
Function.prototype.method = function (name, func) {
	this.prototype[name] = func;
	return this;
}

/*
*  Closure function
*/
var myObject = (function () {
	var value = 0;
	
	return {
		increment: function (inc) {
			value += typeof inc === 'number' ? inc : 1;
		},
		getValue: function () {
			return value;
		}
	};
}());

/*
*  Another Closure function
*/
var fade = function (node) {
	var level = 1;
	var step = function () {
		var hex = level.toString(16);
		node.style.backgroundColor = '#FFFF' + hex + hex;
		//console.log('#FFFF' + hex + hex);
		if (level < 15) {
			level += 1;
			setTimeout(step, 100);
		}
	};
	setTimeout(step, 100)
};
//fade(document.body);

/*
*  Modules
*/
String.method('deentityify', function () {
	
	// The entry table. It maps entity names to characters
	var entity = {
		quot:	'"',
		lt:		'<',
		gt:		'>'
	};
	
	// Return the deentifyify method
	return function () {
		return this.replace(/&(([^&;]+);/g,
			function (a, b) {
				var r = entity[b];
				return typeof r === 'string' ? r : a;
			}
		)
	};
	
}());