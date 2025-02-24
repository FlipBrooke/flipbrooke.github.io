const loadCSV = async (file) => {
    const response = await fetch(file);
    const data = await response.text();
    const lines = data.split('\n').map(line => line.trim()).filter(line => line);
    
    lines.shift(); // Skip the header line
    
    return lines.map(line => {
        const [media, aliases, mediaClass] = line.split(/,(?=(?:[^"]*"[^"]*")*[^"]*$)/).map(field => field.replace(/"/g, '').trim());
        
        // Split mediaClass by commas and trim whitespace, then join by <br> for line breaks
        const formattedClass = mediaClass ? mediaClass.split(/\s*,\s*/).join('<br>') : '';

        return {
            media,
            aliases: aliases ? aliases.split(/\s*,\s*/) : [],
            mediaClass: formattedClass
        };
    });
};

const findMedia = (query, entries) => {
    const lowerQuery = query.toLowerCase();
    return entries.find(({ media, aliases }) => media.toLowerCase() === lowerQuery || aliases.some(alias => alias.toLowerCase() === lowerQuery));
};

document.addEventListener("DOMContentLoaded", async () => {
    const csvFile = "Resources/Classes.csv";
    const mediaEntries = await loadCSV(csvFile);

    const searchInput = document.getElementById("searchInput");
    const searchButton = document.getElementById("searchButton");

    const performSearch = () => {
        const query = searchInput.value;

        if (!/[a-zA-Z0-9]/.test(query)) {
            document.getElementById("mediaName").textContent = "You didn't type a game...";
            document.getElementById("className").textContent = "Try using the search bar below";
            return;
        }

        const entry = findMedia(query, mediaEntries);
        if (entry) {
            document.getElementById("mediaName").textContent = `${entry.media}:`;
            document.getElementById("className").innerHTML = entry.mediaClass;  // Use innerHTML to render line breaks
        } else {
            document.getElementById("mediaName").textContent = `'${query}' isn't listed`;
            document.getElementById("className").textContent = "I probably don't play it much...";
        }
    };

    searchButton.addEventListener("click", performSearch);

    searchInput.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            performSearch();
        }
    });
});
