const mongoose = require('mongoose');
const Product = require('./models/Product.js'); // Подставьте путь к вашей модели продукта

// Подключение к базе данных MongoDB
mongoose.connect('mongodb://localhost:27017/mongodb+srv://otanazarovsultan:<password>@cluster0.bn4jczn.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

// Удаление всех продуктов
async function deleteAllProducts() {
    try {
        await Product.deleteMany({});
        console.log(' продукты успешно удалены.');
    } catch (error) {
        console.error('Ошибка при удалении продуктов:', error);
    } finally {
        // Закрытие соединения с базой данных после выполнения операции
        mongoose.connection.close(); 
    }
}

// Вызов функции для удаления всех продуктов
deleteAllProducts();
