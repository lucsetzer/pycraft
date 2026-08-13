const NAV_LINKS = [
    { href: '/pycraft/index.html', label: 'Home', icon: '🏠' },
    { href: '/pycraft/practice.html', label: 'Practice Hub', icon: '📚' },
    { href: '/pycraft/chapters.html', label: 'Chapters', icon: '📖' },
    { type: 'dropdown', label: 'Chapters', icon: '📖', items: [
        { href: '/pycraft/chapter-1.html', label: 'Ch 1: Python Basics' },
        { href: '/pycraft/chapter-2.html', label: 'Ch 2: Python Lists' },
        { href: '/pycraft/chapter-3.html', label: 'Ch 3: Functions' },
        { href: '/pycraft/chapter-4.html', label: 'Ch 4: NumPy' },
        { href: '/pycraft/chapter-5.html', label: 'Ch 5: Matplotlib' },
        { href: '/pycraft/chapter-5.html', label: 'Ch 6: Dictionaries' },
        { href: '/pycraft/chapter-5.html', label: 'Ch 7: Comparrison Operators' },
        { href: '/pycraft/chapter-5.html', label: 'Ch 8: While Loop' },
        { href: '/pycraft/chapter-5.html', label: 'Ch 9: Random Numbers' },
        { href: '/pycraft/chapter-5.html', label: 'Ch 10: Introducing DataFrames' },
        { href: '/pycraft/chapter-5.html', label: 'Ch 11: Summary Statistics' },
        { href: '/pycraft/chapter-5.html', label: 'Ch 12: Explicit Indexes' },
        { href: '/pycraft/chapter-5.html', label: 'Ch 13: Visualizing Your Data' },
        { href: '/pycraft/chapter-5.html', label: 'Ch 14: Introducing Arrays - NumPy' },
    ]},
];

// Build the navigation bar
function buildNav() {
    const nav = document.createElement('nav');
    nav.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        background: rgba(10, 14, 23, 0.92);
        backdrop-filter: blur(10px);
        border-bottom: 1px solid #1a2433;
        padding: 0 20px;
        z-index: 1000;
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 60px;
    `;
    
    // Logo
    const logo = document.createElement('a');
    logo.href = '/pycraft/index.html';
    logo.style.cssText = `
        color: #e8edf5;
        text-decoration: none;
        font-weight: 700;
        font-size: 1.2rem;
        display: flex;
        align-items: center;
        gap: 8px;
    `;
    logo.innerHTML = `⛏️ <span style="color: #2dce89;">Py</span><span style="color: #7ea8f0;">Craft</span>`;
    nav.appendChild(logo);
    
    // Links
    const linksContainer = document.createElement('div');
    linksContainer.style.cssText = `
        display: flex;
        gap: 5px;
        align-items: center;
        flex-wrap: wrap;
    `;
    
    NAV_LINKS.forEach(link => {
        const a = document.createElement('a');
        a.href = link.href;
        a.textContent = `${link.icon} ${link.label}`;
        a.style.cssText = `
            color: #a0b4c8;
            text-decoration: none;
            padding: 8px 14px;
            border-radius: 6px;
            font-size: 0.9rem;
            transition: 0.2s;
            white-space: nowrap;
        `;
        a.onmouseover = () => { a.style.color = '#e8edf5'; a.style.background = '#1a2433'; };
        a.onmouseout = () => { a.style.color = '#a0b4c8'; a.style.background = 'transparent'; };
        linksContainer.appendChild(a);
    });
    
    nav.appendChild(linksContainer);
    document.body.prepend(nav);
    
    // Add padding to body for fixed nav
    document.body.style.paddingTop = '60px';
}

// Build the nav when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', buildNav);
} else {
    buildNav();
}
