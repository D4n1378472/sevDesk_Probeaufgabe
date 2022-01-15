describe('Menu Test', () => {
    const baseUrl = 'http://localhost:4200/';
    it('Visits Dashboard', () => {
        cy.visit('/');
        cy.location().should(loc => {
            expect(loc.toString()).to.eq(baseUrl + 'dashboard');
        })
    })

    describe('Opens all views', () => {
        it('visits details', () => {
            cy.get('[routerlink="details"] > .mat-button-wrapper').click().then(() => {
                cy.location().should(loc => {
                    expect(loc.toString()).to.eq(baseUrl + 'details');
                })
            })
        });
        it('visits converter', () => {
            cy.get('[routerlink="converter"] > .mat-button-wrapper').click().then(() => {
                cy.location().should(loc => {
                    expect(loc.toString()).to.eq(baseUrl + 'converter');
                })
            })
        });
        it('visits diagram', () => {
            cy.get('[routerlink="diagram"] > .mat-button-wrapper').click().then(() => {
                cy.location().should(loc => {
                    expect(loc.toString()).to.eq(baseUrl + 'diagram');
                })
            })
        });
        it('visits my', () => {
            cy.get('[routerlink="my"] > .mat-button-wrapper').click().then(() => {
                cy.location().should(loc => {
                    expect(loc.toString()).to.eq(baseUrl + 'my');
                })
            })
        });
        it('visits dashboard', () => {
            cy.get('[routerlink="dashboard"] > .mat-button-wrapper').click().then(() => {
                cy.location().should(loc => {
                    expect(loc.toString()).to.eq(baseUrl + 'dashboard');
                })
            })
        });
    });
})