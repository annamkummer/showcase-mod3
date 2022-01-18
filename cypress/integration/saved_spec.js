describe('Results page user flow', () => {
    
    it('When the user visits the saved page, they should see all of their saved schools.', () => {
        let schools = { results: [
            {
                "latest.student.size": 11670,
                "latest.student.demographics.women": 0.5486,
                "latest.completion.6_yr_completion.overall": 2324,
                "latest.completion.title_iv.male.completed_by.6yrs": 0.531540847983,
                "latest.completion.title_iv.female.completed_by.6yrs": 0.56595431098,
                "school.name": "University of Colorado Denver/Anschutz Medical Campus",
                "school.school_url": "www.ucdenver.edu/",
                "school.degrees_awarded.highest": 4,
                "id": 126562
            },
            {
                "latest.student.size": 10221,
                "latest.student.demographics.women": 0.5203,
                "latest.completion.6_yr_completion.overall": 2154,
                "latest.completion.title_iv.male.completed_by.6yrs": 0.451953537487,
                "latest.completion.title_iv.female.completed_by.6yrs": 0.488815244408,
                "school.name": "University of Colorado Colorado Springs",
                "school.school_url": "https://www.uccs.edu/",
                "school.degrees_awarded.highest": 4,
                "id": 126580
            },
            {
                "latest.student.size": 18378,
                "latest.student.demographics.women": 0.5368,
                "latest.completion.6_yr_completion.overall": 5538,
                "latest.completion.title_iv.male.completed_by.6yrs": 0.287055142745,
                "latest.completion.title_iv.female.completed_by.6yrs": 0.355920831936,
                "school.name": "Metropolitan State University of Denver",
                "school.school_url": "www.msudenver.edu/",
                "school.degrees_awarded.highest": 4,
                "id": 127565
            }
        ]}
        cy.intercept('GET',  `https://api.data.gov/ed/collegescorecard/v1/schools.json?school.state=&fields=id,school.name,latest.student.size,school.school_url,latest.student.demographics.women,latest.completion.6_yr_completion.overall,latest.completion.title_iv.male.completed_by.6yrs,latest.completion.title_iv.female.completed_by.6yrs,school.degrees_awarded.highest&per_page=100&page=0&api_key=AXpPzlNYnYWUogjB0Pr2hI7tbcHW3E1TLNYLazbn`, {
            statusCode: 200,
            ok: true,
            body: schools
        })
        cy.visit('localhost:3000/results')
        cy.get('.bookmark').first().click()
        cy.get('.bookmark').last().click()
        cy.get('.edit-btn').click()
        cy.get('.view-saved-btn').click()
        cy.get('.school').should('have.length', 2)
        cy.get('.bookmark').last().click()
        cy.reload()
        cy.get('.school').should('have.length', 1)
    })
})

