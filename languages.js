/**
 * Google-supported languages in canonical order
 * Based on Google's official language support list
 * 
 * Each language object contains:
 * - code: ISO 639-1 language code (Google's standard)
 * - name: Native name of the language
 * - englishName: English name for international users
 * - rtl: Right-to-left text direction (for proper UI rendering)
 */
const GOOGLE_LANGUAGES = [
    { code: 'af', name: 'Afrikaans', englishName: 'Afrikaans', rtl: false },
    { code: 'sq', name: 'Shqip', englishName: 'Albanian', rtl: false },
    { code: 'am', name: 'አማርኛ', englishName: 'Amharic', rtl: false },
    { code: 'ar', name: 'العربية', englishName: 'Arabic', rtl: true },
    { code: 'hy', name: 'Հայերեն', englishName: 'Armenian', rtl: false },
    { code: 'az', name: 'Azərbaycan', englishName: 'Azerbaijani', rtl: false },
    { code: 'eu', name: 'Euskera', englishName: 'Basque', rtl: false },
    { code: 'be', name: 'Беларуская', englishName: 'Belarusian', rtl: false },
    { code: 'bn', name: 'বাংলা', englishName: 'Bengali', rtl: false },
    { code: 'bs', name: 'Bosanski', englishName: 'Bosnian', rtl: false },
    { code: 'bg', name: 'Български', englishName: 'Bulgarian', rtl: false },
    { code: 'ca', name: 'Català', englishName: 'Catalan', rtl: false },
    { code: 'ceb', name: 'Cebuano', englishName: 'Cebuano', rtl: false },
    { code: 'ny', name: 'Chichewa', englishName: 'Chichewa', rtl: false },
    { code: 'zh', name: '中文', englishName: 'Chinese', rtl: false },
    { code: 'zh-cn', name: '简体中文', englishName: 'Chinese (Simplified)', rtl: false },
    { code: 'zh-tw', name: '繁體中文', englishName: 'Chinese (Traditional)', rtl: false },
    { code: 'co', name: 'Corsu', englishName: 'Corsican', rtl: false },
    { code: 'hr', name: 'Hrvatski', englishName: 'Croatian', rtl: false },
    { code: 'cs', name: 'Čeština', englishName: 'Czech', rtl: false },
    { code: 'da', name: 'Dansk', englishName: 'Danish', rtl: false },
    { code: 'nl', name: 'Nederlands', englishName: 'Dutch', rtl: false },
    { code: 'en', name: 'English', englishName: 'English', rtl: false },
    { code: 'eo', name: 'Esperanto', englishName: 'Esperanto', rtl: false },
    { code: 'et', name: 'Eesti', englishName: 'Estonian', rtl: false },
    { code: 'tl', name: 'Filipino', englishName: 'Filipino', rtl: false },
    { code: 'fi', name: 'Suomi', englishName: 'Finnish', rtl: false },
    { code: 'fr', name: 'Français', englishName: 'French', rtl: false },
    { code: 'fy', name: 'Frysk', englishName: 'Frisian', rtl: false },
    { code: 'gl', name: 'Galego', englishName: 'Galician', rtl: false },
    { code: 'ka', name: 'ქართული', englishName: 'Georgian', rtl: false },
    { code: 'de', name: 'Deutsch', englishName: 'German', rtl: false },
    { code: 'el', name: 'Ελληνικά', englishName: 'Greek', rtl: false },
    { code: 'gu', name: 'ગુજરાતી', englishName: 'Gujarati', rtl: false },
    { code: 'ht', name: 'Kreyòl ayisyen', englishName: 'Haitian Creole', rtl: false },
    { code: 'ha', name: 'Hausa', englishName: 'Hausa', rtl: false },
    { code: 'haw', name: 'ʻŌlelo Hawaiʻi', englishName: 'Hawaiian', rtl: false },
    { code: 'iw', name: 'עברית', englishName: 'Hebrew', rtl: true },
    { code: 'hi', name: 'हिन्दी', englishName: 'Hindi', rtl: false },
    { code: 'hmn', name: 'Hmong', englishName: 'Hmong', rtl: false },
    { code: 'hu', name: 'Magyar', englishName: 'Hungarian', rtl: false },
    { code: 'is', name: 'Íslenska', englishName: 'Icelandic', rtl: false },
    { code: 'ig', name: 'Igbo', englishName: 'Igbo', rtl: false },
    { code: 'id', name: 'Bahasa Indonesia', englishName: 'Indonesian', rtl: false },
    { code: 'ga', name: 'Gaeilge', englishName: 'Irish', rtl: false },
    { code: 'it', name: 'Italiano', englishName: 'Italian', rtl: false },
    { code: 'ja', name: '日本語', englishName: 'Japanese', rtl: false },
    { code: 'jw', name: 'Basa Jawa', englishName: 'Javanese', rtl: false },
    { code: 'kn', name: 'ಕನ್ನಡ', englishName: 'Kannada', rtl: false },
    { code: 'kk', name: 'Қазақ тілі', englishName: 'Kazakh', rtl: false },
    { code: 'km', name: 'ខ្មែរ', englishName: 'Khmer', rtl: false },
    { code: 'ko', name: '한국어', englishName: 'Korean', rtl: false },
    { code: 'ku', name: 'کوردی', englishName: 'Kurdish (Kurmanji)', rtl: true },
    { code: 'ky', name: 'Кыргызча', englishName: 'Kyrgyz', rtl: false },
    { code: 'lo', name: 'ລາວ', englishName: 'Lao', rtl: false },
    { code: 'la', name: 'Latine', englishName: 'Latin', rtl: false },
    { code: 'lv', name: 'Latviešu', englishName: 'Latvian', rtl: false },
    { code: 'lt', name: 'Lietuvių', englishName: 'Lithuanian', rtl: false },
    { code: 'lb', name: 'Lëtzebuergesch', englishName: 'Luxembourgish', rtl: false },
    { code: 'mk', name: 'Македонски', englishName: 'Macedonian', rtl: false },
    { code: 'mg', name: 'Malagasy', englishName: 'Malagasy', rtl: false },
    { code: 'ms', name: 'Bahasa Melayu', englishName: 'Malay', rtl: false },
    { code: 'ml', name: 'മലയാളം', englishName: 'Malayalam', rtl: false },
    { code: 'mt', name: 'Malti', englishName: 'Maltese', rtl: false },
    { code: 'mi', name: 'Te Reo Māori', englishName: 'Maori', rtl: false },
    { code: 'mr', name: 'मराठी', englishName: 'Marathi', rtl: false },
    { code: 'mn', name: 'Монгол', englishName: 'Mongolian', rtl: false },
    { code: 'my', name: 'မြန်မာ', englishName: 'Myanmar (Burmese)', rtl: false },
    { code: 'ne', name: 'नेपाली', englishName: 'Nepali', rtl: false },
    { code: 'no', name: 'Norsk', englishName: 'Norwegian', rtl: false },
    { code: 'ps', name: 'پښتو', englishName: 'Pashto', rtl: true },
    { code: 'fa', name: 'فارسی', englishName: 'Persian', rtl: true },
    { code: 'pl', name: 'Polski', englishName: 'Polish', rtl: false },
    { code: 'pt', name: 'Português', englishName: 'Portuguese', rtl: false },
    { code: 'pa', name: 'ਪੰਜਾਬੀ', englishName: 'Punjabi', rtl: false },
    { code: 'ro', name: 'Română', englishName: 'Romanian', rtl: false },
    { code: 'ru', name: 'Русский', englishName: 'Russian', rtl: false },
    { code: 'sm', name: 'Samoan', englishName: 'Samoan', rtl: false },
    { code: 'gd', name: 'Gàidhlig', englishName: 'Scots Gaelic', rtl: false },
    { code: 'sr', name: 'Српски', englishName: 'Serbian', rtl: false },
    { code: 'st', name: 'Sesotho', englishName: 'Sesotho', rtl: false },
    { code: 'sn', name: 'chiShona', englishName: 'Shona', rtl: false },
    { code: 'sd', name: 'سنڌي', englishName: 'Sindhi', rtl: true },
    { code: 'si', name: 'සිංහල', englishName: 'Sinhala', rtl: false },
    { code: 'sk', name: 'Slovenčina', englishName: 'Slovak', rtl: false },
    { code: 'sl', name: 'Slovenščina', englishName: 'Slovenian', rtl: false },
    { code: 'so', name: 'Afsoomaali', englishName: 'Somali', rtl: false },
    { code: 'es', name: 'Español', englishName: 'Spanish', rtl: false },
    { code: 'su', name: 'Basa Sunda', englishName: 'Sundanese', rtl: false },
    { code: 'sw', name: 'Kiswahili', englishName: 'Swahili', rtl: false },
    { code: 'sv', name: 'Svenska', englishName: 'Swedish', rtl: false },
    { code: 'tg', name: 'Тоҷикӣ', englishName: 'Tajik', rtl: false },
    { code: 'ta', name: 'தமிழ்', englishName: 'Tamil', rtl: false },
    { code: 'te', name: 'తెలుగు', englishName: 'Telugu', rtl: false },
    { code: 'th', name: 'ไทย', englishName: 'Thai', rtl: false },
    { code: 'tr', name: 'Türkçe', englishName: 'Turkish', rtl: false },
    { code: 'uk', name: 'Українська', englishName: 'Ukrainian', rtl: false },
    { code: 'ur', name: 'اردو', englishName: 'Urdu', rtl: true },
    { code: 'uz', name: 'O\'zbekcha', englishName: 'Uzbek', rtl: false },
    { code: 'vi', name: 'Tiếng Việt', englishName: 'Vietnamese', rtl: false },
    { code: 'cy', name: 'Cymraeg', englishName: 'Welsh', rtl: false },
    { code: 'xh', name: 'isiXhosa', englishName: 'Xhosa', rtl: false },
    { code: 'yi', name: 'ייִדיש', englishName: 'Yiddish', rtl: true },
    { code: 'yo', name: 'Yorùbá', englishName: 'Yoruba', rtl: false },
    { code: 'zu', name: 'isiZulu', englishName: 'Zulu', rtl: false }
];

