function functRecursion(n) {
  if (n < 1) {
		console.log("base case reached");
    return [];
  } else {
		console.log("winding up layer n = " + n);
    const arr = functRecursion(n - 1);
    arr.push(n);
		console.log("unravelling layer n = " + n);
    return arr;
  }
}

function functDemoRecursion(num) {
	arr = functRecursion(num);
	console.log("recursion created array: " + arr);
	console.log("this program is meant to illuminate the nature of recursion. i realized it's like winding up a spool of thread and then, after base case is reached, the spool unwinds.\n\n")
}

functDemoRecursion(8);
