/** Dark / Light Mode */
const themeToggleBtn = document.getElementById('theme-toggle')
const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon')
const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon')

// 1- HIDDEN/SHOW ICON BUTTON SELON MODE CHOISI PAR UTILISATEUR OU DANS SES PREFERENCES SYSTEME
// Determine quel mode doit être affiché en fonction des préférences du navigateur et de l'état du localstorage
// Si "dark" est définit dans le LS donc si l'utilisateur a déja choisi le mode "dark" OU
// Si color-theme n'est pas définit dans le LS donc si l'utilisateur n'a pas encore choisi de mode, il faut vérifier les préférences de
// couleur su système de l'utilisateur
// Si les préférences correspondent au mode "dark"
// Si l'une des 2 conditions est vraie, il faut afficher le mode "dark" et donc rendre visible l'icon "light"
if (localStorage.getItem('color-theme') === 'dark' ||
(!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    // Show Light Icon
    themeToggleLightIcon.classList.remove('hidden')
    
} else {
    // Show Dark Icon
    themeToggleDarkIcon.classList.remove('hidden')
}

// 2- CLICK TOGGLE BUTTON POUR CHANGER ICON SELON MODE DEFINIT DANS LOCALSTORAGE ET LE METTRE A JOUR
themeToggleBtn.addEventListener('click', toggleMode)

function toggleMode() {
    // Toggle Icon
    themeToggleDarkIcon.classList.toggle('hidden')
    themeToggleLightIcon.classList.toggle('hidden')

    // If color-theme is set in localStorage
    if(localStorage.getItem('color-theme')) {
        // If light, make Dark and save in LS
        if(localStorage.getItem('color-theme') === 'light') {
            // Add class dark in html tag
            document.documentElement.classList.add('dark')
            // définir le LS avec une valeur "dark"
            localStorage.setItem('color-theme', 'dark')
        } else {
            // Si dark, on supprime la class 'dark' dans html tag
            document.documentElement.classList.remove('dark')
            // on définit le LS avec une valeur 'light'
            localStorage.setItem('color-theme', 'light')
        }
    } else {
        // if not in LS, check if dark in html tag
        if(document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark')
            localStorage.setItem('color-theme', 'light')
        } else {
            document.documentElement.classList.add('dark')
            localStorage.setItem('color-theme', 'dark')
        }
    }
}
