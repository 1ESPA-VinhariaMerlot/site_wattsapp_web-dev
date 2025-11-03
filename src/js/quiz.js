alert("SAIBAM MAIS SOBRE O QUIZ DA WATTSAPP!")


const perguntas= [
 {
    pergunta:"Pergunta numero 1) Qual o principal objetivo de nosso software?\n Opcao A) Aumentar o consumo de energia \n Opcao B) Monitorar e reduzir desperdício de energia\n Opcao C)Criar novos dispositivos IoT\n",
    resposta:"B"
 },
 {
    pergunta:"Pergunta numero 2)Qual destes dispositivos pode ser integrado ao nosso sistema IoT?\n Opcao A)Lâmpadas inteligentes \n Opcao B) Ar-condicionado inteligente\n Opcao C) Todas as anteriores\n",
    resposta:"C"
 },
 {
    pergunta:"Pergunta numero 3)Qual é a vantagem de usar IoT para economia de energia?\n Opcao A) Controle remoto e automação\n Opcao B) Monitoramento em tempo real\n Opcao C) Todas as anteriores \n",
    resposta:"C"
 },

];


let acertos = 0;



for(let i=0; i<perguntas.length;i++){
    const respostaUsuario=prompt(perguntas[i].pergunta);

  
    if(respostaUsuario.toLowerCase() === perguntas[i].resposta.toLocaleLowerCase()){
        acertos++;
    }
}
document.getElementById("msg").innerHTML=(`Você acertou: ${acertos} de ${perguntas.length} perguntas! `)




  document.getElementById("score").textContent = `Você acertou ${acertos} de 3 perguntas.`;
  document.getElementById("emoji").textContent = emoji;

  document.getElementById("result").style.display = "block";



