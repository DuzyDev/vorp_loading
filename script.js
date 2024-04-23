window.addEventListener('message', function(event) {
    if (event.data.type === "progress") {
        const progressElement = document.getElementById('progress');
        progressElement.style.width = event.data.percent + '%';
        document.getElementById('status').innerText = event.data.status;
    }
});
