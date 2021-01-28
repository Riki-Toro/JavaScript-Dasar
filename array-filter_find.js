// FILTER
// bisa mengembalikan banyak nilai
var angka = [1,3,56,2,67,43,2,8,9];
var angka2 = angka.filter(function (x) {
	return x > 9;
});
console.log(angka2.join(" - "));



// FIND
// mengembalikan satu niali
var angka = [1,3,56,2,67,43,2,8,9];
var angka2 = angka.find(function (x) {
	return x > 8;
});
console.log(angka2);
