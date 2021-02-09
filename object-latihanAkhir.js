// LATIHAN AKHIR

// PROGRAM JURAGAN ANGKOT

// pengelolaan Angkot
// 1. Sopir : Riki Widiantoro
// 2. Trayek : Bungkal-Jetis
// 3. Kas : Rp.0
// 4. Penumpang : penumpang naik & turun

function Angkot(sopir, trayek, penumpang, kas) {
	this.sopir = sopir;
	this.trayek = trayek;
	this.penumpang = penumpang;
	this.kas = kas;

	this.penumpangNaik = function(namaPenumpang) {
		this.penumpang.push(namaPenumpang);
		return this.penumpang;
	}

	this.penumpangTurun = function(namaPenumpang, bayar) {
		if (this.penumpang.length === 0) {
			alert("Angkot masih kosong!");
			return false;
		}

		for (var i = 0; i < this.penumpang.length; i++) {
			if (this.penumpang[i] == namaPenumpang) {
				this.penumpang[i] = undefined;
				this.kas += bayar;
				return this.penumpang;
			}
		}
	}

}



var angkot1 = new Angkot("Riki Widiantoro", ["Bungkal","Bancar"], [], 0);
var angkot2 = new Angkot("Toro", ["Bungkal","Slahung"], [], 0);
