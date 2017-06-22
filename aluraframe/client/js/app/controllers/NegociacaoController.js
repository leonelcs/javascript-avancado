class NegociacaoController {

  constructor() {

            let $ = document.querySelector.bind(document);

            this._inputData = $('#data');
            this._inputQuantidade =  $('#quantidade');
            this._inputValor = $('#valor');

            let numeros = [10, 30];
			console.log(this.somaDoisNumeros(...numeros));

            /* let numeros = [3,2,11,20,8,7];
            let retorno = [];
            numeros.forEach( item => {
            	item % 2 == 1 ? retorno.push(item*2) : retorno.push(item);
            })
            console.log(retorno); */
  }

  somaDoisNumeros(num1, num2) {
  	return num1+num2;
  }

  adiciona(event) {

        event.preventDefault();

		let data = new Date(...this._inputData.value
	        .split('-')
	        .map((item, indice) => item - indice % 2 )
    	);

        let negociacao = new Negociacao(
        	data,
        	this._inputQuantidade.value,
        	this._inputValor.value
        	);

        console.log(negociacao);

  }
}