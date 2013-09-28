function Aritmetica() {
	
	this.lista = [/*{
		funct: 8,								//jr
		funcao: function(r1, r2, r3) {
			r1.valor = r2.valor + r3.valor;
			return r1;
		}
	},{
		funct: 16,
		funcao: function(r1, r2, r3) {			//mfhi
			r1.valor = r2.valor + r3.valor;
			return r1;
		}
	},{
		funct: 18,								//mflo
		funcao: function(r1, r2, r3) {
			r1.valor = r2.valor + r3.valor;
			return r1;
		}
	},{
		funct: 24,								//mult
		funcao: function(r1, r2, r3) {
			r1.valor = r2.valor + r3.valor;
			return r1;
		}
	},{
		funct: 26,								//div
		funcao: function(r1, r2, r3) {
			r1.valor = r2.valor + r3;
			return r1;
		}
	},*/{
		funct: 32,
		funcao: function(r1, r2, r3) {
			r1.valor = r2.valor + r3.valor;
			return r1;
		}
	},{
		funct: 34,
		funcao: function(r1, r2, r3) {
			r1.valor = r2.valor - r3.valor;
			return r1;
		}
	},{
		funct: 36,
		funcao: function(r1, r2, r3) {
			r1.valor = r2.valor & r3;
			return r1;
		}
	}		,{
		funct: 37,
		funcao: function(r1, r2, r3) {
			r1.valor = r2.valor | r3.valor;
			return r1;
		}
	},{
		funct: 38,
		funcao: function(r1, r2, r3) {
			r1.valor = r2.valor ^ r3.valor;
			return r1;
		}
	},{
		funct: 39,
		funcao: function(r1, r2, r3) {
			r1.valor = r2.valor | r3.valor;
			r1.valor = ~r1.valor;
			return r1;
		}
	},{
		funct: 42,
		funcao: function(r1, r2, r3) {
			r2.valor < r3.valor? r1.valor = 1 : r1.valor = 0;
			return r1;
		}
	}];
	
	this.executar = function(funct, reg1, reg2, reg3) {
		for (var i = 0; i < this.lista.length; i++) {
			if (this.lista[i].funct == funct) {
				return this.lista[i].funcao(reg1, reg2, reg3);
			}
		}
	}	
}

