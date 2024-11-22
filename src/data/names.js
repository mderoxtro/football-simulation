const firstNames = [
    "Aaron","Adam","Adrian","Aidan","Albert","Alec","Alex","Alexander","Allen","Allister","Alvin","Andre","Andrew","Angelo","Anthony","Anton","Antonio","Apollo","Archer","Arthur","Ashton","Atlas","August","Austin","Axel",
    "Baker","Barrett","Barron","Barry","Basil","Baxter","Beckett","Ben","Benjamin","Benson","Blaine","Blaise","Blake","Bobby","Bradford","Bradley","Brady","Brandon","Brendan","Brendon","Brent","Brett","Brian","Brock","Brodie","Brooks","Bruce","Bruno","Bryan","Bryant","Bryce","Brycen","Bryson",
    "Caleb","Calvin","Cameron","Cannon","Carl","Carson","Carter","Casey","Cash","Cassius","Cedric","Cesar","Charles","Charlie","Chase","Chris","Christian","Christopher","Clark","Clayton","Clement","Clyde","Coby","Cody","Cole","Colt","Colton","Connor","Cooper","Cory","Cruz","Cullen","Curtis","Cyrus",
    "Damian","Damon","Dan","Dane","Daniel","Dante","Darian","Darius","Darren","Darryl","Darwin","Dashiell","Davante","David","Dawson","Daxton","Deacon","Dean","DeAndre","Declan","Deion","Dennis","Denver","Derek","Derrick","Desmond","Devin","Dexter","Dillon","Dominic","Donovan","Donte","Dorian","Drew","Drue","Duane","Dustin","Dwayne","Dylan",
    "Eamon","Ean","Eddison","Eduardo","Edward","Edwin","Elian","Elias","Elijah","Elliot","Elliott","Ellis","Elroy","Elvis","Emanuel","Emilio","Emmett","Emmitt","Enrique","Enzo","Ephraim","Eric","Erick","Ethan","Evan","Everett","Ezekiel","Ezio","Ezra",
    "Fabian","Farley","Felix","Fenton","Ferdinand","Fergus","Fernando","Fidel","Finley","Finn","Finnegan","Finnian","Fisher","Fitzgerald","Fitzroy","Fletcher","Florian","Floyd","Flynn","Ford","Forest","Forrest","Foster","Fox","Francis","Franco","Frank","Franklin","Frederick",
    "Gabriel","Gage","Garrett","Gavin","Gentry","George","Gerald","Gerard","Giancarlo","Gibson","Gideon","Gilbert","Giovanni","Giovanny","Glen","Glenn","Gordon","Grady","Graeme","Graham","Grant","Grayson","Gregory","Grey","Griffin","Guillermo","Gunnar","Gustav","Gustavo",
    "Haiden","Hakeem","Hamish","Hank","Harlan","Harley","Harold","Harper","Harris","Harrison","Harry","Harvey","Hassan","Hayden","Hayes","Heath","Hector","Hendrik","Hendrix","Henry","Herman","Herschel","Hiram","Hogan","Holden","Hollis","Houston","Howard","Hudson","Hugo","Hunter","Huw","Huxley",
    "Ian","Ibrahim","Icarus","Ignacio","Igor","Iker","Ilan","Ilias","Immanuel","Imran","Inigo","Ira","Irvin","Irving","Isa","Isaac","Isaiah","Ishaan","Ishak","Ishmael","Ishwar","Isidore","Ismael","Israel","Isreal","Ivan","Iver","Ivo","Izan","Izanagi","Izayah","Izzy",
    "Jace","Jack","Jackson","Jacob","Jairo","Jalen","James","Jared","Jasper","Javier","Jawaan","Jax","Jaxon","Jaxton","Jaxx","Jaylen","Jeff","Jeffery","Jeffrey","Jeremiah","Jeremy","Jerome","Jerry","Jesse","Jesus","Jett","Jim","Jimmy","Joaquin","Joe","Joel","John","Jonathan","Jordan","Jorge","Jose","Joseph","Josh","Joshua","Josiah","Jovanni","Jovanny","Juan","Jude","JuJu","Julian","Justice","Justin",
    "Kade","Kaden","Kai","Kairos","Kaiser","Kaius","Kaleb","Kameron","Kane","Kareem","Karson","Kasen","Kash","Kayden","Kayson","Keaton","Keenan","Kellen","Kelvin","Kendrick","Kevin","Khalil","Kian","Kilian","Killian","King","Kingsley","Kingston","Knox","Kobe","Koda","Kody","Kohen","Korbin","Kristopher","Kylan","Kyle","Kyler","Kyrie",
    "Lachlan","Lamar","Lance","Landon","Landyn","Lane","Langston","Larry","Lawrence","Lawson","Lee","Leif","Lennon","Leo","Leon","Leonard","Leonardo","Levi","Lewis","Lex","Liam","Lincoln","Logan","Loki","Loren","Lorenzo","Louis","Lucas","Lucca","Luis","Luka","Luke","Luther","Lyle",
    "Mac","Mack","Maddox","Makai","Malachi","Malcolm","Malik","Marcellus","Marco","Marcus","Mario","Mark","Marlon","Marshall","Martin","Marvin","Mason","Mateo","Mat","Matt","Matthew","Maurice","Maverick","Max","Maximus","Maxwell","Micah","Michael","Miguel","Mike","Miles","Milo","Mitchell","Moe","Mohammad","Mohammed","Montgomery","Morgan","Murphy","Murray","Mustafa","Myles",
    "Nash","Nasir","Nathan","Nathaniel","Naveen","Neal","Nehemiah","Neil","Nelson","Nestor","Nevin","Newton","Nicholas","Nick","Nico","Nigel","Nikita","Niko","Nikolai","Nino","Nixon","Noah","Noble","Noel","Nolan","Nyle",
    "Oak","Oakley","Obed","Ocean","Octavio","Octavious","Odin","Ogden","Oisin","Olaf","Olen","Oliver","Olivier","Ollie","Omar","Omari","Omarion","Omer","Onyx","Oren","Orion","Orlando","Orville","Oscar","Osiris","Osman","Osvaldo","Oswald","Oswin","Othello","Otis","Otto","Owain","Owen","Ozzie",
    "Pablo","Paden","Padraig","Palmer","Parker","Parth","Pasquale","Patrick","Patton","Paul","Paxton","Payne","Payton","Pedro","Penn","Percy","Perry","Pete","Peter","Peyton","Pharoah","Phelan","Philip","Phineas","Phoenix","Pierce","Pierre","Piers","Pippin","Porter","Pranav","Presley","Preston","Prince","Princeton",
    "Qamar","Qasim","Quade","Quanah","Quang","Quante","Quantum","Quartez","Quay","Quentin","Quest","Quetzal","Quill","Quilliam","Quillon","Quin","Quincy","Quindlen","Quinlan","Quinn","Quinnlan","Quint","Quintarius","Quintavious","Quinten","Quinto","Quinton","Quintrell","Quintus","Quirin","Quirino",
    "Rafael","Rafferty","Raheem","Raiden","Ralph","Ramses","Raphael","Raul","Raylan","Raymond","Reagan","Reece","Reed","Reggie","Reid","Remington","Remy","Reuben","Rex","Reynaldo","Rhys","Ricardo","Riley","Rio","Robert","Rocco","Rodney","Rodrigo","Rohan","Roman","Romeo","Ronan","Rory","Roscoe","Rowan","Royce","Rudolph","Russell","Ryan","Ryker",
    "Sage","Saint","Salvador","Samson","Samuel","Santana","Santiago","Santino","Sawyer","Saxon","Scott","Sean","Sebastian","Sebastien","Seth","Shane","Shawn","Sheldon","Shepard","Shiloh","Silas","Simeon","Simon","Skyler","Solomon","Sonny","Soren","Spencer","Stanley","Steele","Stellan","Stephen","Sterling","Steve","Stone","Stryker","Stuart","Sullivan","Sven","Sylvester",
    "Talon","Tate","Tatum","Tayden","Taylor","Terrance","Terrell","Terry","Tershawn","Thaddeus","Thane","Thelonious","Theodore","Thiago","Thomas","Thor","Tiberius","Timothy","Titus","TJ","Tobias","Tobin","Toby","Tom","Torin","Travis","Trenton","Trevor","Trey","Tristan","Triton","Troy","Truett","Tucker","Turner","Tyler","Tyree","Tyreek","Tyrese","Tyrone","Tyshawn","Tyson",
    "Ugo","Ulric","Ulrich","Ulysses","Umar","Unique","Upton","Urban","Uriah","Uriel","Uriyah","Usher","Usman","Uziel",
    "Val","Valentin","Van","Vance","Vann","Vaughan","Vaughn","Vega","Vernon","Victor","Viggo","Vince","Vincent","Vinny","Virgil","Vito","Vlad","Vladimir",
    "Wade","Wallace","Wally","Walt","Walter","Warren","Warrick","Waylon","Wells","Wesley","Weston","Whit","Wiley","Will","William","Wilson","Winston","Wolf","Wyatt",
    "Xanadu","Xander","Xavier","Xeno","Xerxes","Xzavien",
    "Yafet","Yahir","Yanis","Yannick","Yaseen","Yasin","Yazeed","Yitzhak","Yosef","Yoseph","Yousef","Yusri","Yusuf","Yves",
    "Zachariah","Zachary","Zack","Zahir","Zaire","Zander","Zane","Zayden","Zaydon","Zeke","Zekiel","Zephyr","Zeus","Zidane","Ziggy","Zion"]
  
