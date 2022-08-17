import { Given, Then, And, Before } from "cypress-cucumber-preprocessor/steps";


const url = "https://api.trello.com/1/actions/592f11060f95a3d3d46a987a";


let myBeforeCount = 0;


Before(() => {
  expect(myBeforeCount).to.be.lessThan(2);
  myBeforeCount += 1;
});


Given(`que possuo o endereço da api`, () => {
  
  cy.request(url)
  .then((response) => {
         expect(response.status).to.eq(200);
         // expect(response.body).to.have.property('data');
          expect(response.body.data.list).to.have.property('name').and.to.eq('Professional');


      })
});
