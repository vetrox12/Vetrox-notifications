function notify(message, type, duration, color) {
    const container = document.getElementById("NotificationsContainer");
    const notification = document.createElement("div");
    notification.className = "All";
    notification.innerHTML = `
        <div class="Notify">${message}</div>
        <div class="NotifyBarLineTimerWrapper">
            <div class="NotifyBarLineTimer"></div>
        </div>
    `;

    const notifyBarLineTimer = notification.querySelector('.NotifyBarLineTimer');
    notifyBarLineTimer.style.background = color;
    notifyBarLineTimer.style.animation = `timerReverse ${duration / 1000}s forwards`;

    container.appendChild(notification);
    notification.style.animation = "start 1s forwards";

    setTimeout(() => {
        notification.style.animation = "end 1s forwards";
        setTimeout(() => {
            container.removeChild(notification);
        }, 1000);
    }, duration);
}

window.addEventListener('message', function(event) {
    if (event.data.type === 'notify') {
        notify(event.data.message, event.data.notifyType, event.data.duration, event.data.color);
    }
});


// https://discord.gg/hZpJpAu3Zt