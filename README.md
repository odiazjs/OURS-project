# OURS-project
A monorepo for a GraphQL API and Client using SST

## Requirements
- An aws account configured to us-east-1 region
- Aws credentials containing accessKey and secretKey
    - You can generate one in your or create a .env with the following values
        - #### AWS_ACCESS_KEY_ID={value} AWS_SECRET_ACCESS_KEY={value}   

## Installation

- In the root (outside both folders, client/server) run "yarn install"

## Running the project

- In the root  (outside both folders, client/server) run "yarn dev"
    - This will spin up the server using serverless-offline and react app
        - Server in localhost:3000 and react app in localhost:3001
