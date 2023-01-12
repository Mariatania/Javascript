function findMovies(favoriteGenre) {
    const movies = [
        {
            id: 1,
            name: 'Avengers end game',
            genre: 'Action',
            soldTicket: 149,
            capacity: 150
        },
        {
            id: 2,
            name: 'La la Land',
            genre: 'Romance',
            soldTicket: 20,
            capacity: 75
        },
        {
            id: 3,
            name: 'Beauty and the Beast',
            genre: 'Romance',
            soldTicket: 50,
            capacity: 50
        },
        {
            id: 4,
            name: 'Superman vs Batman',
            genre: 'Action',
            soldTicket: 150,
            capacity: 250
        },
        {
            id: 5,
            name: 'Transformer',
            genre: 'Action',
            soldTicket: 90,
            capacity: 90
        },
        {
            id: 6,
            name: '5 feet apart',
            genre: 'Romance',
            soldTicket: 25,
            capacity: 45
        },
        {
            id: 7,
            name: 'Hamilton',
            genre: 'Musical',
            soldTicket: 295,
            capacity: 300
        },
        {
            id: 8,
            name: 'Dear Evan Hansen',
            genre: 'Musical',
            soldTicket: 150,
            capacity: 200
        },
        {
            id: 9,
            name: 'Conjuring',
            genre: 'Horror',
            soldTicket: 30,
            capacity: 100
        },
        {
            id: 10,
            name: 'Annabelle',
            genre: 'Horror',
            soldTicket: 10,
            capacity: 30
        },
        {
            id: 11,
            name: 'Fast and Furios',
            genre: 'Action',
            soldTicket: 25,
            capacity: 40
        },
        {
            id: 12,
            name: 'Romeo and Julet',
            genre: 'Romance',
            soldTicket: 15,
            capacity: 15
        },
        {
            id: 13,
            name: 'Wicked',
            genre: 'Musical',
            soldTicket: 75,
            capacity: 75
        }
    ]

    let favorit = []
    favoriteGenre.forEach(function(genre) {
        movies.forEach(function(movie) {
            if (genre == movie.genre) {
                favorit.push(movie)
            }
        })
    })

    return favorit
}

function findTicketAvailability(movie, user) {
    let tiket = movie.capacity - movie.soldTicket
    return tiket >= user.ticket
}

function findRecommendation(user) {
    let movies = findMovies(user.favoriteGenre)
    let recommendation = []

    movies.forEach(function(movie) {
        if (findTicketAvailability(movie, user)) {
            recommendation.push(movie)
        }
    })
    return recommendation
}

function generateRecommendation(user) {
    const hargaTiket = { 
        Action: 100000,
        Musical: 80000,
        Romance: 40000,
        Horror: 75000,
    };
    let totalHarga = []
    findRecommendation(user).forEach(function(movie) {
        let film = {
            id: movie.id,
            name: movie.name,
            genre: movie.genre,
            totalPrice: hargaTiket[movie.genre] * user.ticket,
        }
        totalHarga.push(film)
    })
    if (totalHarga.length == 0) {
        return "Tidak ada film yang sesuai kriteria"
    } else {
        return totalHarga
    }

}

let user1 = {
    name: 'Aditira',
    ticket: 1,
    favoriteGenre: ['Action', 'Musical', 'Romance', 'Horror']
}

let user2 = {
    name: 'Eddy',
    ticket: 20,
    favoriteGenre: ['Musical', 'Romance']
}

let user3 = {
    name: 'Afis',
    ticket: 1,
    favoriteGenre: ['Sci Fi', 'Documentary', 'Thriller']
}

console.log(generateRecommendation(user1))
console.log(generateRecommendation(user2))
console.log(generateRecommendation(user3))

module.exports = {
    findMovies,
    findTicketAvailability,
    findRecommendation,
    generateRecommendation
}
