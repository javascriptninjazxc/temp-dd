const tg = window.Telegram.WebApp;

console.log("User:", tg.initDataUnsafe?.user);

// Например, изменить заголовок
tg.MainButton.setText("Отправить данные");
tg.MainButton.show();

tg.MainButton.onClick(() => {
    const userData = tg.initDataUnsafe?.user || {};
    alert(`Привет, ${userData.first_name || "гость"}!`);
});