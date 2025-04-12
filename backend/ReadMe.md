# ByteVerseBackend

Here's a more detailed explanation of the backend steps and flow of programs:

Backend Steps
1. Install Node.js: Download and install Node.js from the official website.
2. Install npm: npm (Node Package Manager) comes bundled with Node.js, so you don't need to install it separately.
3. Install Dependencies: Run the command npm install in your project directory to install all dependencies listed in the package.json file.
4. Start the server: Run the command npm run start to start the server. This command is typically defined in the package.json file under the "scripts" section.

Directory Structure
The project has two top-level directories:

- models: This directory stores the database schema for the MongoDB database. It contains separate folders for each user type, such as:
    - admins: Defines the schema for admins and their corresponding features.
    - users: Defines the schema for users and their corresponding features.
    - volunteers: Defines the schema for volunteers and their corresponding features.
- utils: This directory stores utility functions and templates, including:
    - nodemailer-templates: Stores email templates for sending alerts and OTPs.

index.js
The index.js file is the primary entry point of the application. It:

- Sets up the server: Creates an Express.js server and configures it to listen on a specific port.
- Defines routes: Defines routes for different endpoints, such as user registration, login, and volunteer management.
- Implements authentication and authorization: Uses middleware functions to authenticate and authorize users, ensuring that only authorized users can access certain routes.