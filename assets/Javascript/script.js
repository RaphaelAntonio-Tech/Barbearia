
// Seleciona os elementos principais
const botao = document.querySelector('.botao-menu')
const menuLateral = document.querySelector('.menu-lateral')
const background = document.querySelector('.background')

// Abre / fecha o menu ao clicar no botão

function toggleMenu() {
    const aberto = menuLateral.classList.toggle('ativo');
    botao.classList.toggle('ativo');
    background.classList.toggle('ativo');

    if (aberto) {
        botao.innerHTML = `<i class="fa-solid fa-chevron-left"></i>`;

    } else {
        botao.innerHTML = `<i class="fa-solid fa-chevron-right"></i>`;
    }
}

// Fecha o menu ao clicar no fundo escurecido
function closeMenu() {
    botao.classList.remove('ativo');
    menuLateral.classList.remove('ativo');
    background.classList.remove('ativo');
    botao.innerHTML = `<i class="fa-solid fa-chevron-right"></i>`;
}

// Eventos
botao.addEventListener('click', toggleMenu);
background.addEventListener('click', closeMenu);


// Horário atual de funcionamento

window.addEventListener("DOMContentLoaded", (Event) => {
    let horario = document.querySelector('.horario')

    let data = new Date()
    let hora = data.getHours()
    let dia = data.getDay()
    let segundo = data.getMinutes()

    if (hora >= 9 && hora <= 17) {
        switch (dia) {
            case 0:
                horario.innerHTML = `<i class="fa-solid fa-clock"></i> Fechado - ${hora}h${segundo} - 'Domingo' -  09 AM / 17 PM`
                break;
            case 1:
                horario.innerHTML = `<i class="fa-solid fa-clock"></i> Aberto - ${hora}h${segundo} - Segunda-feira -  09 AM / 17 PM  `
                break;
            case 2:
                horario.innerHTML = `<i class="fa-solid fa-clock"></i> Aberto - ${hora}h${segundo} - Terça-feira -  09 AM / 17 PM  `
                break;
            case 3:
                horario.innerHTML = `<i class="fa-solid fa-clock"></i> Aberto - ${hora}h${segundo} - Quarta-feira -  09 AM / 17 PM  `
                break;
            case 4:
                horario.innerHTML = `<i class="fa-solid fa-clock"></i> Aberto - ${hora}h${segundo} - Quinta-feira -  09 AM / 17 PM  `
                break;
            case 5:
                horario.innerHTML = `<i class="fa-solid fa-clock"></i> Aberto - ${hora}h${segundo} - Sexta-feira -  09 AM / 17 PM  `
                break;
            case 6:
                horario.innerHTML = `<i class="fa-solid fa-clock"></i> Aberto - ${hora}h${segundo} - Sábado -  09 AM / 17 PM  `
        }
    } else {
        switch (dia) {
            case 0:
                horario.innerHTML = `<i class="fa-solid fa-clock"></i> Fechado - ${hora}h${segundo} - 'Domingo' -  09 AM / 17 PM`
                break;
            case 1:
                horario.innerHTML = `<i class="fa-solid fa-clock"></i> Fechado - ${hora}h${segundo} - Segunda-feira -  09 AM / 17 PM  `
                break;
            case 2:
                horario.innerHTML = `<i class="fa-solid fa-clock"></i> Fechado - ${hora}h${segundo} - Terça-feira -  09 AM / 17 PM  `
                break;
            case 3:
                horario.innerHTML = `<i class="fa-solid fa-clock"></i> Fechado - ${hora}h${segundo} - Quarta-feira -  09 AM / 17 PM  `
                break;
            case 4:
                horario.innerHTML = `<i class="fa-solid fa-clock"></i> Fechado - ${hora}h${segundo} - Quinta-feira -  09 AM / 17 PM  `
                break;
            case 5:
                horario.innerHTML = `<i class="fa-solid fa-clock"></i> Fechado - ${hora}h${segundo} - Sexta-feira -  09 AM / 17 PM  `
                break;
            case 6:
                horario.innerHTML = `<i class="fa-solid fa-clock"></i> Fechado - ${hora}h${segundo} - Sábado -  09 AM / 17 PM  `
        }
    }
});
