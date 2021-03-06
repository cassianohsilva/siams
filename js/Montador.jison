%lex
%%

\n						return '\n';
\s+						;
"add"					return 'R';
"addu"					return 'R';
"sub"					return 'R';
"subu"					return 'R';
"and"					return 'R';
"xor"					return 'R';
"or"					return 'R';
"nor"					return 'R';
"slt"					return 'R';
"sltu"					return 'R';
"sll"					return 'SR';
"srl"					return 'SR';
"j"						return 'J';
"jal"					return 'J';
"jr"					return 'JR';
"beq"					return 'IL';
"bne"					return 'IL';
"addi"					return 'IE';
"addiu"					return 'IE';
"slti"					return 'IE';
"xori"					return 'IE';
"andi"					return 'IJ';
"ori"					return 'IJ';
"lw"					return 'IC';
"sw"					return 'IC';
"sb"					return 'IC';
"lb"					return 'IC';
"lh"					return 'IC';
"sh"					return 'IC';
"lui"					return 'IU';
[0-9]+					return 'NUMB';
"-"						return '-';
<<EOF>>					return 'EOF';
","						return ',';
"$t"[0-9]				return 'REGISTER';
"$zero"					return 'REGISTER';
"$s"[0-7]				return 'REGISTER';
"$v"[0-1]				return 'REGISTER';
"$a"[0-3]				return 'REGISTER';
"$gp"					return 'REGISTER';
"$sp"					return 'REGISTER';
"$fp"					return 'REGISTER';
"$ra"					return 'RA';
"halt"					return 'HALT';
\w+						return 'LABEL';
"("						return '(';
")" 					return ')';
":"						return ':';

/lex

%start 					LINE
%%

LINE			:		INST1 '\n' LINE
							{
							$$ = $1;
							}
				
				|		INST1 EOF
							{
							 $$ = $1;
							 return true;}
							 
				|		HALT EOF
							{
							memoria.setConteudo(yylineno, (-2147483648>>>0));
							}
				;
				
INST1			:		LABEL ':' INST
							{
							$$ = $3;}

				|		INST
							{$$ = $1;}
							
				|		LABEL ':' HALT
							{
							memoria.setConteudo(yylineno, (-2147483648>>>0));
							}
				;

