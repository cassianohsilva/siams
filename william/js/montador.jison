%lex
%%

\s+						;
"add"					return 'R';
"addu"                  return 'R';
"xor"                   return 'R';
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
"j"                     return 'J';
"jal"                   return 'J';
"jr"					return 'JR';
"beq"                   return 'IL';
"bne"                   return 'IL';
"addi"					return 'IE';
"addiu"					return 'IE';
"slti"                  return 'IE';
"xori"					return 'IE';
"sltiu"                 return 'IE';
"andi"                  return 'IJ';
"ori"                   return 'IJ';
"lw"					return 'IC';
"sw"					return 'IC';
"sb"                    return 'IC';
"lb"                    return 'IC';
"lbu"                   return 'IC';
"lh"                    return 'IC';
"lhu"                   return 'IC';
"sh"                    return 'IC';
"lui"                   return 'IU';
[0-9]+					return 'NUMBER';
<<EOF>>					return 'EOF';
","						return ',';
"$t"[0-9]				return 'REG';
"$zero"					return 'REG';
"$s"[0-7]				return 'REG';
"$v"[0-1]				return 'REG';
"$a"[0-3]				return 'REG';
"$gp"					return 'REG';
"$sp"					return 'REG';
"$fp"					return 'REG';
"$ra"					return 'REG';
"("						return '(';
")" 					return ')';
"/"                     return '/';

/lex

%start 					LINE
%%

LINE			:		INST EOF
							{typeof console !== 'undefined' ? console.log("true") : console.log("false");
							 return $1;};

INST			:		IE REG ',' REG ',' NUMBER
							{var temp = instrucao.getOp($1);			//valor do op
							var temp = temp << 26;
							binario |= temp;
							temp = reg.getNumero($4);					//valor do rs
							temp = temp << 21;
							binario |= temp;
							temp = reg.getNumero($2);					//valor do rs
							temp = temp << 16;
							binario |= temp;
							binario |= $6;
							$$ = binario;}
				|		IC REG ',' NUMBER '('REG')' 
						   {var temp = instrucao.getOp($1);             //valor do op
							var binario = 0;
							binario = temp << 26;
						    binario |= temp;
							temp = instrucao.getNumero($6);             // valor do rs
							temp = temp << 21;
							binario |= temp;
							temp = instrucao.getNumero($2);             //valor do rt
							temp = temp << 16;
							binario |= temp;           
							binario |= $4;                              // valor do end.
							$$ = binario ;
							}
				|		R REG ',' REG ',' REG 
							{var temp = instrucao.getOp($1);			//valor do op
							var binario = 0;
							binario = temp << 26;
							temp = reg.getNumero($4);					//valor do rs
							temp = temp << 21;
							binario |= temp;
							temp = reg.getNumero($6);					//valor do rt
							temp = temp << 16;
							binario |= temp;
							temp = reg.getNumero($2);					//valor do rd
							temp = temp << 11;
							binario |= temp;
							temp = 0;									//valor do shamt
							temp = temp << 6;
							binario |= temp;
							binario |= instrucao.getFunct($1);			//valor do funct
							$$ = binario;
							}
				|		JR REG   
							{
							 var temp = instrucao.getOp($1);
							 var binario = 0 ;
							 binario= temp << 26;
							 temp = reg.getNumero($2);
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
							}
				|
				        J  NUMBER 
						    {
		                     var temp = instrucao.getOp($1);
                             var binario = 0;
                             binario = temp << 26;
							 binario |= $2;
                             $$ = binario;							 
       						}
				|
				        IL REG ',' REG ',' NUMBER 
						    {
	                         var temp = instrucao.getOp($1);
                             var binario = 0;
                             binario = temp << 26;
                             temp = reg.getNumero($2);
                             temp = temp << 21;
                             binario |= temp;
                             temp = reg.getNumero($4);
                             temp = temp << 16;
                             binario |= temp;
                             temp = temp  >> 2;       // divide por quatro
                             binario |= temp;							 
                             $$ = binario;							 
							}
				|		SR REG ',' REG ',' NUMBER 
 							{
							var temp = instrucao.getOp($1);
							var binario =0;
							binaro = temp << 26;
							temp = 0;
							temp = temp << 21;
							binario |= temp;
							temp = reg.getNumero($4);
							temp = temp << 16;
							binario |= temp;
							temp = reg.getNumero($2);
							temp = temp << 11;
							binario |= temp;
							temp = reg.getShamt($1);
							temp = temp << 6;
							binario |= temp;
							$$ = binario;
							 }
				|
                        IU REG ',' NUMBER 
                            {
							 var temp = instrucao.getOp($1);
							 var binario  = 0;
							 binario = temp << 26;
							 temp = 0;
							 temp = temp << 21;
							 binario |= temp;
							 temp = reg.getNumero($2);
							 temp = temp << 16;
							 binario |= temp;
							 binario |= $4;
							 $$ = binario;
							 }
                |       IJ REG ',' REG ',' NUMBER
                           {var temp = instrucao.getOp($1);
						    var binario = 0;
							binario = temp << 26;
							temp = reg.getNumero($4);
						    temp = temp << 21;
							binario |= temp;
							temp = reg.getNumero($2);
							temp = temp << 16;
							binario |= temp;
							binario |= $6;
						    $$ = binario;
						   }				
				;		