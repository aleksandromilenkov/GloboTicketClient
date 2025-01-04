GloboTicketClient
Welcome to the GloboTicketClient, the frontend application for the GloboTicket Ticket Management System. This project serves as the client-side interface for the GloboTicket backend, which is implemented with Clean Architecture. For more details about the backend, visit the GloboTicket Ticket Management Backend Repository.

Table of Contents
Features
Technologies and Packages
Setup and Installation
Usage
Screenshots
Contributing
License
Features
User Authentication: Register and log in to access the application.
Event Management:
View all events on the Events page.
Sort events by category on the Categories page.
Edit and delete events.
Export events to an Excel file.
Modern UI: Responsive and user-friendly interface using Styled Components.
State Management: Centralized state with Redux Toolkit and React Query for efficient API data fetching and caching.
Technologies and Packages
This application is built with the following technologies and libraries:

Core Frameworks and Tools
React: UI development library.
TypeScript: Type-safe JavaScript for improved developer experience.
React Router DOM: Declarative routing for React applications.
State Management
Redux Toolkit: Simplified state management with less boilerplate.
React Query: Powerful data-fetching and caching.
Form Management
React Hook Form: Lightweight library for form handling.
Yup: Schema validation for form inputs.
Styling
Styled Components: CSS-in-JS styling for React components.
Font Awesome: Icons for a better visual experience.
Utilities
Axios: HTTP client for API requests.
JWT Decode: Decoding JSON Web Tokens.
React Hot Toast: Toast notifications.
Testing
React Testing Library: Testing utilities for React components.
Jest DOM: Matchers for testing DOM nodes.
Setup and Installation
Follow these steps to run the GloboTicketClient on your local machine:

Prerequisites
Node.js (v18 or higher)
npm or yarn package manager
Steps
Clone the repository:
bash
Copy code
git clone https://github.com/aleksandromilenkov/GloboTicketClient.git
Navigate to the project directory:
bash
Copy code
cd GloboTicketClient
Install dependencies:
bash
Copy code
npm install
Create an .env file in the root directory and configure the environment variables. Example:
bash
Copy code
REACT_APP_API_BASE_URL=https://localhost:7052/api
Start the development server:
bash
Copy code
npm start
Open your browser and navigate to http://localhost:3000.
Usage
Register: Create a new account to access the application.
Login: Use your credentials to log in.
Explore Features:
Navigate to the Events page to view all available events.
Visit the Categories page to sort events by category.
Edit or delete events as needed.
Export event data to an Excel file for further analysis.
Screenshots
Add screenshots of key features or pages (e.g., Events page, Categories page, Login screen) to showcase the application visually.

Contributing
Contributions are welcome! If you'd like to contribute:

Fork the repository.
Create a feature branch:
bash
Copy code
git checkout -b feature/YourFeatureName
Commit your changes:
bash
Copy code
git commit -m "Add YourFeatureName"
Push to your branch:
bash
Copy code
git push origin feature/YourFeatureName
Open a pull request.
License
This project is licensed under the MIT License. See the LICENSE file for details.

