package eksamen.arrayserverda;

public class Musteri {
    private String isim;
    private String adres;
    private String marka;
    private boolean ehliyet;
    private String markamm;

    private String yakit;

    public Musteri(String isim, String adres, String marka, boolean ehliyet, String markamm, String yakit) {
        this.isim = isim;
        this.adres = adres;
        this.marka = marka;
        this.ehliyet = ehliyet;
        this.markamm = markamm;
        this.yakit=yakit;
    }

    public Musteri(){}

    public String getIsim() {
        return isim;
    }

    public void setIsim(String isim) {
        this.isim = isim;
    }

    public String getAdres() {
        return adres;
    }

    public void setAdres(String adres) {
        this.adres = adres;
    }

    public String getMarka() {
        return marka;
    }

    public void setMarka(String marka) {
        this.marka = marka;
    }

    public boolean isEhliyet() {
        return ehliyet;
    }

    public void setEhliyet(boolean ehliyet) {
        this.ehliyet = ehliyet;
    }

    public String getMarkamm() {
        return markamm;
    }

    public void setMarkamm(String markamm) {
        this.markamm = markamm;
    }

    public String getYakit() {
        return yakit;
    }

    public void setYakit(String yakit) {
        this.yakit = yakit;
    }
}
