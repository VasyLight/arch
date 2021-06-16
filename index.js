const = reqire('mysql');

//конфигурация подключения

const conn = msql.createConnection(config {
	host: "31.31.198.144",
	user: "u1317165_default",
	database: "u1317165_default",
	password: "ou!abCv7"
});

conn.connect( options:err=> {
	if(err) {
		console.log(err);
		return err;
	}
	else {
		console.log('Database --- Ok');
	}
})