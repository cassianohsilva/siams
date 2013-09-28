%lex
%%

\s+						;
"add"					return 'R';
"sub"					return 'R';
"and"					return 'R';
"or"					return 'R';
"nor"					return 'R';
"slt"					return 'R';
"sll"					return 'SR';
"srl"					return 'SR';
"jr"					return 'JR';
"addi"					return 'IE';
"lw"					return 'IC';
"sw"					return 'IC';
[0-9]+					return 'NUMBER';
<<EOF>>					return 'EOF';
","						return ',';
"$t"[0-9]				return 'REG';
"$zero"					return "REG";
"$s"[0-7]				return 'REG';
"$v"[0-1]				return 'REG';
"$a"[0-3]				return 'REG';
"$gp"					return 'REG';
"$sp"					return 'REG';
"$fp"					return 'REG';
"$ra"					return 'REG';
"("						return '(';
")" 					return ')';

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
							temp = reg.getNumero($2);					//valor do rs
							temp = temp << 21;
							binario |= temp;
							temp = reg.getNumero($4);					//valor do rs
							temp = temp << 16;
							binario |= temp;
							binario |= $6;
							$$ = binario;}
				|		IC REG ',' NUMBER '('REG')'
							{$$ = $1 + " " + $2 + $3 + $4 + $5 + $6 + $7;}
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
							$$ = binario;}
				|		JR REG
							{$$ = $1 + " " + $2;}
				|		SR REG ',' REG ',' NUMBER
							{$$ = $1 + " " + $2 + $3 + $4 + $5 + $6;}
				;

