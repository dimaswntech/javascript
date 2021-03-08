function loopobjek(){
    var mobil = {
        merek : "nissan",
        tire :{
            depan:18,
            belakang:19
        }
    }
    for(var i in mobil){
        console.log(mobil[i]);
    }
}
loopobjek();