function objek(){
    var mobil = {
        type:"sedan",
        harga:"200000",
        warna:"putih",
        tahun:[2001,2003,2002]
    }
    mobil.harga=100000;
    mobil.tahun[0]=2000;
    console.log(mobil);
    console.log(mobil.warna);
    console.log(mobil.type);
    console.log(mobil.harga);
    console.log(mobil.tahun[0]);
}
objek();