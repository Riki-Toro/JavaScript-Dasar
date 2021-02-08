// THIS
// untuk memahami THIS ini syaratnya harus paham betul dulu bagaimana membuat dan memanggil object dengan berbagai macam cara seperti diatas!
// kenapa harus paham dulu khususnya dalam function?? >> nanti kita akan berada dalam sebuah context atau sebuah keadaan yang berbeda, tergantung kita cara membuat dan memanggil functionnya, jadi jika kita membuat dan memanggil functionnya dengan cara yang berbeda maka kita akan berada pada context yang berbeda pula.



// membuat object
// cara 1 - menggunakan function declaration
function halo() {
	console.log("halo");
}
halo();


// cara 2 - menggunakan object literal
var obj = {};
obj.halo = function() {
	console.log("halo");
}
obj.halo();


// cara 3 - menggunakan constructor function
function Halo() {
	console.log("halo");
}
new Halo();

// jadi ketiga hal tersebut menampilkan hal yang sama, tapi context nya berbeda,, cara membuat dan cara memanggil nya berbeda, context nya berbeda. pemahaman itu terpakai saat kita belajar memahami THIS.




// KONSEP THIS
// THIS adalah sebuah keyword spesial yang secara otomatis itu di definisikan pada setiap function. jadi setiap bikin function atau bikin object menggunakan cara apapun, itu otomatis ada keyword THIS yang di definisikan. contoh :
console.log(this);
console.log(window === this);
// begitu di save dan refresh, maka THIS itu berisi sesuatu. kalau di ketik console.log("this"); maka secara default isi dari this atau variabel this adalah window atau bisa disebut dengan object global.

var a = 10;
console.log(this.a);



// menjalankan THIS pada tiap-tiap cara membuat object diatas
// cara 1 - menggunakan function declaration
function halo() {
	console.log(this);
	console.log("halo");
}
this.halo();
// this pada function declaration adalah mengembalikan object Global


// cara 2 - menggunakan object literal
var obj = {a : 10};
obj.halo = function() {
	console.log(this);
	console.log("halo");
}
obj.halo();
// this pada object literal adalah mengembalikan object yang bersangkutan



// cara 3 - menggunakan constructor function
function Halo() {
	console.log(this);
	console.log("halo");
}
var obj1 = new Halo();
var obj2 = new Halo();
// this pada constructor function adalah mengembalikan object yang baru dibuat
// konsep this ini memang bukan konsep yang mudah untuk dipahami tanpa ada contoh kasus, tapi contoh kasus nya akan jelas nanti ketika sudah berinteraksi dengan DOM (Document Object Model) dimana bisa berinteraksi dengan beberapa elemen HTML yang sama. jadi di ingat-ingat saja ketika memanggil keyword this dengan function yang berbeda.
