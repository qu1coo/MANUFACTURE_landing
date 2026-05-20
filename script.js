
const revealCallback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
            observer.unobserve(entry.target);
        }
    });
};

const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver(revealCallback, observerOptions);

const animatedItems = document.querySelectorAll('.feature-card, .section-title, .production_content, .production__image, .product-card, .workflow_item, .faq-item, .contacts_info, contacts_form-block, .stats-item');

animatedItems.forEach(item => {
    item.style.opacity = "0";
    item.style.transform = "translateY(30px)";
    item.style.transition = "all 0.8s ease-out";
    observer.observe(item);
});

const mainButton = document.querySelector('#mainBtn');
if (mainButton) {
    mainButton.addEventListener('click', () => alert('Форма расчета откроется скоро!'));
}

const worksButton = document.querySelector('#worksBtn');
if (worksButton) {
    worksButton.addEventListener('click', () => alert('Раздел в разработке!'));
}
const catalogCalcBtns = document.querySelectorAll('.calc-btn');
catalogCalcBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        alert('Форма расчета для этого изделия готовится к запуску!');
    });
});

const faqHeaders = document.querySelectorAll('.faq-item_header');

faqHeaders.forEach(header => {
    header.addEventListener('click', () => {

        const currentItem = header.parentElement;

        document.querySelectorAll('.faq-item').forEach(item => {
            if (item !== currentItem) {
                item.classList.remove('active');
            }
        });

        currentItem.classList.toggle('active');
    });
});

const orderForm = document.querySelector('#orderForm');

if (orderForm) {
    orderForm.addEventListener('submit', (event) => {

        event.preventDefault();

        const name = document.querySelector('#userName').value;
        const phone = document.querySelector('#userPhone').value;
        const message = document.querySelector('#userMessage').value;

        console.log(`Заявка получена! Имя: ${name}, Телефон: ${phone}, Сообщение: ${message}`);

        alert(`Спасибо, ${name}! Ваша заявка успешно отправлена на расчет. Мастер-технолог свяжется с вами в течение 30 минут.`);

        orderForm.reset();
    });
}