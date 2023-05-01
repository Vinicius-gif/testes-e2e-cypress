Cypress.Commands.add('getByData', (seletor) => {
    return cy.get(`[data-test=${seletor}]`)
})

Cypress.Commands.add('verificaTexto', (seletor, texto) => {
    return cy.get(`${seletor}`).contains(`${texto}`)
})