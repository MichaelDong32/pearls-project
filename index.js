/* write a map function in plain javascript
what does a map function do?
takes an array and a function
using a for loop, takes each element of the array and passes it through the function
result is pushed to a new array
the new array is then returned */

function map (function, arr) {
	var newArr = [];

	for(var i=0; i<arr.length; i++) {
		newArr.push(function(arr[i]));
	}

	return newArr;
}