/**
 * Language Navigation Component
 * Provides navigation through Google-supported languages with user-friendly interface
 */
class LanguageNavigator {
    constructor(containerId, options = {}) {
        this.container = document.getElementById(containerId);
        this.languages = GOOGLE_LANGUAGES;
        this.currentIndex = 0;
        this.onLanguageChange = options.onLanguageChange || (() => {});
        this.showNativeNames = options.showNativeNames !== false; // Default true
        this.showEnglishNames = options.showEnglishNames !== false; // Default true
        
        // Find the current language index (default to German as current app is in German)
        const currentLang = options.defaultLanguage || 'de';
        const langIndex = this.languages.findIndex(lang => lang.code === currentLang);
        this.currentIndex = langIndex >= 0 ? langIndex : 0;
        
        this.init();
    }
    
    /**
     * Initialize the navigation component
     */
    init() {
        if (!this.container) {
            console.error('Language navigator container not found');
            return;
        }
        
        this.render();
        this.attachEventListeners();
    }
    
    /**
     * Render the navigation component with current language
     */
    render() {
        const currentLang = this.languages[this.currentIndex];
        const direction = currentLang.rtl ? 'rtl' : 'ltr';
        
        this.container.innerHTML = `
            <div class="language-navigator bg-white rounded-lg shadow-lg p-4 mb-6" dir="${direction}">
                <div class="flex items-center justify-between">
                    <button id="lang-prev" class="nav-btn bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors duration-200" title="Previous language">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                        </svg>
                    </button>
                    
                    <div class="language-info text-center flex-1 mx-4">
                        <div class="language-display">
                            ${this.showNativeNames ? `<h3 class="text-xl font-bold text-gray-800 mb-1">${currentLang.name}</h3>` : ''}
                            ${this.showEnglishNames ? `<p class="text-sm text-gray-600">${currentLang.englishName}</p>` : ''}
                            <p class="text-xs text-gray-500 mt-1">Code: ${currentLang.code} | ${this.currentIndex + 1} of ${this.languages.length}</p>
                        </div>
                        
                        <div class="language-search mt-3">
                            <input type="text" id="lang-search" placeholder="Search languages..." 
                                   class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                        </div>
                    </div>
                    
                    <button id="lang-next" class="nav-btn bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors duration-200" title="Next language">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                    </button>
                </div>
                
                <div class="language-dropdown hidden mt-4" id="lang-dropdown">
                    <div class="max-h-60 overflow-y-auto border border-gray-200 rounded-md">
                        <div id="lang-list" class="divide-y divide-gray-100"></div>
                    </div>
                </div>
            </div>
        `;
    }
    
