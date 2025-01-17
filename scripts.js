/* 

[x] Variáveis
  - É um pedacinho da memória do computador,
  que podemos guardar alguma coisa. MAS, temos
  que indentificar esse espacinho com um nome.

  let + um nome = variável

[x] Funções
  - Pedacinho de código que..SÓ é executado, QUANDO
  EU ordernar

  function + nome da função + () + {}

[x] "Tempo"
  setInterval - Ele chama uma função de tempos em tempos

[x] If & Else
    SE -> Faça isso
    SE NÃO -> Faça isso

    =  -> Atribuir ou colocar um valor dentro
    == -> Comparando A com B

*/

let imagem = document.querySelector(".troca-imagem")

function trocaImagem(){

  if(imagem.style.opacity == 0){
    imagem.style.opacity = 1
  } 
  
  else {
    imagem.style.opacity = 0
  }

}

setInterval(trocaImagem, 3000)




