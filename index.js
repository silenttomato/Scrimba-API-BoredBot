document.getElementById('get-activity').addEventListener('click', function() {
    document.title = 'ActiveBot by mox';
    document.body.classList.add('vibrant-background');
    document.getElementById('header').textContent = '😎 ActiveBot 😎';
    document.getElementById('header').setAttribute('aria-label', 'ActiveBot');

    fetch("https://apis.scrimba.com/bored/api/activity")
        .then(response => response.json())
        .then(data => document.getElementById('activity').textContent = data.activity)
});