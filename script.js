body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
}

.app-container {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    width: 400px;
}

h1 {
    text-align: center;
}

.input-section {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
}

input {
    width: 65%;
    padding: 10px;
    margin-right: 5px;
}

button {
    padding: 10px;
    background-color: #5cb85c;
    color: white;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

button:hover {
    background-color: #4cae4c;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: flex;
    justify-content: space-between;
    background-color: #e9e9e9;
    margin: 5px 0;
    padding: 10px;
    border-radius: 4px;
}

.completed {
    text-decoration: line-through;
    color: grey;
}
