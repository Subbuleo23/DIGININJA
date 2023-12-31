import express = require("express");
import mysql = require("mysql");
import connection = require("express-myconnection");

var app = express();

app.use(
    connection(
        mysql,
        {
            host: "localhost",
            user: "dbuser",
            password: "password",
            port: 3306,
            database: "mydb",
        },
        "single",
    ),
);

app.use(function list(req: express.Request, res: express.Response, next: Function) {
    req.getConnection(function(err: mysql.MysqlError, connection: mysql.Connection) {
        if (err) return next(err);

        connection.query("SELECT 1 AS RESULT", [], function(err: mysql.MysqlError, results: any) {
            if (err) return next(err);

            results[0].RESULT;
            // -> 1

            res.send(200);
        });
    });
});
