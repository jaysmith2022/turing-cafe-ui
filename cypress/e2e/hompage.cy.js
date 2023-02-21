describe('Homepage', () => {
    beforeEach(() => {
    cy.intercept("GET", "http://localhost:3001/api/v1/reservations", {fixture: "reservationStub.json",})
    cy.visit("http://localhost:3000/");
  });

  it('should open the homepage and verify the url', () => {
   cy.url().should('eq', 'http://localhost:3000/')
 })

 it('should display a logo at the top of the page', () => {
   cy.get(".app-title").contains("Turing Cafe Reservations")
 })

 it('should display a section with all reservations', () => {
   cy.get(".resy-container")
   .get(".reservation-container").children().should("have.length", 9)
 })

 it('should display a cancel button for each reservation', () => {
   cy.get(".cancel-btn").should("have.length", 9)
 })
})