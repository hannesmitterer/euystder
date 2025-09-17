#!/bin/bash

# ZeppBamboo File Manager Script - Content and Push Management
# Manages content updates and git operations

set -e  # Exit on error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[FILE-MGR]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Ensure we're in the right directory
cd "$(dirname "$0")/.."

# Function to check git status
check_status() {
    print_status "Checking git status..."
    
    if git status --porcelain | grep -q .; then
        echo ""
        git status
        echo ""
        print_warning "You have uncommitted changes"
    else
        print_success "Working directory is clean"
    fi
}

# Function to add media files
add_media() {
    local file_path="$1"
    
    if [ -z "$file_path" ]; then
        print_error "Please provide a file path"
        echo "Usage: $0 add-media /path/to/image.png"
        exit 1
    fi
    
    if [ ! -f "$file_path" ]; then
        print_error "File not found: $file_path"
        exit 1
    fi
    
    # Create assets directory if it doesn't exist
    mkdir -p assets/images
    
    # Get filename
    filename=$(basename "$file_path")
    
    # Copy file to assets directory
    cp "$file_path" "assets/images/$filename"
    
    print_success "Media file added: assets/images/$filename"
    
    # Stage the file
    git add "assets/images/$filename"
    print_status "File staged for commit"
}

# Function to stage documentation changes
update_docs() {
    print_status "Staging documentation changes..."
    
    # Stage markdown files and documentation
    git add "*.md" "docs/" "_posts/" "_pages/" "_data/" || true
    git add "_config.yml" "Gemfile*" || true
    
    print_success "Documentation changes staged"
}

# Function to commit and push changes
push_changes() {
    local commit_message="$1"
    
    if [ -z "$commit_message" ]; then
        print_error "Please provide a commit message"
        echo "Usage: $0 push \"Your commit message\""
        exit 1
    fi
    
    # Check if there are staged changes
    if ! git diff --cached --quiet; then
        print_status "Committing changes..."
        git commit -m "$commit_message"
        
        print_status "Pushing to remote repository..."
        git push origin main
        
        print_success "Changes pushed successfully!"
        print_status "GitHub Actions will automatically build and deploy the site"
    else
        print_warning "No staged changes to commit"
        echo "Use 'git add' to stage files or run other commands to stage changes"
    fi
}

# Function for quick workflow
quick_workflow() {
    local commit_message="$1"
    
    if [ -z "$commit_message" ]; then
        print_error "Please provide a commit message"
        echo "Usage: $0 quick \"Update campaign info\""
        exit 1
    fi
    
    print_status "Starting quick workflow..."
    
    # Stage all changes
    print_status "Staging all changes..."
    git add .
    
    # Show what will be committed
    if git diff --cached --quiet; then
        print_warning "No changes to commit"
        exit 0
    fi
    
    echo ""
    print_status "Changes to be committed:"
    git diff --cached --name-status
    echo ""
    
    # Commit and push
    push_changes "$commit_message"
}

# Function to show detailed status
show_detailed_status() {
    print_status "Detailed repository status..."
    echo ""
    
    # Git status
    print_status "Git Status:"
    git status
    echo ""
    
    # Recent commits
    print_status "Recent commits:"
    git log --oneline -n 5
    echo ""
    
    # Branch information
    print_status "Branch information:"
    git branch -v
    echo ""
    
    # Remote information
    print_status "Remote information:"
    git remote -v
}

# Function to show help
show_help() {
    echo "ZeppBamboo File Manager Script - Content and Push Management"
    echo ""
    echo "Usage: $0 [command] [arguments]"
    echo ""
    echo "Commands:"
    echo "  status              Check git status"
    echo "  add-media <file>    Add media file to assets/images/"
    echo "  update-docs         Stage documentation changes"
    echo "  push <message>      Commit and push changes"
    echo "  quick <message>     Quick workflow: stage all, commit, and push"
    echo "  detailed-status     Show detailed repository status"
    echo "  help                Show this help message"
    echo ""
    echo "Examples:"
    echo "  $0 status                              # Check git status"
    echo "  $0 add-media ~/Downloads/banner.png   # Add new media file"
    echo "  $0 update-docs                         # Stage documentation changes"
    echo "  $0 push \"Update campaign details\"      # Commit and push staged changes"
    echo "  $0 quick \"Add new campaign banner\"     # Quick workflow for content updates"
}

# Main script logic
case "${1:-help}" in
    "status")
        check_status
        ;;
    "add-media")
        add_media "$2"
        ;;
    "update-docs")
        update_docs
        ;;
    "push")
        push_changes "$2"
        ;;
    "quick")
        quick_workflow "$2"
        ;;
    "detailed-status")
        show_detailed_status
        ;;
    "help"|"--help"|"-h")
        show_help
        ;;
    *)
        print_error "Unknown command: $1"
        echo ""
        show_help
        exit 1
        ;;
esac