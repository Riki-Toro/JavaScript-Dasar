// FUNGSI SLICE & SPLICE

// Slice (mengiris array) : digunakan jika kita ingin mengambil beberapa bagian dari array untuk menjadi array yang baru
// Splice (menyambung/menambal) : bisa menyisipkan sebuah elemen di tengah-tengah

// SPLICE
// rumus : splice(indexAwal, mauDihapusBerapa, elemenBaru1, elemenBaru2, ...);
var array = ["Riki", "Widi", "Anto", "Toro"];

array.splice(2, 0, "Hoi", "Haii");
console.log(array.join("_"));


// SLICE 
// rumus : slice(awal,akhir);
var array = ["Riki", "Widi", "Anto", "Toro", "aaaa", "bbbb"];

var array2 = array.slice(1,3);
console.log(array.join("_"));
console.log(array2.join("_"));
