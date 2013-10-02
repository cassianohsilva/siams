function UC() {
	
	this.montar = function() {
		
		limparTudo();
		var codigo = document.getElementById("codigo").value;
		
		$('#memoria ').removeClass('success');
		
		memoria.emptyLabels();
		memoria.pegarLabels();
		Montador.parse(codigo);
		 
		imprimirMemoria();
		estaMontado(true);
	}

	this.step = function() {
		
		var interp = new Interpretador();
		
		var atual = memoria.getConteudo(regs.pc.valor);
		if (atual != 2147483648) {
			var tipo = atual & -67108864;
			tipo >>>= 26;
			if(tipo == 0) {
				var t = interp.step(RParaInt(atual));
			} else if (tipo != (2 || 3)) {
				var t = interp.step(IParaInt(atual));
			} else {
				var t = interp.step(JParaInt(atual));		
			}
			
			modificaValor(t, true);
			regs.incrementaPc(4);
		}
		
		imprimirMemoria();
	}
	

	this.executar = function() {
		
		var t = 0, j = 0;
		//var breakpoint = $('#x'+j+' td input').is(':checked');
		while(memoria.getConteudo(regs.pc.valor) != 2147483648) {
			
			var atual = memoria.getConteudo(regs.pc.valor);
			var tipo = atual & -67108864;
			tipo >>>= 26;
			if(tipo == 0) {
				t = interp.step(RParaInt(atual));
				
			} else if (tipo != (2 || 3)) {
				t = interp.step(IParaInt(atual));
				
			} else {
				t = interp.step(JParaInt(atual));
						
			}
		
			modificaValor(t, true);
			regs.incrementaPc(4);
			j++;
			//breakpoint = $('#x'+j+' td input').is(':checked');
		}
		regs.setPc(0);
	}
}