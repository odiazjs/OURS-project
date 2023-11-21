# OURS-Project

A monorepo for a GraphQL API and Client using Serverless Stack (SST).

## Requirements

Before starting, ensure you have the following:

- An AWS account configured for the `us-east-1` region.
- AWS credentials with an access key and secret key. These can be generated in your AWS account. Alternatively, create a `.env` file at the root of your project with the following content:
  
  ```plaintext
  AWS_ACCESS_KEY_ID=your_access_key_id
  AWS_SECRET_ACCESS_KEY=your_secret_access_key
    ```
    
## Installation
To set up the project:

- Navigate to the root directory of the project (outside the client and server directories).
- Run the following command to install dependencies:

  ```plaintext
    yarn install
    ```
    
## Running the Project
- To run both the server and client applications:
- In the root directory, execute:

     ```plaintext
    yarn dev
    ```
### This command will start the server using serverless-offline and the React app:
```plaintext
    Server: http://localhost:3000
    React App: http://localhost:3001
```

### Deploying
- /server and yarn deploy (serverless framework)
- /client/react-app/packages/rx and yarn deploy (SST static site)