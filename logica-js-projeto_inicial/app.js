alert (' boas vindas ao jogo do numero secreto!');
let numeroMaximo = 1000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log ( numeroSecreto );
let chute;
let tentativas = 1;

// enquanto o chute n for igual ao numero secreto
while (chute != numeroSecreto) {
    chute = prompt(`Digite um numero de 1 a ${numeroMaximo}`);
    // se chute igual a numeroSecreto
    if (chute == numeroSecreto) {
       break;
    } else 
        if (chute > numeroSecreto) {
            alert (`o numero secreto é menor que o seu ${chute}`);
        } else { 
            alert (`o numero secreto é maior que o seu ${chute}`);
    }
    //tentativas == tentativas + 1;
    tentativas++;

    }

    let palavraTentativa = tentativas > 1 ? `tentativas` : `tentativa`;
    alert (`isso aí! vc descobriu o numero secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);


 //if (tentativas > 1) {
   // alert (`isso ai! vc descobriu o numero secreto ${numeroSecreto} com ${tentativas} tentativas!`);
 //} else {
    //alert (`isso ai! vc descobriu o numero secreto ${numeroSecreto} com ${tentativas} tentativa!`); 
