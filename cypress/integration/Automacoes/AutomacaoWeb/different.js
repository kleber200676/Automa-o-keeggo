import { Given, Then, And, Before } from "cypress-cucumber-preprocessor/steps";


const url = "http://automationpractice.com/index.php";


let myBeforeCount = 0;


Before(() => {
  expect(myBeforeCount).to.be.lessThan(2);
  myBeforeCount += 1;
});


Given(`que esteja logado no site`, () => {
  
  cy.visit(url);
  cy.get('.login').click();
  cy.get('#email').type('teste2021@teste.com.br');
  cy.get('#passwd').type('teste');
  cy.get('#SubmitLogin > span').click();

});


When(`realizar a busca pelo produto dresss`, () => {
  
  cy.get('#search_query_top').type('dress');
  cy.get('#searchbox > button').click();
  cy.get(':nth-child(1) > .product-container > .right-block > .button-container > .ajax_add_to_cart_button > span').click();
  cy.get('.button-container > .button-medium > span').click();

});


And(`adiciono o vestido no carrinho`, () => {
  
  cy.get('.cart_navigation > .button > span').click();
  cy.get('.cart_navigation > .button > span').click();
  cy.get('#cgv').click({force: true})
  cy.get('.cart_navigation > .button > span').click();

});


Then(`valido os produtos inseridos no carrinho`, () => {
  cy.get('.cart_description > .product-name > a').should('contain', 'Printed Summer Dress');
  cy.get('.cart_ref').should('contain', 'demo_5');
});
