window.onload = welcome;

function welcome() {
    var welcomeElement = document.getElementById('welcomeText');
    welcomeElement.value = 'welcome';
    alert('start script change method: ' + welcomeElement.value);
}