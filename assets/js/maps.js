// Empty array waiting for the function createMarker to push the selected location to it
let markers = [];

// List of coordinates and matching description for each location
    const myCoordinates = { 
        "bigBenCoords" : {
        "lat": 51.5007, 
        "lng": -0.1246,
        'description':"Big Ben is a historic landmark in London and has become one of the major and most easily recognisable landmarks of the city. The name 'Big Ben' is the name for the clock in Elizabeth's Tower - the tallest tower in the Palace of Westminster. The clock weighs an impressive 13 tons."
        },
        
        "westminsterAbbeyCoords" : {
        "lat":51.4987, 
        "lng":-0.1289,
        'description':"Westminster Abbey, formally titled the Collegiate Church of Saint Peter at Westminster, is a large, mainly Gothic abbey church in the City of Westminster. It is also where all of the British monarchs have been crowned - all the way from the time of William the Conqueror (except for Edward V and Edward VIII)."
        },
        
        "buckinghamPalaceCoords":{
        "lat":51.501399,
        "lng":-0.141761,
        'description':"Buckingham Palace is the London residence and administrative headquarters of the monarch of the United Kingdom. Located in the City of Westminster, the palace is often at the centre of state occasions and royal hospitality. It has been a focal point for the British people at times of national rejoicing and mourning."
        },

        "theShardCoords":{
        "lat":51.5045, 
        "lng":-0.0865,
        'description':"The Shard is one of the masterpieces of the architect Renzo Piano. The Shard stands at the height of 309.6 metres, making it the tallest building in the United Kingdom and the sixth-tallest building in all of Europe. When you are in London, there are only a handful of places that offer you with decent views of the city, and the Shard is one of them."
        },

        "towerOfLondonCoords":{
        "lat":51.5081,
        "lng":-0.0759,
        'description':"The White Tower, popularly known as the Tower of London, is definitely one of the must-see historical landmarks in London. It was constructed almost 1000 years ago in 1097, and this old monument has been used as an execution site, prison, and royal residence."
        },

        "towerBridgeCoords":{ 
        "lat":51.5055, 
        "lng":-0.0754,
        'description':"Tower Bridge is one of the tourist attractions you can't afford to miss because it is one of the famous monuments in London. It was built between 1886 and 1894. The Bridge is one of the most-visited landmarks globally with more than 40,000 people using it daily."
        },

        "londonEyeCoords":{
        "lat":51.5033, 
        "lng":-0.1196,
        'description':"The London Eye opened in December 1999, with official rides beginning in 2000. This is one of the more modern tourist attractions in London. You can locate the famous landmark in the heart of London, opposite the Palace of Westminster and Westminster Abbey."
        },

        "kensingtonPalaceCoords" : 
        {"lat":51.5050, 
        "lng":-0.1877,
        'description':"Kensington Palace is one of the historical landmarks of London, England. The famous rich history of the palace began when it was first built in 1605 by Sir George Coppin. The Palace was the birthplace of Queen Victoria, and today, it is the official London residence of the Duke and Duchess of Cambridge."
        },

        "britishMuseumCoords" : 
        {"lat":51.5194, 
        "lng":-0.1270,
        'description':"The British Museum is the largest museum in England and also the oldest public museum in the world. The Museum was opened to the public in 1759. It boasts of having collections of art from various parts of the world, including a collection of Roman, European, Etruscan, Middle Eastern and European galleries."
        },

        "vAndAMuseumCoords" : 
        {"lat":51.4966, 
        "lng":-0.1722,
        'description':"The V&A is the world’s leading museum of art and design, housing a permanent collection of over 2.3 million objects that span over 5,000 years of human creativity. The Museum holds many of the UK's national collections and houses some of the greatest resources for the study of architecture, furniture, fashion, textiles, photography, sculpture, painting, jewellery, glass, ceramics, book arts, Asian art and design, theatre and performance."
        },

        "naturalHistoryMuseumCoords" : 
        {"lat":51.4967, 
        "lng":-0.1764,
        'description':"The Natural History Museum in London is one of the most impressive buildings in the city. It is home to more than 70 million objects, with at least thousands of items added each year. This makes the museum one of the largest collections of natural history in the world. The museum was founded in 1754, with the collections provided by Sir Hans Sloane."
        },

        "scienceMuseumCoords" : 
        {"lat":51.4978, 
        "lng":-0.1745,
        'description':"The Science Museum of London was founded in 1857, and it is one of the historical landmarks in London. It is the most-visited science and technology-related museum in Europe, with more than 3 million people coming through it annually. The museum has more than 15,000 science-related objects on display, including the famous Apollo 10 command capsule."
        },

        "britishTransportMuseumCoords" : 
        {"lat":51.5119, 
        "lng":-0.1216,
        'description':"The famous transportation system in London is something that cannot be seen in every city in the world, and this is one way London stands out. The London Transport Museum has been in existence since the 1920s, and it contains 450,000 items collected over 200 years all about the transport history of the city."
        },

        "stPaulsCoords" : 
        {"lat":51.5138, 
        "lng":-0.0984,
        'description':"St. Paul's Cathedral's construction started in 1675 and ended in 1710 by Sir Christopher Wren. St. Paul's has been used as the location for many important events. For example, the wedding between Prince Charles and Diana in 1981 was held here, including the funeral of Winston Churchill and Margaret Thatcher."
        },

        "londonZooCoords" : 
        {"lat":51.5353, 
        "lng":-0.1534,
        'description':"The ZSL London Zoo is the world’s oldest scientific zoo (under the Zoological Society of London) as it has been open since 1828, and houses one of the largest animal collections in the UK with over 756 different species living inside its walls."
        },

        "londonAquariumCoords" : 
        {"lat":51.5020, "lng":-0.1192, 
        'description':"SEA LIFE London Aquarium contains one of the largest collections of marine life from around the world anywhere in Europe. It opened in March 1997 as the London Aquarium and hosts about one million visitors each year."
        },

        "maritimeMuseumCoords" : 
        {"lat":51.481111, "lng":-0.005556, 
        'description':"The National Maritime Museum explores the naval and maritime history of Britain, which was for centuries one of the world’s leading sea powers. The exhibitions showcase everything from real-life vessels and model ships to nautical instruments, objects, manuscripts, and maritime-themed artworks from the likes of J.M.W. Turner."
        },

        "royalObservatoryCoords" : 
        {"lat":51.4769, "lng":-0.0005, 
        'description':"Rising like a beacon of time atop Greenwich Park, the Royal Observatory is home to the prime meridian (longitude 0° 0' 0'') and the Meridian Courtyard, where you can stand with your feet straddling the eastern and western hemispheres. You can also see the Great Equatorial Telescope (1893) inside the onion-domed observatory."
        },

        "greenwichParkCoords" : 
        {"lat":51.4769, "lng":-0.0015, 
        'description':"Greenwich Park is one of London’s loveliest expanses of green, with a rose garden, picturesque walks, a 6th-century Anglo-Saxon burial ground and astonishing views of Canary Wharf from the crown of the hill. Covering 74 hectares, it's the oldest enclosed royal park. It's bisected by the imaginary meridian line and is also home to the Ranger's House and the Royal Observatory."
        },

        "cuttySarkCoords" : 
        {"lat":51.4817, "lng":-0.0108, 
        'description':"The Cutty Sark is the only remaining original Clipper ship in the World and is preserved in Greenwich, London. She was built in 1869 and served as a merchant vessel, travelling throughout the world."
        },

        "hydeParkCoords" : 
        {"lat":51.5073, "lng":-0.1657, 
        'description':"In 1536, Hyde Park was acquired by Henry VIII. The primary reason he acquired this large area of space was to turn it into a hunting ground. By order of King Charles, the park opened to the general public in 1637. Hyde Park covers a ground area of about 350 acres, serving as the habitat for over 4,000 animals alongside ornamental flower gardens and a large lake."
        },

        "regentsParkCoords" : 
        {"lat":51.5313, "lng":-0.1570, 
        'description':"Just like Hyde Park, Regent's Park was also acquired by Henry VIII and used as a hunting area until 1649. Regent's Park was not opened to the public until around the 1930s, and it has been popular ever since. It is home to many wildlife creatures, boasting of 200 species of birds and more than 650 waterfowl."
        },

        "hollandParkCoords" : 
        {"lat":51.5032, "lng":-0.2037, 
        'description':"Holland Park contains an extensive woodland for central London, and supports a surprising range of mammals, birds and insects, including peacocks. The park also has a Japanese garden, orangery, tennis courts and a cricket pitch."
        },

        "greenParkCoords" : 
        {"lat":51.5039, "lng":-0.1439, 
        'description':"Although situated so close to St James's Park, The Green Park is quite different in character. It is more peaceful with mature trees and grassland and is surrounded by Constitution Hill, Piccadilly and the Broad Walk. The Green Park was first recorded in 1554 as the place where a rebellion took place against the marriage of Mary I to Philip II of Spain."
        },

        "stJamesParkCoords" : 
        {"lat":51.5025, "lng":-0.1348, 
        'description':"St James’s Park includes The Mall and Horse Guards Parade, and is surrounded by landmarks such as Buckingham Palace, Clarence House and Whitehall. The park’s famous flower beds at the front of Buckingham Palace are a familiar backdrop to pageants including Trooping the Colour, as well as state visits and other ceremonial occasions."
        },

        "boroughMarketCoords" : 
        {"lat":51.5055, "lng":-0.0910, 
        'description':"Borough Market is London's oldest food market, which has been in existence for over a century and dates back to the year 1014. This market is not only popular in the UK, but it is also one of the most famous markets in the world. The present structure of the market was built during the 1850s."
        },

        "greenwichMarketCoords" : 
        {"lat":51.4816, "lng":-0.0090, 
        'description':"Greenwich Market is a market hall known for its lively and artistic atmosphere. There are over 120 stands here, including antiques, works of art and handicrafts. You can also find books, clothes and jewelry here. The place is also known for kitchen stalls from almost all over the world and for concerts played by students of the nearby Trinity College of Music."
        },

        "portobelloRoadMarketCoords" : 
        {"lat":51.5209, "lng":-0.2091, 
        'description':"Dating back to the 19th century, Portobello is one of London’s oldest markets and it provide the setting for the 1999 movie Notting Hill starring Hugh Grant and Julia Roberts. Renowned for its antique stalls, the market is in full swing on Saturdays when more than 1,500 stalls compete for your attention."
        },

        "camdenMarketCoords" : 
        {"lat":51.5414, "lng":-0.1465, 
        'description':"Camden Market started off as a small arts and crafts fair in the backyard of Dingwalls. Originally it was temporary and only open on Sundays, however its popularity grew fast."
        },

        "spitalfieldsMarketCoords" : 
        {"lat":51.5197, "lng":-0.0755, 
        'description':"Spitalfields takes its name from the hospital and priory, St. Mary’s Spittel that was founded in 1197. Lying in the heart of the East End, it is an area known for its spirit and a strong sense of community. It was in a field next to the priory where the now-famous market first started in the thirteenth century."
        },

        "trafalgerSquareCoords" : 
        {"lat":51.5080, "lng":-0.1283, 
        'description':"Trafalgar Square is a popular public square located in the City of Westminster, Central London. John Nash was the architect in charge of the square's design during the 1820s, and it was constructed in the 1830s. Trafalgar Square is home to other famous attractions, such as the National Gallery, Nelson's Column, and St. Martin-in-the-Fields."
        },

        "nationalGalleryCoords" : 
        {"lat":51.5089, "lng":-0.1283, 
        'description':"The National Gallery is one of the most famous art museums in the world. Constructed in 1937, it attracts more than 4 million tourists yearly. Unlike many other museums, this one is free to enter, so you don't have to worry about paying an admission fee."
        },

        "coventGardenMarketCoords" : 
        {"lat":51.5123,"lng":-0.1230, 
        'description':"Established in 1654 and set in London’s West End, Covent Garden is a major draw for visitors and Londoners who enjoy its many attractions, including shopping, theatre, restaurants, bars, history and culture."
        },

    }
