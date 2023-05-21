$(function (){
    tumArabalariGetir();
    tumYakitlariGetir();
});

function tumArabalariGetir(){
    $.get("/arabalariGetir",function (arabalar){
        arabalariDuzenle(arabalar);
    });
}

function arabalariDuzenle(arabalar){
    let yaz="<select id='seciliAraba'>";
    for(const araba of arabalar){
        yaz+="<option value='"+araba.markam+"'>"+araba.model+"</option>";
    }
    yaz+="</select>";
    $("#arabalar").html(yaz);
}

function tumYakitlariGetir(){
    $.get("/yakitTuru",function (yakitlar){
        yakitlariDuzenle();
    });
}

function yakitlariDuzenle(yakitlar){
    let yaz="<table class='table table-striped'>";
    for(const yakit of yakitlar){
        yaz+="<tr><td>"+yakit.yakit1+" "+yakit.yakit2+"</td>" +
            "<td><input type='checkbox' name='seciliYakitlar[]' value='"+yakit.yakit1+"'/></td></tr>"
    }
    yaz+="</table>";
    $("#yakit").html(yaz);
}
function musteriKayit(){
    let yakitlar="";
    const yakitArray=$("input[name='seciliYakitlar[]']:checked");
    for(let seciliYakit of yakitArray){
        yakitlar+=seciliYakit.defaultValue+" ";
    }

    const musteri={
        isim:$("#isim").val(),
        adres:$("#adres").val(),
        marka:$('input[name=seciliMarka]:checked').val(),
        ehliyet:$('input[name=ehliyet]:checked').val(),
        markamm:$("#seciliAraba").val(),
        yakit:yakitlar
    };
    const url="/musteriKayit";
    $.post(url,musteri,function (){
        window.location.href='/';
    });
    //$("#isim").val("");
    //$("#adres").val("");
    //window.location.href="liste.html";
}
