fetch("https://free-epic-games.p.rapidapi.com/free", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "free-epic-games.p.rapidapi.com",
            "x-rapidapi-key": "api-key-goes-here"
        }
    })
    .then(response => response.json())
    .then(data => {
        const nowList = data.freeGames.current;
        nowList.map((item) => {
            const name = item.title;
            const poster = item.keyImages[2].url;
            const description = item.description;
            const urlSlug = item.urlSlug;
            const url = `https://www.epicgames.com/store/pt-BR/p/${urlSlug}`
            const game = `<a href="${url}" target="_blank">
                <li>
                <img class="game-poster" src="${poster}"></img>
                <h4>${name}</h4>
                <span>${description}</span>
                </li>
                </a>`
            document.querySelector('.epic-free-now').innerHTML += game;
        })
        const upcomingList = data.freeGames.upcoming;
        upcomingList.map((item) => {
            const name = item.title;
            const poster = item.keyImages[2].url;
            const description = item.description;
            const urlSlug = item.urlSlug;
            const url = `https://www.epicgames.com/store/pt-BR/p/${urlSlug}`
            const game = `<a href="${url}" target="_blank">
            <li>
            <img class="game-poster" src="${poster}"></img>
            <h4>${name}</h4>
            <span>${description}</span>
            </li>
            </a>`
            document.querySelector('.epic-free-upcoming').innerHTML += game
        })
    })
    .catch(err => {
        console.error(err);
    });

$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    })
});