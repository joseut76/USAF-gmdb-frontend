describe("Home page", () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it("contains a form with fields 'Title Search' after clicking the 'search-movie' button", () => {
        const searchMovieButton = cy.get('#search-movie')

        expect(cy.get('input[name="newSearch"]')).toExist()
    })

    it("searching for movie title yields search results", () => {
        cy.get('input[name="newSearch"]')
            .type('The Godfather')
            .should("have.value", "The Godfather");
        cy.contains('The Godfather')
    })

})

// Get an input, type into it and verify that the value has been updated
//cy.get('.action-email')
//.type('fake@email.com')
//.should('have.value', 'fake@email.com')


// describe('Testing Wikipedia', () => {
//     it('A user can search for a word', () => {
//         cy.visit('https://wikipedia.org');
//         cy.get('.other-project-link')
//             .eq(2)
//             .click();
//         cy.url().should('equal', 'https://www.wiktionary.org/');
//         cy.get('#searchInput').type(Svelte{enter}');
//         cy.contains('Etymology');
//         cy.contains('svelte');
//     });
// });
