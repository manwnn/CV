document.addEventListener('DOMContentLoaded', () => {
    const textElement = document.getElementById('dynamic-text');
    const phrases = [
        "Один из семи миллиардов",
        "В баре заказываю 0 кружек пива...",
        "Ломаю то, что строили с любовью",
        "Это фича, согласовали",
        "Ломаю по делу",
        "Не трогай, работает",
        "К релизу успеем"
    ];

    let currentIndex = 0;

    setInterval(() => {
        textElement.classList.add('slide-up');

        setTimeout(() => {
            currentIndex = (currentIndex + 1) % phrases.length;
            textElement.textContent = phrases[currentIndex];
            
            textElement.classList.remove('slide-up');
            textElement.classList.add('slide-bottom');
            setTimeout(() => {
                textElement.classList.remove('slide-bottom');
            }, 50); 
            
        }, 600); 
    }, 3000);
});

document.addEventListener('DOMContentLoaded', () => {
    const breakBtn = document.getElementById('break-server-btn');
    const errorOverlay = document.getElementById('error-500-overlay');

    if (breakBtn) {
        const originalText = breakBtn.textContent;

        breakBtn.addEventListener('mouseenter', () => {
            breakBtn.textContent = "Ты точно хочешь этого?";
        });

        breakBtn.addEventListener('mouseleave', () => {
            breakBtn.textContent = originalText;
        });

        if (errorOverlay) {
            breakBtn.addEventListener('click', () => {
                errorOverlay.style.display = 'flex';
                console.error("Critical Error: [object BugFound]");
            });
        }
    }
});