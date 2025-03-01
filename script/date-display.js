function updateDate() {

    let today = new Date();

    let day = today.toLocaleDateString('en-US', { weekday: 'short' });

    let month = today.toLocaleDateString('en-US', { month: 'short' });

    let date = today.getDate();

    let year = today.getFullYear();

    document.getElementById("weekday").textContent = day;
    document.getElementById("bold-date").textContent = `${month} ${date} ${year}`;
}

updateDate();