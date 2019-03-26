const host = 'localhost';

module.exports = {
    port: process.env.port || process.env.PORT || '3000',
     mongoUrl: process.env.MONGODB_URI || `mongodb://test:test123@ds119160.mlab.com:19160/test-clever`  // Vitalik db

    };
