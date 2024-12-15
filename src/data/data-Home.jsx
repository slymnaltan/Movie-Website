import theırıshman from '../netflix-image/theırıshman.jpg';
import avengers from '../disney-image/avengers.png';
import thereport from '../amazon-image/thereport.jpg';
import strangerthings from '../netflix-image/strangerthings.webp';
import mandalorian from '../disney-image/mandalorian.webp';
import theboys from '../amazon-image/theboys.jpg'
import klaus from '../netflix-image/klaus.jpg';
import zootapia from '../disney-image/zootapia.webp';
import petethecat from '../amazon-image/petethecat.jpg'

const popularMovies = [
  { id: 1, logo: 'netflix-logo.png', name: 'The Irishman', category: 'movie', duration: '209 min', img: theırıshman, year: '2019', description: 'A mob hitman recalls his possible involvement with the slaying of Jimmy Hoffa.', cast: ['Robert De Niro', 'Al Pacino', 'Joe Pesci'] },
  { "id": 31, "logo": "disney-logo.png", "name": "Avengers: Endgame", "category": "movie", "duration": "181 min", "img": avengers, "year": "2019", "description": "The Avengers assemble once more to reverse the damage caused by Thanos and restore balance to the universe.", "cast": ["Robert Downey Jr.", "Chris Evans", "Mark Ruffalo"] },
  { "id": 52, "logo": "amazon-logo.png", "name": "The Report", "category": "movie", "duration": "119 min", "img": thereport, "year": "2019", "description": "The story of the investigation into the CIA's use of torture during the War on Terror and the subsequent cover-up.", "cast": ["Adam Driver", "Annette Bening", "Jon Hamm"] }
  // Diğer filmler
];

const popularSeries = [
  { "id": 17, "logo": "netflix-logo.png", "name": "Stranger Things", "category": "series", "duration": "50 min/episode", "img": strangerthings, "year": "2016", "description": "A group of kids uncover supernatural occurrences in their small town, involving government conspiracies and otherworldly forces.", "cast": ["Winona Ryder", "David Harbour", "Millie Bobby Brown"] },
  { "id": 34, "logo": "disney-logo.png", "name": "The Mandalorian", "category": "series", "duration": "16 episodes", "img": mandalorian, "year": "2019", "description": "A lone bounty hunter in the outer reaches of the galaxy navigates a dangerous and mysterious world while protecting a young creature.", "cast": ["Pedro Pascal", "Gina Carano", "Carl Weathers"] },
  { "id": 53, "logo": "amazon-logo.png", "name": "The Boys", "category": "series", "duration": "16 episodes", "img": theboys, "year": "2019", "description": "A group of vigilantes set out to take down corrupt superheroes who abuse their powers.", "cast": ["Karl Urban", "Jack Quaid", "Antony Starr"] }
  // Diğer diziler
];

const kidsContent = [
  { "id": 20, "logo": "netflix-logo.png", "name": "Klaus", "category": "kids", "duration": "97 min", "img": klaus, "year": "2019", "description": "A postman and a reclusive toymaker must team up to bring joy to their icy town.", "cast": ["Jason Schwartzman", "J.K. Simmons", "Rashida Jones"] },
  { "id": 43, "logo": "disney-logo.png", "name": "Zootopia", "category": "kids", "duration": "108 min", "img": zootapia, "year": "2016", "description": "In a city of anthropomorphic animals, a bunny cop and a con artist fox work together to solve a mystery.", "cast": ["Ginnifer Goodwin", "Jason Bateman", "Idris Elba"] },
  { "id": 60, "logo": "amazon-logo.png", "name": "Pete the Cat", "category": "kids", "duration": "15 episodes", "img": petethecat, "year": "2017", "description": "Follow the adventures of Pete the Cat, a groovy feline who loves to explore the world around him.", "cast": ["Jacob Tremblay", "Glenne Headly", "Dustin Hoffman"] },
  // Diğer çocuk içerikleri
];

export { popularMovies, popularSeries, kidsContent };
