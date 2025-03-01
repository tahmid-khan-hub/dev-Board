document.getElementById('clear-history-btn')
.addEventListener('click', function(event){

    event.preventDefault();
    // const btn = document.getElementById('clear-history-btn');
    const historyContainer = document.getElementById('history-container');
    historyContainer.innerHTML = ''; 
    historyContainer.style.display = 'none';
})