function Instrucao () {
	
	this.lista = [{
		mnemonico: "add",
		op: 0,
		shamt: 0,
		funct: 32,
	
	},{
		mnemonico: "addu",     
		op: 0,
		shamt: 0,
		funct: 33,
		
	},{
		mnemonico: "addi",
		op: 8,
		
	},{
		mnemonico: "addiu",
		op: 9,
		
	},{
		mnemonico: "sub",
		op: 0,
		shamt: 0,
		funct: 34,
		
	},{
		mnemonico: "subu",    
		op: 0,
		shamt: 0,
		funct: 35,
		
	},{
		mnemonico: "sll",
		op: 0,
		shamt: 10,
		funct: 0,
		
	},{
		mnemonico: "srl",            
		op: 0,
		shamt: 10,
		funct: 2,
		
	},{
		mnemonico: "jr",
		op: 0,
		shamt: 0,
		funct: 8,
		
	},{
		mnemonico: "and",
		op: 0,
		shamt: 0,
		funct: 36,
		
	},{
		mnemonico: "or",
		op: 0,
		shamt: 0,
		funct: 37,
		
	},{
		mnemonico: "nor",
		op: 0,
		shamt: 0,
		funct: 39,
		
	},{
		mnemonico: "slt",  
		op: 0,
		shamt: 0,
		funct: 42,
		
	},{
		mnemonico: "sltu",    
		op: 0,
		shamt: 0,
		funct: 43,
		
	},{
		mnemonico: "lw",
		op: 35,
		
	},{
		mnemonico: "sw",
		op: 43,
		
	},{
		mnemonico: "j",
		op: 2,
		
	},{
		mnemonico: "jal",
		op: 3,
		
	},{
		mnemonico: "beq",
		op: 4,
		
	},{
		mnemonico: "bne",
		op: 5 ,
		
	},{
		mnemonico: "slti",
		op: 10 ,
		
	},{
		mnemonico: "sltu",
		op: 11 ,
		
	},{
		mnemonico: "andi",
		op: 12 ,
		
	},{
		mnemonico: "ori",
		op: 13 ,
		
	},{
		mnemonico: "sb",
		op: 40 ,
		
	},{
		mnemonico: "lb",
		op: 32 ,
		
	},{
		mnemonico: "lbu",
		op: 36 ,
		
	},{
		mnemonico: "lh",
		op: 33 ,
		
	},{
		mnemonico: "lhu",
		op: 37 ,
		
	},{
		mnemonico: "sh",
		op: 41 ,
		
	},{
		mnemonico: "lui",
		op: 15 ,
		
	},{
		mnemonico: "xor", 
		op: 0 ,
		funct : 38 ,
		
	},{
		mnemonico: "xori",
		op: 14  ,
		
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
