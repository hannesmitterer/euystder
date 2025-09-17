#!/bin/bash

# ZeppBamboo Deploy Script - Development and Build Management
# Handles Jekyll development and build processes

set -e  # Exit on error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[DEPLOY]${NC} $1"
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

# Add gem bin to PATH
export PATH="$HOME/.local/share/gem/ruby/3.2.0/bin:$PATH"

# Function to install dependencies
install_dependencies() {
    print_status "Installing Jekyll dependencies..."
    
    # Check if Bundler is installed
    if ! command -v bundle &> /dev/null; then
        print_error "Bundler not found. Installing..."
        gem install --user-install bundler
    fi
    
    # Configure bundler for user installation
    bundle config set --local path 'vendor/bundle'
    
    # Install gems
    if [ -f "Gemfile" ]; then
        bundle install
        print_success "Dependencies installed successfully"
    else
        print_error "Gemfile not found!"
        exit 1
    fi
}

# Function to build the site
build_site() {
    print_status "Building Jekyll site..."
    
    # Clean previous build
    rm -rf _site
    
    # Build site
    if bundle exec jekyll build; then
        print_success "Site built successfully"
        
        # Validate critical files
        if [ ! -f "_site/index.html" ]; then
            print_error "Critical file _site/index.html not found!"
            exit 1
        fi
        
        print_status "Build validation passed"
    else
        print_error "Build failed!"
        exit 1
    fi
}

# Function to serve the site locally
serve_site() {
    print_status "Starting Jekyll development server..."
    print_status "Site will be available at http://localhost:4000"
    print_warning "Press Ctrl+C to stop the server"
    
    bundle exec jekyll serve --livereload --drafts --incremental
}

# Function to test build (used by CI)
test_build() {
    print_status "Testing build process..."
    
    # Install dependencies
    install_dependencies
    
    # Build site
    build_site
    
    # Additional checks for CI
    if [ ! -d "_site" ]; then
        print_error "Build directory _site not found!"
        exit 1
    fi
    
    # Check for broken links (basic check)
    if command -v htmlproofer &> /dev/null; then
        print_status "Running HTML validation..."
        htmlproofer ./_site --check-html --check-img-http --check-opengraph
    else
        print_warning "htmlproofer not found, skipping link validation"
    fi
    
    print_success "All tests passed!"
}

# Function to clean build artifacts
clean_build() {
    print_status "Cleaning build artifacts..."
    
    rm -rf _site
    rm -rf .sass-cache
    rm -rf .jekyll-cache
    rm -rf .jekyll-metadata
    
    print_success "Clean completed"
}

# Function to show help
show_help() {
    echo "ZeppBamboo Deploy Script - Development and Build Management"
    echo ""
    echo "Usage: $0 [command]"
    echo ""
    echo "Commands:"
    echo "  install    Install Jekyll dependencies"
    echo "  build      Build the site locally"
    echo "  serve      Start development server with live reload"
    echo "  test       Test build process (used by CI)"
    echo "  clean      Clean build artifacts"
    echo "  help       Show this help message"
    echo ""
    echo "Examples:"
    echo "  $0 install    # Set up development environment"
    echo "  $0 serve      # Start local development server"
    echo "  $0 build      # Build site for production"
    echo "  $0 test       # Run full test suite"
}

# Main script logic
case "${1:-help}" in
    "install")
        install_dependencies
        ;;
    "build")
        build_site
        ;;
    "serve")
        serve_site
        ;;
    "test")
        test_build
        ;;
    "clean")
        clean_build
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