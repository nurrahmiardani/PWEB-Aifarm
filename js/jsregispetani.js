function regispembeli() {
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var konfirmasi = document.getElementById("konfirmasi");
    var alamat = document.getElementById("alamatt");
    var daeerah = document.getElementById("daerah");
    var prov = document.getElementById("provinsi");
    var usaha = document.getElementById("usaha");
    var jenis = document.getElementById("jenis")




    if (email.value == "") {
        alert("Masukkan Email Anda");
        email.focus();
    } else if (alamat.value == "") {
        alert("Masukkan Alamat Anda");
        alamat.focus();
    } else if (password.value == "") {
        alert("Masukkan Password Anda");
        password.focus();
    } else if (konfirmasi.value == "") {
        alert("Masukkan Konfirmasi Password Anda");
        konfirmasi.focus();
    } else if (password.value != konfirmasi.value) {
        alert("Password dan Konfirmasi Password Anda tidak sesuai")
        konfirmasi.focus()
    } else if (daeerah.value == "") {
        alert("Masukkan daerah asal anda")
        daeerah.focus
    } else if (prov.value == "") {
        alert("Masukkan provinsi asal anda")
        prov.focus
    } else if (usaha.value == "") {
        alert("Masukkan provinsi asal anda")
        usaha.focus
    } else if (jenis.value == "") {
        alert("Masukkan provinsi asal anda")
        jenis.focus
    } else
        document.getElementById("popup-1").classList.toggle("active");
}