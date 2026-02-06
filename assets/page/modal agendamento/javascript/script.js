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

    if (dataSelecionada < agora) {
        res.style.background = '#b100009c'
        res.style.color = '#fff';
        res.style.padding = '15px';
        res.innerHTML = `<i class="fa-regular fa-circle-xmark"></i> Data errada!! Data atual é: <strong>${agora}</strong>`
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


