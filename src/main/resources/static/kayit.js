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
    window.location.href="liste.html";
}
