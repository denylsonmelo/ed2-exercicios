import { Lista } from "./lista/Lista";

const lista = new Lista("aluno01", "aluno02", "aluno03", "aluno04", "aluno05");

lista.adicionarTail("aluno06");
lista.adicionarTail("aluno07");
lista.adicionarTail("aluno08");
lista.adicionarTail("aluno09");

//lista.removerHead();
//lista.removerHead();
console.log(lista.valores());
console.log(lista.valoresFim());
console.log(lista.head);
console.log(lista.tail);

// lista.adicionarEm("aluno novato", 4);

lista.valores();
//lista.valorEm(4);
