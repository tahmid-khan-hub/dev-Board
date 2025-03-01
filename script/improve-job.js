document.getElementById('job-btn')
.addEventListener('click', function(event){
    event.preventDefault();

    alert('Board updated Successfully')

    setBtnAttributeAndClassList('job-btn')

    let cnt = convertIntoNumber('task-cnt')
    cnt = cnt - 1;
    setInnerText('task-cnt', cnt);

    let topCnt = convertIntoNumber('top-cnt');
    topCnt = topCnt + 1;
    setInnerText('top-cnt', topCnt);

    if(topCnt === 29 && cnt === 0){
        alert('Congrates!!! You have completed all the current task')
    }

    const container = document.getElementById('history-container');
    container.style.display = 'block';

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
        <p>You have completed the task Improve Job searching at 
        ${hours}:${minutes}:${seconds} ${ampm}
        </p>
    `

    container.appendChild(div);

})
