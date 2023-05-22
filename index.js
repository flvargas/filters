const btnFiltro = ".menu-filters li a";

document.querySelectorAll(btnFiltro).forEach(
    button => {
        button.addEventListener("click", (e) => { 
            e.preventDefault();
            document.querySelectorAll(btnFiltro).forEach(button => {button.classList.remove("active")}); // desativam todos os botões
            button.classList.add("active"); // ativa o botão selecionado
            let filter = button.dataset.filter;

            if (filter != "todos") {
                document.querySelectorAll('.card').forEach(card => {card.style.display = "none";});
                document.querySelectorAll('.card[data-filter='+filter+']').forEach(card => {card.style.display = "flex";});
            } else {
                document.querySelectorAll('.card').forEach(card => {card.style.display = "flex";});
            }
        })    
    }
);

