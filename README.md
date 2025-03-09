# YU-GI-OH! Cards (CRUD)

This project was generated using
[Angular CLI](https://github.com/angular/angular-cli) version 19.1.5.

## Index

- [YU-GI-OH! Cards (CRUD)](#yu-gi-oh-cards-crud)
  - [Index](#index)
  - [About the project](#about-the-project)
  - [Technologies Used](#technologies-used)
  - [Project Structure](#project-structure)
    - [Created Components](#created-components)
    - [Backend](#backend)
    - [Future Improvements](#future-improvements)
  - [Reference](#reference)

## About the project

This project was developed with the goal of learning how to create a CRUD
(Create, Read, Update, Delete) in Angular 19. During development, concepts such
as routing, HTTP requests, interfaces, services, and standalone components were
explored.

## Technologies Used

- Angular 19
  - Routing
  - HttpClient
  - Interfaces
  - Services
  - Standalone Components
- json-server
- Puce CSS3 (for UI styling)

## Project Structure

The file structure is organized as follows:

```terminal
.
├── app/
│   ├── components/
│   ├── models
│   └── services
```

Files were generated using the Angular CLI.

### Created Components

- AddCardComponent: Form to add new cards.
- CardDetailComponent: Displays the details of a specific card.
- CardListComponent: Lists all registered cards.
- PageNotFoundComponent: Displayed when the requested route does not exist.
- UpdateCardComponent: Form to update an existing card.

### Backend

The backend used was json-server, which allows simulating a RESTful API with a
local database. The database is included in the project directory.

### Future Improvements

- Fix styling issues on some pages.
- Replace **json-server** with a real backend:
  - Database: **SQL Server** or **PostgreSQL**.
  - API developed in **.NET 8**.

## Reference

This project was inspired by the video
[#21 - Angular 19 Tutorials | Angular 19 CRUD Operations with JSON Server](https://youtu.be/1Cr4cS6JkYQ?si=SuOyalsr3kgP6Fn3),
from the [Angular 19 Tutorials](https://youtube.com/playlist?list=PLBz0Y_rVMoZi8a8bRsK4Vr3c2SFrmhhoL&si=-piv8oF-zmq68Hii)
playlist on the [FED Learning channel](https://www.youtube.com/@FEDLearning).
Additionally, I also studied the official Angular documentation to deepen my
understanding of the concepts.
