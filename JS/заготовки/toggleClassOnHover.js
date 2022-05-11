function toggleClassOnHover(element, child, className) {
    element.addEventListener('mouseenter', () => {
        child.classList.add(className);
    });

    element.addEventListener('mouseleave', () => {
        child.classList.remove(className);
    })
}