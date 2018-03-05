'use strict';
require('isomorphic-fetch');
const file = "./api/data/shellcode.json";
const fs = require("fs");

var shellcodes_in_memory = {
    shellcodes: []
};

exports.register_shellcode = function (req, res) {
    let shellcode = req.body.shellcode;
    let name = req.body.name;
    let description = req.body.description;

    try {
        register(name, shellcode, description);
        res.status(200).send(shellcodes_in_memory);
    } catch (err) {
        res.status(400).send(err.message);
    }
   
}

exports.delete_shellcode = function (req, res) {
    let shellcode_name = req.body.name;
    shellcodes_in_memory = shellcodes_in_memory.shellcodes.filter(s => s.name !== shellcode_name);
}

exports.get_shellcodes = function (req, res) {
    res.status(200).send(shellcodes_in_memory.shellcodes);
}

const getshellcode = function (name) {
    let shellcode = shellcodes_in_memory.shellcodes.find(function (s) {
        return s.name.toLower() === name.toLower();
    });
    return shellcode;
}

const register = function (name, shellcode, description) {
    try {
        let shellcode = getshellcode(name);
        if (!shellcode) {
            shellcodes_in_memory.shellcodes.push({
                "name": name,
                "shellcode": shellcode,
                "description": description,
            });
        }
        else {
            throw new Error("Name already in use");
        }

        return shellcode;
    } catch (err) {
        console.log(err)
        return "";
    }
}

const load_json_into_memory = function () {
    var contents = fs.readFileSync(file, 'utf8');
    shellcodes_in_memory = JSON.parse(contents);
}

const write_memory_to_json = function () {
    fs.writeFile(file, JSON.stringify(shellcodes_in_memory), () => console.log(JSON.stringify(shellcodes_in_memory)));
}

exports.__init = function () {
    load_json_into_memory();
    setInterval(() => write_memory_to_json(), 10000);
}

