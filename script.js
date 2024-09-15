document.getElementById('Switch-theme').onclick = function() {
    var body = document.body;
    var button = this;
    
    body.classList.toggle('dark-mode');
    button.textContent = body.classList.contains('dark-mode') ? 'Switch to Day Mode' : 'Switch to Night Mode';
};
