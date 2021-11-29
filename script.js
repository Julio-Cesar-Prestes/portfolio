var hamburguer = document.querySelector(".hamburguer");/**Cria uma variável hamburguer e busca o menu através document e a função querySelector*//*Como já colocou a classe .hamburguer, usa este seletor para buscar*/
hamburguer.addEventListener("click", function () {
    /*à partir da variável .hamburguer, vai adicionar um EventListener que vai ficar escutando um evento de click-Quando escutar um evento de click, vai executar esta função*/
    document.querySelector(".container").classList.toggle("show-menu");
    /*Esta função vai buscar através do document.querySelector, no seletor .container, e à partir da lista de classes vai fazer um toggle (adicionar ou remover), uma classe chamada show-menu(Se não existir a classe show-menu ele coloca e se existir, ele retira*/
});

/**Pode se fazer o código acima assim:*/
/**document.querSelector(".hamburguer").addEventListener("click", () =>*/
/**document.querySelector(".container").classList.toggle("show-menu"));*/