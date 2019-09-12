it('should allow a user to sign in', () => {
  // register user
  cy.visit('/register')
    .get('input[name="username"]')
    .type(username)
    .get('input[name="email"]')
    .type(email)
    .get('input[name="password"]')
    .type(password)
    .get('input[type="submit"]')
    .click()

  // log a user out
  cy.get('.navbar-burger').click()
  cy.contains('Log Out').click()

  // log a user in
  cy.get('a')
    .contains('Log In')
    .click()
    .get('input[name="email"]')
    .type(email)
    .get('input[name="password"]')
    .type(password)
    .get('input[type="submit"]')
    .click()
    .wait(100)

  // assert user is redirected to '/'
  cy.get('.notification.is-success').contains('Welcome!')
  cy.contains('Users').click()
  // assert '/all-users' is displayed properly
  cy.get('.navbar-burger').click()
  cy.location().should(loc => {
    expect(loc.pathname).to.eq('/all-users')
  })
  cy.contains('All Users')
  cy.get('table')
    .find('tbody > tr')
    .last()
    .find('td')
    .contains(username)
  cy.get('.navbar-burger').click()
  cy.wait(300)
  cy.get('.navbar-menu').within(() => {
    cy.get('.navbar-item')
      .contains('User Status')
      .get('.navbar-item')
      .contains('Log Out')
      .get('.navbar-item')
      .contains('Log In')
      .should('not.be.visible')
      .get('.navbar-item')
      .contains('Register')
      .should('not.be.visible')
  })

  // log a user out
  cy.get('a')
    .contains('Log Out')
    .click()

  // assert '/logout' is displayed properly
  cy.get('p').contains('You are now logged out')
  cy.wait(300)
  cy.get('.navbar-menu').within(() => {
    cy.get('.navbar-item')
      .contains('User Status')
      .should('not.be.visible')
      .get('.navbar-item')
      .contains('Log Out')
      .should('not.be.visible')
      .get('.navbar-item')
      .contains('Log In')
      .get('.navbar-item')
      .contains('Register')
  })
})
