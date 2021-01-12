function proses() {
    var nilaiTombol = document.getElementById('tombol').value;


    if (nilaiTombol == "sembunyikan") {

        document.getElementById('pil').style.display = "none";
        document.getElementById('tombol').value = "tampilkan";

    } else {
        document.getElementById('tombol').value = "sembunyikan";
        document.getElementById('pil').style.display = "block";
    }
}