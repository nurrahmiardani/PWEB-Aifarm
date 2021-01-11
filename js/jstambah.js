function tambah() {
    var nama = document.getElementById("produk");
    var des = document.getElementById("deskripsi");
    var kat = document.getElementById("kategori");
    var min = document.getElementById("minimal");
    var stok = document.getElementById("stok");



    if (nama.value == "") {
        alert("Nama Produk Masih Kosong");
        nama.focus();
    } else if (des.value == "") {
        alert("Deskkripsi Produk Masih Kosong");
        des.focus();

    } else if (kat.value == "") {
        alert("Kategori Produk Masih Kosong");
        kat.focus();

    } else if (min.value == "") {
        alert("Minimal Pembelian Produk Masih Kosong");
        min.focus();

    } else if (stok.value == "") {
        alert("Stok Produk Masih Kosong");
        stok.focus();

    } else {
        alert("Produk Berhasil Ditambahkan");
        document.location = "14 list jualan.html";
    }


}