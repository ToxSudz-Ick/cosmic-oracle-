const prompts = [
    "The stars blinked, and suddenly...",
    "A cosmic whale whispered in my ear...",
    "Gravity took a break and...",
    "A black hole laughed because...",
    "A forgotten god just woke up and said...",
    "The fabric of reality has a loose thread. When pulled, it reveals...",
    "Time tripped over itself and now..."
];

function getRandomPrompt() {
    return prompts[Math.floor(Math.random() * prompts.length)];
}

document.getElementById("oracle-prompt").innerText = getRandomPrompt();

function submitResponse() {
    const response = document.getElementById("user-response").value;
    if (response.trim() === "") {
        alert("The Oracle demands a real answer.");
        return;
    }

    const responseList = document.getElementById("response-list");
    const newResponse = document.createElement("li");
    newResponse.innerText = response;
    responseList.appendChild(newResponse);

    document.getElementById("user-response").value = "";
    document.getElementById("oracle-prompt").innerText = getRandomPrompt();
}
