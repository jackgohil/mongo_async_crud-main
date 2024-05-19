const allowedOrigins = require('./allowedOrigins');

const corsOptions = {
    // origin: (origin, callback) => {
    //     if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
    //         callback(null, true)
    //     } else {
    //         callback(new Error('Not allowed by CORS'));
    //     }
    // },
        origin: true, // Allow all origins
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Explicitly allow these methods, though all methods are allowed by default
        optionsSuccessStatus: 200 // Some legacy browsers (IE11, various SmartTVs) choke on 204

    
}

module.exports = corsOptions;