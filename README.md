# Kishin Kumar - Personal Developer Portfolio

A modern, responsive, recruiter-optimized portfolio website built with **React, TypeScript, Tailwind CSS, and Lucide Icons**. Customized strictly around the academic qualifications, technical projects, certifications, and achievements of Kishin Kumar.

---

## 🌟 Features & Highlights

- **Recruiter 30-Second Hook**: Quick highlights showing CGPA (6.5), LeetCode consistency (50-Day badge / 65+ solved), and core tech stack.
- **Deep-Dive Projects Section**:
  - **DSA Tracker Tool**: 42 routes, SM-2 Spaced-Repetition algorithmic engine, 365-day contribution heatmap, CodeMirror 6 editor, Next.js 14 + MongoDB.
  - **Foot Step Power Generation**: Kinetic energy harvesting prototype with PZT piezoelectric sensors, Arduino Uno, 0.5V–3V ADC interfacing, and boolean hysteresis edge detection across 50+ test cases.
- **Categorized Technical Toolkit**: Programming Languages (C, C++, Python, TypeScript), Frontend/Web (Next.js, Tailwind), Databases (MongoDB, MySQL), Embedded Systems (Arduino, PZT sensors), and Version Control (Git, GitHub).
- **Milestones & Certifications**: LeetCode streak milestones with confetti animation and verified technical credentials.
- **Printable Resume / PDF Viewer**: Interactive modal with copyable plain text and formatted printable PDF view.
- **Dark / Light Mode**: Smooth theme switching with persistent local storage.
- **Direct Mail Composer & 1-Click Copy**: Instant copy for email (`glaksh098@gmail.com`) and phone (`+91-9286250826`).

---

## 🚀 How to Run Locally

### Prerequisites
- [Node.js](https://nodejs.org/) (version 18+ recommended)
- `npm` or `yarn` or `pnpm`

### Step 1: Open the Project Directory
```bash
cd C:\Users\Lakshy\.gemini\antigravity\scratch\kishin-portfolio
```

### Step 2: Install Dependencies (if not already installed)
```bash
npm install
```

### Step 3: Start the Local Development Server
```bash
npm run dev
```
Open `http://localhost:5173` in your browser to view your live portfolio.

### Step 4: Build for Production
```bash
npm run build
```
This generates a minified, high-performance static build in the `dist/` directory.

---

## 🌐 How to Deploy for Free (GitHub + Vercel)

### Option A: Deploy via Vercel (Recommended - 2 Minutes)
1. **Initialize Git Repository**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of Kishin Kumar Portfolio"
   ```
2. **Push to GitHub**:
   - Create a new public or private repository on [GitHub](https://github.com/new) named `kishin-portfolio`.
   - Push your local code:
     ```bash
     git remote add origin https://github.com/<your-username>/kishin-portfolio.git
     git branch -M main
     git push -u origin main
     ```
3. **Import to Vercel**:
   - Go to [vercel.com](https://vercel.com) and sign in with your GitHub account.
   - Click **"Add New Project"** and select `kishin-portfolio`.
   - Vercel will auto-detect Vite + React. Click **"Deploy"**.
   - Your website is now live worldwide with free SSL and lightning-fast global CDN!

---

## 🛠️ How to Customize Data

All portfolio data is centralized in a single typed configuration file:
`src/data/portfolioData.ts`

To update your social handles, LinkedIn URL, GitHub profile link, or add future projects:
1. Open `src/data/portfolioData.ts`
2. Update the `personalInfo`, `projects`, `skills`, or `education` objects.
3. Save the file – hot module reload will update your portfolio instantly!
