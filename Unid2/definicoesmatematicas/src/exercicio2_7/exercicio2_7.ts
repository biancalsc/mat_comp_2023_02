import promptSync from "prompt-sync";
import { veiculo_blsc, veiculoEletrico_blsc, veiculoEletricoVoador_blsc } from "./exercicio2_7_model";
const prompt = promptSync();

console.log("Criando um  veículo...");
const longitudeveiculo = parseFloat(prompt("Digite a longitude: "));
const latitudeveiculo = parseFloat(prompt("Digite a latitude: "));
const meuveiculo = new veiculo_blsc(longitudeveiculo, latitudeveiculo);
console.log("Veículo criado:", meuveiculo);
console.log("\nMovendo o veículo...");
const novaLongitude = parseFloat(prompt("Digite a nova longitude: "));
const novaLatitude = parseFloat(prompt("Digite a nova latitude: "));
meuveiculo.moverPara_blsc(novaLongitude, novaLatitude);
console.log("Coordenadas do veículo após movimentação:", meuveiculo.longitude, meuveiculo.latitude);

console.log("Criando um veículo elétrico...");
const longitudeEletrico = parseFloat(prompt("Digite a longitude: "));
const latitudeEletrico = parseFloat(prompt("Digite a latitude: "));
const bateriaEletrico = parseFloat(prompt("Digite a capacidade da bateria: "));
const meuveiculoEletrico = new veiculoEletrico_blsc(longitudeEletrico, latitudeEletrico, bateriaEletrico);
meuveiculoEletrico.carregar_blsc(20);
console.log("Veículo elétrico criado:", meuveiculoEletrico);
console.log("\nMovendo o veículo elétrico...");
const novaLongitudeEletrico = parseFloat(prompt("Digite a nova longitude: "));
const novaLatitudeEletrico = parseFloat(prompt("Digite a nova latitude: "));
meuveiculoEletrico.moverPara_blsc(novaLongitudeEletrico, novaLatitudeEletrico);
console.log("Coordenadas do veículo elétrico após movimentação:", meuveiculoEletrico.longitude, meuveiculoEletrico.latitude);
console.log("\nVerificando a carga da bateria do veículo elétrico...");
console.log("Bateria do veículo elétrico:", meuveiculoEletrico.bateria);
console.log("\nCarregando o veículo elétrico...");
const cargaParaCarregar = parseFloat(prompt("Digite a carga para carregar: "));
meuveiculoEletrico.carregar_blsc(cargaParaCarregar);
console.log("Bateria após carregar:", meuveiculoEletrico.bateria);

console.log("Criando um veículo elétrico voador...");
const longitudeVoador = parseFloat(prompt("Digite a longitude: "));
const latitudeVoador = parseFloat(prompt("Digite a latitude: "));
const altitudeVoador = parseFloat(prompt("Digite a altitude: "));
const bateriaVoador = parseFloat(prompt("Digite a capacidade da bateria: "));
const meuveiculoEletricoVoador_blsc = new veiculoEletricoVoador_blsc(longitudeVoador, latitudeVoador, bateriaVoador, altitudeVoador);
console.log("Veículo elétrico voador criado:", meuveiculoEletricoVoador_blsc);
console.log("\nMovendo o veículo elétrico voador...");
const novaLongitudeVoador = parseFloat(prompt("Digite a nova longitude: "));
const novaLatitudeVoador = parseFloat(prompt("Digite a nova latitude: "));
const novaAltitudeVoador = parseFloat(prompt("Digite a nova altitude: "));
meuveiculoEletricoVoador_blsc.moverPara_blsc(novaLongitudeVoador, novaLatitudeVoador);
console.log("\nAlterando altura de vôo...")
meuveiculoEletricoVoador_blsc.moverAltitude_blsc(novaAltitudeVoador)  
console.log("Coordenadas do veículo elétrico voador após movimentação:", meuveiculoEletricoVoador_blsc.longitude, meuveiculoEletricoVoador_blsc.latitude, meuveiculoEletricoVoador_blsc.altitude);
console.log("\nVerificando a carga da bateria do veículo elétrico voador...");
console.log("Bateria do veículo elétrico voador:", meuveiculoEletricoVoador_blsc.bateria);
console.log("\nCarregando o veículo elétrico Voador...");
const cargaParaCarregarVoador = parseFloat(prompt("Digite a carga para carregar: "));
meuveiculoEletricoVoador_blsc.carregar_blsc(cargaParaCarregarVoador);
console.log("Bateria após carregar:", meuveiculoEletricoVoador_blsc.bateria);