    /**
     * Attach event listeners to navigation elements
     */
    attachEventListeners() {
        const prevBtn = this.container.querySelector('#lang-prev');
        const nextBtn = this.container.querySelector('#lang-next');
        const searchInput = this.container.querySelector('#lang-search');
        const dropdown = this.container.querySelector('#lang-dropdown');
        
        // Navigation buttons
        prevBtn.addEventListener('click', () => this.previousLanguage());
        nextBtn.addEventListener('click', () => this.nextLanguage());
        
        // Search functionality
        searchInput.addEventListener('input', (e) => this.handleSearch(e.target.value));
        searchInput.addEventListener('focus', () => this.showDropdown());
        
        // Hide dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!this.container.contains(e.target)) {
                this.hideDropdown();
            }
        });
        
        // Keyboard navigation
        this.container.addEventListener('keydown', (e) => this.handleKeyboard(e));
    }
    
    /**
     * Navigate to the previous language
     */
    previousLanguage() {
        this.currentIndex = (this.currentIndex - 1 + this.languages.length) % this.languages.length;
        this.updateDisplay();
        this.onLanguageChange(this.getCurrentLanguage());
    }
    
    /**
     * Navigate to the next language
     */
    nextLanguage() {
        this.currentIndex = (this.currentIndex + 1) % this.languages.length;
        this.updateDisplay();
        this.onLanguageChange(this.getCurrentLanguage());
    }
    
    /**
     * Set language by code
     */
    setLanguage(languageCode) {
        const index = this.languages.findIndex(lang => lang.code === languageCode);
        if (index >= 0) {
            this.currentIndex = index;
            this.updateDisplay();
            this.onLanguageChange(this.getCurrentLanguage());
            return true;
        }
        return false;
    }
    
    /**
     * Get current language object
     */
    getCurrentLanguage() {
        return this.languages[this.currentIndex];
    }
    
    /**
     * Update the display with current language
     */
    updateDisplay() {
        const currentLang = this.getCurrentLanguage();
        const langDisplay = this.container.querySelector('.language-display');
        const direction = currentLang.rtl ? 'rtl' : 'ltr';
        
        this.container.querySelector('.language-navigator').dir = direction;
        
        langDisplay.innerHTML = `
            ${this.showNativeNames ? `<h3 class="text-xl font-bold text-gray-800 mb-1">${currentLang.name}</h3>` : ''}
            ${this.showEnglishNames ? `<p class="text-sm text-gray-600">${currentLang.englishName}</p>` : ''}
            <p class="text-xs text-gray-500 mt-1">Code: ${currentLang.code} | ${this.currentIndex + 1} of ${this.languages.length}</p>
        `;
    }
    
    /**
     * Handle search input
     */
    handleSearch(query) {
        if (!query.trim()) {
            this.hideDropdown();
            return;
        }
        
        this.showDropdown();
        this.filterLanguages(query);
    }
    
    /**
     * Filter languages based on search query
     */
    filterLanguages(query) {
        const filtered = this.languages.filter(lang => 
            lang.name.toLowerCase().includes(query.toLowerCase()) ||
            lang.englishName.toLowerCase().includes(query.toLowerCase()) ||
            lang.code.toLowerCase().includes(query.toLowerCase())
        );
        
        this.renderLanguageList(filtered);
    }
    
    /**
     * Render the language dropdown list
     */
    renderLanguageList(languages = this.languages) {
        const langList = this.container.querySelector('#lang-list');
        
        langList.innerHTML = languages.map((lang, index) => `
            <div class="lang-option p-3 hover:bg-gray-50 cursor-pointer flex justify-between items-center" 
                 data-code="${lang.code}">
                <div>
                    <div class="font-medium text-gray-900">${lang.name}</div>
                    <div class="text-sm text-gray-500">${lang.englishName}</div>
                </div>
                <div class="text-xs text-gray-400">${lang.code}</div>
            </div>
        `).join('');
        
        // Add click handlers for language options
        langList.querySelectorAll('.lang-option').forEach(option => {
            option.addEventListener('click', () => {
                const code = option.dataset.code;
                this.setLanguage(code);
                this.hideDropdown();
                this.container.querySelector('#lang-search').value = '';
            });
        });
    }
    
    /**
     * Show the dropdown
     */
    showDropdown() {
        const dropdown = this.container.querySelector('#lang-dropdown');
        dropdown.classList.remove('hidden');
        this.renderLanguageList();
    }
    
    /**
     * Hide the dropdown
     */
    hideDropdown() {
        const dropdown = this.container.querySelector('#lang-dropdown');
        dropdown.classList.add('hidden');
    }
    
    /**
     * Handle keyboard navigation
     */
    handleKeyboard(e) {
        switch(e.key) {
            case 'ArrowLeft':
                e.preventDefault();
                this.previousLanguage();
                break;
            case 'ArrowRight':
                e.preventDefault();
                this.nextLanguage();
                break;
            case 'Escape':
                this.hideDropdown();
                this.container.querySelector('#lang-search').blur();
                break;
        }
    }
    
    /**
     * Get all supported languages
     */
    static getSupportedLanguages() {
        return GOOGLE_LANGUAGES;
    }
    
    /**
     * Get language by code
     */
    static getLanguageByCode(code) {
        return GOOGLE_LANGUAGES.find(lang => lang.code === code);
    }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { LanguageNavigator, GOOGLE_LANGUAGES };
}