# IBM Bryan Low – Zero Downtime Rolling Update PoC

This Proof of Concept demonstrates how containerization enables **zero-downtime rolling upgrades** on a single host. The application simulates a typical microservice deployment with:

- A simple frontend UI
- A stateless backend API
- NGINX reverse proxy load balancing across versions

The PoC walks through upgrading the backend from version `v1` to `v2` while continuously serving user traffic — with **no service interruption**.

---

## Tech Stack

- **Frontend**: Static HTML + JavaScript (served via NGINX)
- **Backend**: Node.js + Express API (v1 and v2)
- **Proxy**: NGINX reverse proxy with dynamic upstreams
- **Containerization**: Docker + Docker Compose
- **Health Checks**: Dockerfile-based HTTP health probes

# 1. Clone or navigate to the project folder
- cd ibm-platform-poc

# 2. Start the app with only v1 backend
- docker-compose up -d --build

# 3. Open the app
- http://localhost:8080

# 4. Simulate upgrade
- duplicate backend folder and rename to backend-v2
- replace v1 with v2 in index.js for backend-v2
- uncomment backend-v2 code in yml file
- uncomment backend-v2 service code in nginx.conf file

# 5. Test availability during upgrade
- click simulate load / get version
- run docker-compose up -d --build
- run docker-compose restart proxy

# 6. Check version and simulate load, to show v1/v2

# 7. End upgrade by removing old backend, and test availbility of service during removal
- run docker stop backend (and click buttons on frontend)
- run docker rm backend (and click buttons on frontend)
