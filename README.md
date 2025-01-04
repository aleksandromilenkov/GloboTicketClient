# GloboTicketClient
<p style="font-family: 'Roboto', sans-serif">Welcome to the GloboTicketClient, the frontend application for the GloboTicket Ticket Management System. This project serves as the client-side interface for the GloboTicket backend , which is implemented with Clean Architecture. For more details about the backend, visit the <a href="https://github.com/aleksandromilenkov/GloboTicketCleanArchitecture">  GloboTicket Ticket Management Backend Repository </a> </p>.

### Table of Contents
- Features
- Technologies and Packages
- Setup and Installation
- Usage
- Screenshots
- License
### Features
- User Authentication:
   - Register and log in to access the application.
- Event Management:
   - View all events on the Events page.
   - Sort events by category on the Categories page.
   - Edit and delete events.
   - Export events to an Excel file.
- Modern UI:
   - Responsive and user-friendly interface using Styled Components.
- State Management:
   - Centralized state with Redux Toolkit and React Query for efficient API data fetching and caching.
## Technologies and Packages
This application is built with the following technologies and libraries:

### Core Frameworks and Tools
  - React: UI development library.
  - TypeScript: Type-safe JavaScript for improved developer experience.
  - React Router DOM: Declarative routing for React applications.
### State Management
  - Redux Toolkit: Simplified state management with less boilerplate.
  - React Query: Powerful data-fetching and caching.
### Form Management
   - React Hook Form: Lightweight library for form handling.
   - Yup: Schema validation for form inputs.
### Styling
   - Styled Components: CSS-in-JS styling for React components.
   - Font Awesome: Icons for a better visual experience.
### Utilities
   - Axios: HTTP client for API requests.
   - JWT Decode: Decoding JSON Web Tokens.
   - React Hot Toast: Toast notifications.
## Project Setup

### Prerequisites

- Node.js and npm (or yarn)

### Installation

1. Clone the repository:
   ```bash
   git clone [https://your-repo-url.git](https://github.com/aleksandromilenkov/GloboTicketClient.git)
   cd your-repo-folder
### Install Depencencies:

    npm install 

### Start Development Server:

    npm start

### Available Scripts

npm start: Runs the app in the development mode.  
npm run build: Builds the app for production.  
npm test: Runs the test suite.  
npm run eject: Ejects the configuration (not reversible).  

Open your browser and navigate to http://localhost:3000.


## Usage
  - Register: Create a new account to access the application.
  - Login: Use your credentials to log in.
- Explore Features:
   -Navigate to the Events page to view all available events.
   -Visit the Categories page to sort events by category.
   -Edit or delete events as needed.
   -Export event data to an Excel file for further analysis.


### Screenshots

1. Home Page when not logged in:
![HomePageNotLoggedIn](https://github.com/user-attachments/assets/ab0cc315-7934-4d2c-8019-9dff786c077f)

2. Register Page:
![RegisterPage](https://github.com/user-attachments/assets/49b0fb9a-f21f-4f9f-9eea-dcb03a8440ec)

3. Login Page:
   ![LoginPage](https://github.com/user-attachments/assets/6c6836b5-43e2-45a1-a1f1-8b9174d24842)

4. Home Page when logged in:
![HomePageLogedIn](https://github.com/user-attachments/assets/ce5662a7-8117-4cea-9cc6-6d6e5e7b4fc8)

5. Events Page:
   ![EventsPage](https://github.com/user-attachments/assets/b7d9989f-e4d7-40b9-a1f7-98c4bc76d2ab)

6. Add New Event:
 ![AddEvent](https://github.com/user-attachments/assets/a58e4ff9-b40f-425b-96dd-b5e70

7. Edit Event:
   ![EditEvent](https://github.com/user-attachments/assets/944368d0-d7a8-41ba-824b-5165a53ddfd8)

8. Categories Page:
![Categories](https://github.com/user-attachments/assets/9f34121f-6c04-4fb8-ac8f-5ce8b2ccbd51)

9. Create New Category:
 ![CreateCategory](https://github.com/user-attachments/assets/586e30ad-fcd1-4556-ac2b-788110f8f286)


### License
 This project is licensed under the MIT License. See the LICENSE file for details.

