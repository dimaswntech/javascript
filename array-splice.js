function panggil() {
    var kota = ["jakarta", "medan", "padang", "malang"];
console.log(kota);

//kota.splice(2,0,"palembang");//2=tambah index ke-, 0=menghapu data di depannya
kota.splice(2,1);
return kota;
}
console.log(panggil());