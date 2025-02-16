document.getElementById('oracleForm').addEventListener('submit', async function (event) {
    event.preventDefault();

    const question = document.getElementById('question').value;
    const category = document.getElementById('category').value;

    if (!question || !category) {
        alert("Please fill out the question and select a category.");
        return;
    }

    try {
        const response = await fetch('/get_answer', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ question, category }),
        });

        const data = await response.json();
        document.getElementById('response').innerText = data.answer || "No response received.";
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('response').innerText = "An error occurred.";
    }
});