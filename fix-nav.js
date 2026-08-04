const fs = require('fs');
const path = require('path');

const dir = 'e:\\Interview Notes\\Interview-Guide';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

for (const file of files) {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace href
    content = content.replace(/href="dotnet\.html"/g, 'href="csharp.html"');
    
    // Replace text in navbar
    content = content.replace(/>\.NET &amp; C# Guide</g, '>C# Guide<');
    content = content.replace(/>\.NET & C# Guide</g, '>C# Guide<');

    fs.writeFileSync(filePath, content);
}
console.log('Fixed navbars in all HTML files.');
