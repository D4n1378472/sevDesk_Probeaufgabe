describe('My First Test', () => {
    const baseUrl = 'http://localhost:4200/';
    it('Visits Dashboard', () => {
        cy.visit('/');
        cy.location().should(loc => {
            expect(loc.toString()).to.eq(baseUrl + 'dashboard');
        })
    })

    it('Checks count of Widgets', () => {
        cy.get('.mat-card').then(cards => {
            assert.equal(cards.length, 5, '5 cards are shown');
        });
    });

    it('Checks position of Widget EUR', () => {
        cy.get(':nth-child(1) > .mat-card').contains('EUR');
    });
})
