<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <title>To-Do List App</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <div class="container">
        <h2>To-Do List Harian</h2>

        <input type="text" id="taskInput" placeholder="Masukkan nama tugas">
        <button id="addTaskBtn">Tambah Tugas</button>

        <ul id="taskList"></ul>

        <p>
            Total Tugas: <span id="totalTask">0</span> |
            Tugas Selesai: <span id="completedTask">0</span>
        </p>
    </div>

    <script src="script.js"></script>
</body>
</html>
