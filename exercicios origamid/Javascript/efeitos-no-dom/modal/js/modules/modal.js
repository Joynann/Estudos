export default function initModal() {
    const login = document.querySelector('[data-modal="abrir"]');
    const modalContainer = document.querySelector('[data-modal^="ativar"]');
    const fechar = document.querySelector('[data-modal="desativar"]');

    if(login && modalContainer && fechar){
        function ativarDesativarModal() {
            modalContainer.classList.toggle('ativo');
        }
        function modalTarget(e) {
            if(e.target === modalContainer) {
                ativarDesativarModal();
            }
        }

        login.addEventListener('click', ativarDesativarModal);
        fechar.addEventListener('click', ativarDesativarModal);
        modalContainer.addEventListener('click', modalTarget);
    }
};