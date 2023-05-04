document.querySelector("#year").innerHTML = "&copy; 2023 | Mathias Lago | Accra Ghana";

    let lastUpdated = new Date(document.lastModified);
    let formattedDate = lastUpdated.toLocaleString();
    document.getElementById("lastUpdated").textContent = formattedDate;
  
  