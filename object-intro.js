// INTRO OBJECT

var nama = "riki";
var umur = 33;
var lulus = true;
var ip = [2, 3, 4, 1];
function ipk(ip) {
	var total = 0;
	for (var i = 0; i < ip.length; i++) {
		total += ip[i];
	}
	return total/ip.length
};

// KENAPA OBJECT?
var mahasiswa1 = ["riki", true, [1,2,3,4]];
function ipk(ip) {
	var total = 0;
	for (var i = 0; i < ip.length; i++) {
		total += ip[i];
	}
	return total/ip.length
};

ipk(mahasiswa1[2]);


var mahasiswa1 = {
	nama : "Riki Widiantoro",
	lulus : true,
	ipSemester : [1,2,3,4,5],

	ipk : function () {
		var total = 0;
		var ips = this.ipSemester;
		for (var i = 0; i < ips.length; i++) {
			total += ips[i];
		}
		return total/ips.length;
	}
}
mahasiswa1.ipk();



// ANATOMI OBJECT
var orang = {
	// properti
	nama : "Riki",
	umur : 11,
	pekerjaan : "investor",

	// function
	sapa : function() {
		return "hi, nama saya " + this.nama + " usia saya " + this.umur + " tahun, dan saya adalah seorang " + this.pekerjaan;
	}
}


// MEMBUAT OBJECT LITERAL
var mhs = {
	nama : "Riki",
	umur : 22,
	ips : [0,1,2,3,4],
	alamat : {
		jalan : "Hayam Wuruk",
		kota : " Ponorogo",
		provinsi : "Jawa Timur",
	}
};
