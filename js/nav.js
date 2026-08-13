const NAV_LINKS = [
    { href: '/pycraft/index.html', label: 'Home', icon: '🏠' },
    { href: '/pycraft/practice.html', label: 'Practice Hub', icon: '📚' },
    // Remove the standalone "Chapters" link since we have a dropdown
    { type: 'dropdown', label: 'Chapters 📖', items: [
        { href: '/pycraft/chapter-1.html', label: 'Ch 1: Python Basics' },
        { href: '/pycraft/chapter-2.html', label: 'Ch 2: Python Lists' },
        { href: '/pycraft/chapter-3.html', label: 'Ch 3: Functions' },
        { href: '/pycraft/chapter-4.html', label: 'Ch 4: NumPy' },
        { href: '/pycraft/chapter-5.html', label: 'Ch 5: Matplotlib' },
        { href: '/pycraft/chapter-6.html', label: 'Ch 6: Dictionaries' },
        { href: '/pycraft/chapter-7.html', label: 'Ch 7: Comparison Operators' },
        { href: '/pycraft/chapter-8.html', label: 'Ch 8: While Loop' },
        { href: '/pycraft/chapter-9.html', label: 'Ch 9: Random Numbers' },
        { href: '/pycraft/chapter-10.html', label: 'Ch 10: Introducing DataFrames' },
        { href: '/pycraft/chapter-11.html', label: 'Ch 11: Summary Statistics' },
        { href: '/pycraft/chapter-12.html', label: 'Ch 12: Explicit Indexes' },
        { href: '/pycraft/chapter-13.html', label: 'Ch 13: Visualizing Your Data' },
        { href: '/pycraft/chapter-14.html', label: 'Ch 14: Introducing Arrays - NumPy' },
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
        // Check if this is a dropdown
        if (link.type === 'dropdown') {
            // Create dropdown container
            const dropdown = document.createElement('div');
            dropdown.style.cssText = `
                position: relative;
                display: inline-block;
            `;
            
            // Create dropdown button
            const button = document.createElement('button');
            button.textContent = link.label;
            button.style.cssText = `
                background: transparent;
                color: #a0b4c8;
                border: none;
                padding: 8px 14px;
                border-radius: 6px;
                font-size: 0.9rem;
                cursor: pointer;
                transition: 0.2s;
                font-family: inherit;
                white-space: nowrap;
            `;
            button.onmouseover = () => { button.style.color = '#e8edf5'; button.style.background = '#1a2433'; };
            button.onmouseout = () => { button.style.color = '#a0b4c8'; button.style.background = 'transparent'; };
            
            // Create dropdown menu (hidden by default)
            const menu = document.createElement('div');
            menu.className = 'dropdown-menu';
            menu.style.cssText = `
                position: absolute;
                top: 100%;
                left: 0;
                background: #111b28;
                border: 1px solid #1a2433;
                border-radius: 8px;
                padding: 8px 0;
                min-width: 220px;
                display: none;
                box-shadow: 0 10px 30px rgba(0,0,0,0.6);
                z-index: 1000;
                max-height: 400px;
                overflow-y: auto;
            `;
            
            // Add chapter items to the dropdown
            link.items.forEach(item => {
                const a = document.createElement('a');
                a.href = item.href;
                a.textContent = item.label;
                a.style.cssText = `
                    display: block;
                    padding: 8px 16px;
                    color: #a0b4c8;
                    text-decoration: none;
                    font-size: 0.9rem;
                    transition: 0.2s;
                `;
                a.onmouseover = () => { a.style.color = '#e8edf5'; a.style.background = '#1a2433'; };
                a.onmouseout = () => { a.style.color = '#a0b4c8'; a.style.background = 'transparent'; };
                menu.appendChild(a);
            });
            
            // Toggle menu on click
            button.onclick = (e) => {
                e.stopPropagation();
                const isOpen = menu.style.display === 'block';
                // Close all dropdowns first
                document.querySelectorAll('.dropdown-menu').forEach(m => m.style.display = 'none');
                menu.style.display = isOpen ? 'none' : 'block';
            };
            
            // Close dropdown when clicking outside
            document.addEventListener('click', () => {
                menu.style.display = 'none';
            });
            
            dropdown.appendChild(button);
            dropdown.appendChild(menu);
            linksContainer.appendChild(dropdown);
        } else {
            // Regular link
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
        }
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
