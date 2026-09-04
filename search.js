function searchWeb() {

    const input = document.getElementById("searchInput");

    const query = input.value.trim();

    if (query === "") {
        return;
    }

    const url =
        "https://www.google.com/search?q=" +
        encodeURIComponent(query);

    window.location.href = url;
}


document.getElementById("searchInput").addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Enter") {
            searchWeb();
        }

    }
);