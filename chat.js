// 🚀 AI Chat System (Gemini-Like)
function sendMessage() {
    let userInput = document.getElementById("user-input").value;
    if (userInput.trim() === "") return;

    // 🌟 Add User Message
    let chatBox = document.getElementById("chat-box");
    let userMessage = document.createElement("div");
    userMessage.classList.add("chat-message", "user");
    userMessage.innerHTML = `<span>You:</span> ${userInput}`;
    chatBox.appendChild(userMessage);

    // 🧠 AI Typing Effect
    let botMessage = document.createElement("div");
    botMessage.classList.add("chat-message", "bot");
    botMessage.innerHTML = `<span class="bot-name">Exxam AI:</span> <span id="typing">...</span>`;
    chatBox.appendChild(botMessage);

    // 🎭 AI Reply Simulation (Replace with actual API)
    setTimeout(() => {
        let aiResponses = [
            "That's a great question! Let me analyze it for you. 🤖",
            "Based on previous exam trends, here’s what I found...",
            "Exams can be tricky! Would you like some study tips?",
            "I can help you predict probable questions. Try a different query!",
            "Looking for past papers? I can fetch those for you!"
        ];
        let randomResponse = aiResponses[Math.floor(Math.random() * aiResponses.length)];
        botMessage.innerHTML = `<span class="bot-name">Exxam AI:</span> ${randomResponse}`;
    }, 2000);

    // 📝 Clear Input Field
    document.getElementById("user-input").value = "";
}
