import { Lista } from "../../src/lista/Lista";

describe("Lista", () => {
	test("ao criar uma lista vazia, deve ter tamanho zero ", () => {
		let lista = new Lista();

		expect(lista.tamanho).toBe(0);
	});

	test("ao criar uma lista vazia, deve estar vazia ", () => {
		let lista = new Lista();

		expect(lista.estarVazia).toBeTruthy();
	});

	test("ao criar uma lista vazia, a head dever ser null ", () => {
		let lista = new Lista();

		expect(lista.head).toBeNull();
	});

	test("ao criar uma lista vazia, a tail dever ser null ", () => {
		let lista = new Lista();

		expect(lista.tail).toBeNull();
	});

	test("ao criar uma lista com elemento, deve ter tamanho um ", () => {
		let lista = new Lista("valor");

		expect(lista.tamanho).toBe(1);
	});

	test("ao criar uma lista com elemento, não deve estar vazia  ", () => {
		let lista = new Lista("valor");

		expect(lista.estarVazia).toBeFalsy();
	});

	test("ao criar uma lista com elemento, este deve ser a head  ", () => {
		let lista = new Lista("valor");

		expect(lista.head).toBe("valor");
	});

	test("ao criar uma lista com elemento, este deve ser a tail  ", () => {
		let lista = new Lista("valor");

		expect(lista.tail).toBe("valor");
	});

	test("ao adicionar na head, deve ser a nova head e a antiga ser o proximo elemento", () => {
		let lista = new Lista();
		lista.adicionarHead("valor01");
		lista.adicionarHead("valor02");

		expect(lista.head).toBe("valor02");
		expect(lista.valorEm(1)).toBe("valor01");
		expect(lista.tamanho).toBe(2);
	});

	test("ao adicionar na tail, deve ser a nova tail e a antiga ser o elemento anterior", () => {
		let lista = new Lista();
		lista.adicionarTail("valor01");
		lista.adicionarTail("valor02");

		expect(lista.tail).toBe("valor02");
		expect(lista.valorEm(0)).toBe("valor01");
		expect(lista.tamanho).toBe(2);
	});

	test("ao adicionar em indice 0, deve adicionar na head", () => {
		let lista = new Lista("valor01");
		lista.adicionarEm("valor02", 0);

		expect(lista.head).toBe("valor02");
		expect(lista.valorEm(1)).toBe("valor01");
		expect(lista.tamanho).toBe(2);
	});

	test("ao adicionar em indice negativo, deve adicionar na head", () => {
		let lista = new Lista("valor01");
		lista.adicionarEm("valor02", -1);

		expect(lista.head).toBe("valor02");
		expect(lista.valorEm(1)).toBe("valor01");
		expect(lista.tamanho).toBe(2);
	});

	test("ao adicionar em indice igual ao tamanho, deve adicionar na tail", () => {
		let lista = new Lista("valor01");
		lista.adicionarEm("valor02", 1);

		expect(lista.tail).toBe("valor02");
		expect(lista.valorEm(0)).toBe("valor01");
		expect(lista.tamanho).toBe(2);
	});

	test("ao adicionar em indice maior que ao tamanho, deve adicionar na tail", () => {
		let lista = new Lista("valor01");
		lista.adicionarEm("valor02", 3);

		expect(lista.tail).toBe("valor02");
		expect(lista.valorEm(0)).toBe("valor01");
		expect(lista.tamanho).toBe(2);
	});

	test("ao adicionar em indice especifico, deve manter as referencias a proximo e anterior", () => {
		let lista = new Lista();
		lista.adicionarHead("valor01");
		lista.adicionarHead("valor02");
		lista.adicionarHead("valor03");
		lista.adicionarHead("valor04");

		lista.adicionarEm("valorNovo", 1);

		let valores = lista.valores();

		expect(lista.head).toBe("valor04");
		expect(lista.tail).toBe("valor01");
		expect(valores[0]).toBe("valor04");
		expect(valores[1]).toBe("valorNovo");
		expect(valores[2]).toBe("valor03");
		expect(valores[3]).toBe("valor02");
		expect(valores[4]).toBe("valor01");
		expect(lista.tamanho).toBe(5);
	});

	test("ao listar valores, deve listar valores da head para a tail", () => {
		let lista = new Lista();
		lista.adicionarHead("valor01");
		lista.adicionarHead("valor02");
		lista.adicionarHead("valor03");

		let valores = lista.valores();

		expect(valores.length).toBe(3);
		expect(valores[0]).toBe("valor03");
		expect(valores[2]).toBe("valor01");
	});

	test("ao listar valores, se a lista estar vazia, deve retornar array vazio", () => {
		let lista = new Lista();
		let valores = lista.valores();

		expect(valores.length).toBe(0);
	});

	test("ao listar valores pelo fim, deve listar valores da tail para a head", () => {
		let lista = new Lista();
		lista.adicionarHead("valor01");
		lista.adicionarHead("valor02");
		lista.adicionarHead("valor03");

		let valores = lista.valoresFim();

		expect(valores.length).toBe(3);
		expect(valores[0]).toBe("valor01");
		expect(valores[2]).toBe("valor03");
	});

	test("ao listar valores pelo fim, se a lista estar vazia, deve retornar array vazio", () => {
		let lista = new Lista();
		let valores = lista.valoresFim();

		expect(valores.length).toBe(0);
	});
});
