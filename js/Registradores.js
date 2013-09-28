function Registradores () {
	
	this.lista = [{
		nome : "$zero",
		numero : 0,
		valor : 0
	},{
		nome : "$at",
		numero : 1,
		valor : 0
	},{
		nome : "$v0",
		numero : 2,
		valor : 0
	},{
		nome : "$v1",
		numero : 3,
		valor : 0
	},{
		nome : "$a0",
		numero : 4,
		valor : 0
	},{
		nome : "$a1",
		numero : 5,
		valor : 0
	},{
		nome : "$a2",
		numero : 6,
		valor : 0
	},{
		nome : "$a3",
		numero : 7,
		valor : 0
	},{
		nome : "$t0",
		numero : 8,
		valor : 0
	},{
		nome : "$t1",
		numero : 9,
		valor : 0
	},{
		nome : "$t2",
		numero : 10,
		valor : 0
	},{
		nome : "$t3",
		numero : 11,
		valor : 0
	},{
		nome : "$t4",
		numero : 12,
		valor : 0
	},{
		nome : "$t5",
		numero : 13,
		valor : 0
	},{
		nome : "$t6",
		numero : 14,
		valor : 0
	},{
		nome : "$t7",
		numero : 15,
		valor : 0
	},{
		nome : "$s0",
		numero : 16,
		valor : 0
	},{
		nome : "$s1",
		numero : 17,
		valor : 0
	},{
		nome : "$s2",
		numero : 18,
		valor : 0
	},{
		nome : "$s3",
		numero : 19,
		valor : 0
	},{
		nome : "$s4",
		numero : 20,
		valor : 0
	},{
		nome : "$s5",
		numero : 21,
		valor : 0
	},{
		nome : "$s6",
		numero : 22,
		valor : 0
	},{
		nome : "$s7",
		numero : 23,
		valor : 0
	},{
		nome : "$t8",
		numero : 24,
		valor : 0
	},{
		nome : "$t9",
		numero : 25,
		valor : 0
	},{
		nome : "$k0",
		numero : 26,
		valor : 0
	},{
		nome : "$k1",
		numero : 27,
		valor : 0
	},{
		nome : "$gp",
		numero : 28,
		valor : 0
	},{
		nome : "$sp",
		numero : 29,
		valor : 1073741823
	},{
		nome : "$fp",
		numero : 30,
		valor : 0	
	},{
		nome : "$ra",
		numero : 31,
		valor : 0
	}];
	
	this.pc = {
		valor : 0,
		numero : 'pc',
		valor : 0
	};
	
	this.getNumero = function (nome) {
		for (var i = 0; i < this.lista.length; i++) {
			if(this.lista[i].nome == nome) {
				return this.lista[i].numero;
			}
		}
	}

	this.setValor = function (nome, valor) {
		for (var i = 0; i < this.lista.length; i++) {
			if(this.lista[i].nome == nome) {
				this.lista[i].valor = valor;
			}
		}
	}

	this.getValor = function (nome) {
		for (var i = 0; i < this.lista.length; i++) {
			if(this.lista[i].nome == nome) {
				return this.lista[i].valor;
			}
		}
	}

	this.incrementaPc = function (increase) {
		this.pc.valor += Math.floor(increase/4);		
	}

	this.setPc = function (value) {
		if (value%4 != 0) {
			console.log("Logical error: pc increase is not multiple of 4");
		} else {
			this.pc.valor = value/4;
		}
	}
}