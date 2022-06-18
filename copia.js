var botaoCopia = document.querySelector(".btnCopiar");



function btnCopiar()
{
	var mensagemcriptografada = document.querySelector('.mensagem');
	var campomensagemoriginal = document.querySelector('.input-texto');

	campomensagemoriginal.value = mensagemcriptografada.value;


}