INST			:		IE REGISTER ',' REGISTER ',' NUMBER				
							{var temp = instrucao.getOp($1);			//IE
							temp = temp << 26;
							binario |= temp;
							temp = regs.getNumero($4);					
							temp = temp << 21;
							binario |= temp;
							temp = regs.getNumero($2);					
							temp = temp << 16;
							binario |= temp;
							temp = $6 & 65535;
							binario |= temp;
							binario = (binario>>>0);
							$$ = binario;
							memoria.setConteudo(yylineno, $$);
							}
				|		IC REGISTER ',' NUMBER '('REGISTER ')' 			
						   {var temp = instrucao.getOp($1);             //IC
						   	var binario = 0;
							temp = temp << 26;
						    binario |= temp;
							temp = regs.getNumero($6);
							temp = temp << 21;
							binario |= temp;
							temp = regs.getNumero($2);             
							temp = temp << 16;
							binario |= temp;
							temp = $4 & 65535;
							temp = Math.floor(temp/4);
							binario |= temp;                              
							binario = (binario>>>0);
							$$ = binario ;
							memoria.setConteudo(yylineno, $$);
							}
				|		R REGISTER ',' REGISTER ',' REGISTER			
							{var temp = instrucao.getOp($1);			//R
							var binario = 0;
							binario = temp << 26;
							temp = regs.getNumero($4);					
							temp = temp << 21;
							binario |= temp;
							temp = regs.getNumero($6);					
							temp = temp << 16;
							binario |= temp;
							temp = regs.getNumero($2);					
							temp = temp << 11;
							binario |= temp;
							temp = 0;									
							temp = temp << 6;
							binario |= temp;
							binario |= instrucao.getFunct($1);			
							$$ = binario;
							memoria.setConteudo(yylineno, $$);
							}
				|		JR REGISTER										
							{											//JR
							 var temp = instrucao.getOp($1);
							 var binario = 0 ;
							 binario= temp << 26;
							 temp = regs.getNumero($2);
							 temp = temp << 21;
							 binario |= temp;
							 temp = 0;
							 temp = temp << 16;
							 binario |= temp;
							 temp = 0;
							 temp = temp << 11;
							 binario  |= temp;
							 temp = 0;
							 temp = temp << 6;
							 binario  |= temp;
							 binario |= instrucao.getFunct($1);
							 $$ = binario;
							 memoria.setConteudo(yylineno, $$);
							}
							
				|		JR RA											
							{											//JR
							 var temp = instrucao.getOp($1);
							 var binario = 0 ;
							 binario= temp << 26;
							 temp = regs.getNumero($2);
							 temp = temp << 21;
							 binario |= temp;
							 temp = 0;
							 temp = temp << 16;
							 binario |= temp;
							 temp = 0;
							 temp = temp << 11;
							 binario  |= temp;
							 temp = 0;
							 temp = temp << 6;
							 binario  |= temp;
							 binario |= instrucao.getFunct($1);
							 $$ = binario;
							 memoria.setConteudo(yylineno, $$);
							}
				|
				        J  NUMBER 										
						    {											
		                     var temp = instrucao.getOp($1);			//J
                             var binario = 0;
                             binario = temp << 26;
							 binario |= $2;
                             $$ = binario;
                             memoria.setConteudo(yylineno, $$);
       						}
       						
       			|
       					J LABEL										
       						{											
       						 var temp = instrucao.getOp($1);			//J
                             var binario = 0;
                             binario = temp << 26;
                             temp = memoria.useLabel($2);
							 binario |= temp;
                             $$ = binario;
                             memoria.setConteudo(yylineno, $$);
       						}
       			
				|
				        IL REGISTER ',' REGISTER ',' LABEL			
						    {
	                         var temp = instrucao.getOp($1);			//IL
                             var binario = 0;
                             binario = temp << 26;
                             temp = regs.getNumero($2);
                             temp = temp << 21;
                             binario |= temp;
                             temp = regs.getNumero($4);
                             temp = temp << 16;
                             binario |= temp;
                             temp = (memoria.useLabel($6) - yylineno)/4;
                             binario |= temp;
                             binario = (binario>>>0);
                             $$ = binario;
                             memoria.setConteudo(yylineno, $$);	 
							}
				|		SR REGISTER ',' REGISTER ',' NUMBER			
 							{
							var temp = instrucao.getOp($1);				//SR
							var binario =0;
							binaro = temp << 26;
							temp = 0;
							temp = temp << 21;
							binario |= temp;
							temp = regs.getNumero($4);
							temp = temp << 16;
							binario |= temp;
							temp = regs.getNumero($2);
							temp = temp << 11;
							binario |= temp;
							temp = $6;
							temp = temp << 6;
							binario |= temp;
							$$ = binario;
							memoria.setConteudo(yylineno, $$);
							}
				|
                        IU REGISTER ',' NUMBER 						
                            {
							 var temp = instrucao.getOp($1);			//IU
							 var binario  = 0;
							 binario = temp << 26;
							 temp = 0;
							 temp = temp << 21;
							 binario |= temp;
							 temp = regs.getNumero($2);
							 temp = temp << 16;
							 binario |= temp;
							 binario |= $4;
							 binario = (binario>>>0);
							 $$ = binario;
							 memoria.setConteudo(yylineno, $$);
							 }
                |       IJ REGISTER ',' REGISTER ',' NUMBER				
                           {var temp = instrucao.getOp($1);				//IJ
						    var binario = 0;
							binario = temp << 26;
							temp = regs.getNumero($4);
						    temp = temp << 21;
							binario |= temp;
							temp = regs.getNumero($2);
							temp = temp << 16;
							binario |= temp;
							binario |= $6;
							binario = (binario>>>0);
						    $$ = binario;
						    memoria.setConteudo(yylineno, $$);
						   }
				;
				
NUMBER			:		NUMB
							{
							$$ = $1;
							}
				|		'-' NUMB
							{
							$$ = -$2;
							}
				;
