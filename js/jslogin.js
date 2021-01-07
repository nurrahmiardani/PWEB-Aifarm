function login() {
    var profill = document.getElementById("profil");
    var password = document.getElementById("psw");



    if (profill.value == "") {
        alert("Email Anda Masih Kosong");
        profill.focus();
    } else if (password.value == "") {
        alert("Masukkan Password Anda");
        password.focus();

    } else
        document.getElementById("popup-1").classList.toggle("active");
}