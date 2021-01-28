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
		// tambah penumpang di awal array
		// kembalikan isi array & keluar dari function
	// else
		// telusuri seluruh kursi dari awal
			// jika ada kursi kosong
				// tambah penumpang di kursi tersebut
				// kembalikan isi array & keluar dari function
			// jika sudah ada nama yang sama
				// tampilkan pesan kesalahannya
				// kembalikan isi array & keluar dari function
			// jika seluruh kursi terisi
				// tambah penumpang di akhir array
				// kembalikan isi array & keluar dari function
}
