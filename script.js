// Chatbox Toggle
const chatbox = document.querySelector('.chatbox');
const openChatButton = document.getElementById('openChat');
const closeChatButton = document.getElementById('closeChat');
const chatInput = document.getElementById('chatInput');
const sendChatButton = document.getElementById('sendChat');
const chatMessages = document.getElementById('chatMessages');

// Open Chat
openChatButton.addEventListener('click', () => {
    chatbox.style.display = 'flex';
    openChatButton.style.display = 'none';
});

// Close Chat
closeChatButton.addEventListener('click', () => {
    chatbox.style.display = 'none';
    openChatButton.style.display = 'block';
});

// Send Chat Message
sendChatButton.addEventListener('click', () => {
    const userMessage = chatInput.value.trim();
    if (userMessage) {
        const messageElement = document.createElement('p');
        messageElement.textContent = `You: ${userMessage}`;
        chatMessages.appendChild(messageElement);

        chatInput.value = '';

        // Simulate bot response
        setTimeout(() => {
            const botResponse = document.createElement('p');
            botResponse.textContent = 'Bot: Thank you for your message!';
            chatMessages.appendChild(botResponse);
        }, 1000);
    }
});





// Scroll Reveal Effect
const revealElements = document.querySelectorAll('.reveal');

window.addEventListener('scroll', () => {
    revealElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight - 50) {
            el.classList.add('active');
        }
    });
});



// Order Now Feature
const orderButtons = document.querySelectorAll('.order-btn');
const orderNotification = document.createElement('div');
orderNotification.className = 'order-notification';
document.body.appendChild(orderNotification);

orderButtons.forEach(button => {
    button.addEventListener('click', () => {
        const itemName = button.dataset.item;
        const itemPrice = button.dataset.price;

        // Show notification
        orderNotification.textContent = `You ordered: ${itemName} - Rp ${itemPrice}`;
        orderNotification.classList.add('active');

        // Hide notification after 3 seconds
        setTimeout(() => {
            orderNotification.classList.remove('active');
        }, 3000);
    });
});



// Automatic Dark Mode
const hour = new Date().getHours();
if (hour >= 18 || hour < 6) {
    document.body.classList.add('dark-mode');
}


// Review Submission
const reviewForm = document.getElementById('reviewForm');
const reviewList = document.getElementById('reviewList');

reviewForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('reviewName').value;
    const message = document.getElementById('reviewMessage').value;

    // Create review element
    const review = document.createElement('div');
    review.innerHTML = `<strong>${name}</strong><p>${message}</p>`;

    // Add review to the list
    if (reviewList.querySelector('p')) {
        reviewList.innerHTML = ''; // Clear placeholder
    }
    reviewList.appendChild(review);

    // Clear form
    reviewForm.reset();
});



