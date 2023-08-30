class Aluno_blsc {
    estado: string;
    constructor(estado: string) {
        this.estado = estado;
    }
    estudar_blsc() {
        console.log("O aluno ainda está cursando a faculdade.");
    }
}

class cursando_blsc extends Aluno_blsc {
    caracteristica: string;
    constructor(estado: string, caracteristica: string) {
        super(estado);
        this.caracteristica = caracteristica;
    }
    horario_blsc() {
        console.log("O aluno estuda no horário da noite.");
    }
}

class fisico_blsc extends cursando_blsc {
    boasnotas: boolean;
    constructor(estado: string, caracteristica: string, boasnotas: boolean) {
        super(estado, caracteristica);
        this.boasnotas = boasnotas;
    }
    notas_blsc() {
        console.log("O aluno tem boas notas.");
    }
}

const seraluno = new fisico_blsc("Einstein", "Noite", true);
console.log(`Aluno ${seraluno.estado}`);
seraluno.estudar_blsc()
console.log(`Horário: ${seraluno.caracteristica}`);
seraluno.horario_blsc();
console.log(`Passou de semestre? ${seraluno.boasnotas}`);
seraluno.notas_blsc();