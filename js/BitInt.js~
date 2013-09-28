function RParaInt(instrucao) {
	this.instrucaoDividida = {
		op: -1,
		rs: -1,
		rt: -1,
		rd: -1,
		shamt: -1,
		funct: -1
	};
		
	var temp = instrucao & -67108864;
	temp >>= 26;
	this.instrucaoDividida.op = temp;	
	temp = instrucao & 65011712;
	temp >>= 21;
	this.instrucaoDividida.rs = temp;
	temp = instrucao & 2031616;
	temp >>= 16;
	this.instrucaoDividida.rt = temp;	
	temp = instrucao & 63488;
	temp >>= 11;
	this.instrucaoDividida.rd = temp;
	temp = instrucao & 1984;
	temp >>= 6;
	this.instrucaoDividida.shamt = temp;
	temp = instrucao & 63;
	this.instrucaoDividida.funct = temp;
	
	
	return this.instrucaoDividida;	
}

function IParaInt(instrucao) {
	var instrucaoDividida = {
		op: -1,
		rs: -1,
		rt: -1,
		address: -1
	};
	
	var temp = instrucao & -67108864;
	temp >>= 26;
	instrucaoDividida.op = temp;
	temp = instrucao & 65011712;
	temp >>= 21;
	instrucaoDividida.rs = temp;
	temp = instrucao & 2031616;
	temp >>= 16;
	instrucaoDividida.rt = temp;
	temp = instrucao & 65535;
	var temp2 = temp & 32768;
	var temp3 = temp & 32767;
	
	if (temp2 != 0) {
		temp3 = ~temp3;
		temp3 = ((temp3) & 32767);
		instrucaoDividida.address = -temp3 - 1;
	} else {
		instrucaoDividida.address = temp3;
	}
	
	return instrucaoDividida;	
}

function JParaInt(instrucao) {
	var instrucaoDividida = {
		op: -1,
		address: -1
	};
	
	var temp = instrucao & -67108864;
	temp >>= 26;
	instrucaoDividida.op = temp;
	temp = instrucao & 67108863;
	instrucaoDividida.address = temp;
	
	return instrucaoDividida;	
}