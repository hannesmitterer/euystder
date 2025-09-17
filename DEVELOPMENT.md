# ZeppBamboo Jekyll Development Guide

## Quick Start

### Prerequisites
- Ruby 3.2+ installed
- Git for version control

### Installation & Setup

1. **Install dependencies:**
   ```bash
   ./scripts/deploy.sh install
   ```

2. **Start development server:**
   ```bash
   ./scripts/deploy.sh serve
   ```
   Site will be available at `http://localhost:4000/euystder/`

3. **Build for production:**
   ```bash
   ./scripts/deploy.sh build
   ```

## Management Scripts

### Deploy Script (`./scripts/deploy.sh`)

**Available Commands:**
- `install` - Install Jekyll dependencies
- `build` - Build the site locally  
- `serve` - Start development server with live reload
- `test` - Run full test suite (for CI)
- `clean` - Clean build artifacts

**Examples:**
```bash
# Set up development environment
./scripts/deploy.sh install

# Start local development server
./scripts/deploy.sh serve

# Build site for production
./scripts/deploy.sh build

# Run tests before pushing
./scripts/deploy.sh test
```

### File Manager Script (`./scripts/file-manager.sh`)

**Available Commands:**
- `status` - Check git status
- `add-media <file>` - Add media file to `assets/images/`
- `update-docs` - Stage documentation changes
- `push <message>` - Commit and push staged changes
- `quick <message>` - Stage all, commit, and push in one command
- `detailed-status` - Show detailed repository status

**Examples:**
```bash
# Check repository status
./scripts/file-manager.sh status

# Add a new image
./scripts/file-manager.sh add-media ~/Downloads/new-image.png

# Stage documentation changes
./scripts/file-manager.sh update-docs

# Commit and push specific changes
git add specific-file.md
./scripts/file-manager.sh push "Update specific documentation"

# Quick workflow - stage everything and push
./scripts/file-manager.sh quick "Add new content and images"
```

## Content Management

### Adding New Content

1. **Edit phases data:** Modify `_data/phases.yml`
2. **Add new pages:** Create Markdown files with front matter
3. **Add images:** Use the file manager script or place in `assets/images/`

### Content Structure

```
_data/phases.yml      # ZeppBamboo phases data
_layouts/             # Page templates
_includes/            # Reusable components
assets/images/        # Image assets
index.md             # Main page
```

### Firebase Integration

The site includes Firebase integration for dynamic content editing:
- Real-time content updates
- User authentication
- Cloud storage for editable content

## Automated Deployment

### GitHub Actions

The repository includes automated Jekyll deployment to GitHub Pages:

1. **Push to main branch** triggers automatic build and deployment
2. **Deployment typically takes 2-5 minutes**
3. **Site available at:** `https://hannesmitterer.github.io/euystder/`

### Manual Deployment

```bash
# Test build locally first
./scripts/deploy.sh test

# Push changes (triggers automatic deployment)
./scripts/file-manager.sh quick "Update site content"
```

## Development Workflow

### Typical Workflow

1. **Start development:**
   ```bash
   ./scripts/deploy.sh serve
   ```

2. **Make changes** to content or code

3. **Test locally** - changes appear automatically with live reload

4. **Run tests:**
   ```bash
   ./scripts/deploy.sh test
   ```

5. **Deploy changes:**
   ```bash
   ./scripts/file-manager.sh quick "Describe your changes"
   ```

### Content Updates

1. **Edit phases:** Modify `_data/phases.yml`
2. **Add images:** Use `./scripts/file-manager.sh add-media`
3. **Test changes:** Local server shows updates immediately
4. **Deploy:** Use file manager script to push changes

### Adding New Features

1. **Modify layouts:** Edit files in `_layouts/` and `_includes/`
2. **Update styles:** Modify CSS in `_includes/head.html`
3. **Add JavaScript:** Modify `_includes/scripts.html`
4. **Test thoroughly** with `./scripts/deploy.sh test`

## Configuration

### Jekyll Configuration (`_config.yml`)

Key settings:
- `title`: Site title
- `description`: Site description  
- `baseurl`: Subpath for GitHub Pages
- `url`: Base URL for site

### Bundler Configuration (`Gemfile`)

- Uses GitHub Pages gem for compatibility
- Includes essential Jekyll plugins
- Configured for GitHub Pages deployment

## Troubleshooting

### Common Issues

1. **Bundle install fails:**
   ```bash
   # Clear bundle cache and reinstall
   ./scripts/deploy.sh clean
   ./scripts/deploy.sh install
   ```

2. **Site not loading locally:**
   - Check that server is running on `http://localhost:4000/euystder/`
   - Verify no port conflicts

3. **Deployment fails:**
   - Check GitHub Actions logs
   - Verify `_config.yml` syntax
   - Test build locally first

### Getting Help

- Check build logs with `./scripts/deploy.sh test`
- Review GitHub Actions logs for deployment issues
- Verify file permissions for scripts: `chmod +x scripts/*.sh`

## Files and Directories

```
├── _config.yml              # Jekyll configuration
├── _data/
│   └── phases.yml           # ZeppBamboo phases data
├── _includes/               # Reusable components
├── _layouts/                # Page templates
├── assets/images/           # Image assets
├── scripts/
│   ├── deploy.sh           # Build and deployment management
│   └── file-manager.sh     # Content and git management
├── .github/workflows/       # GitHub Actions
├── Gemfile                 # Ruby dependencies
├── index.md                # Main page
└── README.md               # Project documentation
```