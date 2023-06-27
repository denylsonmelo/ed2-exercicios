export class No {
	private _valor: any;
	private _proximo: No = null;
	private _anterior: No = null;

	constructor(valor, proximo?: No, anterior?: No) {
		this._valor = valor;

		if (proximo) {
			this._proximo = proximo;
		}
		if (anterior) {
			this._anterior = anterior;
		}
	}

	public get valor(): any {
		return this._valor;
	}

	public get proximo(): No {
		return this._proximo;
	}

	public set proximo(no: No) {
		this._proximo = no;
	}

	public get anterior(): No {
		return this._anterior;
	}

	public set anterior(no: No) {
		this._anterior = no;
	}
}
