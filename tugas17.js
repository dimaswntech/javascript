function t1() {
    var k1 = "Saya beLajar bahaSa peMrograman deNgan khUsuk";
    console.log(k1.toLowerCase());
    console.log(k1.toUpperCase());

    var k2 = "Allen SedAng MemAncinG IkaN di SuNgai, DIA MEndapat IkAN GaBuS 3 Ekor dan LanGsuNg Dijual";
    console.log(k2.toLowerCase());
    console.log(k2.toUpperCase());
}
function t2() {
    var lorem = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum";
    var str =lorem.substr(0,6);
    console.log(str);
    console.log(str.charCodeAt(0),"-",str.charCodeAt(1),"-",str.charCodeAt(2),"-",str.charCodeAt(3),"-",str.charCodeAt(4),"-",str.charCodeAt(5));
    for(var i=0; i<6;i++){
        console.log(str.charCodeAt(i));
    }
}
t1();
t2();