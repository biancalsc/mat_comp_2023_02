class ProgressaoGeometrica_blsc {
    primeiroTermo: number;
    razao: number;
    constructor(primeiroTermo: number, razao: number) {
        this.primeiroTermo = primeiroTermo;
        this.razao = razao;
    }
    gerarTermos_blsc(quantidade: number): number[] {
        const termos: number[] = [this.primeiroTermo];
        for (let i = 1; i < quantidade; i++) {
            const proximoTermo = termos[i - 1] * this.razao;
            termos.push(proximoTermo)
        }
        return termos;
    }
}

// Criando uma progressão geométrica com primeiro termo 2 e razão 3
const progressao = new ProgressaoGeometrica_blsc(2, 3);

// Gerando os primeiros 50 termos da progressão
const primeiro50Termos = progressao.gerarTermos_blsc(50);

// Exibindo os primeiros 50 termos
primeiro50Termos.forEach((termo, index)=>{
    console.log(`Termo ${index + 1}: ${termo}`);
});