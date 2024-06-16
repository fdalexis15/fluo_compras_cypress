/// <reference types='cypress' />

describe('template spec', () => {

  beforeEach(() => {
    cy.visit(Cypress.env('url'))
  })

  it('aggregate_prodcts_in_car', () => {

    //Varibales nombeProducto
    const celular = 'Samsung galaxy s6'
    const laptop = 'Sony vaio i5'

    //Select a CelPhone 
    cy.contains('#itemc', 'Phones').click()
    cy.contains('.hrefch', celular).click()
    cy.get('[class="btn btn-success btn-lg"]').should('contain','Add to cart').click()
 
    //Comeback to init
    cy.contains('.nav-link', 'Home ').click()

    //Select a Laptop 
    cy.contains('#itemc', 'Laptops').click()
    cy.contains('.hrefch', laptop).click()
    cy.get('[class="btn btn-success btn-lg"]').should('contain','Add to cart').click()

    //Validate that the product is in the car 
    cy.contains('#cartur', 'Cart').click()
    cy.contains('[class="btn btn-success"]', 'Place Order').click()


    //Fill out purchasing form
    cy.get('#name').type('Francisco')
    cy.get('#country').type('Ecuador')
    cy.get('#city').type('Quito')
    cy.get('#card').type('123456789123')
    cy.get('#month').type('Marzo')
    cy.get('#year').type('2025')

    //Complete purchase
    cy.contains('[class="btn btn-primary"]', 'Purchase').click()

    //Validate successful message    
    cy.get('h2').contains('Thank you for your purchase!')

  })
  })