const lastNames = [
    "Abbott","Ackerman","Adams","Addams","Adkins","Agholor","Aikins","Aikman","Albright","Aldridge","Alexander","Ali","Allen","Allison","Alvarez","Anderson","Andrade","Andrews","Anthony","Araiza","Ariza","Armor","Armour","Armstrong","Arnold","Atkinson","Austin","Ayers",
    "Bailey","Baker","Ball","Ballard","Banks","Barajas","Barker","Barnes","Barnett","Barrow","Bass","Bateman","Bates","Battles","Bauer","Baxter","Bean","Bear","Bell","Bender","Benjamin","Bennett","Bernard","Berry","Billings","Bingham","Bishop","Black","Blackburn","Blackwell","Blair","Blevins","Blount","Board","Bolton","Bowers","Boyd","Boyer","Boyle","Brade","Bradshaw","Brady","Braswell","Brewer","Britt","Brooks","Brown","Bryant","Buckner","Burke","Burks","Burns","Bush","Butler","Byers",
    "Calder","Calderon","Caldwell","Calhoun","Caliendo","Campbell","Cantu","Carlson","Carney","Carter","Castillo","Chamberlain","Chan","Charles","Chatman","Chenal","Chenault","Choi","Christian","Chung","Church","Clark","Cleary","Clements","Cleveland","Cochran","Cohen","Cole","Coleman","Collins","Cochrane","Combs","Compton","Conner","Connor","Conway","Cook","Cooley","Cooper","Corrigan","Covington","Cox","Crawford","Crouch","Cruz","Culp","Curtis",
    "Daniel","Daniels","Darling","Darnell","David","Davidson","Davis","Dawson","Day","Dean","Decker","Delaney","Demarco","Dennis","Diaby","Diaz","Dickerson","Dickson","Dillon","Dixon","Dodson","Donnelly","Dotson","Douglas","Doyle","Driskell","Duffy","Dunlap","Dunn","Dupree","Durham",
    "Easton","Eaton","Edmonds","Edwards","Elder","Eldridge","Elliott","Ellis","Ellison","Elway","Emerson","English","Erickson","Evans","Everett","Ewing",
    "Fairchild","Farley","Faulkner","Favre","Ferguson","Ferrell","Ferris","Fields","Fisher","Fleming","Fletcher","Flores","Flowers","Foley","Ford","Foster","Fowler","Fox","Frank","Franklin","Freeman","Frost","Fry","Frye","Fuentes","Fuller",
    "Gaines","Gallegos","Galloway","Garcia","Gardner","Garrett","Garvin","Gay","Gentry","George","Gholston","Gibson","Gilbert","Giles","Gill","Gilmore","Givens","Godwin","Goff","Gomez","Gonzalez","Gordon","Graham","Grant","Gray","Green","Greene","Gregory","Grier","Griffin","Grimes","Guerra","Gutierrez",
    "Haas","Hainsey","Haley","Hall","Hamilton","Hammond","Hansen","Hanson","Hardman","Harrell","Harris","Harrison","Hathaway","Hayes","Hays","Heath","Henderson","Hendricks","Henry","Hensley","Hernandez","Herring","Hess","Hickman","Hicks","Hill","Hodge","Hoffman","Holder","Holland","Hooper","Hoover","Hopkins","Horn","House","Howard","Howe","Howell","Huang","Hubbard","Hughes","Hull","Humphrey","Hunt","Hurst","Hutchinson",
    "Ifedi","Iglesias","Imoto","Incognito","Ingalls","Inglis","Ingold","Ingram","Ireland","Irons","Irvin","Irving","Irwin","Isaac","Isabella","Isidora","Ismael","Isom","Ivory","Ivy","Izien","Izzo",
    "Jackson","Jacobs","Jacobson","James","Jamison","Jarrett","Jenkins","Jennings","Jensen","Jimenez","Johns","Johnson","Johnston","Jones","Jordan","Juarez",
    "Kancey","Kane","Karlaftis","Kelce","Keller","Kelley","Kelly","Kendrick","Kennedy","Key","Kieft","Killian","Kim","King","Kirby","Kirk","Kirkland","Klein","Kline","Kolar","Knight","Knox","Kramer",
    "Lamb","Lambert","Lancaster","Landry","Lane","Lang","Langston","Lara","Larsen","Larson","Lawrence","Lawson","Le","Leaf","Leblanc","Lee","Lemon","Leon","Leonard","Levy","Lewis","Li","Likely","Linderbaum","Little","Livingston","Lloyd","Lockwood","Logan","Long","Lopez","Lowe","Lucas","Lynch","Lynn",
    "Madubuike","Mahomes","Marino","Mariota","Marks","Marshall","Martin","Martinez","Mathis","Mauch","Maulet","Mayer","Mayfield","McBride","McCarthy","McCoy","McDonald","McFadden","McGrath","McIntosh","McIntyre","McKay","McKinney","McMillan","McNeil","McPherson","Mekari","Mendoza","Mercer","Meyer","Miller","Mitchell","Monroe","Montana","Moon","Moore","Morales","Moran","Moretti","Morgan","Morris","Morton","Mullen","Murillo","Murphy","Murray","Myers",
    "Nash","Neal","Nelson","Newman","Newton","Nichols","Nicholson","Noble","Nolan","Norman","Norris","Norton","Nourzad",
    "OBrien","Ochoa","OConnor","Odom","Ogden","Ojabo","Oliver","Olsen","Olson","Oneill","Orr","Ortega","Ortiz","Osborn","Osborne","Ott","Otton","Oweh","Owen","Owens",
    "Pace","Palmer","Parker","Parson","Patel","Patterson","Payne","Payton","Pena","Penn","Pennel","Perez","Perine","Perry","Peters","Peterson","Phillips","Pierce","Ponce","Porter","Potts","Powell","Prentice","Price","Prince","Pritchard",
    "Quackenbush","Qualls","Quarles","Queen","Quick","Quigley","Quillen","Quimby","Quinlan","Quinn","Quintana","Quirk",
    "Ragsdale","Ramirez","Ramos","Randall","Randolph","Redding","Reed","Reid","Reyes","Reynolds","Rhodes","Ricard","Rice","Rich","Richards","Richardson","Ritter","Rivera","Roach","Roberts","Robertson","Robinson","Rocha","Rodgers","Rodriguez","Rogers","Roland","Rollins","Rosales","Rose","Rosengarten","Ross","Rossi","Ruiz","Rush","Russell","Ryan",
    "Salas","Salinas","Sanchez","Sanders","Sanderson","Sandoval","Saunders","Schaefer","Schmidt","Scott","Sears","Serrano","Sharp","Shaw","Shea","Shelby","Sheppard","Shields","Short","Simmons","Simpson","Singleton","Skule","Sloan","Smith","Snyder","Solis","Stanton","Steele","Stevens","Stevenson","Stewart","Stokes","Stone","Stout","Strong","Sullivan","Sutton","Swift","Sykes",
    "Tanner","Tate","Taylor","Terry","Thomas","Thompson","Thornton","Thorpe","Thuney","Tinsley","Todd","Torres","Townsend","Tranquill","Trask","Trujillo","Tucker","Turner","Tyler",
    "Uhl","Ulmer","Ulrich","Underhill","Underwood","Unger","Upchurch","Upshaw","Upton","Urban","Usher","Utley","Valdez",
    "Valencia","Valentine","Valenzuela","Van Noy","Vance","Vang","Vargas","Vasquez","Vaughan","Vaughn","Vea","Vernon","Vickers","Villanueva","Vincent","Vinson","Vogel","Vogt","Vorhees","Voss",
    "Wagner","Walker","Wall","Wallace","Waller","Walter","Walther","Ward","Ware","Washington","Watson","Watt","Webster","Weeks","West","Wentz","Wharton","Wheaton","Wheeler","Whitaker","White","Whitehead","Whitley","Wiggins","Wilkes","Williams","Wilson","Winchester","Windsor","Winfield","Winston","Winters","Wirfs","Witt","Wood","Woodard","Woods","Worthy","Wright","Wu",
    "Xander","Xanders","Xanthos","Xaver","Xavier","Xenakis","Xenos","Ximenes","Xinos","Xiques","Xuereb","Xydias",
    "Yancey","Yang","Yarbrough","Yates","Yeager","Yoder","York","Yost","Young","Youngblood","Younger","Youngs","Yount",
    "Zahn","Zamora","Zeigler","Zeller","Zemmerman","Zhang","Ziegler","Zielinski","Zimmer","Zimmerman","Zimmermann","Zink","Zinn","Zook"]

  
let selectName = () => {
    let returnName = {
        firstName: firstNames[Math.floor(Math.random() * firstNames.length)],
        lastName: lastNames[Math.floor(Math.random() * lastNames.length)]
    }
    return returnName
}

// reserve example code for verifying unique names
// let uniqueLastNames = [...new Set((lastNames).sort((a,b) => a.localeCompare(b)))]
// console.log(JSON.stringify(uniqueLastNames))
  
export {
    selectName
}