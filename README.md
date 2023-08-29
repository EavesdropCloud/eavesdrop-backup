## Getting started

### 1. Clone the repo
```
git clone https://github.com/EavesdropCloud/eavesdrop.git && \
cd eavesdrop
```

### 2. Create frontend env file

Create a .env.local file within the frontend directory. An example .env.local file may contain:
```
BACKEND_API_BASE = "http://eavesdrop-backend-1:5000/api/"
```

### 3. Start the development containers
```
docker compose up -d --build
```

### 4. (Recommended) VS Code Configuration

Install the remote development extension pack to edit source code using container environment and dependencies.

## Development

Source code is mounted at /app within the containers.