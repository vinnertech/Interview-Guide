const fs = require('fs');

function fixMermaidSyntax(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');

    // Fix node labels: NodeName[Some Label] -> NodeName["Some Label"]
    // We only want to add quotes if there are no quotes already.
    content = content.replace(/(\w+)\[([^"\]]+)\]/g, '$1["$2"]');
    
    // Fix circle/parenthesis nodes: \w+\(\(([^"\)]+)\)\)
    content = content.replace(/(\w+)\(\(([^"\)]+)\)\)/g, '$1(("$2"))');
    
    // Fix diamond nodes: \w+\{([^"\}]+)\}
    content = content.replace(/(\w+)\{([^"\}]+)\}/g, '$1{"$2"}');
    
    // Fix cylinder/database nodes: \w+\[\(([^"\]\)]+)\)\]
    content = content.replace(/(\w+)\[\(([^"\]\)]+)\)\]/g, '$1[("$2")]');

    // Fix edge labels: -->|Label| or -.->|Label| or ==>|Label|
    // We need to match the arrow and the pipe, then the text, then the closing pipe.
    // Ensure we don't double quote if it's already quoted.
    content = content.replace(/(-->|-\.->|==>)\|([^"\|]+)\|/g, '$1|"$2"|');

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed ${filePath}`);
}

fixMermaidSyntax('./src/data/csharp-tutorial-data.js');
fixMermaidSyntax('./src/data/aspnet-mvc-tutorial-data.js');
