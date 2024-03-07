const createUser = require("./createUser");
const deleteUser = require("./deleteUser");
const getUsers = require("./getUsers");
// const selectItem = require("./itemQuestion");

const readline = require("readline")

var cli = {}

cli.init = function() {
    var _interface = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: ">"
    });

    var arrayOfInputs = [];
    cli.getUserInput = function() {
        _interface.question("O que deseja fazer?\n 1 - Criar usuário, 2 - Deletar usuário, 3 - Listar Usuários\n(Digite apenas os números)\n", function(str) {
            if (str.trim().length > 0) {
                arrayOfInputs.push(str.trim());
                cli.processInput = function(str) {
                    str = typeof(str) == "string" && str.trim().length > 0 ? str.trim() : false;
                    if (str) {
                        if (str == "1") {
                            cli.createUser();
                        } else if (str == "2") {
                            cli.deleteUser();
                        } else if (str == "3") {
                            cli.getUsers();
                        } else {
                            console.log("Comando inválido");
                        }
                    }
                }
                cli.processInput(str);
            }
        });
    }

    cli.createUser = function() {
        _interface.question("Digite o nome do usuário: ", function(name) {
            _interface.question("Digite o email do usuário: ", function(email) {
                _interface.question("Digite o gênero do usuário (male ou female): ", function(gender) {
                    createUser(name, email, gender);
                    _interface.close();
                });
            });
        });
    }

    cli.deleteUser = function() {
        _interface.question("Digite o id do usuário que deseja deletar: ", function(id) {
            deleteUser(id);
            _interface.close();
        });
    }

    cli.getUsers = function() {
        console.log(getUsers());
        _interface.close();
    }

    cli.getUserInput();
}

cli.init();