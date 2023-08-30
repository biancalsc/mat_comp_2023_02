class veiculo_blsc {
    longitude: number;
    latitude: number;
    constructor(longitude: number, latitude: number) {
        this.longitude = longitude;
        this.latitude = latitude;
    }
    moverPara_blsc(longitude: number, latitude: number): void {
        this.longitude = longitude;
        this.latitude = latitude;
    }
}

class veiculoEletrico_blsc extends veiculo_blsc {
    bateria: number;
    constructor(longitude: number, latitude: number, bateria: number) {
        super(longitude, latitude);
        this.bateria = bateria;
    }
    carregar_blsc(carga: number): void {
        this.bateria += carga;
    }
}

class veiculoEletricoVoador_blsc extends veiculoEletrico_blsc {
    altitude: number;
    constructor(longitude: number, latitude: number, altitude: number, bateria: number) {
        super(longitude, latitude, bateria);
        this.altitude = altitude;
    }
    moverAltitude_blsc(altitude: number) {
        this.altitude = altitude;
    }
}

export { veiculo_blsc, veiculoEletrico_blsc, veiculoEletricoVoador_blsc };