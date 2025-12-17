# Akshat Rastogi - Personal Portfolio

A modern, premium personal portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 **Dark Theme** with pink, purple, and blue accents
- ✨ **Animated Backgrounds**: Aurora mesh, particle field, noise overlay, and vignette
- 📱 **Fully Responsive**: Desktop sidebar navigation, mobile bottom navigation
- ⌨️ **Command Palette**: Press `Cmd+K` (Mac) or `Ctrl+K` (Windows) to search and navigate
- 🎭 **Smooth Animations**: Framer Motion for transitions and micro-interactions
- 📊 **Data-Driven**: All content managed through TypeScript data files
- 🚀 **Modern Stack**: Next.js 14 (App Router), TypeScript, Tailwind CSS

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm, yarn, or pnpm

### Installation

Install dependencies:

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:3000`

### Build

Build for production:

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Main page with module routing
│   └── globals.css         # Global styles and theme tokens
├── components/
│   ├── BackgroundSystem.tsx    # Background components wrapper
│   ├── AuroraBackground.tsx     # Animated aurora mesh
│   ├── ParticlesBackground.tsx # Particle field
│   ├── SidebarNav.tsx           # Desktop navigation
│   ├── BottomNav.tsx            # Mobile navigation
│   ├── CommandPalette.tsx       # Cmd+K command palette
│   ├── OverviewPanel.tsx        # Overview module
│   ├── ProjectGallery.tsx       # Projects module
│   ├── ProjectDrawer.tsx        # Project detail drawer
│   ├── ExperienceTimeline.tsx   # Experience module
│   ├── LeadershipPanel.tsx      # Leadership module
│   └── ContactPanel.tsx          # Contact module
├── data/
│   ├── projects.ts         # Project data
│   ├── experience.ts       # Work experience data
│   ├── skills.ts           # Technical skills
│   ├── education.ts         # Education and certifications
│   └── leadership.ts       # Leadership experience
├── public/                 # Static assets
└── package.json            # Dependencies
```

## Customization

### Adding Projects

Edit `data/projects.ts` to add new projects. Include:
- Project details (name, description, problem, solution)
- Media (images/videos) - place in `public/` folder
- Technologies used
- Links (website, GitHub, App Store)

### Updating Experience

Edit `data/experience.ts` to update work experience.

### Modifying Theme

Theme tokens are defined in `app/globals.css`. Update CSS variables:
- `--bg-0`, `--bg-1`: Background colors
- `--panel`, `--panel-2`: Glass panel colors
- `--text`, `--muted`: Text colors
- `--blue`, `--purple`, `--pink`, `--orange`: Accent colors

## Technologies Used

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **Framer Motion** - Animation library
- **react-tsparticles** - Particle effects
- **lucide-react** - Icon library

## GitHub Stats

This project includes a GitHub Actions workflow that automatically counts lines of code across all your public repositories.

### Setup

1. **Create a GitHub Personal Access Token (PAT)**:
   - Go to GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)
   - Generate a new token with `repo` scope
   - Copy the token

2. **Add the token as a secret**:
   - Go to your repository → Settings → Secrets and variables → Actions
   - Click "New repository secret"
   - Name: `GH_PAT`
   - Value: Your GitHub token

3. **The workflow will**:
   - Run weekly (every Sunday at midnight UTC)
   - Clone all your public repositories
   - Count total lines of code using `cloc`
   - Save the result to `public/github-stats-simple.json`
   - Commit and push the updated file

4. **Manual trigger**:
   - You can also manually trigger the workflow from the Actions tab

The frontend will automatically fetch and display the latest stats from this file.

## License

Personal portfolio - All rights reserved

