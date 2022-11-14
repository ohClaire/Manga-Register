# [Manga Register](https://github.com/ohClaire/Manga-Register)

## Overview
This app will help avid manga readers find something new to read. Browse the collection of 60 manga with different genres, then bookmark all the manga you're interested in reading.

https://user-images.githubusercontent.com/103966650/200353264-3fee24b1-1e38-4bb3-a201-791d6178d053.gif](https://user-images.githubusercontent.com/94808267/201557784-52af4ec6-cb4f-4b77-b32b-ed53e4f63583.mov


## Project Context

This app was completed in Week 17 of the Turing program. The purpose of this project was to demonstrate mastery of the following:
- React
- Router
- Asynchronous JavaScript
- End to end testing with Cypress

Requirements for this project included:
- Create niche audience personas 
- Display the data from the API in a way that applies directly to a niche audience
- Ability for users to store/manipulate the data displayed in the application, such as favoriting or adding to a list, searching, commenting, etc
- Multiple views handled by Router
- Be deployed using Heroku, Surge, or any other similar service


[Project Spec](https://frontend.turing.edu/projects/module-3/showcase.html) | [Project Wireframe](https://www.figma.com/file/tIuRIM9rb6eq8gWRGrhr07/Showcase-Solo-Proj?node-id=0%3A1) | [Project Repo](https://github.com/ohClaire/Manga-Register)

## Setup
If you'd like to pull down the code to your local machine:

- Make a copy of this repository by pressing the 'Fork' button in the upper right corner and following the prompts
- Clone your copy of the repository down to your local machine:
  - On your forked repository's page, click the green 'Code' button, select SSH, and copy the URL
  - Run `git clone <copied URL>` in your command line
- `cd` into the root directory
- Run `npm install` in your command line to install the necessary dependencies

## Deployment
This [project](https://manga-register.vercel.app/) was deployed through Vercel.

**NOTE**: [MangaDex API](https://api.mangadex.org/docs/guide/get-chapters/#request-3) has a CORS policy that does not allow hotlinking of images. This means is that when I deployed my page, the server blocked this website from accessing its data. It does allow to proxy the images. I found a free proxy service called [cors.sh](https://cors.sh/) that makes this easy. However, cors.sh requires I make an account and generate an API key to use their service. I found this out last minute so I did not get a chance to make the request in time for submission.

## Technologies Used
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Cypress](https://img.shields.io/badge/Cypress-17202C?style=for-the-badge&logo=cypress&logoColor=white)
![Redux](https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

## Dev Notes
### Learning Goals
- My plan for this Showcase project was to maximize my learning while sticking to the MVP. I chose to manipulate my data through favoriting/bookmarking because I wanted to cater to my niche audience the ability to save manga they want to come back. I chose to apply the tech stacks I learned in this module: TypeScript and Redux. I found that writing my code in TypeScript had many benefits, which included precise defining of variables, functions, and returned values throughout the application; reference validation; project scalability; helpful type errors when passing props between components. Having a centralized storage for my bookmarkedMangaIds through Redux helped me manage my app's state in a single place, enable easy access by different components, and keep bookmarked changes predictable and traceable.  

### Wins/Successes
- Writing in TypeScript and debugging TypeScript errors
- Implementing App Architecture in the context of React-Router
- Providing error handling pages that can be routed to
- Refactoring components for better scalability
- Applying new React hooks: useParams, useMemo
- Small application of Redux for some global state management
- Cypress testing of happy and sad paths for different views

### Challenges
- Learning and applying Redux: to finish this project in time, I only applied Redux when checking the status of which manga are bookmarked
- Slugging URL for readability and routing purposes 
- Cypress testing bookmark buttons to check icon src or class
- Using proxy website for images from MangaDex API

## Contact
Hannah Celemen<br>
hcelemen@icloud.com<br>
[LinkedIn](https://www.linkedin.com/in/hannah-celemen/)<br>
[GitHub](https://github.com/ohClaire)

### Credits
Icons from [Icons8](https://icons8.com/)<br>
Manga data from [MangaDex](https://api.mangadex.org/docs/)
