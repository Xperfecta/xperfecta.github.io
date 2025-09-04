document.addEventListener('DOMContentLoaded', () => {
    const welcomeMessage = document.createElement('h1');
    welcomeMessage.textContent = 'Welcome to My Static Website!';
    document.body.appendChild(welcomeMessage);

    const button = document.createElement('button');
    button.textContent = 'Click Me!';
    document.body.appendChild(button);

    button.addEventListener('click', () => {
        alert('Button was clicked!');
    });
});