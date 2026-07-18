
describe('XNFT-Preview-Card-Component', () => {
  beforeEach(() => {
    // Visits the page before each test
    cy.visit('http://localhost:8081'); // Replace with your actual URL
  });

  it('should load the page and display the main elements', () => {
    cy.get('main.card').should('be.visible');
    cy.get('.card__images').should('be.visible');
    cy.get('.card__title').should('be.visible');
    cy.get('.card__time').should('be.visible');
    cy.get('.card__creator').should('be.visible');
    cy.get('footer').should('be.visible');
  });

  it('should display correct content in the main card elements', () => {
    cy.get('.card__title h1').should('have.text', 'Equilibrium #3429');
    cy.get('#info').should('have.text', 'Our Equilibrium collection promotes balance and calm.');
  });

  it('should display correct Ethereum value and time left', () => {
    cy.get('.card__time-left span').should('have.text', '0.041 ETH');
    cy.get('.card__time-right span').should('have.text', '3 days left');
  });

  it('should display correct creator information', () => {
    // cy.get('.card__creator img').should('have.attr', 'src', 'https://media.licdn.com/dms/image/D5603AQHmisevs6V-Wg/profile-displayphoto-shrink_200_200/0/1711565017432?e=2147483647&v=beta&t=2gxdXF049G8KQ53xOdouFjL_DKFruEzC2XH5LmLtem4');
    cy.get('.card__creator p').contains('Creation of').should('be.visible');
  });

  it('should have working footer links', () => {
    cy.get('footer a').first().should('have.attr', 'href', 'https://www.crio.do').and('have.attr', 'target', '_blank');
    cy.get('footer a').last().then(($a) => {
      const href = $a.attr('href');
      expect(href).to.match(/^https:\/\/www\.github\.com\/\w+$/);
      cy.wrap($a).should('have.attr', 'target', '_blank');
    });
  
  });

  it('should use the correct font family', () => {
    cy.get('body').should('have.css', 'font-family', 'Outfit, sans-serif');
  });
});
