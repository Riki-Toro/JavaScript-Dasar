// menjumlahkan volume dari 2 buah kubus
function jmlVolKubus(A, B) {
	// sisi kubus A=8, B=3
	var volumeA;
	var volumeB;
	var total;
	// menghitung volume masing" kubus
	volumeA = A * A * A;
	volumeB = B * B * B;

	// jumlahkan hasilnya
	total = volumeA + volumeB;

	// kembalikan nilai jawabannya
	return total;

}

	
alert(jmlVolKubus(8,3));
alert(jmlVolKubus(100,50));
