describe('Homepage', () => {
    beforeEach(() => {
        cy.intercept("GET", "http://localhost:3001/api/v1/reservations", {fixture: "reservationStub.json",})
        cy.visit("http://localhost:3000/");
      });


  it('should be able to enter a name into the form', () => {
  cy.get('[placeholder="Name"]').type('Jordan')
  cy.get('[placeholder="Name"]').should("have.value", "Jordan");
})

it('should be able to enter a date into the form', () => {
    cy.get('[placeholder="Date (mm/dd)"]').type('02/21')
    cy.get('[placeholder="Date (mm/dd)"]').should("have.value", "02/21");
})

it('should be able to enter a time into the form', () => {
    cy.get('[placeholder="Time"]').type('1230')
    cy.get('[placeholder="Time"]').should("have.value", "1230");
})

it('should be able to enter number of guests into form', () => {
    cy.get('[placeholder="Number of guests"]').type('1')
    cy.get('[placeholder="Number of guests"]').should("have.value", "1");
})

it('should add reservation to total reservation count', () => {
    cy.get('[placeholder="Name"]').type('Jordan')
    cy.get('[placeholder="Date (mm/dd)"]').type('02/21')
    cy.get('[placeholder="Time"]').type('1230')
    cy.get('[placeholder="Number of guests"]').type('1')
    cy.get(".form > button").click();
    cy.get(".reservation-container > :nth-child(10)").contains("Jordan");
})
})