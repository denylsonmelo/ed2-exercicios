import { No } from "./No";

export class Lista {
	private _totalNos: number = 0;
	private _head: No = null;
	private _tail: No = null;

	constructor(...dados: Array<any>) {
		dados.forEach((item, index) => this.adicionarEm(item, index));
	}

	public adicionarHead(valor: any) {
		let novoNo = new No(valor, this._head);
		this._head = novoNo;

		if (this.estarVazia) this._tail = this._head;
		else this._head.proximo.anterior = this._head;

		this._totalNos++;
	}

	public adicionarTail(valor: any) {
		let novoNo = new No(valor, null, this._tail);

		if (this.estarVazia) this._head = novoNo;
		else this._tail.proximo = novoNo;

		this._tail = novoNo;
		this._totalNos++;
	}

	public adicionarEm(valor, indice: number) {
		if (indice <= 0) {
			this.adicionarHead(valor);
			return;
		}

		if (indice >= this.tamanho) {
			this.adicionarTail(valor);
			return;
		}

		let noIndex: No = this._pertoInicio(indice)
			? this._percorrerInicio(indice)
			: this._percorrerFim(indice);

		let novoNo = new No(valor);
		noIndex.anterior.proximo = novoNo;
		novoNo.proximo = noIndex;
		novoNo.anterior = noIndex.anterior;
		noIndex.anterior = novoNo;
		this._totalNos++;
	}

	public buscar(valor: any): any {
		if (this.estarVazia) return null;

		let elementoIteracao = this._head;
		for (let index = 0; index < this.tamanho; index++) {
			if (elementoIteracao.igual(valor)) return elementoIteracao.valor;
			elementoIteracao = elementoIteracao.proximo;
		}
		return null;
	}

	public buscarFim(valor: any): any {
		if (this.estarVazia) return null;

		let elementoIteracao = this._tail;
		for (let index = 0; index < this.tamanho; index++) {
			if (elementoIteracao.igual(valor)) return elementoIteracao.valor;
			elementoIteracao = elementoIteracao.anterior;
		}
		return null;
	}

	public removerHead() {
		if (this.estarVazia) return;

		this._head = this._head.proximo;
		this._totalNos--;

		if (this.estarVazia) this._tail = null;
		else this._head.anterior = null;
	}

	public removerTail() {
		if (this.tamanho == 1) {
			this._head = null;
			this._tail = null;
		} else {
			this._tail.anterior.proximo = null;
			this._tail = this._tail.anterior;
		}
		this._totalNos--;
	}

	public removerEm(indice: number) {
		if (indice <= 0) {
			this.removerHead();
			return;
		}

		if (indice >= this.tamanho) {
			this.removerTail();
			return;
		}

		let noIndex: No = this._pertoInicio(indice)
			? this._percorrerInicio(indice)
			: this._percorrerFim(indice);

		noIndex.anterior.proximo = noIndex.proximo;
		noIndex.proximo.anterior = noIndex.anterior;

		this._totalNos--;
	}

	public valores(): Array<any> {
		if (this.estarVazia) return [];

		let dados: Array<any> = new Array();
		let elementoIteracao = this._head;
		for (let index = 0; index < this.tamanho; index++) {
			dados[index] = elementoIteracao.valor;
			elementoIteracao = elementoIteracao.proximo;
		}
		return dados;
	}

	public valoresFim(): Array<any> {
		if (this.estarVazia) return [];

		let dados: Array<any> = new Array();
		let elementoIteracao = this._tail;
		for (let index = 0; index < this.tamanho; index++) {
			dados[index] = elementoIteracao.valor;
			elementoIteracao = elementoIteracao.anterior;
		}
		return dados;
	}

	public valorEm(indice: number): any {
		if (this.estarVazia) return null;

		if (this._indiceValido(indice)) return null;

		let no: No = this._pertoInicio(indice)
			? this._percorrerInicio(indice)
			: this._percorrerFim(indice);
		return no.valor;
	}

	public get head(): any {
		if (this._head) return this._head.valor;
		return null;
	}

	public get tail(): any {
		if (this._tail) return this._tail.valor;
		return null;
	}

	public get tamanho(): number {
		return this._totalNos;
	}

	public get estarVazia(): boolean {
		return this.tamanho == 0;
	}

	private _percorrerInicio(indice: number): No {
		let elementoIteracao = this._head;
		for (let index = 0; index < indice; index++) {
			elementoIteracao = elementoIteracao.proximo;
		}
		return elementoIteracao;
	}

	// 0 1 2 3 4 5 6 7 8 9
	private _percorrerFim(indice: number): No {
		let elementoIteracao = this._tail;
		for (let index = this.tamanho - 1; index > indice; index--) {
			elementoIteracao = elementoIteracao.anterior;
		}
		return elementoIteracao;
	}

	private _indiceValido(valor: number): boolean {
		return valor < 0 || valor >= this.tamanho;
	}

	private _pertoInicio(valor: number): boolean {
		return valor <= this.tamanho / 2;
	}
}