// Sets the initial map location over London
    function initMap() {
    const map = new google.maps.Map( document.getElementById("map"), {
        zoom: 12,
        center: {
        lat:51.509865,
        lng:-0.118092
        }
    });

// Removes all markers from the map before adding a new one
    function removeMarkers() {
        markers.forEach(marker => {
        marker.setMap(null);
        });
        markers=[];
    }

// Adds the marker to the map
    function createMarker( coordinates, map, value ) {
        const marker = new google.maps.Marker({
        position: coordinates,
        value:value,
        animation: google.maps.Animation.DROP,
        map
        });
        markers.push( marker );

// Adds the info window to the corresponding marker
        setTimeout(()=>{
        let content=[myCoordinates[value].description].join(', ');
        let infowindow=new google.maps.InfoWindow({maxWidth:400});

        infowindow.setContent( content )
        infowindow.setPosition( marker.position );
        infowindow.open( map, marker );					
        },1000);

    }
// Change handler to pass in the previous functions
    const changehandler=function(e){
        const coordinates = myCoordinates[ this.value ];
        removeMarkers(); 
        createMarker(coordinates, map, this.value ); 
    }
// Event listener to determine which location has been selected
    document.querySelectorAll('select.location-select').forEach( sel=>{
        sel.addEventListener('change',changehandler)
    })
    }