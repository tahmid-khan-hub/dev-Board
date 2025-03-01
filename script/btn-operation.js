document.getElementById('mobile-btn')
.addEventListener('click', function(event){
    event.preventDefault();
    alert('Board updated Successfully')
    document.getElementById('mobile-btn').setAttribute('disabled', true);
    const btn = document.getElementById('mobile-btn');
    btn.classList.add('bg-gray-300');
    let count = document.getElementById('task-cnt');
    let cnt = parseInt(count.innerText);
    cnt = cnt - 1;
    count.innerText = cnt;

    const container = document.getElementById('history-container');

    const div = document.createElement('div');
    div.classList.add('bg-gray-100', 'p-3', 'm-4', 'rounded-xl', 'text-gray-500')

    const now = new Date();
    let hours = now.getHours() % 12 || 12;
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let ampm = now.getHours();

    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    if (seconds < 10) {
        seconds = '0' + seconds;
    }
    if(ampm >= 12){
        ampm = 'PM'
    }
    else{
        ampm = 'AM'
    }

    div.innerHTML = `
        <p>You have completed the task Fix Mobile Button Issue at 
        ${hours}:${minutes}:${seconds} ${ampm}
        </p>
    `

    container.appendChild(div);

})
