
peliculas.forEach(item => {

    if (item.year > 2001) {
        let card = `
            <div class="card">
                <h1>${item.nombre}</h1>
                <p>${item.year}</p>
                <p>${item.director}</p>
                <img src="${item.image}" >
            </div>
            <hr>
            `

        document.write(card)
    }
})