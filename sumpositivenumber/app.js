	function sum(arr) {
		let sum = 0; // initialize sum

		// Iterate through all elements
		// and add them to sum
		for (let i = 0; i < arr.length; i++)
			sum += arr[i];

		return sum;
	}
	let arr = [1, -1, 0, -3, 5] ;
	document.write("Sum of given array is " + sum(arr));
	
