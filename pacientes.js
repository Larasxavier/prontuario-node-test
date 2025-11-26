// pacientes.js
const comorbidadesPossiveis = [
  "hipertensão",
  "diabetes",
  "asma",
  "obesidade",
  "doença cardíaca",
  "doença renal crônica",
  "dislipidemia",
  "tabagismo",
  "sedentarismo"
];

const cidades = [
  "Aracaju",
  "Maceió",
  "Salvador",
  "Recife",
  "Fortaleza",
  "João Pessoa",
  "Natal",
  "São Luís",
  "Teresina"
];

const ufs = ["SE", "AL", "BA", "PE", "CE", "PB", "RN", "MA", "PI"];

function gerarComorbidades(index) {
  const list = [];
  if (index % 2 === 0) list.push("hipertensão");
  if (index % 3 === 0) list.push("diabetes");
  if (index % 5 === 0) list.push("obesidade");
  if (list.length === 0) list.push("nenhuma");
  return list;
}

const pacientes = [];

for (let i = 1; i <= 1000; i++) {
  const cidadeIndex = i % cidades.length;
  pacientes.push({
    id: i,
    nome: `Paciente ${i}`,
    idade: 18 + (i % 70),
    sexo: i % 2 === 0 ? "F" : "M",
    cpf: `000.000.000-${String(i).padStart(2, "0")}`,
    cidade: cidades[cidadeIndex],
    uf: ufs[cidadeIndex],
    comorbidades: gerarComorbidades(i),
    ativo: i % 17 !== 0 // uns desativados só pra brincar com métricas
  });
}

module.exports = { pacientes };
