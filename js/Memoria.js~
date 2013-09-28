function Memoria() {
	
	var memoria = [];
	
	this.setConteudo = function (posicao, valor) {
		memoria[posicao] = valor;
	}
	
	this.getConteudo = function (posicao) {
		return memoria[posicao];
	}

	var labels = [];
	
	this.saveLabel = function (tempnome, tempendereco) {
		for (var i = 0; i < labels.length; i++) {
			if (labels[i].nome == tempnome) {
				alert("Label '" + tempnome + "' duplicado, troque o nome dele");				
				return false;
			}
		}
		labels[labels.length] = {nome: tempnome, endereco: tempendereco};
		return true;
	}
	
	this.useLabel = function (tempnome) {
		for (var i = 0; i < labels.length; i++) {
			if (labels[i].nome == tempnome) {		
				return labels[i].endereco;
			}
		}
	}
	
	this.emptyLabels = function () { labels = [];}

	this.emptyMemory = function () {memoria = [];}
};