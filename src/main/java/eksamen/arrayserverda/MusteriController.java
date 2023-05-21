package eksamen.arrayserverda;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class MusteriController {
    private final List<Musteri> tumMusteriler=new ArrayList<>();

    @PostMapping("/musteriKayit")
    public void kayit(Musteri girMusteri){
        tumMusteriler.add(girMusteri);
    }

    @GetMapping("/hepsiniGetir")
    public List<Musteri> hepsiniGetir(){
        return tumMusteriler;
    }

    @GetMapping("arabalariGetir")
    public List<Araba>arabalariGetir(){
        List<Araba>arabaListesi=new ArrayList<>();
        arabaListesi.add(new Araba("Audi","A4"));
        arabaListesi.add(new Araba("Volvo","V90"));
        arabaListesi.add(new Araba("Audi","A8"));

        return arabaListesi;
    }
    @GetMapping("/hepsiniSil")
    public void hepsiniSil(){
        tumMusteriler.clear();
    }
}
