import { Given,Then } from "@badeball/cypress-cucumber-preprocessor";

Given('I visit the Github login page', ()=>{

    cy.visit("https://github.com/")


})

Then("I entered credentials", ()=>{

    cy.get('div.width-full > .text-right').click()
})