function validarNome(nome) {
    return nome.trim().includes(" ") && nome.trim().length > 0;
}
 
// Função para validar CPF (deve ter 11 dígitos numéricos)
function validarCPF(cpf) {
    return /^\d{11}$/.test(cpf);
}
 
// Função para validar UF (deve ter 2 letras)
function validarUF(uf) {
    const estados = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'];
    return estados.includes(uf);
}
 
// Função para formatar CPF
function formatarCPF(cpf) {
    return cpf.replace(/(\d{3})(\d)/, '$1.$2')
              .replace(/(\d{3})(\d)/, '$1.$2')
              .replace(/(\d{3})(\d{2})$/, '$1-$2');
}
 
// Função para formatar CEP
function formatarCEP(cep) {
    return cep.replace(/(\d{5})(\d)/, '$1-$2');
}
 
// Função principal para cadastrar os clientes
function cadastrarClientes() {
    let clientes = [];
    let quantidade = 0;
 
    // Loop para cadastrar clientes
    while (quantidade < 100 && (quantidade < 5 || confirm("Deseja cadastrar mais um cliente?"))) {
        // Captura dos dados
        let nome = prompt("Informe o nome completo do cliente (obrigatório):");
        while (!validarNome(nome)) {
            nome = prompt("Nome inválido. Informe o nome completo do cliente (obrigatório):");
        }
 
        let cpf = prompt("Informe o CPF do cliente (somente números, 11 dígitos):");
        while (!validarCPF(cpf)) {
            cpf = prompt("CPF inválido. Informe o CPF do cliente (obrigatório, 11 dígitos):");
        }
 
        let cep = prompt("Informe o CEP (somente números, 8 dígitos):");
        while (!cep.trim() || cep.length !== 8) {
            cep = prompt("CEP inválido. Informe o CEP (com o formato de 8 números):");
        }
 
        let logradouro = prompt("Informe o logradouro (obrigatório):");
        while (!logradouro.trim()) {
            logradouro = prompt("Logradouro inválido. Informe o logradouro (obrigatório):");
        }
 
        let numero = prompt("Informe o número da residência (obrigatório):");
        while (!numero.trim()) {
            numero = prompt("Número inválido. Informe o número da residência (obrigatório):");
        }
 
        let complemento = prompt("Informe o complemento (se houver):"); // Opcional
        let bairro = prompt("Informe o bairro (obrigatório):");
        while (!bairro.trim()) {
            bairro = prompt("Bairro inválido. Informe o bairro (obrigatório):");
        }
 
        let cidade = prompt("Informe a cidade (obrigatório):");
        while (!cidade.trim()) {
            cidade = prompt("Cidade inválida. Informe a cidade (obrigatório):");
        }
 
        let uf = prompt("Informe o estado (UF, 2 letras):").toUpperCase();
        while (!validarUF(uf)) {
            uf = prompt("UF inválida. Informe o estado (UF, obrigatório):").toUpperCase();
        }
 
        // Armazenar o cliente no array
        clientes.push({
            nome: nome,
            cpf: formatarCPF(cpf), // Formata o CPF
            endereco: {
                cep: formatarCEP(cep), // Formata o CEP
                logradouro: logradouro,
                numero: numero,
                complemento: complemento,
                bairro: bairro,
                cidade: cidade,
                uf: uf
            }
        });
 
        quantidade++;
    }
 
    // Exibir os clientes cadastrados no documento HTML
    if (clientes.length > 0) {
        document.write("<h2> Clientes Cadastrados: </h2>");
        document.write("<ul>");
        for (let cliente of clientes) {
            document.write("<li>");
            document.write(" Nome: " + cliente.nome + " | ");
            document.write(" CPF: " + cliente.cpf + " | ");
            document.write(" Endereço: ");
            document.write(cliente.endereco.logradouro + ", " + cliente.endereco.numero);
            if (cliente.endereco.complemento) {
                document.write(" (" + cliente.endereco.complemento + ")");
            }
            document.write(", " + cliente.endereco.bairro + ", ");
            document.write(cliente.endereco.cidade + " - " + cliente.endereco.uf + " | ");
            document.write(" CEP: " + cliente.endereco.cep);
            document.write("</li>");
        }
        document.write("</ul>");
    } else {
        document.write("<p> Nenhum cliente foi cadastrado. </p>");
    }
}
 
// Iniciar o processo de cadastro
cadastrarClientes();


