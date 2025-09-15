# Portfolio Backend

Django REST API backend for Kevine Otieno's portfolio website.

## 🚀 Getting Started

### Prerequisites
- Python (v3.8 or higher)
- PostgreSQL (v12 or higher)
- pip

### Installation
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
```

### Configuration
```bash
cp env.example .env
# Edit .env with your database credentials
```

### Database Setup
```bash
python manage.py migrate
python manage.py createsuperuser
```

### Run Server
```bash
python manage.py runserver
```

## 🏗️ Tech Stack
- Django 4.2
- Django REST Framework
- PostgreSQL
- CORS headers
- Python Decouple

## 📁 Structure
- `portfolio/` - Main Django app
  - `models.py` - Database models
  - `views.py` - API views
  - `serializers.py` - DRF serializers
  - `urls.py` - URL routing
  - `admin.py` - Django admin configuration

## 🔧 API Endpoints
- `GET /api/profile-summary/` - Get profile summary
- `GET /api/projects/` - List projects
- `GET /api/skills/` - List skills
- `GET /api/experiences/` - List experiences
- `POST /api/send-message/` - Send contact message

## 🗄️ Models
- **Profile** - Personal information
- **Project** - Portfolio projects
- **Skill** - Technical skills
- **Experience** - Work experience
- **ContactMessage** - Contact form messages
