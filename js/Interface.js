$(document).ready(function () {
	$("#botaoPrincipal").click(function () {
		$('#editor').stop().slideToggle('fast');
		$('#memoria').stop().slideDown('fast');
	});
	
	atalhos();
	$('#codigo').numberfy();
	
	document.getElementById('abrir').value = '';
	document.getElementById('codigo').value = '';
	
	estaMontado(false);
});

function limparTudo() {
	regs.limparRegistradores();
	memoria.limparMemoria();
	
	$('#tabelaRegistradores tbody tr').removeClass('success');
	imprimirMemoria();
	
	montado = false;
	estaMontado(montado);
}

function estaMontado(montado) {
	if (!montado) {
		$('#step').attr('href', '#').css('color','rgba(0, 0, 0, 0.5)');		
		$('#executar').attr('href', '#').css('color','rgba(0, 0, 0, 0.5)');
	} else {
		$('#step').attr('href', 'javascript:uc.step();').css('color','rgba(0, 0, 0, 1)');
		$('#executar').attr('href', 'javascript:uc.executar();').css('color','rgba(0, 0, 0, 1)');
	}
}

function atalhos() {
	
	$(document).bind('keydown', 'Ctrl+space',function (){
		$("#overall").stop().fadeIn();
		$("#atalhos").stop().fadeIn();
	});
	$(document).bind('keydown','esc',function () {
		$("#overall").stop().fadeOut();
		$("#atalhos").stop().fadeOut();
		$("#instrucoes").stop().fadeOut();
	});
	$(document).bind('keydown','Ctrl+o',function () {
		$('#abrir').trigger('click');
	});
	/*$(document).bind('keydown','Ctrl+s',function () {			Salvar um arquivo
		$("#overall").stop().fadeOut();
	});*/
	$(document).bind('keydown','Ctrl+f8',function () {
		$("#overall").stop().fadeIn();
		$("#instrucoes").css('display', 'block');
		$("#tutorial").trigger('click');
	});
	$(document).bind('keydown','Ctrl+f9',function () {
		$(this).stop().exec(uc.compilar());
	});
	$(document).bind('keydown','Ctrl+f10',function () {
		$(this).stop().exec(uc.executar());
	});
		
	$('#overall').click(function () {
		$(this).stop().fadeOut();
		$('#instrucoes').stop().fadeOut();
		$('#atalhos').stop().fadeOut();
});
}

function copiarConteudo(input) {
	
	if (input.files && input.files[0]) {
		var reader = new FileReader();
		
		reader.readAsText(input.files[0]);
		reader.onloadend = function (e) {
			document.getElementById('codigo').value = e.target.result;
		};
		document.getElementById('codigo').value = reader.result;
		
		$('#nomeDoArquivo').html(input.value);
	}
	
	
}

function verificarValor (inputtexto) {
	var temp = parseInt(inputtexto.value);
	
	if (!isNaN(temp)) {
		inputtexto.value = temp;
		var id = inputtexto.parentNode.id;
		regs.setValor(id, temp);
	} else {
		inputtexto.value = inputtexto.old;
		alert("O valor inserido é inválido");		
	}
}

function imprimirRegistradores() {
	
	$('#registradoresin table tbody:last-child').append("<tr id='0'><td>0</td><td>$zero</td><td><input type='text' style='margin:0;width:95%;background-color:#FFF;' id='0' readOnly='true' value='0'></td></tr>");
	
	for(var i = 1; i < regs.lista.length; i++) {
		var nome = regs.lista[i].nome;
		var valor = regs.lista[i].valor;
		
		$('#registradoresin table tbody:last-child').append("<tr id='" + i + "'><td>" + i + "</td><td>" + nome + "</td><td><input type='text' onfocus='this.old = this.value' onchange='verificarValor(this);' style='margin:0;width:95%' value='" + valor + "'></td></tr>");
		
	};
};

function imprimirMemoria() {
	
	var j = 0;
	
	$('#memoria table').html("<tr><th>Posição</th><th>Valor</th></tr>");
	
	while (memoria.getConteudo(j) != (null && 'undefined')) {
		
		$('#memoria table tbody:last-child').append("<tr id='x" + j +"'><td>"+ j +"</td><td>" + "0x" + memoria.getConteudo(j).toString(16).toUpperCase() +"</td></tr>");
		j++;
	}
	for(var i = 0; i < regs.lista.length; i++) {
		
		var tempvalor = regs.lista[i].valor;
		
		if (memoria.getConteudo(tempvalor) != (null && 'undefined') && tempvalor > j) {
			$('#memoria table tbody:last-child').append("<tr><td>"+ tempvalor +"</td><td>" + memoria.getConteudo(tempvalor) +"</td></tr>");
		}
	}
}

function modificaValor(registrador, cor) {
	$('#'+registrador.numero+' td input').val(registrador.valor);
	if (cor) {
		$('#'+registrador.numero).addClass('success');
	}
}

function abrirArquivo() {
	
	$('#abrir').trigger('click');
	
}