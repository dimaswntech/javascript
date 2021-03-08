function panggil(){
    var data = ["jakarta", "bandung", "jogja"];
    console.log(data);
    data.unshift("surabaya","bali");
    return data;
}
console.log(panggil());