function baru() {
    var atas = document.getElementById("baru");
    var bawah = document.getElementById("konfir");



    if (atas.value == "") {
        alert("Masukkan Password Baru Anda");
        profill.focus();
    } else if (atas.value != bawah.value) {
        alert("Password dan Konfirmasi Password Anda tidak sesuai")

    } else
        document.getElementById("popup-1").classList.toggle("active");
}