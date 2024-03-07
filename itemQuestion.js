const question = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

function selectItem() {
    return question.question(
        "O que deseja fazer?\n 1 - Criar usuário, 2 - Deletar usuário, 3 - Listar Usuários\n(Digite apenas os números)\n",
        (item) => {
            question.close();
            return item
        }
    );
}

module.exports = selectItem;