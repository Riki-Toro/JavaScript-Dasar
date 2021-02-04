// Membuat program pengelolaan tempat duduk penumpang JURAGAN ANGKOT

// var penumpang = []; 1 sampai 15

// pengelolaan penumpang
// 1. Penumpang naik : tambahPenumpang()
// 2. Penumpang turun : hapusPenumpang()

// function tambahPenumpang()
// 2 parameter : namaPenumpang() & arrayPenumpang()
// aturan :
// 1. jika angkotnya kosong, penumpang pertama duduk di kursi pertama
// 2. penumpang berikutnya duduk di kursi selanjutnya secara berurutan
// 3. jika ada kursi kosong(karena penumpang ada yang turun), maka penumpang yang naik berikutnya akan duduk di kursi kosong terlebih dahulu. bukan di kursi terakhir
// 4. asumsikan kursi tidak akan penuh dan akan bertambah terus jika ada penumpang naik
// 5. nama penumpang tidak boleh sama, untuk menghindari kebingungan ketika nanti penumpang turun,, karena hanya nama informasi utama saat ini.. jika ada nama penumpang yang sama maka akan dianggap orang yang sama


// PSEUDOCODE
var penumpang = [];
var tambahPenumpang = function (namaPenumpang, penumpang) {
	// jika angkot kosong
	if (penumpang.length == 0) {
		// tambah penumpang di awal array
		penumpang.push(namaPenumpang);
		// kembalikan isi array & keluar dari function
		return penumpang;
	} else {
	// else
		// telusuri seluruh kursi dari awal
		for (var i = 0 ; i < penumpang.length; i++) {
			// jika ada kursi kosong
			if (penumpang[i] == undefined) {
				// tambah penumpang di kursi tersebut
				penumpang[i] = namaPenumpang;		
				// kembalikan isi array & keluar dari function
				return penumpang;
			}
			// jika sudah ada nama yang sama
			else if (penumpang[i] == namaPenumpang) {
				// tampilkan pesan kesalahannya
				console.log(namaPenumpang + " sudah ada di dalam angkot.");
				// kembalikan isi array & keluar dari function
				return penumpang;
			}
			// jika seluruh kursi terisi
			else if (i == penumpang.length - 1) {
				// tambah penumpang di akhir array
				penumpang.push(namaPenumpang);
				// kembalikan isi array & keluar dari function
				return penumpang;
			}
		}
	}
}


// hapusPenumpang()
// 2 parameter : namaPenumpang() & arrayPenumpang()
// 1. jika angkot kosong, tampilkan pesan bahwa angkot kosong
// 2. jika ada penumpang yang namanya sesuai, hapus nama penumpang pada array dengan memberi nilai undefined
// 3. jika tidak ada penumpangyang namanya sesuai, tampilkan pesan kesalahannya

var hapusPenumpang = function (namaPenumpang, penumpang) {
	if (penumpang.length == 0) {
		console.log("Angkot masih kosong");
		return penumpang;
	} else {
		for (var i = 0; i < penumpang.length; i++) {
			if (penumpang[i] == namaPenumpang) {
				penumpang[i] = undefined;
				return penumpang;
			} else if (i == penumpang.length-1) {
				console.log(namaPenumpang + " tidak ada di dalam angkot");
				return penumpang;
			}
		}
	}
}
