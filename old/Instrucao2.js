function Instrucao () {
	
	this.lista = [{
		mnemonico: "add",
		op: 0,
		shamt: 0,
		funct: 32,
		tipo: "R"
	},{
		mnemonico: "sub",
		op: 0,
		shamt: 0,
		funct: 34,
		tipo: "R"
	},{
		mnemonico: "sll",
		op: 0,
		shamt: 0,
		funct: 0,
		tipo: "R"
	},{
		mnemonico: "srl",
		op: 0,
		shamt: 0,
		funct: 2,
		tipo: "R"
	},{
		mnemonico: "jr",
		op: 0,
		shamt: 0,
		funct: 8,
		tipo: "R"
	},{
		mnemonico: "and",
		op: 0,
		shamt: 0,
		funct: 36,
		tipo: "R"
	},{
		mnemonico: "or",
		op: 0,
		shamt: 0,
		funct: 37,
		tipo: "R"
	},{
		mnemonico: "nor",
		op: 0,
		shamt: 0,
		funct: 39,
		tipo: "R"
	},{
		mnemonico: "slt",
		op: 0,
		shamt: 0,
		funct: 42,
		tipo: "R"
	},{
		mnemonico: "addi",
		op: 2,
		tipo: "I"
	},{
		mnemonico: "lw",
		op: 35,
		tipo: "I"
	},{
		mnemonico: "sw",
		op: 43,
		tipo: "I"
	},{
		mnemonico: "j",
		op: 2,
		tipo: "J"
	}];
	
	this.getOp = function(mnemo) {
		var i;
		for(i = 0; i < this.lista.length; i++) {
			if(this.lista[i].mnemonico == mnemo) {
				return this.lista[i].op;
			}
		}
	}
	this.getShamt = function(mnemo) {
		
		for(var i = 0; i < lista.lenght; i++) {
			if(lista[i].mnemonico == mnemo) {
				return lista[i].shamt;
			}
		}
	}

	this.getFunct = function(mnemo) {
		var i;
		for(i = 0; i < this.lista.length; i++) {
			if(this.lista[i].mnemonico == mnemo) {
				return this.lista[i].funct;
			}
		}
	}
}
