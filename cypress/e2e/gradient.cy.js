/// <reference types="cypress" />

import {
    navigate,
    auth,
    clickAnElement
} from "../../page-objects/functions.js"


describe('demo actions', () => {
    beforeEach(() => {
        navigate()
        auth()
    })

    it('should open the project page', () => {
       // cy.contains('Визуализации').click()
       // cy.contains('Lifting cost').click()
       clickAnElement('Визуализации')
       clickAnElement('Lifting cost')
    })

    it('should turn the screens through', () => {
        clickAnElement('Аналитика по ДО')
        clickAnElement('Динамика метрик')
        clickAnElement('Выявление эталонов')
        clickAnElement('Оценка потенциала')
        clickAnElement('Факторный анализ')
        clickAnElement('Мониторинг')
    })
})



/*
it('should authentificate the user', () => {
    cy.visit('https://dev-ibs.luxmsbi.com/')
    cy.get('input[autocomplete="username"]').type(Cypress.env('login'))
    cy.get('input[autocomplete="current-password"]').type(Cypress.env('password') + '{enter}')
})
*/

