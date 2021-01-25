// Refactoring : Readability, DRY (Don't Repeat Yourself), Testability, Performance, Maintainability
// Bagaimana membuat kode program kita menjadi lebih efisien

	// menjumlahkan volume dari 2 buah kubus
	function jmlVolKubus(A, B) {
		// sisi kubus A=8, B=3
		// menghitung volume masing" kubus
		// jumlahkan hasilnya
		// kembalikan nilai jawabannya
		return A * A * A + B * B * B;
	}
		
	alert(jmlVolKubus(8,3));
	alert(jmlVolKubus(100,50));
