from flask import Flask, render_template, request, jsonify
import json
import random

app = Flask(__name__)

# Load responses from JSON file
with open('responses.json') as f:
    responses = json.load(f)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/get_answer', methods=['POST'])
def get_answer():
    data = request.get_json()
    category = data.get('category')

    if not category or category not in responses:
        return jsonify({'answer': 'Invalid category.'})

    answer = random.choice(responses[category])
    return jsonify({'answer': answer})

if __name__ == '__main__':
    app.run(debug=True)