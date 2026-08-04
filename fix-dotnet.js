const fs = require('fs');
const path = require('path');

const dir = 'e:\\Interview Notes\\Interview-Guide';

// 1. Fix dotnet.html
const dotnetPath = path.join(dir, 'dotnet.html');
let dotnetHtml = fs.readFileSync(dotnetPath, 'utf8');
dotnetHtml = dotnetHtml.replace(/<title>C# Complete Interview Guide<\/title>/, '<title>.NET & C# Complete Interview Guide</title>');
dotnetHtml = dotnetHtml.replace(/<h1 class="display-4 fw-bold text-white mb-3">C# Interview Guide<\/h1>/, '<h1 class="display-4 fw-bold text-white mb-3">.NET & C# Interview Guide</h1>');
dotnetHtml = dotnetHtml.replace(/<script src="csharp-data\.js"><\/script>/, '<script src="dotnet-data.js"></script>');
dotnetHtml = dotnetHtml.replace(/<a class="nav-link active fw-bold text-primary" href="csharp\.html">C# Guide<\/a>/, '<a class="nav-link active fw-bold text-primary" href="dotnet.html">.NET Guide</a>');
fs.writeFileSync(dotnetPath, dotnetHtml);

// 2. Fix index.html
const indexPath = path.join(dir, 'index.html');
let indexHtml = fs.readFileSync(indexPath, 'utf8');
const csharpCard = `            <!-- C# Card -->
            <div class="col-md-5 col-lg-3 fade-in-up" style="animation-delay: 0.2s;">
                <a href="csharp.html" class="text-decoration-none">
                    <div class="card h-100 p-4 text-center portal-card rounded-4">
                        <i class="bi bi-filetype-cs icon-huge" style="color: #9B4F96;"></i>
                        <h4 class="fw-bold text-white">C#</h4>
                        <p class="text-muted mt-2 fs-6">100 Questions: C# Fundamentals, OOP Concepts, LINQ, Memory Management, Async/Await.</p>
                        <span class="btn btn-outline-primary rounded-pill mt-auto mx-auto px-4 btn-sm" style="border-color:#9B4F96; color:#9B4F96;">Start C#</span>
                    </div>
                </a>
            </div>`;

const dotnetCard = `            <!-- .NET Card -->
            <div class="col-md-5 col-lg-3 fade-in-up" style="animation-delay: 0.15s;">
                <a href="dotnet.html" class="text-decoration-none">
                    <div class="card h-100 p-4 text-center portal-card rounded-4">
                        <i class="bi bi-microsoft icon-huge" style="color: #512bd4;"></i>
                        <h4 class="fw-bold text-white">.NET</h4>
                        <p class="text-muted mt-2 fs-6">198 Questions: CLR, Memory, Repository Pattern, DI, and Architecture.</p>
                        <span class="btn btn-outline-primary rounded-pill mt-auto mx-auto px-4 btn-sm">Start .NET</span>
                    </div>
                </a>
            </div>`;

// Replace the existing C# card with both cards
const oldCsharpCardRegex = /<!-- \.NET Card -->[\s\S]*?<\/div>\s*<\/a>\s*<\/div>/;
indexHtml = indexHtml.replace(oldCsharpCardRegex, dotnetCard + '\n\n' + csharpCard);
fs.writeFileSync(indexPath, indexHtml);

// 3. Fix navbars across all html files
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

for (const file of files) {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if .NET Guide is already in the navbar
    if (!content.includes('href="dotnet.html"')) {
        // Insert .NET Guide before C# Guide
        const csharpNavItem = '<li class="nav-item">\n                        <a class="nav-link" href="csharp.html">C# Guide</a>\n                    </li>';
        const csharpActiveNavItem = '<li class="nav-item">\n                        <a class="nav-link active fw-bold text-primary" href="csharp.html">C# Guide</a>\n                    </li>';
        
        const newDotnetNavItem = '<li class="nav-item">\n                        <a class="nav-link" href="dotnet.html">.NET Guide</a>\n                    </li>\n                    ';
        
        if (content.includes(csharpNavItem)) {
             content = content.replace(csharpNavItem, newDotnetNavItem + csharpNavItem);
        } else if (content.includes(csharpActiveNavItem)) {
             content = content.replace(csharpActiveNavItem, newDotnetNavItem + csharpActiveNavItem);
        }
        
        fs.writeFileSync(filePath, content);
    }
}
console.log('Restored dotnet guide and updated navbars.');
