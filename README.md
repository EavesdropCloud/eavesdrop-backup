# Eavesdrop Cloud

Eavesdrop is a web application developed with DJs in mind - store your music files and access them from anywhere. \
There are four containers which will be deployed upon build - frontend, backend, database, and MongoDB. \
The frontend is developed using React and Next.js in Typescript. Users can upload their files, view them, and download them. \
The backend is developed using Express. It handles the files, REST API calls, and allows for CRUD operations.  \
The database container uses MongoDB to store and manage the user's files. \
The Mongo Express container allows administrative access to the database server on http://localhost:8081/.


## Getting started

### Dependencies
Visual Studio Code
- including remote developer extension pack

Docker daemon for your platform

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

### 2. Open dev container

```
code .
```

When prompted, select Reopen in Container.

Alternatively, using the command pallete: Dev Containers: Rebuild and Reopen in Container

### 3. Start the development server

In container bash run:
```
turbo dev
```

### 4. Visit the web application

Navigate to http://localhost:3030/ to view the frontend application.

### 5. Test build

Ensure app_network is present:
```
docker network create app-network
```

From /workspace/eavesdrop:
```
docker compose build
```

### 6. All ok?

Merge any changes into main for automatic deployment.

Navigate to www.eavesdrop.cloud to view live application.

## Development

Source code is mounted at /workspace/eavesdrop within the dev container.
