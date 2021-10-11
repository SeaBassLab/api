import mongoose from "mongoose"

(async () => {
    const db = await mongoose.connect("mongodb://Localhost/proyectar", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log('Database is connected to:', db.connection.name);
})();