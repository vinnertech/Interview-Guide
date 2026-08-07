const fs = require('fs');

function repair(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');

    // Manually fix known broken strings

    // ASP.NET MVC diagram 1
    content = content.replace(/User\(\("User \/ Browser"\)\) -->\|"1\. HTTP Request"\| Controller\["Controller The Brain"\]/, 'User(("User / Browser")) -->|"1. HTTP Request"| Controller["Controller (The Brain)"]');
    
    // ASP.NET MVC diagram 17 TempData issue
    content = content.replace(/-->\|TempData\["'Msg'"\]='Saved'\|/, '-->|"TempData[\'Msg\']=\'Saved\'"|');

    // C# diagram issues
    // Explicit (int) Data Loss!
    content = content.replace(/-->\|Explicit \(int\)\s*Data Loss!\|/, '-->|"Explicit (int) Data Loss!"|');
    
    // Add('Apple')
    content = content.replace(/-->\|Add\('Apple'\)\|/g, '-->|"Add(\'Apple\')"|');
    content = content.replace(/-->\|Add\('Banana'\)\|/g, '-->|"Add(\'Banana\')"|');
    content = content.replace(/-->\|Remove\('Apple'\)\|/g, '-->|"Remove(\'Apple\')"|');
    
    // new Player()
    content = content.replace(/-->\|new Player\(\)\|/, '-->|"new Player()"|');
    
    // Passed ('Axe', 50)
    content = content.replace(/-->\|Passed \('Axe', 50\)\|/, '-->|"Passed (\'Axe\', 50)"|');
    
    // .Where(Score > 1000)
    content = content.replace(/-->\|\.Where\(Score > 1000\)\|/, '-->|".Where(Score > 1000)"|');
    
    // Append()
    content = content.replace(/-->\|Append\(\)\|/, '-->|"Append()"|');
    
    // Question Mark (?)
    content = content.replace(/-->\|Question Mark \(\?\)\|/, '-->|"Question Mark (?)"|');

    // C# string format edge
    content = content.replace(/-->\|\\\$"Name: \{Name\}"\|/, '-->|"$\\"Name: {Name}\\""|');

    // find all -->|...| that don't start with " and quote them
    content = content.replace(/(-->|-\.->|==>)\|([^"\|]+)\|/g, '$1|"$2"|');

    fs.writeFileSync(filePath, content, 'utf8');
}

repair('src/data/aspnet-mvc-tutorial-data.js');
repair('src/data/csharp-tutorial-data.js');
console.log('Repaired both files');
