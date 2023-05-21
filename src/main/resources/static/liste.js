//en uste bunu ekledik ki "ready" fonksiyonu yani sayfa yuklendi ve calismaya hazir
$(function (){
    hepsiniGetir();
});
function hepsiniGetir(){
    $.get("/hepsiniGetir",function (musteriler){
        bilgiDuzenle(musteriler);
    });
}

function bilgiDuzenle(musteriler){
    let yaz="<table class='table table-striped'><tr><th>Isim</th><th>Adres</th><th>Marka</th><th>Ehliyet?</th><th>Yeni Araba</th></tr>";
    for(const musteri of musteriler){
        let ehliyet;
        if(musteri.ehliyet){
            ehliyet="Var";
        }else {
            ehliyet="Yok";
        }
        yaz+="<tr><td>"+musteri.isim+"</td><td>"+musteri.adres+"</td><td>"+musteri.marka+"</td><td>"+ehliyet+"</td><td>"+musteri.markamm+"</td></tr>";
    }
    yaz+="</table>";
    $("#musteriler").html(yaz);
}

function hepsiniSil(){
    const ok=confirm("Hepsini silmek istediginize emin misiniz?");
    if(ok){
        $.get("/hepsiniSil",function (){
            //hepsiniGetir();
            window.location.href="/";
        });
    }
}