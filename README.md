# University Search
Find your school<br>

<img width="1432" alt="Bingo-still" src="https://user-images.githubusercontent.com/75143561/149198550-fb69ce58-c7e4-401b-ae50-a031e499b141.png">

## Table of Contents
  - [Visit the App!](#visit-the-app!)
  - [Abstract](#abstract)
  - [Code Architecture](#code-architecture-/technologies)
  - [Illustrations](#illustrations)
  - [Local Install + Setup](#local-install-+-setup)
  - [Contributors](#contributors)
  - [Wins](#wins)
  - [Challenges + Improvements](#challenges-+-Improvements)
  - [Project Specs](#project-specs)

## Visit the App!
  - Visit the deployed app [here](https://university-search-amk.surge.sh/)!

## Abstract
  - This application uses data.gov's College Scorecard API to allow prospective students to find Universities by state and enrollment size. 
  - After entering the search parameters, students can view a few stats about the school and link to the University's homepage.
  - Students can bookmark schools they're interested in. Saved schools persist on reload via localStorage.

## Code Architecture / Technologies
  - Javascript / CSS / HTML
  - React
  - Router
  - Cypress
  - Surge

## Illustrations

https://user-images.githubusercontent.com/75143561/149198193-a874deeb-517f-40d6-88f3-855aba3b45e6.mp4

## Install + Setup
  - If you'd like to run this repo locally, clone it down to your machine:
  - `git clone git@github.com:annamkummer/showcase-mod3.git`
  - `cd showcase-mod3`
  - Then, install the necessary dependencies:
  - `npm install`

## Contributors
  - [Anna Kummer](https://github.com/annamkummer)

## Wins

  - Allowing users to bookmark via localStorage
  - Testing 500 errors without controlling the API using stubbing in Cypress
  - Deploying with Surge

## Challenges + Improvements

  - College Scorecard has tons of data that would be interesting to prospective students. While this application focused on just a few stats that weren't available on other college search platforms, a potential enhancement would be to tailor datapoints to specific user types. For example, some students might be more interested in student loan debt data or number of Engineering degrees awarded...

## Project Specs
  - The project spec & rubric can be found [here](https://frontend.turing.edu/projects/module-3/showcase.html).
