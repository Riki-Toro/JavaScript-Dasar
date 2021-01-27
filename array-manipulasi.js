// MANIPULASI ARRAY

// 1. Menambah elemen pada array
var array = [];
array[0] = "Riki";
array[1] = "Widi";
array[2] = "Toro";
console.log(array);


// 2. Menghapus elemen pada array
var array = ["Riki", "Widi", "Toro"];
array[1] = undefined;
console.log(array);


// 3. Menampilkan seluruh isi array
var array = ["Riki", "Widi", "Toro"];

for(var i = 0; i < array.length; i++) {
	console.log("Mahasiswa ke-" + (i+1) + " : " + array[i]);
}



// ARRAY METHOD
// 1. length : untuk mengetahui berapa jumlah elemen yang ada pada array
// 2. join : method yang menggabungkan seluruh isi array dan menggubahnya menjadi sebuah string
var array = ["Riki", "Widi", "Toro"];
console.log(array.join("_"));

// 3. push, pop, unshift, shift  : 4 method ini digunakan untuk menambah atau menghapus elemen array
// 3.1 push : untuk menambah elemen array di akhir array-nya (push = mendorong atau memasukkan elemen baru di akhir array-nya) (bisa menambah 2 elemen atau lebih)
array.push("Anto", "Hoi"); 
console.log(array.join("_"));

// 3.2 pop : untuk menghilangkan elemen terakhir dari array (hanya menghilangkan elemen satu per satu)
array.pop();
array.pop();
console.log(array.join("_"));

// 3.3 unshift & shif : bekerja pada elemen pertama pada array (kalau push & pop bekerja pada elemen terakhir)
// unshift
array.unshift("Anto", "Hoi");
console.log(array.join("_"));

// shift
array.shift();
console.log(array.join("_"));

// shift & unshift benar-benar menghilangkan elemen-nya, bukan meng-undefined elemen-nya


// Bagaimana kalau saya mau menambahkan elemen-nya ditengah-tengah?? jawabannya di materi slice & splice
