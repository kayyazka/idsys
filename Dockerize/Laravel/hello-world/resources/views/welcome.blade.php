<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Awesome Hello World</title>
    <style>
        body {
            margin: 0;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            background: linear-gradient(135deg, #494a4cff, #9d98a2ff);
            font-family: 'Arial', sans-serif;
            color: #fff;
        }
        h1 {
            font-size: 4rem;
            text-shadow: 2px 2px 10px rgba(0,0,0,0.3);
            animation: pulse 2s infinite;
        }
        @keyframes pulse {
            0%   { transform: scale(1); }
            50%  { transform: scale(1.1); }
            100% { transform: scale(1); }
        }
    </style>
</head>
<body>
    <h1> Hello World from Laravel in Docker!</h1>
</body>
</html>