import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

export const mongoConnect = async () => {
    try {
        console.log(`Conectando ao MongoDB...`)
        mongoose.set('strictQuery', true)
        await mongoose.connect(process.env.MONGO_URL as string)
        console.log(`Conectado ao MongoDB...`)
    } catch (error) {
        console.log(`Erro ao conectar ao MongoDB: `, error)
    }

}
