
var currentChatbotInput = document.getElementById("chatbot-input-box").value; 
const chatbotInputButton = document.getElementById('chatbot-input-button');
const chatbotInputButtonIcon = document.getElementById('chatbot-input-button-icon');
const textarea = document.getElementById("chatbot-input-box");

function autoResizeChatbotInput() {
    autoResize("chatbot-input-box")

    // Handle button color change
    if (textarea.value.trim() !== "" && currentChatbotInput === "") {
        chatbotInputButton.style.backgroundColor = var_js('--default-green')
        chatbotInputButton.style.border = `1px solid ${var_js('--default-green')}`
        chatbotInputButtonIcon.style.color = "#ffffff"
        chatbotInputButtonIcon.style.backgroundColor = var_js('--default-green')
    } else if (textarea.value.trim() === "" && currentChatbotInput !== "") {
        chatbotInputButton.style.backgroundColor = var_js('--default-gray-white')
        chatbotInputButton.style.border = `1px solid ${var_js('--default-gray-white')}`
        chatbotInputButtonIcon.style.color = var_js('--default-gray')
        chatbotInputButtonIcon.style.backgroundColor = var_js('--default-gray-white')
    }
    currentChatbotInput = textarea.value.trim()

    chatbotInputButton.style.height = textarea.scrollHeight + "px";
}

chatbotInputButton.addEventListener("mouseover", function() {
    if (textarea.value.trim() !== "") {
        new_color = colorBrightnessChange(var_js('--default-green'), 0.8); 
        chatbotInputButton.style.backgroundColor = new_color
        chatbotInputButton.style.border = `1px solid ${new_color}`
        chatbotInputButtonIcon.style.backgroundColor = new_color
    }
}); 

chatbotInputButton.addEventListener("mouseleave", function() {
    if (textarea.value.trim() !== "") {
        chatbotInputButton.style.backgroundColor = var_js('--default-green')
        chatbotInputButton.style.border = `1px solid ${var_js('--default-green')}`
        chatbotInputButtonIcon.style.backgroundColor = var_js('--default-green')
    }
}); 

document.addEventListener("DOMContentLoaded", function() {
    autoResizeChatbotInput(); 
    autoResizeChatbotInput();
});

