from flask import Flask, request, jsonify, redirect
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}}, supports_credentials=True)

users = []

@app.route('/users', methods=['GET'])
def get_users():
    return jsonify(users)

@app.route('/SignupForm', methods=['POST'])
def register_user():
    data = request.json
    username = data.get('username')
    password = data.get('password')
    email = data.get('email')

    if any(user['username'] == username for user in users):
        return jsonify({'error': 'Username already exists'}), 401 # Adjusted status code

    users.append({'username': username, 'password': password, 'email': email})
    return jsonify({'message': 'User registered successfully'}), 201

@app.route('/Login', methods=['POST'])
def login_user():
    data = request.json
    username = data.get('username')
    password = data.get('password')

    for user in users:
        if user['username'] == username and user['password'] == password:
            return redirect('/products')
    
    return jsonify({'error': 'Incorrect username or password'}), 401

@app.route('/products', methods=['GET'])
def get_products():
    # Product data...
    return jsonify(products)

if __name__ == '__main__':
    app.run(debug=True)
