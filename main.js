document.addEventListener('DOMContentLoaded', function() {
    const profileAvatar = document.querySelector('.profile-avatar');
    const profileName = document.querySelector('.profile-name');
    const profileUserName = document.querySelector('.profile-username').innerText;
    const profileLink = document.querySelector('.profile-link');
    const numeroRepositorios = document.getElementById('numero-repositorios');
    const numeroSeguidores = document.getElementById('numero-seguidores');
    const numeroSeguindo = document.getElementById('numero-seguindo');
    const endpoint = `https://api.github.com/users/${profileUserName.substring(1, profileUserName.length)}`
    
    fetch(endpoint)
        .then((res) => {
            return res.json();
        })
        .then((response) => {
            profileAvatar.src = response.avatar_url;
            numeroRepositorios.innerText = response.public_repos;
            numeroSeguidores.innerText = response.followers;
            numeroSeguindo.innerText = response.following;
            profileLink.href = response.html_url;
            profileName.innerText = response.name;
        })
})