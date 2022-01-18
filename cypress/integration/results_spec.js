describe('Results page user flow', () => {
    
    it('When the user visits the results page, the heading should list the number of results for their search.', () => {
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
        cy.get('.heading').contains('3')
    })
    
    it('If the search results are not available when the user goes to the results page, they should see an error message.', () => {
        cy.intercept('GET',  `https://api.data.gov/ed/collegescorecard/v1/schools.json?school.state=&fields=id,school.name,latest.student.size,school.school_url,latest.student.demographics.women,latest.completion.6_yr_completion.overall,latest.completion.title_iv.male.completed_by.6yrs,latest.completion.title_iv.female.completed_by.6yrs,school.degrees_awarded.highest&per_page=100&page=0&api_key=AXpPzlNYnYWUogjB0Pr2hI7tbcHW3E1TLNYLazbn`, {
            statusCode: 500,
            ok: false,
            statusText: 'Error',
        })
        cy.visit('localhost:3000/results')
        cy.get('.heading').contains('There was an issue')
    })
    
    it('If their search yields results, they should see a section for each school.', () => {
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
        cy.get('.school').should('have.length', 3)
        cy.get('.school-name').first().contains('University of Colorado Denver/Anschutz Medical Campus')
    })

    it('If their search does not yield results, they should see a message letting them know.', () => {
        let schools = { results: [] }
        cy.intercept('GET',  `https://api.data.gov/ed/collegescorecard/v1/schools.json?school.state=&fields=id,school.name,latest.student.size,school.school_url,latest.student.demographics.women,latest.completion.6_yr_completion.overall,latest.completion.title_iv.male.completed_by.6yrs,latest.completion.title_iv.female.completed_by.6yrs,school.degrees_awarded.highest&per_page=100&page=0&api_key=AXpPzlNYnYWUogjB0Pr2hI7tbcHW3E1TLNYLazbn`, {
            statusCode: 200,
            ok: true,
            body: schools
        })
        cy.visit('localhost:3000/results')
        cy.get('.schools').contains('There are no schools that match that search. Please try again!')
    })

    it('User should be able to bookmark a school using the bookmark icon. Bookmark status should persist on refresh.', () => {
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
                "id": 126562,
                "isBookmarked": false
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
                "id": 126580,
                "isBookmarked": false
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
                "id": 127565,
                "isBookmarked": false
            }
        ]}
        cy.intercept('GET',  `https://api.data.gov/ed/collegescorecard/v1/schools.json?school.state=&fields=id,school.name,latest.student.size,school.school_url,latest.student.demographics.women,latest.completion.6_yr_completion.overall,latest.completion.title_iv.male.completed_by.6yrs,latest.completion.title_iv.female.completed_by.6yrs,school.degrees_awarded.highest&per_page=100&page=0&api_key=AXpPzlNYnYWUogjB0Pr2hI7tbcHW3E1TLNYLazbn`, {
            statusCode: 200,
            ok: true,
            body: schools
        })
        cy.visit('localhost:3000/results')
        cy.get('.bookmark').first().click()
        cy.reload()
        cy.get('.fill')
    })

    it('From the results screen, they should be able to navigate back to the home screen via the edit button.', () => {
        let schools = { results: [] }
        cy.intercept('GET',  `https://api.data.gov/ed/collegescorecard/v1/schools.json?school.state=&fields=id,school.name,latest.student.size,school.school_url,latest.student.demographics.women,latest.completion.6_yr_completion.overall,latest.completion.title_iv.male.completed_by.6yrs,latest.completion.title_iv.female.completed_by.6yrs,school.degrees_awarded.highest&per_page=100&page=0&api_key=AXpPzlNYnYWUogjB0Pr2hI7tbcHW3E1TLNYLazbn`, {
            statusCode: 200,
            ok: true,
            body: schools
        })
        cy.visit('localhost:3000/results')
        cy.get('.edit-btn').click()
        cy.url().should('not.include', 'results')
    })
})

