body, html {
  margin: 0; padding: 0; height: 100%; font-family: 'Arial', sans-serif;
}

.background {
  position: fixed; top: 0; left: 0; width: 100%; height: 100%;
  background: url('https://cdn.discordapp.com/attachments/1463400037416439869/1472460989906685973/6b38c649-3c57-4e92-a49d-5d7d6bbd40b0.png') no-repeat center center;
  background-size: cover; z-index: -1;
}

main {
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  min-height: 100vh; padding: 20px;
}

#error-msg { color:red; text-align:center; }

#error-msg { margin-top:5px; }

#error-msg, .error { color: red; text-align: center; }

#auth-card {
  background: rgba(255,255,255,0.95);
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 0 20px rgba(0,0,0,0.3);
  width: 100%; max-width: 400px;
  text-align: center;
  border: 5px solid;
  border-image-slice: 1;
  border-width: 5px;
  border-image-source: linear-gradient(45deg, red, orange, yellow, green, blue, indigo, violet);
}

#auth-card h1 { margin-bottom: 20px; }
#auth-card h2 { margin: 15px 0 10px; }
#auth-card input { width: 100%; padding: 10px; margin: 5px 0; border-radius: 10px; border: 1px solid #ccc; }
#auth-card button { width: 100%; padding: 10px; border-radius: 10px; border: none; background: #333; color: white; cursor: pointer; }
#auth-card button:hover { background: #555; }

#features {
  text-align: center; margin-top: 40px;
  background: rgba(255,255,255,0.9);
  padding: 30px; border-radius: 20px;
  box-shadow: 0 0 20px rgba(0,0,0,0.3);
}

#features h2 { font-size: 28px; margin-bottom: 20px; }
#features ul { list-style: none; padding: 0; }
#features li { margin: 10px 0; font-size: 18px; }

#discord-btn {
  display: inline-flex; align-items: center; margin-top: 20px;
  padding: 10px 20px; background:#7289da; color:white; text-decoration:none; border-radius:10px;
}
#discord-btn img { width: 24px; height: 24px; margin-right: 10px; }
