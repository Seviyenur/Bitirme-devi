const app = require('./app');
const { poolPromise } = require('./config/db');
const PORT = process.env.PORT || 3000;

async function startServer() {
  try {
    await poolPromise;
    app.listen(PORT, () => {
      console.log(`Server ${PORT} portunda çalışıyor`);
    });
  } catch (err) {
    console.error('Server başlatma hatası:', err);
    process.exit(1);
  }
}

startServer();