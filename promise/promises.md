# Garantias

    Ao contrário dos callbacks com retornos de funções old-style, uma promise vem com algumas garantias:

    Callbacks nunca serão chamados antes da conclusão da execução atual do loop de eventos do JavaScript.
    Callbacks adicionadas com .then mesmo depois do sucesso ou falha da operação assíncrona, serão chamadas, como acima.
    Multiplos callbacks podem ser adicionados chamando-se .then várias vezes, para serem executados independentemente da ordem de inserção.


