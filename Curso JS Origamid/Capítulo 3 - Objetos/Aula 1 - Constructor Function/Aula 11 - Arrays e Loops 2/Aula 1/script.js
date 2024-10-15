const Dom = {
    seletor: 'li',
    element() {
        return document.querySelector(this.seletor);
    },
    ativo() {
        this.element().classList.add('ativo');
    },
}

Dom.ativo();
//Dom.seletor = 'ul';
Dom.ativo();