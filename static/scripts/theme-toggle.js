function toggle_theme() {
    let theme_obj;

    if (localStorage.getItem('theme') === null) {
        theme = 'dark';

    } else {
        theme = localStorage.getItem('theme');

        if (theme == 'dark') {
            theme = 'light';
        } else {
            theme = 'dark';
        }
    }

    localStorage.setItem('theme', theme);
    apply_theme();
}

function apply_theme() {
    let root = document.getElementById('root');
    let theme_toggle = document.getElementById('theme-toggle');
    let theme;

    if (localStorage.getItem('theme') === null) {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            theme = 'dark';
        } else {
            theme = 'light';
        }

    } else {
        theme = localStorage.getItem('theme');
    }

    if (theme == 'dark') {
        root.className = 'dark';
        localStorage.setItem('theme', 'dark');
        // theme_toggle.innerHTML = '☀️';
    } else {
        root.className = 'light';
        localStorage.setItem('theme', 'light');
        // theme_toggle.innerHTML = '🌙';
    }
}


let themeToggle_bool = false;

const observer = new MutationObserver(function() {
    let root = document.getElementById('root');
    let theme_toggle = document.getElementById('theme-toggle');

    if (root && theme_toggle && !themeToggle_bool) {
        apply_theme();
        themeToggle_bool = true;
    }

    if (themeToggle_bool) {
        observer.disconnect();
    }
});

const target = document;
const config = {
    childList: true,
    subtree: true
};

observer.observe(target, config);

setTimeout(function() { observer.disconnect(); }, 20000);

