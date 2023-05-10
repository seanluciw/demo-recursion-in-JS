function functRecursion(n) {
  if (n < 1) {
		console.log("BASE CASE reached.");
    return [];
  } else {
		console.log("WINDING UP layer n = " + n);
    const arr = functRecursion(n - 1);
    arr.push(n);
		console.log("UNRAVELLING layer n = " + n);
    return arr;
  }
}

function functDemoRecursion(num) {
	console.log("Welcome to my little program showing recursion with a metaphor.");
	arr = functRecursion(num);
	console.log("RECURSION created ARRAY: " + arr);
	console.log("This program is meant to illuminate the nature of recursion in JavaScript. I realized it's like winding up a spool of thread and then, after the base case is reached, the spool unravels. The array is created during the unravelling phase, which helps illuminate the otherwise counterintuitive ordering of the array elements. \n\n")
}

functDemoRecursion(8);
