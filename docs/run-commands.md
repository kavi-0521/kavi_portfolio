# Run Commands Guide

This document lists all terminal commands needed to run this project.

## 1) Open Project

From terminal:

```powershell
cd d:\workspace\portfolio
```

## 2) Install Dependencies

Install all workspace dependencies from root:

```powershell
npm install
```

## 3) Configure Environment (Server)

Create a `.env` file in `server` folder.

Copy values from `server/.env.example`:

```env
PORT=5000
CLIENT_ORIGIN=http://localhost:5173
MONGODB_URI=
```

Notes:
- Keep `MONGODB_URI` empty if you want to run with seeded in-memory portfolio data.
- Set `MONGODB_URI` to a real MongoDB connection string if you want database mode.

## 4) Run App (Frontend + Backend together)

From root:

```powershell
npm run dev
```

Expected:
- Frontend: http://localhost:5173
- Backend API: http://localhost:5000

## 5) Run Frontend Only

From root:

```powershell
npm run dev:client
```

## 6) Run Backend Only

From root:

```powershell
npm run dev:server
```

## 7) Build for Production

From root:

```powershell
npm run build
```

## 8) Lint Check

From root:

```powershell
npm run lint
```

## 9) Preview Built Frontend

After building, run:

```powershell
npm run preview --workspace client
```

## 10) Start Backend in Production Mode

```powershell
npm run start --workspace server
```

## 11) Useful Troubleshooting Commands

Reinstall dependencies cleanly:

```powershell
Remove-Item -Recurse -Force node_modules
Remove-Item -Recurse -Force client\node_modules
Remove-Item -Recurse -Force server\node_modules
npm install
```

Check which process is using port 5173 or 5000:

```powershell
netstat -ano | findstr :5173
netstat -ano | findstr :5000
```

Stop Node processes (if stuck):

```powershell
taskkill /F /IM node.exe
```

## 12) API Quick Check

Health endpoint:

```powershell
curl http://localhost:5000/api/health
```

Portfolio data endpoint:

```powershell
curl http://localhost:5000/api/portfolio
```
