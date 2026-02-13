# package.json

```json
{
  "name": "governance-docs-site",
  "version": "1.0.0",
  "description": "Enterprise Governance Framework Documentation",
  "keywords": [
    "governance",
    "cobit",
    "risk-management",
    "compliance",
    "docusaurus"
  ],
  "scripts": {
    "docusaurus": "docusaurus",
    "start": "docusaurus start",
    "build": "docusaurus build",
    "swizzle": "docusaurus swizzle",
    "deploy": "docusaurus deploy",
    "clear": "docusaurus clear",
    "serve": "docusaurus serve",
    "write-translations": "docusaurus write-translations",
    "write-heading-ids": "docusaurus write-heading-ids"
  },
  "dependencies": {
    "@docusaurus/core": "^3.1.0",
    "@docusaurus/preset-classic": "^3.1.0",
    "@mdx-js/react": "^3.0.0",
    "clsx": "^2.0.0",
    "prism-react-renderer": "^2.3.0",
    "react": "^18.0.0",
    "react-dom": "^18.0.0"
  },
  "devDependencies": {
    "@docusaurus/module-validation": "^3.1.0",
    "@docusaurus/types": "^3.1.0",
    "typescript": "^5.3.0"
  },
  "browserslist": {
    "production": [
      ">0.5%",
      "last 2 versions",
      "Firefox ESR",
      "not dead"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  },
  "engines": {
    "node": ">=16.14"
  }
}
```

## Installation

### Prerequisites
- Node.js 16.14+
- npm or yarn

### Steps

1. **Navigate to project:**
   ```bash
   cd governance-docs-site
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server:**
   ```bash
   npm start
   # or
   yarn start
   ```
   
   The site will open at http://localhost:3000

4. **Build for production:**
   ```bash
   npm run build
   ```

5. **Serve locally (after build):**
   ```bash
   npm run serve
   ```

### File Structure

```
governance-docs-site/
├── docs/                    # Documentation files
│   ├── intro.md            # Home page
│   ├── quick-start.md      # Quick start guide
│   ├── framework/          # Framework documentation
│   ├── guides/             # Implementation guides
│   ├── domains/            # COBIT domains
│   ├── controls/           # Control documentation
│   ├── assessment/         # Assessment tools
│   └── special/            # AI, API, Data governance
├── blog/                    # Blog posts
├── src/
│   ├── pages/              # Custom pages
│   ├── components/         # React components
│   └── css/                # Styling
├── static/                  # Static files
├── docusaurus.config.ts    # Configuration
└── sidebars.ts             # Navigation sidebars
```

### Content Sync

Documentation is synced from the main repository:
- https://github.com/tariqsaidofficial/enterprise-governance-framework

**To update docs locally:**
1. Sync files from main repo
2. Update sidebars.ts if structure changes
3. Run `npm start` to preview
4. Deploy when ready

## Deployment

### GitHub Pages

1. Update `docusaurus.config.ts`:
   ```typescript
   organizationName: 'your-org',
   projectName: 'governance-docs-site',
   ```

2. Deploy:
   ```bash
   npm run deploy
   ```

### Docker

```dockerfile
FROM node:18 as build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

FROM node:18
WORKDIR /app
COPY --from=build /app/build /app/build
RUN npm install -g serve
CMD ["serve", "-s", "build", "-l", "3000"]
```

Build and run:
```bash
docker build -t governance-docs-site .
docker run -p 3000:3000 governance-docs-site
```

### Vercel

1. Connect GitHub repo
2. Set build command: `npm run build`
3. Set output directory: `build`
4. Deploy

---

**Learn more:** https://docusaurus.io/docs
