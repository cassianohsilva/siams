$(document).ready(function () {
	$("#botaoPrincipal").click(function () {
		$('#editor').stop().slideToggle('fast');
		$('#memoria').stop().slideDown('fast');
	});
	
	atalhos();
	$('#codigo').numberfy();
	
});

/*function highlight(register, hltype) {
	
	switch(hltype) {
		
		/*
			hltype = 0:		escrita
			hltype = 1:		leitura
			hltype = -1:	erro
		
		
		case 0:
			$('#'+register).addClass('success');
			break;
		case 1:
			$('#'+register).addClass('info');
			break;
		case -1:
			$('#'+register).addClass('error');
			break;
	}
}*/

function atalhos() {
	
	$(document).bind('keydown', 'Ctrl+space',function (){
		$("#overall").stop().fadeIn();
	});
	$(document).bind('keydown','esc',function () {
		$("#overall").stop().fadeOut();
	});
	$(document).bind('keydown','Ctrl+o',function () {
		$("#overall").stop().fadeOut();
	});
	$(document).bind('keydown','Ctrl+s',function () {
		$("#overall").stop().fadeOut();
	});
	$(document).bind('keydown','Ctrl+h',function () {
		$("#overall").stop().fadeOut();
	});
	$(document).bind('keydown','f8',function () {
		$("#overall").stop().fadeIn();
		$("#instrucoes").css('display', 'block');
	});
	$(document).bind('keydown','Ctrl+f9',function () {
		$(this).stop().exec(uc.compilar());
	});
	$(document).bind('keydown','Ctrl+f10',function () {
		$(this).stop().exec(uc.executar());
	});
		
	$('#overall').click(function () {
		$(this).stop().fadeOut();
});
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
	
	$('#memoria table').html("<tr><th>Brkp</th><th>Posição</th><th>Valor</th></tr>");
	
	while (memoria.getConteudo(j) != (null && 'undefined')) {
		
		$('#memoria table tbody:last-child').append("<tr><td style='text-align:center;'><input type='checkbox' ></td><td>"+ j +"</td><td>" +  memoria.getConteudo(j) +"</td></tr>");
		j++;
	}
	for(var i = 0; i < regs.lista.length; i++) {
		
		var tempvalor = regs.lista[i].valor;
		
		if (memoria.getConteudo(tempvalor) != (null && 'undefined') && tempvalor > j) {
			$('#memoria table tbody:last-child').append("<tr><td style='text-align:center;'><input type='checkbox' ></td><td>"+ tempvalor +"</td><td>" + memoria.getConteudo(tempvalor) +"</td></tr>");
		}
	}
}

function modificaValor(registrador) {
	$('#'+registrador.numero+' td input').val(registrador.valor);
	$('#'+registrador.numero).addClass('success');
}