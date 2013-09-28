function Interpretador() {
	
	this.listaArit = [/*{
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
		funct: 0,                              // sll
		funcao: function(r1, r2, r3) {
			r1.valor = r2.valor << r3;
			return r1;
		}
	},{
		funct: 2,                              // srl
		funcao: function(r1, r2, r3) {
			
			r1.valor = r2.valor >> r3;
			return r1;
		}
	},{
		funct: 8,                              // jr
		funcao: function(r1, r2, r3) {
			regs.setPc(r2.valor-4);
			return regs.pc;
		}
	},{
		funct: 32,                              // add
		funcao: function(r1, r2, r3) {
			r1.valor = r2.valor + r3.valor;
			return r1;
		}
	},{
		funct: 33,                              // addu
		funcao: function(r1, r2, r3) {
			Math.abs(r1.valor) = Math.abs(r2.valor) + Math.abs(r3.valor);
			return r1;
		}
	},{
		funct: 34,
		funcao: function(r1, r2, r3) {                   // sub
			r1.valor = r2.valor - r3.valor;
			return r1;
		}
	},{
		funct: 35,
		funcao: function(r1, r2, r3) {                   // subu
			Math.abs(r1.valor) = Math.abs(r2.valor) - Math.abs(r3.valor);
			return r1;
		}
	},{
		funct: 36,
		funcao: function(r1, r2, r3) {                 // and
			r1.valor = r2.valor & r3;
			return r1;
		}
	},{
		funct: 37,
		funcao: function(r1, r2, r3) {                 // or
			r1.valor = r2.valor | r3.valor;          
			return r1;
		}
	},{
		funct: 38,
		funcao: function(r1, r2, r3) {                // xor  
			r1.valor = r2.valor ^ r3.valor;
			return r1;
		}
	},{
		funct: 39,
		funcao: function(r1, r2, r3) {               // nor
			r1.valor = r2.valor | r3.valor;
			r1.valor = ~r1.valor;
			return r1;
		}
	},{
		funct: 42,
		funcao: function(r1, r2, r3) {                          // slt
			r2.valor < r3.valor? r1.valor = 1 : r1.valor = 0;
			return r1;
		}
	},{
		funct: 43,
		funcao: function(r1, r2, r3) {                          // sltu
			Math.abs(r2.valor) < Math.abs(r3.valor)? r1.valor = 1 : r1.valor = 0;
			return r1;
		}
	}];
	
	this.listaNaoArit = [{
		//beq
		op: 4,
		funcao: function(r1, r2, num) {	
	    	if(r1.valor == r2.valor)
	        	regs.setPc(num-4);
	        	return regs.pc;
			}		
     },{
     	//bne
		op: 5,          
        funcao: function(r1, r2, num){
        	if(r1.valor != r2.valor)
				regs.setPc(num-4);
				return regs.pc;
		}		
	},{
         //blez
		op: 6,          
		funcao: function(r1){
			if(r1.valor <= 0){
				return true;
			}else{
				return false;
			}
		}
	},{
           //bgtz
		op: 7,          
		funcao: function(r1){
			if(r1.valor > 0){
	          return true;
			}else{
				return false;
	 		}
        }    
	},{
           //addi
		op: 8,          
		funcao: function(r1 , r2, num){
           r1.valor = r2.valor + num;
           return r1;
		}
     },{

          //stli
		op: 10,          
		funcao: function(r1, r2, num){
			r2.valor < num? r1.valor = 1 : r1.valor = 0;
			return r1;
		}

      },{

           //andi
		op: 12,
		funcao: function(r1, r2, num){
			r1.valor = r2.valor & num;
			return r1;
		}
		},{

		//ori
		op: 13,
		funcao: function(r1, r2, num){
			r1.valor = r2.valor | num;
			return r1;
		}

      },{

           //xori
		op: 14,
		funcao: function(r1, r2, num){
			r1.valor = r2.valor ^ num;
			return r1;
		}

      },{

           //lui
		op: 15,
		funcao: function(r1, r2, num){
           r1.valor = num << 16; 
           return r1;
		}

     },{
     	//lb
        op: 32,
        funcao: function(r1, r2, num){
        	var temp = memoria.getConteudo(r2.valor + Math.floor(num/4));
        	r1.valor = temp & 255;
        	return r1;
        }
     },{
     	//lh
        op: 33,
        funcao: function(r1, r2, num){
        	var temp = memoria.getConteudo(r2.valor + Math.floor(num/4));
        	r1.valor = temp & 65535;
        	return r1;
        }
     },{
     	//lw
        op: 35,
        funcao: function(r1, r2, num){
        	r1.valor = memoria.getConteudo(r2.valor + Math.floor(num/4));
        	return r1;
        }
     },{
     	//sb
        op: 40,
        funcao: function(r1, r2, num){
        	var temp = r1.valor & 255;
        	memoria.setConteudo(r2.valor + Math.floor(num/4), temp);
        	return r1;
        }
     },{
     	//sh
        op: 41,
        funcao: function(r1, r2, num){
        	var temp = r1.valor & 65535;
        	memoria.setConteudo(r2.valor + Math.floor(num/4), temp);
        	return r1;
        }
     },{
     	//sw
        op: 43,
        funcao: function(r1, r2, num){
        	memoria.setConteudo(r2.valor + Math.floor(num/4), r1.valor);
        	return r1;
     	}
	}];
	
	this.listaJump  = [
	{
		op: 2,											//j
		funcao: function (jump) {
			regs.pc.valor = (jump-4) >> 2;
			return regs.pc;
		}
	},{
		op: 3,											//jal
		funcao: function (jump) {
			regs.incrementaPc(4);
			regs.lista[31].valor = regs.pc.valor;
			regs.setPc(Math.floor(jump));
			return regs.pc;
		}
	}];
	
	this.step = function(instr) {
	    	
		if(instr.op == 0) {
			if (instr.funct != (0 || 2)) {
				for (var i = 0; i < this.listaArit.length; i++) { 		//tipo R
					if (this.listaArit[i].funct == instr.funct) {
						return this.listaArit[i].funcao(regs.lista[instr.rd], regs.lista[instr.rs], regs.lista[instr.rt]);
					}
				}
			} else {
				for (var i = 0; i < this.listaArit.length; i++) {		//shift
					if (this.listaArit[i].funct == instr.funct) {
						return this.listaArit[i].funcao(regs.lista[instr.rd], regs.lista[instr.rt], instr.shamt);
					}
				}
			}
		} else if(instr.op != (2 || 3)){								//instrucao tipo I
			for (var i = 0; i < this.listaNaoArit.length; i++) {
				if (this.listaNaoArit[i].op == instr.op) {
					return this.listaNaoArit[i].funcao(regs.lista[instr.rt], regs.lista[instr.rs], instr.address);
				}
			}
		} else {
			for (var i = 0; i < this.listaJump.length; i++) {			//tipo J
				if (this.listaJump[i].op == instr.op) {
					return this.listaJump[i].funcao(instr.address);
				}
			}
		}
	}
}

