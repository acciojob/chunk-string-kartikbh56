function stringChop(str, size) {
  // your code here
	let res = []
	for(let i=0;i<str.length;i=i+5){
		res.push(str.slice(i, i+size))
	}
	return res
}

Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
