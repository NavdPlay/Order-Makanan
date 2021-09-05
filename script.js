// halaman menu
// memilih menu
// jumlah menu yang dipesan
// detail pembayaran
// checkout

// tampilkan menu(nama makanan) dan harga
// sediakan input atau (prompt)
// kondisi pemilihan menu --> masukkan ke array
// sum harga dan jumlah item
// prompt konfirmasi pembayaran

var isOpen = true;
var keranjang = [];
var menu = ['BAKSO', 'SATE', 'NASI GORENG'];
var price = [15000, 20000, 13000];
var totalHarga = 0;
var pin = '123456';
var durasi = Math.floor(Math.random() * 10) + 5;
var pembayaranGagal = true;

function pilihMakanan(namaMakanan) {
    if (parseInt(namaMakanan - 1) < menu.length && parseInt(namaMakanan) > 0) {
        keranjang.push(menu[namaMakanan -1]);
    } else {
        for (var i = 0; i < menu.length; i++) {
            if (namaMakanan === menu[i]) {
                keranjang.push(namaMakanan);
                return keranjang;
            } else if (i === menu.length - 1) {
                alert(`${namaMakanan} tidak tersedia di dalam menu!`);
            }
        }
    }
}

function hitungHarga() {
    var harga = 0;
    for (var i = 0; i < keranjang.length; i++) {
        if (keranjang[i] === 'BAKSO') {
            harga += price[0];
        } else if (keranjang[i] === 'SATE') {
            harga += price[1];
        } else if (keranjang[i] === 'NASI GORENG') {
            harga += price[2];
        }
    }
    totalHarga = harga;
}

function pembayaran() {
    var jumlahCash = 0;
    var kalkulasiHarga = null;

    var pilihMetode = prompt('Pilih metode pembayaran : \n1. Cash\n2. OVO');
    if (pilihMetode.toUpperCase() == 'CASH') {

        while (kalkulasiHarga < 0|| kalkulasiHarga == null) {
            jumlahCash = jumlahCash + prompt('Masukkan jumlah uang anda');
            kalkulasiHarga = jumlahCash - totalHarga;

            if (kalkulasiHarga < 0) {
                alert(`Uang anda kurang Rp${Math.abs(kalkulasiHarga)}!`);
            }
        }

        alert(`Pembayaran berhasil!\nTerima kasih sudah membeli makanan disini\nDriver anda akan datang dalam ${durasi} menit\nKembalian: Rp${kalkulasiHarga}`);
        isOpen = false;
        pembayaranGagal = false;
    } else if (pilihMetode.toUpperCase() == 'OVO') {
        var pembayaranOvo = true;
        while (pembayaranOvo) {
            var masukanPin = prompt('Masukkan pin OVO anda');
            if (pin == masukanPin) {
                pembayaranOvo = false;
            } else {
                alert('Pin yang anda masukkan salah!')
            }
        }
        alert(`Pembayaran berhasil!\nTerima kasih sudah membeli makanan disini\nDriver anda akan datang dalam ${durasi} menit`);
        isOpen = false;
        pembayaranGagal = false;
    } else {
        alert(`Metode pembayaran ${pilihMetode} tidak tersedia!`);
    }
}

while (isOpen) {
    var pesan = prompt(`Silahkan pesan: \n1. ${menu[0]}\n2. ${menu[1]}\n3. ${menu[2]}`);
    pilihMakanan(pesan.toUpperCase());
    hitungHarga();
    var konfirmasi = confirm(`Keranjang anda: ${keranjang.join(', ')}\nTotal harga pesanan anda: ${totalHarga}\n\n Apakah anda ingin menambah pesanan?`);
    if (konfirmasi) {
        isOpen = true;
    } else {
        while (pembayaranGagal == true) {
            pembayaran();
        }
    }
}