# CSV Enrichment App

A full-stack app that allows users to upload CSV files and enrich them via a backend API.

## Background
The project was built as part of the Adverity Full-Stack challenge, where users are expected to:
- Upload CSV files through a React frontend
- Process those files in a Django backend
- View the list of uploaded files
- Enrich the data via a custom API

## Features

- Upload CSV files via browser
- Backend API for storing and enriching data
- Celery worker with Redis for async processing
- Dockerized for easy local setup
- Modern clean UI with plain CSS

---
## Run Locally (Docker)

### 1. Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/csv-enrichment-app.git
cd csv-enrichment-app

### 2. Run Method:

#### Frontend(React)

```bash
cd frontend
npm install
npm start

#### Backend (Django + Celery + Redis)

```bash
docker-compose up --build


### 3. Unit test:

#### Backend 

```bash
docker-compose exec backend python manage.py test

#### Frontend 

```bash
cd frontend
npm test

