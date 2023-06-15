import { Lista } from "../src/lista/Lista";

describe("testes de lista", () => {
	test("ao criar uma lista vazia, deve ter tamanho zero ", () => {
		let lista = new Lista();

		expect(lista.tamanho()).toBe(0);
	});

	test("ao criar uma lista com elemento, deve ter tamanho um ", () => {
		let lista = new Lista("valor");

		expect(lista.tamanho()).toBe(1);
	});
});
