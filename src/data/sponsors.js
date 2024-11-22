let foodSponsors = [
    "O'Roberts", "Chuck's Steaks", "TFC", "Pickled Pete", "Succulent Sandwiches", "Chicken Clog", "Chocoholics", "Jitter Beans", "Tacos, Tacos, Tacos", "Fajita Frank's",
    "Creamboat", "Burger Prince", "Olive's", "Popular Pizza", "Sal's Italian", "Pizza Providers", "Gino's", "Coo Coo Cookies", "Birdie Bites", "Taste Blasters", "Chum Bucket",
    "Potato Land", "Crab's Cakes", "Blue Lobster", "Crustacean Charlie's", "The Dessert Bar", "Hamburgesa", "Burger-Wa-Ze", "Choke n' Puke", "Dino's Diner", "Almond Milker's"
]

let financeSponsors = [
    "Overlord Bank", "Stalk Bank", "Valley Creek Bank", "Corporate Credit Union", "Falsist", "Countygroup", "Weeder's", "Silverman Trust", "TMNF", "City Street", "Silicon Mountain Bank",
    "Franco Brantley", "Finance Two", "Gecko", "Corey's Savings and Loan", "BC Bank", "Sheriff of Nottingham", "Wealth Capital", "M. Burns Financial", "NFTease", "Cattle Cartel",
    "Monkey Business", "Prospecter's Trust", "Goldilocks and the Three Shares", "Tentative Traders", "Tax Haven", "Offshore Interests"
]

let clothingSponsors = [
    "Sike", "Brucci", "Over Armor", "Winner", "ARIBAS", "Ground Mickey's", "Treebok", "Beginner", "Symbol", "Hustle", "Troll X", "Mercury", "Lewis Mutton", "A&B",
    "Crooks", "Old Balance", "Wrestler", "Larry's", "The East Continence", "Yolo", "Sketchies", "Boot Locker", "Sun Stopper", "Pantha", "Gasoline", "RAP", "Brokely",
    "Remnant", "Relic", "Docks", "FOLA", "Implest", "Terrells", "Saucy", "Colombian Sports Attire", "Freddie Mauser", "Eternity"
]

let retailSponsors = [
    "Crawlmart", "Amazing", "Coinco", "The House Arsenal", "Crowe's", "Choker's", "Stalblue's Pharmacy", "Pinpoint", "PVS Health", "Crapple", "Tublicks", "Greatest Purchase",
    "PJ Least", "Jack Hardware", "Twenty-Four Seven", "AB&B", "Horizon", "Moss", "Dollar Delinquent", "Schnell", "AutoArea", "Ahead Auto Parts", "O'Rourke's Auto Parts",
    "Regular Eagle", "Maycare", "Nick's Sports", "Salmon Pro Shop", "Crunchy", "Gigantic Plots", "Paper Clips", "Office Storehouse", "Probable Cost", "PetWise"
]

let miscSponsors = [
    "Greater Floridian Gold Initiative", "Around Town Tires", "Plumpkins", "Apparition Halloween Retailer", "Luke-Warm Yoga Intl", "Just Umbrellas", "Wasabi Farmers of North America",
    "Backyard Wrestling Federation", "Global Explorers Union", "More Money than Cents", "The Last Sports Magazine", "Newspaper Revival", "Books For Billions", "SNAFU",
    "Pewterschmidt's Pharmaceuticals", "Drake's Cake Bake(ry)", "Blind Steve's Flight School", "TotaliGym", "Barnacle Box", "Uncle Pat's Toy Chest", "Church of Cthulu", "Huge Tracts of Land",
]
  
let selectSponsor = () => {
    let allSponsors = foodSponsors.concat(financeSponsors, clothingSponsors, retailSponsors, miscSponsors)
    let returnSponsor = allSponsors[Math.floor(Math.random() * allSponsors.length)]
    return returnSponsor
}

export {
    selectSponsor
}  