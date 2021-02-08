// MEMBUAT OBJECT

// object literal >> sudah di coba sebelumnya dan cara yang simpel
var mhs1 = {
	nama : "Riki Widiantoro",
	nim : 111111,
	jurusan : "Teknik Informatika"
}
var mhs2 = {
	nama : "tai",
	nim : 222222,
	jurusan : "Teknik Mesin"
}



// function declaration >> sedikit lebih simpel dibandingkan object literal
function buatObjectMahasiswa(nama, nim, jurusan) {
	var mhs = {};
	mhs.nama = nama;
	mhs.nim = nim;
	mhs.jurusan = jurusan;
	return mhs;
}
var mhs3 = buatObjectMahasiswa("Okto", "333333", "Teknik Industri");
var mhs4 = buatObjectMahasiswa("Toro", "444444", "Teknik Elektro");



// constructor function (keyword new) >> akan banyak kita gunakan >> mirip dengan function declaration karena construction ini khusus untuk membuat object
// nama function-nya diawali dengan huruf besar seperti membuat class
function Mahasiswa(nama, nim, jurusan) {
	this.nama = nama;
	this.nim = nim;
	this.jurusan = jurusan;
}
var mhs5 = new Mahasiswa("Abdul", "555555", "Akutansi");
var mhs6 = new Mahasiswa("Andi", "666666", "Akutansi");
// cara memanggilnya wajib menggunakan new dan tidak perlu membuat variabel dan return seperti function declaration.



// object.create) >> dicoba setelah memahami prototype


