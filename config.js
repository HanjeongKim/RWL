// 설정값을 가지고 있는 모듈

module.exports = {
    server_port : 3000,
    db_info:{
        connectionLimit: 10,
        //host: '218.49.80.19',       // 집밖에서
        host: 'rwl.c6c0si2eyhwe.ap-northeast-2.rds.amazonaws.com',
        // host: 'localhost',        // 집에서
        port: '3306',
        user: 'RWL',
        password: 'RWL12345678',
        // database: 'test_db',
        database: 'RWL',
        debug: false,
        multipleStatements: true
    },
};
