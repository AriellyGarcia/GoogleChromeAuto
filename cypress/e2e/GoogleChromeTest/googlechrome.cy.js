

describe('example to-do app', () => {
  beforeEach(() => {
    cy.visit('https://www.google.com/')
  })

  it('pesquisa do google', () => {
    //realizando a pesquisa
    cy.get('.gLFyf').type('Olá mundo!');
    //confere resultados
    cy.get('li.sbct').should('have.length', 11);
    cy.contains('li.sbct', 'em java').should('be.visible');
    //seleciona javascript
    cy.contains('li.sbct', 'em javascript').click({force:true});
    cy.wait(5000)
    //tela de pesquisa ola mundo em javascript
    //primeiro bloco
    cy.get('block-component').should('be.visible');
    //resulados
    cy.get('div.MjjYud').should('be.visible');
    //

  })
})