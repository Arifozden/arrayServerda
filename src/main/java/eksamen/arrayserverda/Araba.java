package eksamen.arrayserverda;

public class Araba {
    private String markam;
    private String model;

    public Araba(String markam, String model) {
        this.markam = markam;
        this.model = model;
    }

    public Araba(){}

    public String getMarkam() {
        return markam;
    }

    public void setMarka(String markam) {
        this.markam = markam;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }
}
