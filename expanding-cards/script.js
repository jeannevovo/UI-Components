const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('mouseover', () => {
        removeActiveClasses()    //remove active class from existing active class
        panel.classList.add('active')   //add the active class to the one we click
    })
})

function removeActiveClasses() {
    panels.forEach((panel) => {
        panel.classList.remove('active')
    })
}