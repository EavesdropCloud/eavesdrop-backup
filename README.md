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

### 5. (Recommended) VS Code Configuration

Install the remote development extension pack to edit source code using container environment and dependencies.

## Development

Source code is mounted at /app within the containers.
