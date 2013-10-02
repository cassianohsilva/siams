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

	this.pegarLabels = function () {
		var codigo = $("#codigo").val().split('\n');
		var regex = /\w+\s*:/gi;
		
		for (var k = 0; k < codigo.length; k++) {
			if (codigo[k].match(regex)) {
				var t = codigo[k].match(regex);
				var label = t[0].replace(/\s*:/g,'');
				this.saveLabel(label, 4*k);
			}
		}
	}
	
	this.useLabel = function (tempnome) {
		for (var i = 0; i < labels.length; i++) {
			if (labels[i].nome == tempnome) {		
				return labels[i].endereco;
			}
		}
	}
	
	this.emptyLabels = function () { labels = [];}

	this.limparMemoria = function () {memoria = [];}
};