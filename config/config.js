const config = {
    env: process.env.NODE_ENV || 'development', 
    port: process.env.PORT || 8080,
    jwtSecret: process.env.JWT_SECRET || "encrypt", 
    mongoUri: process.env.MONGODB_URI || "mongodb+srv://admin:qwerty123@cluster0.zqbki0g.mongodb.net/survey-form?retryWrites=true&w=majority" ||
    process.env.MONGO_HOST ||
    'mongodb://' + (process.env.IP || 'localhost') + ':' + 
   (process.env.MONGO_PORT || '27017') +
    '/mernproject' 
}
export default config
   