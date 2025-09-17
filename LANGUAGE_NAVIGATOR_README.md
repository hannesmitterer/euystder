# Google-Supported Languages Navigation Component

## Overview

This component implements a comprehensive navigation system for browsing through Google-supported languages in their canonical order. It provides a user-friendly interface for language selection with full internationalization support, including RTL (Right-to-Left) languages.

## Features

- **105 Google-supported languages** in canonical alphabetical order
- **Native and English language names** for better accessibility
- **RTL language support** with automatic text direction switching
- **Interactive navigation** with previous/next buttons and wrap-around
- **Search functionality** to quickly find languages by name or code
- **Dropdown interface** for direct language selection
- **Keyboard navigation** support (Arrow keys, Escape)
- **Visual feedback** with language change notifications
- **Modular design** for easy integration and extension

## Files

- `languages.js` - Main component with language data and navigation logic
- `language-navigator-test.html` - Comprehensive test suite (18 tests)
- `demo.html` - Working demonstration with sample content translation
- `index.html` - Updated main application with integrated component

## Language Data Structure

Each language object contains:
```javascript
{
    code: 'fr',           // ISO 639-1 language code
    name: 'Français',     // Native name of the language
    englishName: 'French', // English name for international users
    rtl: false            // Right-to-left text direction flag
}
```

## Usage

### Basic Implementation

```javascript
// Initialize the component
const navigator = new LanguageNavigator('container-id', {
    defaultLanguage: 'en',
    onLanguageChange: (language) => {
        console.log('Language changed to:', language);
        // Implement your language switching logic here
    }
});
```

### Advanced Configuration

```javascript
const navigator = new LanguageNavigator('container-id', {
    defaultLanguage: 'de',
    showNativeNames: true,     // Show native language names
    showEnglishNames: true,    // Show English language names
    onLanguageChange: (language) => {
        // Update page language
        document.documentElement.lang = language.code;
        document.documentElement.dir = language.rtl ? 'rtl' : 'ltr';
        
        // Update content
        updatePageContent(language);
    }
});
```

### Static Methods

```javascript
// Get all supported languages
const languages = LanguageNavigator.getSupportedLanguages();

// Get specific language by code
const french = LanguageNavigator.getLanguageByCode('fr');
```

### Navigation Methods

```javascript
// Programmatic navigation
navigator.nextLanguage();       // Move to next language
navigator.previousLanguage();   // Move to previous language
navigator.setLanguage('es');    // Set specific language by code
navigator.getCurrentLanguage(); // Get current language object
```

## Key Implementation Details

### Canonical Ordering
Languages are ordered alphabetically by their English names, following Google's standard:
1. Afrikaans
2. Albanian
3. Amharic
4. Arabic
5. Armenian
...and so on through Zulu

### RTL Language Support
The component automatically detects and handles RTL languages:
- Arabic (العربية)
- Hebrew (עברית)
- Persian (فارسی)
- Urdu (اردو)
- Kurdish (کوردی)
- Pashto (پښتو)
- Sindhi (سنڌي)
- Yiddish (ייִדיש)

### Accessibility Features
- Proper ARIA labels and roles
- Keyboard navigation support
- High contrast visual design
- Screen reader compatible
- Focus management

### Browser Compatibility
- Modern browsers with ES6+ support
- Responsive design for mobile and desktop
- Graceful degradation for older browsers

## Testing

The component includes a comprehensive test suite with 18 tests covering:

- ✓ Language ordering and canonical sequence
- ✓ Navigation methods (next, previous, wrap-around)
- ✓ Language selection by code
- ✓ Search functionality
- ✓ RTL language support
- ✓ Static method functionality
- ✓ Error handling for invalid inputs

Run tests by opening `language-navigator-test.html` in a browser.

## Integration with Existing Applications

### HTML Structure
Add a container element for the component:
```html
<div id="language-navigation"></div>
```

### CSS Styling
The component uses Tailwind CSS classes but can be easily customized:
```css
.language-navigator {
    /* Custom styling */
}

.nav-btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}
```

### JavaScript Integration
Include the component script and initialize:
```html
<script src="languages.js"></script>
<script>
    document.addEventListener('DOMContentLoaded', () => {
        const navigator = new LanguageNavigator('language-navigation', {
            defaultLanguage: 'en',
            onLanguageChange: handleLanguageChange
        });
    });
</script>
```

## Extension and Customization

### Adding New Languages
To add new languages, simply extend the `GOOGLE_LANGUAGES` array:
```javascript
const newLanguage = {
    code: 'xx',
    name: 'Native Name',
    englishName: 'English Name',
    rtl: false
};
```

### Custom Styling
Override CSS classes or add custom themes:
```css
.language-navigator.dark-theme {
    background-color: #1a1a1a;
    color: #ffffff;
}
```

### Event Handling
The component emits language change events that can be used for:
- Content translation
- URL routing
- Analytics tracking
- User preference storage

## Performance Considerations

- Language data is loaded once and cached
- Efficient search with string matching
- Minimal DOM updates during navigation
- Lazy loading of dropdown content
- Optimized for fast language switching

## Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+
- Mobile browsers with ES6 support

## License

This component is designed to be modular and easily integrated into existing projects. The language data follows Google's official language support standards.