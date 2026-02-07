// Simulação de um banco de dados real
const horarioAgendados = ["2026-02-05T09:00", "2026-02-05T14:00"]

function agendar() {
    const nome = document.querySelector('#nome')
    const data = document.querySelector('#data-hora')
    const res = document.querySelector('.res')
    const agendamento = document.querySelector('.agendamento')
    const agendamentoConcluido = document.querySelector('.agendamento-concluido')

    // Define que a data mínima selecionável é o momento atual
    document.querySelector('#data-hora').min = new Date().toISOString().slice(0, 16);

    // 1. validacao de Campos vazios
    if (nome.value.trim() === '' || data.value === '') {
        res.style.background = '#b100009c';
        res.style.color = '#fff';
        res.style.padding = '15px';
        res.style.marginTop = '10px'
        res.style.borderRadius = '10px'
        res.innerHTML = `<i class="fa-regular fa-circle-xmark"></i> Preencha todos os campos!`;
        return;
    }

    // 2. Lógica de Horário
    const dataHoraSelecionada = data.value;
    const horaSomente = dataHoraSelecionada.split('T')[1];
    const horaInt = parseInt(horaSomente.split(':'[0]));

    //3. Verificacao de Regras
    const agora = new Date();
    const dataSelecionada = new Date(data.value)
    const diaAtual = agora.getDate();
    const mesAtual = agora.getMonth();
    const anoAtual = agora.getFullYear();


    if (dataSelecionada < agora) {
        res.style.background = '#b100009c'
        res.style.color = '#fff';
        res.style.padding = '15px';


        switch (mesAtual) {
            case 0:
                res.innerHTML = `<i class="fa-regular fa-circle-xmark"></i> Data errada!! Data atual é: <strong>${diaAtual}/01/${anoAtual}</strong>`
                break;
            case 1:
                res.innerHTML = `<i class="fa-regular fa-circle-xmark"></i> Data errada!! Data atual é: <strong>${diaAtual}/02/${anoAtual}</strong>`
                break;
            case 2:
                res.innerHTML = `<i class="fa-regular fa-circle-xmark"></i> Data errada!! Data atual é: <strong>${diaAtual}/03/${anoAtual}</strong>`
                break;
            case 3:
                res.innerHTML = `<i class="fa-regular fa-circle-xmark"></i> Data errada!! Data atual é: <strong>${diaAtual}/04/${anoAtual}</strong>`
                break;
            case 4:
                res.innerHTML = `<i class="fa-regular fa-circle-xmark"></i> Data errada!! Data atual é: <strong>${diaAtual}/05/${anoAtual}</strong>`
                break;
            case 5:
                res.innerHTML = `<i class="fa-regular fa-circle-xmark"></i> Data errada!! Data atual é: <strong>${diaAtual}/06/${anoAtual}</strong>`
                break;
            case 6:
                res.innerHTML = `<i class="fa-regular fa-circle-xmark"></i> Data errada!! Data atual é: <strong>${diaAtual}/07/${anoAtual}</strong>`
            case 7:
                res.innerHTML = `<i class="fa-regular fa-circle-xmark"></i> Data errada!! Data atual é: <strong>${diaAtual}/08/${anoAtual}</strong>`
                break;
            case 8:
                res.innerHTML = `<i class="fa-regular fa-circle-xmark"></i> Data errada!! Data atual é: <strong>${diaAtual}/09/${anoAtual}</strong>`
                break;
            case 9:
                res.innerHTML = `<i class="fa-regular fa-circle-xmark"></i> Data errada!! Data atual é: <strong>${diaAtual}/10/${anoAtual}</strong>`
                break;
            case 10:
                res.innerHTML = `<i class="fa-regular fa-circle-xmark"></i> Data errada!! Data atual é: <strong>${diaAtual}/11/${anoAtual}</strong>`
                break;
            case 11:
                res.innerHTML = `<i class="fa-regular fa-circle-xmark"></i> Data errada!! Data atual é: <strong>${diaAtual}/12/${anoAtual}</strong>`
                break;
            default:
                res.innerHTML = `[ERROR]`
                break;
        }

        return;
    }

    if (horaInt < 9 || horaInt >= 18) {
        res.style.background = '#b100009c'
        res.style.color = '#fff';
        res.style.padding = '15px';
        res.style.marginTop = '10px'
        res.style.borderRadius = '10px'
        res.innerHTML = `<i class="fa-regular fa-circle-xmark"></i> Não atendendo-mos nesse horário!! Horario de funcionamento <strong>09AM/17PM</strong>`;

    } else {
        horarioAgendados.push(dataHoraSelecionada);

        agendamento.style.display = 'none';
        agendamentoConcluido.style.display = 'flex';

    }
}


