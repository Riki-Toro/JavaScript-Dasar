// Perbandingan Function Declaration vs Function Expression

// PENULISAN
// Function Declaration
// function identifier (ParameterList opt) { FunctionBody }
    function tampilPesan (nama) {
      alert("halo" + nama);
    }

// Function Expression
// function identifier opt (ParameterList opt) { FunctionBody }
    var tampilPesan = 	function (nama) {
              alert("halo" + nama);
              }


// PERBEDAAN
// Function Declaration
// 1. Lebih fleksibel (dapat ditulis dimanapun) : karena konsep Hoisting
// 2. Mudah dipahami pemula

// Function Expression
// 1. Harus didefinisikan terlebih dahulu sebelum dipanggil
// 2. Lebih powerfull : sebagai closure, argumen untuk function lain, IIFE (Immediately Invoked Function Expression)
