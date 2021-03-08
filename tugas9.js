function barang(){
    var laptop ={
        merek:"acer",
        otak:"intel"
    }
    for(var i in laptop){
        console.log(laptop[i]);
    }
}
barang();