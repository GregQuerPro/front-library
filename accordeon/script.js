document.addEventListener('DOMContentLoaded', () => {

    const listItems = document.querySelectorAll('.list__item')
    const listTops =  document.querySelectorAll('.list__top')
    const listPars = document.querySelectorAll('.list__par')
    let activeItem = null;
    let desactivateItems = null;

    listTops.forEach((item, index) => {
        item.addEventListener('click', (e) => {

            const listPar = listPars[index]

            if (activeItem !== null) {
                defaultState(index)              
            }

            if (activeItem === listPar) {
                // Toggle
                activeItem = null
                // Retire classe desactivate a tous les items qui le contienne
            } else {
                // No Toggle
                activate(listPar)
                listItems[index].classList.add('active')
                desactivate(index)
                activeItem = listPar
            }

        })
    })  

    function activate (item) {
        item.classList.add('active')
        const fullHeight = item.scrollHeight
        item.style.maxHeight = fullHeight + 'px';
    }

    function defaultState (index) {
        activeItem.classList.remove('active')
        activeItem.style.maxHeight = 0;
        const parent = activeItem.parentNode;
        parent.classList.remove('active')
        
        desactivateItems.forEach(item => {
            item.classList.remove('desactivate')
        })  
    }

    function desactivate (index) {
        const arrayFromListItems = Array.from(listItems);
        desactivateItems = [...arrayFromListItems.slice(0, index), ...arrayFromListItems.slice(index + 1)];
        desactivateItems.forEach(item => {
            item.classList.add('desactivate')
        })
    }

})