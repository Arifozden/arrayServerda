function musteriKayit(){
    const musteri={
        isim:$("#isim").val(),
        adres:$("#adres").val()
    };
    $.post("/kayit",musteri,function (){
        hepsiniGetir();
    });
    $("#isim").val("");
    $("#adres").val("");
}

function hepsiniGetir(){
    $.get("/hepsiniGetir",function (data){
        bilgiDuzenle(data);
    });
}

function bilgiDuzenle(musteriler){
    let yaz="<table class='responsive'><tr><th>Isim</th><th>Adres</th></tr>";
    for(const musteri of musteriler){
        yaz+="<tr><td>"+musteri.isim+"</td><td>"+musteri.adres+"</td></tr>";
    }
    yaz+="</table>";
    $("#musteriler").html(yaz);
}

function hepsiniSil(){
    $.get("/hepsiniSil",function (){
        hepsiniGetir();
    });
}