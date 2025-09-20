// ---------------------------
// Config: replace with your info
// ---------------------------
const CONTACT_EMAIL = "fadunchezor@gmail.com";
const RESUME_LINK = "Resume/Francis_Adunchezor_Resume.pdf";

// ---------------------------
// Project data
// ---------------------------
const projectsData = [
{
    title: "Sales Forecasting Dashboard",
    description: "Forecasting and dashboard for monthly sales.",
    tools: ["Python", "Tableau"],
    thumbnail: "[Project Screenshot Here]",
    link: "[GitHub Link]"
},
{
    title: "Customer Churn Analysis",
    description: "Prediction model with cohort analysis.",
    tools: ["SQL", "Python"],
    thumbnail: "[Project Screenshot Here]",
    link: "[GitHub Link]"
}
];

// Render project cards
function renderProjects() {
const grid = document.getElementById('projectsGrid');
grid.innerHTML = '';
projectsData.forEach(p => {
    const card = document.createElement('article');
    card.className = 'p-4 bg-white border rounded-lg shadow-sm flex flex-col';
    card.innerHTML = `
    <img src="${p.thumbnail}" alt="${p.title} screenshot" class="h-40 object-cover rounded mb-3"/>
    <h3 class="font-semibold text-lg">${p.title}</h3>
    <p class="text-sm text-muted mt-2 flex-1">${p.description}</p>
    <div class="mt-3 flex justify-between items-center">
        <div class="flex gap-1 flex-wrap">
        ${p.tools.map(t => `<span class="text-xs px-2 py-1 bg-card rounded">${t}</span>`).join('')}
        </div>
        <a href="${p.link}" target="_blank" class="text-sm underline">View</a>
    </div>
    `;
    grid.appendChild(card);
});
}

// Mobile nav
document.getElementById('mobileNavBtn').addEventListener('click', () => {
document.getElementById('mobileNav').classList.toggle('hidden');
});

// Reveal animation
function setupReveal() {
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
    if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
        }
    });
}, { threshold: 0.1 });
reveals.forEach(r => observer.observe(r));
}

// Contact form mailto
document.getElementById('contactForm').addEventListener('submit', e => {
e.preventDefault();
const name = encodeURIComponent(document.getElementById('name').value);
const email = encodeURIComponent(document.getElementById('email').value);
const message = encodeURIComponent(document.getElementById('message').value);
const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
const body = `Name: ${name}%0AEmail: ${email}%0A%0A${message}`;
window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
});

// Init
document.addEventListener('DOMContentLoaded', () => {
document.getElementById('year').textContent = new Date().getFullYear();
renderProjects();
setupReveal();

  // update resume links
document.querySelectorAll('a[download]').forEach(a => a.href = RESUME_LINK);
});
