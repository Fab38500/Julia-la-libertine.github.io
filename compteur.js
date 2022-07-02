const counter = document.getElementById('counter');

const updateCounter = async () => {  // async permet de mettre les "await", await dis au programme d'attendre la réponse de la requête avant de continuer sa progression (pour éviter les erreurs)
    const data = await fetch('https://api.countapi.xyz/hit/famasito/visits') // lien qui vient du site counterapi.com
    const count = await data.json() // converti en javascript
    counter.innerHTML = count.value.toLocaleString("fr-FR")
}

updateCounter();