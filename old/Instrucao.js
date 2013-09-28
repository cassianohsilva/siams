function Instrucao () {
	
	this.lista = [{
		mnemonico: "add",
		op: 0,
		shamt: 0,
		funct: 32,
		tipo: "R"
	},{
		mnemonico: "addu",
		op: 0,
		shamt: 0,
		funct: 33,
		tipo: "R"
	},{
		mnemonico: "addi",
		op: 8,
		tipo: "I"
	},{
		mnemonico: "addiu",
		op: 9,
		tipo: "I"
	},{
		mnemonico: "sub",
		op: 0,
		shamt: 0,
		funct: 34,
		tipo: "R"
	},{
		mnemonico: "subu",
		op: 0,
		shamt: 0,
		funct: 35,
		tipo: "R"
	},{
		mnemonico: "sll",
		op: 0,
		shamt: 10,
		funct: 0,
		tipo: "R"
	},{
		mnemonico: "srl",
		op: 0,
		shamt: 10,
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
		mnemonico: "sltu",
		op: 0,
		shamt: 0,
		funct: 43,
		tipo: "R"
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
	},{
		mnemonico: "jal",
		op: 3,
		tipo: "J"
	},{
		mnemonico: "beq",
		op: 4,
		tipo: "I"
	},{
		mnemonico: "bne",
		op: 5 ,
		tipo: "I"
	},{
		mnemonico: "slti",
		op: 10 ,
		tipo: "I"
	},{
		mnemonico: "sltu",
		op: 11 ,
		tipo: "I"
	},{
		mnemonico: "andi",
		op: 12 ,
		tipo: "I"
	},{
		mnemonico: "ori",
		op: 13 ,
		tipo: "I"
	},{
		mnemonico: "sb",
		op: 40 ,
		tipo: "I"
	},{
		mnemonico: "lb",
		op: 32 ,
		tipo: "I"
	},{
		mnemonico: "lbu",
		op: 36 ,
		tipo: "I"
	},{
		mnemonico: "lh",
		op: 33 ,
		tipo: "I"
	},{
		mnemonico: "lhu",
		op: 37 ,
		tipo: "I"
	},{
		mnemonico: "sh",
		op: 41 ,
		tipo: "I"
	},{
		mnemonico: "lui",
		op: 15 ,
		tipo: "I"
	},{
		mnemonico: "xor",
		op: 0 ,
		funct : 38 ,
		tipo: "R"
	},{
		mnemonico: "xori",
		op: 14  ,
		tipo: "I"
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
