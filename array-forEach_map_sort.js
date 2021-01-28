// FOREACH

var angka = [1,2,3,4,5,6,7,8];
var nama = ["Riki", "Widi", "Anto", "Toro"];
pakai for
for (var i = 0; i < angka.length; i++) {
	console.log(angka[i]);
}

// pakai foreach
function expression
angka.forEach(function (e) {
	console.log(e);
})

// function deklaration
var cetak = function (e) {
	console.log(e);
}

angka.forEach(cetak);

// foreach nama
nama.forEach(function (e, i) {
	console.log("Mahasiswa ke-" + (i+1) + " adalah " + e);
})



// MAP
var angka = [1,2,5,7,8,9,5,43,2,7];
var angka2 = angka.map(function (i) {
	return i * 2;
});
console.log(angka2.join("_"));


// SORT
var angka = [1,23,5,7,8,9,5,4,2,7];
console.log(angka.join("_"));
angka.sort(function(a,b) {
	return a-b;
});
console.log(angka.join("_"));
