// REKURSIF
	function tes() {
		return tes();
	}
	tes()


// pengulangan 10 sampai 1
	for (var i = 10; i >= 1; i--) {
		console.log(i);
	}


// rekursif tampilAngka
// BASE CASE adalah kondisi akhir dari rekursif yang menghasulkan nilai
	function tampilAngka(n) {
		if (n === 0) {
			return;
		}
		console.log(n);
		return tampilAngka(n-1);
	}

	tampilAngka(10);



// FAKTORIAL
	function faktorial(n) {
		if (n === 0) return 1;
		return n * faktorial(n-1);
	}


// Implementasi Rekursif
	// 1. Menggantikan looping
	// 2. Fibonacci
	// 3. Pencarian dan penelusuran pada struktur data list dan tree
	// 4. Bahasa pemrograman yang tidak memiliki pengulangan (Haskel, Erlang, Prolog, dll)
	// Dll
