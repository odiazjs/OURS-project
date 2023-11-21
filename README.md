OURS-Project
A monorepo for a GraphQL API and Client using Serverless Stack (SST).

Requirements
Before you begin, ensure you have the following:

An AWS account configured for the us-east-1 region.

AWS credentials with an accessKey and secretKey. These can be generated in your AWS account. Alternatively, you can create a .env file at the root of the project with the following content:

plaintext
Copy code
AWS_ACCESS_KEY_ID=your_access_key_id
AWS_SECRET_ACCESS_KEY=your_secret_access_key
Installation
To set up the project, follow these steps:

Navigate to the root directory of the project (outside the client and server directories).

Run the following command to install dependencies:

bash
Copy code
yarn install
Running the Project
To run both the server and client applications:

In the root directory, execute the following command:

bash
Copy code
yarn dev
This command will start the server using serverless-offline and the React app:

The server will be available at http://localhost:3000.
The React app will be accessible at http://localhost:3001.