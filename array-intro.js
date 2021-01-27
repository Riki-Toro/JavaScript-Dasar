// ARRAY

// banyak digunakan di bahasa pemrograman lain, ada yang menjadikannya tipe data dan ada yang struktur data

// Definisi : 
// (global) => susunan sistematis dari objek-objek yang serupa.
// di dunia programing/ilmu komputer => tipe data yang digunakan untuk mendeskripsikan kumpulan elemen (nilai atau variabel), yang tiap-tiap elemennya memiliki index.
// menurut shandika galih => array adalah sebuah variabel yang lebih sakti, karena bisa menampung lebih dari satu nilai.

var hari = ["Senin","Selasa","Rabu"];
var mhs = ["Riki","Widi","Toro"];

// Kenapa ARRAY?
// 1. Mempermudah pengelolaan nilai / value / data : penelusuran dan pencarian
// 2. Manajemen memori

// Karakteristik ARRAY :
// 1. Variabel jamak, yang mempunyai banyak elemen dan diacu dengan nama yang sama
// 2. Kumpulan pasangan key dan nilai / key and value pair
// 3. Key adalah index pada array dengan tipe integer yang dimulai dari 0
// 4. Array pada javascript bertipe Object
// 5. Array pada javascript memiliki fungsi / method length untuk menghitung jumlah elemen di dalamnya
// 6. Elemen pada array boleh memiliki tipe data yang berbeda (seperti PHP) (kalau di Java dan C harus sama)



var binatang = [];
binatang = ["Kucing","Kelinci","Monyet","Panda","Koala","Sapi"];

console.log(binatang[4]);


var binatang = [];
binatang = ["Kucing","Kelinci","Monyet","Panda","Koala","Sapi"];

console.log(binatang.length);



var hari = ["Senin","Selasa","Rabu"];
var mhs = ["Riki","Widi","Toro"];
var angka = [10,123,2020];
var myArray = ["teks",7,false];
var myFunc = function() {
	alert("Hello!");
};
var myArray2 = ["teks",7,false,myFunc];
var myArray3 = ["teks",7,false,myFunc,[4,5,6]];

console.log(myArray3[4][1]);
