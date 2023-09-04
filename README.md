# Eavesdrop Cloud

Eavesdrop is a web application developed with DJs in mind - store your music files and access them from anywhere.* \
There are four containers which will be deployed upon build - frontend, backend, database, and MongoDB. \
The frontend is developed using React and Next.js in Typescript. Users can upload their files, view them, and download them. \
The backend is developed using Express. It handles the files, REST API calls, and allows for CRUD operations.  \
The database container uses MongoDB to store and manage the user's files. \
The Mongo Express container allows administrative access to the database server on http://localhost:8081/.

**cloud based storage not implemented yet* 

## Getting started

### 1. Clone the repo
```
git clone https://github.com/EavesdropCloud/eavesdrop.git && \
cd eavesdrop
```
or
```
git clone git@github.com:EavesdropCloud/eavesdrop.git && \
cd eavesdrop
```

### 2. Move test data
Copy the test data to a new folder at the root of the project named backend-uploads

```
mkdir backend-uploads && \
cp backend-test-data/* backend-uploads
```

### 3. Create frontend env file

Create a .env.local file within the frontend directory. An example .env.local file is provided:
```
cp frontend/.env.local.example frontend/.env.local
```

### 4. Start the development containers
```
docker compose up -d --build
```

### 5. Visit the web application

Navigate to http://localhost:3000/ to view the frontend application.

### 6. (Recommended) VS Code Configuration

Install the remote development extension pack to edit source code using container environment and dependencies.

## Development

Source code is mounted at /app within the containers.
