// ================= NAVIGATION =================
const navItems = document.querySelectorAll('.nav-item');
const pages = document.querySelectorAll('.page');

navItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = item.getAttribute('data-target');
        navigateToPage(targetId);
    });
});

function navigateToPage(targetId) {
    navItems.forEach(nav => {
        nav.classList.toggle('active', nav.getAttribute('data-target') === targetId);
    });

    pages.forEach(page => {
        page.classList.toggle('active', page.id === targetId);
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
}


// ================= ACCORDION =================
function toggleCard(button) {
    const card = button.parentElement;
    const content = button.nextElementSibling;

    card.classList.toggle('active');

    if (card.classList.contains('active')) {
        content.style.maxHeight = content.scrollHeight + "px";
    } else {
        content.style.maxHeight = "0px";
    }
}


// ================= CONTRIBUTION TOGGLE (🔥 FIX) =================
function toggleTable(id) {
    const allTables = document.querySelectorAll('.contribution-table');

    allTables.forEach(table => {
        if (table.id !== id) {
            table.classList.remove('active');
            table.style.maxHeight = null;
        }
    });

    const current = document.getElementById(id);

    current.classList.toggle('active');

    if (current.classList.contains('active')) {
        // 🔥 IMPORTANT: force recalculation AFTER visible
        setTimeout(() => {
            current.style.maxHeight = current.scrollHeight + "px";
        }, 50);
    } else {
        current.style.maxHeight = null;
    }
}
// ================= TOC ACCORDION =================
function toggleTOC(button) {
    const content = button.nextElementSibling;

    // close all others (optional clean UX)
    document.querySelectorAll('.toc-content').forEach(item => {
        if (item !== content) {
            item.style.maxHeight = null;
        }
    });

    // toggle current
    if (content.style.maxHeight) {
        content.style.maxHeight = null;
    } else {
        content.style.maxHeight = content.scrollHeight + "px";
    }
}