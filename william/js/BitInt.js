/*function IntParaR(op, rs, rt, rd, shamt, funct) {
	var instrucao = 0;
	
	var temp = op << 26;
	instrucao |= temp;
	temp = rs << 21;
	instrucao |= temp;
	temp = rt << 16;
	instrucao |= temp;
	temp = rd << 11;
	instrucao |= temp;
	temp = shamt << 6;
	instrucao |= temp;
	instrucao |= funct;
	
	return instrucao;
}

function IntParaI(op, rs, rt, address) {
	var instrucao = 0;
	
	var temp = op << 26;
	instrucao |= temp;
	temp = rs << 21;
	instrucao |= temp;
	temp = rt << 16;
	instrucao |= temp;
	instrucao |= address;	
	return instrucao;
}
function IntParaJ(op, address) {
	var instrucao = 0;
	
	var temp = op << 26;
	instrucao |= temp;
	instrucao |= address;
	
	return instrucao;
}*/

function RParaInt(instrucao) {
	this.instrucaoDividida = {
		op: 0,
		rs: 0,
		rt: 0,
		rd: 0,
		shamt: 0,
		funct: 0
	};
		
	var temp = instrucao & -67108864;
	temp = temp >> 26;
	this.instrucaoDividida.op = temp;	
	temp = instrucao & 65011712;
	temp = temp >> 21;
	this.instrucaoDividida.rs = temp;
	temp = instrucao & 2031616;
	temp = temp >> 16;
	this.instrucaoDividida.rt = temp;
	temp = instrucao & 63488;
	temp = temp >> 11;
	this.instrucaoDividida.rd = temp;
	temp = instrucao & 1984;
	temp = temp >> 6;
	this.instrucaoDividida.shamt = temp;
	temp = instrucao & 63;
	this.instrucaoDividida.funct = temp;
	
	
	return this.instrucaoDividida;	
}

function IParaInt(instrucao) {
	var instrucaoDividida = {
		op: 0,
		rs: 0,
		rt: 0,
		address: 0
	};
	
	var temp = instrucao & -67108864;
	temp = temp >> 26;
	instrucaoDividida.op = temp;
	temp = instrucao & 65011712;
	temp = temp >> 21;
	instrucaoDividida.rs = temp;
	temp = instrucao & 2031616;
	temp = temp >> 16;
	instrucaoDividida.rt = temp;
	temp = instrucao & 65535;
	instrucaoDividida.address = temp;
	
	return instrucaoDividida;	
}

function JParaInt(instrucao) {
	var instrucaoDividida = {
		op: 0,
		address: 0
	};
	
	var temp = instrucao & -67108864;
	temp = temp >> 26;
	instrucaoDividida.op = temp;
	temp = instrucao & 67108863;
	instrucaoDividida.address = temp;
	
	return instrucaoDividida;	
}