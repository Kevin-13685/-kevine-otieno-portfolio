# Portfolio Deployment Guide

This guide will help you deploy your portfolio to Vercel (frontend) and Railway (backend).

## 🚀 Deployment Steps

### 1. Backend Deployment (Railway)

#### Step 1: Prepare Repository
1. Push your code to GitHub
2. Make sure the `backend/` folder is in your repository root

#### Step 2: Deploy to Railway
1. Go to [Railway.app](https://railway.app)
2. Sign up/login with GitHub
3. Click "New Project" → "Deploy from GitHub repo"
4. Select your repository
5. Choose the `backend` folder as the root directory

#### Step 3: Configure Environment Variables
In Railway dashboard, go to Variables tab and add:

```
SECRET_KEY=your-super-secret-key-here
DEBUG=False
EMAIL_HOST_USER=kelvinaremo2016@gmail.com
EMAIL_HOST_PASSWORD=your-app-password-here
DEFAULT_FROM_EMAIL=kelvinaremo2016@gmail.com
```

#### Step 4: Add PostgreSQL Database
1. In Railway dashboard, click "New" → "Database" → "PostgreSQL"
2. Railway will automatically set the database environment variables
3. Redeploy your application

#### Step 5: Get Your Backend URL
After deployment, Railway will provide a URL like: `https://your-app-name.railway.app`

### 2. Frontend Deployment (Vercel)

#### Step 1: Deploy to Vercel
1. Go to [Vercel.com](https://vercel.com)
2. Sign up/login with GitHub
3. Click "New Project" → Import your repository
4. Set the root directory to `frontend`
5. Vercel will auto-detect it's a Vite project

#### Step 2: Configure Environment Variables
In Vercel dashboard, go to Settings → Environment Variables and add:

```
VITE_API_BASE_URL=https://your-railway-app-url.railway.app
```

Replace `your-railway-app-url` with your actual Railway URL.

#### Step 3: Deploy
Click "Deploy" and Vercel will build and deploy your frontend.

### 3. Update CORS Settings

After both deployments, update your Railway environment variables:

```
CORS_ALLOWED_ORIGINS=https://your-vercel-app.vercel.app
```

Replace `your-vercel-app` with your actual Vercel URL.

## 🔧 Local Development

### Frontend
```bash
cd frontend
npm install
npm run dev
```

### Backend
```bash
cd backend
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

## 📝 Important Notes

1. **Environment Variables**: Make sure to set all required environment variables in both platforms
2. **Database**: Railway will automatically provide PostgreSQL database credentials
3. **CORS**: Update CORS settings after getting your frontend URL
4. **Email**: You'll need to set up Gmail App Password for the contact form
5. **Custom Domain**: Both platforms support custom domains (paid features)

## 🐛 Troubleshooting

### Common Issues:
1. **CORS Errors**: Make sure CORS_ALLOWED_ORIGINS includes your frontend URL
2. **Database Connection**: Check that PostgreSQL environment variables are set
3. **Build Failures**: Check that all dependencies are in requirements.txt
4. **Email Not Working**: Verify Gmail App Password is correct

### Useful Commands:
```bash
# Check Railway logs
railway logs

# Check Vercel deployment logs
vercel logs

# Test API locally
curl http://localhost:8000/api/profile-summary/
```

## 🎉 Success!

Once deployed, your portfolio will be live at:
- Frontend: `https://your-app.vercel.app`
- Backend API: `https://your-app.railway.app/api/`

Remember to update any hardcoded URLs in your code!
