const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'public', 'icons', 'services');
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

const svgs = {
  'backend-development': `
<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="40" height="40" rx="16" fill="white" fill-opacity="0.1"/>
<path d="M14 16H26C27.1046 16 28 16.8954 28 18V26C28 27.1046 27.1046 28 26 28H14C12.8954 28 12 27.1046 12 26V18C12 16.8954 12.8954 16 14 16Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 22H28" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 12V16" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M24 12V16" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
  'full-stack-development': `
<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="40" height="40" rx="16" fill="white" fill-opacity="0.1"/>
<path d="M12 14H28V26H12V14Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 18H28" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 22H19" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
  'api-integration': `
<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="40" height="40" rx="16" fill="white" fill-opacity="0.1"/>
<path d="M16 14L12 18L16 22" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M24 14L28 18L24 22" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22 26L18 10" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
  'cloud-devops': `
<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="40" height="40" rx="16" fill="white" fill-opacity="0.1"/>
<path d="M26.5 19.5C28.433 19.5 30 21.067 30 23C30 24.933 28.433 26.5 26.5 26.5H13.5C11.567 26.5 10 24.933 10 23C10 21.067 11.567 19.5 13.5 19.5C13.5 16.4624 15.9624 14 19 14C21.6569 14 23.8732 15.8856 24.3644 18.3686" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
  'database-optimization': `
<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="40" height="40" rx="16" fill="white" fill-opacity="0.1"/>
<ellipse cx="20" cy="14" rx="8" ry="3" stroke="white" stroke-width="1.5"/>
<path d="M12 14V26C12 27.6569 15.5817 29 20 29C24.4183 29 28 27.6569 28 26V14" stroke="white" stroke-width="1.5"/>
<path d="M12 20C12 21.6569 15.5817 23 20 23C24.4183 23 28 21.6569 28 20" stroke="white" stroke-width="1.5"/>
</svg>`,
  'security-architecture': `
<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="40" height="40" rx="16" fill="white" fill-opacity="0.1"/>
<path d="M20 12L12 15V21C12 25.5 15.5 29.5 20 31C24.5 29.5 28 25.5 28 21V15L20 12Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20 18V24" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18 21H22" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
  'ai-automation': `
<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="40" height="40" rx="16" fill="white" fill-opacity="0.1"/>
<path d="M20 12L22 17L27 18L23 21.5L24 27L20 24L16 27L17 21.5L13 18L18 17L20 12Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
  'saas-product-development': `
<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="40" height="40" rx="16" fill="white" fill-opacity="0.1"/>
<path d="M14 12H26C27.1046 12 28 12.8954 28 14V26C28 27.1046 27.1046 28 26 28H14C12.8954 28 12 27.1046 12 26V14C12 12.8954 12.8954 12 14 12Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 16H24" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 20H20" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 24H22" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
  'data-engineering': `
<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="40" height="40" rx="16" fill="white" fill-opacity="0.1"/>
<path d="M14 26H26" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 20H26" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 14H26" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11 20L14 17V23L11 20Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M29 26L26 23V29L29 26Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
  'cloud-migration': `
<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="40" height="40" rx="16" fill="white" fill-opacity="0.1"/>
<path d="M15 19C15 16.2386 17.2386 14 20 14C22.7614 14 25 16.2386 25 19" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 24L16 20L20 24L28 16" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M28 16V21M28 16H23" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
  'ecommerce-development': `
<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="40" height="40" rx="16" fill="white" fill-opacity="0.1"/>
<path d="M12 12H15L17.68 25.39C17.8127 26.0529 18.3976 26.5 19.07 26.5H26.4C27.0724 26.5 27.6573 26.0529 27.79 25.39L29 17H16M17 31C17 31.5523 16.5523 32 16 32C15.4477 32 15 31.5523 15 31C15 30.4477 15.4477 30 16 30C16.5523 30 17 30.4477 17 31ZM28 31C28 31.5523 27.5523 32 27 32C26.4477 32 26 31.5523 26 31C26 30.4477 26.4477 30 27 30C27.5523 30 28 30.4477 28 31Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
  'cross-platform-apps': `
<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="40" height="40" rx="16" fill="white" fill-opacity="0.1"/>
<rect x="14" y="12" width="12" height="18" rx="2" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18 27H22" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`
};

for (const [name, content] of Object.entries(svgs)) {
  fs.writeFileSync(path.join(dir, name + '.svg'), content.trim());
}
console.log('SVGs created successfully.');
