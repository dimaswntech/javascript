function panggil(){
    var buah = ["pisang", "jeruk"];
    console.log(buah);
    buah.unshift("apel", "mangga");
    return buah;
}
console.log(panggil());