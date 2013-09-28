function Memoria() {
	
	this.memoria = new Array();
	this.setConteudo = function (posicao, valor) {
		memoria[posicao] = valor;
	}
	
	this.getConteudo = function (posicao) {
		return memoria[posicao];
	}
};