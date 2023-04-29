import React from 'react';
import "./Recommend.css"

const Recommendations = ({ score }) => {
  const recommendations = [
    {
      55: {
        place: 'Kedarnath',
        location: 'Uttarakhand',
        imgSrc: 'https://images.unsplash.com/photo-1629981352504-b7f5210501c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        description: 'Kedarnath is a town located in the Indian state of Uttarakhand. It is situated at an altitude of 3,583 meters above sea level and is one of the most popular tourist destinations in India.The main center of attraction in Kedarnath is the Kedarnath Temple, which is one of the twelve Jyotirlingas of Lord Shiva. It is a sacred pilgrimage site for Hindus and is believed to be built by the Pandavas during the Mahabharata era. The temple is surrounded by majestic mountains and provides a serene and spiritual environment.Apart from the temple, Kedarnath is also known for its scenic beauty and trekking routes. The Kedarnath Wildlife Sanctuary, which is home to several species of flora and fauna, is a popular spot for nature enthusiasts. The trek to Kedarnath from Gaurikund is also a popular activity for adventure seekers.In terms of food, Kedarnath offers a variety of vegetarian dishes, including local delicacies such as Kachmauli and Kafuli. These dishes are made using locally sourced ingredients and are a must-try for food lovers.When it comes to shopping, Kedarnath offers a range of souvenirs such as wooden crafts, jewelry, and religious items. The town has several shops that sell these items, and bargaining is common practice.',
      },
    },
    {
      54: {
        place: 'Shimla',
        location: 'Himachal Pradesh',
        imgSrc: 'https://images.unsplash.com/photo-1609232530947-0aeb23338a43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80',
        description: 'Shimla is a beautiful hill station located in the northern Indian state of Himachal Pradesh. It is a popular tourist destination known for its picturesque landscapes, colonial architecture, and pleasant climatThe Ridge: It is a large open space in the heart of Shimla, offering panoramic views of the surrounding mountainsMall Road: A popular shopping hub in Shimla, Mall Road is home to a variety of shops selling handicrafts, clothes, and souvenirsJakhu Temple: Dedicated to Lord Hanuman, the Jakhu Temple is located atop the Jakhu Hill and offers stunning views of the valleyShimla is a center of attraction for adventure seekers and nature lovers. The hill station offers various adventure activities like trekking, paragliding, skiing, and mountain biking. The lush green valleys, snow-capped mountains, and waterfalls make it a paradise for nature loverShimla offers a wide range of cuisines, including Indian, Chinese, and Tibetan. Some popular dishes to try in Shimla areChanna Madra: A popular Himachali dish made with chickpeas and yogurt gravyDham: A traditional Himachali feast served during festivals, consisting of rice, lentils, and a variety of curriesMall Road is the best place for shopping in Shimla. You can buy a variety of handicrafts, woolen clothes, shawls, and souvenirs from the shops here. '




      },
    },
    {
      53: {
        place: 'Goa',
        location: 'India',
        imgSrc: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
        description: 'Goa is a state located on the western coast of India, known for its beautiful beaches, rich history, and vibrant culture. It attracts tourists from all over the world for its laid-back atmosphere, picturesque landscapes, and warm hospitalityBeaches - Goa is famous for its beautiful beaches, such as Beach, Calangute Beach, Anjuna Beach, and Palolem Beach, amany others. These beaches are perfect for swimming, sunbathand water sports.Some of the most popular tourist points in Goa include:Old Goa - This historical city is home to many ancient churccathedrals, and other architectural wonders that offer a gliinto Goas colonial past.Goa is a hub for many cultural events and festivals througthe year. The most famous of these is the Goa Carnivathree-day festival that takes place in February and featparades, live music, and colorful costumes. Fish Curry Rice - This traditional Goan dish is made with ffish and a spicy tomato-based curry, served with rice.Pork Vindaloo - A fiery dish made with pork marinated in vinand spices, often served with potatoes.Anjuna Flea Market - A bustling open-air market that takes pevery Wednesday and offers a wide range of local handicraclothes, and jewelry.Mapusa Market - A popular market that takes place every Frand offers a variety of fresh produce, spices, and handcrafts.',
      },
    },
    {
      52: {
        place: 'Jaipur, Rajasthan',
        location: 'North India',
        imgSrc: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        description: 'Jaipur is the capital city of Rajasthan, known as the "Pink City" due to the pink walls and buildings in the old part of the city. The city is famous for its rich history, cultural heritage, and stunning architecture.Some of the popular places to visit in Jaipur include:Hawa Mahal: It is a beautiful palace known for its intriarchitecture and five-story façade with over 900 small windows.Amber Fort: One of the most popular tourist attractionJaipur, Amber Fort is a magnificent fort that was built in16th century.City Palace: The City Palace is a stunning palace complex houses several museums, courtyards, and gardens.Some ofmust-try dishes in Jaipur include:Dal Baati Churma: A popRajasthani dish made of lentils, wheat balls, and a sdessert made of crushed wheat.Laal Maas: A fiery meat curry with red chili paste and spices.Ghevar: A sweet dessert with flour, sugar, and ghee.Johari Bazaar: A famous marketjewelry, especially for precious and semi-precious stones.Bazaar: A bustling market for textiles, fabrics, and clotTripolia Bazaar: A popular market for traditional Rajasthandicrafts such as pottery, carpets, and paintings.'


        ,
      },
    },
    {
      51: {
        place: 'Darjeeling, West Bengal',
        location: 'East India',
        imgSrc: 'https://images.unsplash.com/photo-1661970131012-0f77ff21797e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
        description: 'Darjeeling is a beautiful hill town located in the Indian state of West Bengal. Known as the "Queen of the Hills," it is situated at an altitude of 6,700 ft in the Lesser Himalayas. Tiger Hill: Famous for its stunning sunrise views over the Kanchenjunga Mountains and the Himalayas. Darjeeling Himalayan Railway: A UNESCO World Heritage Site, also known as the "Toy Train," that runs on a narrow gauge from New Jalpaiguri to Darjeeling.Ghoom Monastery: A beautiful and serene Buddhist monastery located in Ghoom, which is the highest railway station in India.Mall Road: A popular pedestrian shopping street in the heart of Darjeeling, lined with shops selling local handicrafts, jewelry, and souvenirs. Batasia Loop: A scenic viewpoint that offers breathtaking views of Darjeeling and the surrounding mountains, located on the way to Ghoom.Momos: A popular local delicacy, made with a variety of fillsuch as chicken, pork, or vegetables, and served with schutney.Thukpa: A hearty noodle soup made with vegetablemeat, perfect for cold weather.Chowk Bazaar: A bustling market in the heart of Darjeelknown for its colorful shops selling handicrafts, textiles,souvenirs.Tibetan Refugee Self Help Centre: A non-profit organization sells handmade carpets, textiles, and other handicrafts madTibetan refugees.',
      },
    },
    {
      50: {
        place: 'Leh Ladakh, Jammu and Kashmir',
        location: 'North India',
        imgSrc: 'https://images.unsplash.com/photo-1632752112763-243d73b76035?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=816&q=80',
        description: 'Leh Ladakh is a high-altitude region in the Indian state of Jammu and Kashmir. It is a popular tourist destination known for its stunning natural beauty, unique culture, and adventure activities. Pangong Tso Lake: It is a beautiful high-altitude lake located in the eastern Ladakh region. It is famous for its crystal-clear blue water and the picturesque surrounding mountains.Nubra Valley: It is a stunning valley located in the northern part of Ladakh. It is known for its scenic beauty, sand dunes, and the Diskit Monastery.Butter tea: It is a traditional Ladakhi tea made with yak butter and salt.Chhurpi: It is a hard cheese made from yak milk and is often eaten as a snack.Paba: It is a roasted barley flour dish served with hot water and butter.Leh Ladakh is famous for its unique handicrafts and souvenirs.Pashmina shawls: These are made from the fine wool of the Pashmina goat and are famous for their softness and warmth.Tibetan jewelry: Leh Ladakh is a hub for Tibetan refugees,you can find some exquisite handmade jewelry made from siand precious stones.Prayer flags: These are colorful flags with Buddhist mantrassymbols printed on them. They are believed to bring good and happiness.Overall, Leh Ladakh is a must-visit destinafor anyone looking to experience the beauty and culture ofHimalayas',
      },
    },
    {
      49: {
        place: 'Hampi, Karnataka',
        location: 'South India',
        imgSrc: 'https://images.unsplash.com/photo-1620766182966-c6eb5ed2b788?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=448&q=80',
        description: 'Hampi is a UNESCO World Heritage site located in the state of Karnataka, India. It is known for its rich history, stunning architecture, and beautiful landscapes. As a tourist point, Hampi is one of the most visited destinations in Karnataka. It is a center for attraction for both national and international tourists. The ancient city of Hampi was the capital of the Vijayanagara Empire and is home to several historical sites such as the Virupaksha Temple, Vithala Temple Complex, Hampi Bazaar, Lotus Mahal, and Elephant Stables, to name a few. The architectural wonders of Hampi are simply breathtaking, and visitors can easily spend days exploring the city and its ruins.When it comes to food, Hampi offers a variety of optioncater to different tastes. One of the must-try dishes islocal cuisine, which includes delicious dishes such astraditional thali, bisi bele bath, idli, dosa, and vada. His also known for its street food, which includes delicsnacks like mirchi bajji, bonda, and aloo tikki.Hampi is also a great destination for shopping. Visitorsfind a wide range of handicrafts and souvenirs, including ssculptures, miniature paintings, and silk fabrics. Hampi Bais a popular shopping destination where visitors can fivariety of local products at reasonable prices.',
      },
    },
    {
      48: {
        place: 'Agra, Uttar Pradesh',
        location: 'North India',
        imgSrc: 'https://images.unsplash.com/photo-1585135497273-1a86b09fe70e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80',
        description: 'Agra is a city located in the northern Indian state of Uttar Pradesh, situated on the banks of the river Yamuna. It is famous for its beautiful architecture, rich culture, and historical significance. Agra is home to one of the Seven Wonders of the World, the Taj Mahal, which is a UNESCO World Heritage Site. Agra Fort: Agra Fort is another UNESCO World Heritage S which was built in the 16th century. It is a beautiful fort  of red sandstone, which served as the residence of Mu emperors. Fatehpur Sikri: Fatehpur Sikri is a beautiful historical  located near Agra.Petha: Petha is a sweet made from pumpkin is a famous delicacy of Agra.Mughlai Cuisine: Agra is known its delicious Mughlai cuisine, which includes dishes  kebabs, biryanis, and curries.Marble Handicrafts: Agra is fa for its marble handicrafts, which include items like va plates, and jewelry boxes. Leather Goods: Agra is known for its high-quality leather go which include shoes, bags, and jackets. In conclusion, Agra is a beautiful city that has a lot to o to tourists. Its historical significance, rich culture, delicious food make it a must-visit destination in India.',
      },
    },
    {
      47: {
        place: 'Mahabaleshwar, Maharashtra',
        location: 'West India',
        imgSrc: 'https://images.unsplash.com/photo-1600251869898-96138e5e3ad4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        description: 'Mahabaleshwar is a popular hill station located in the Western Ghats of Maharashtra, India. It is known for its picturesque beauty, breathtaking views, and pleasant weather.Wilson Point: This is the highest point in Mahabaleshwar and offers a panoramic view of the surrounding hills and valleys.Arthurs Seat: This is a popular viewpoint that offers stunviews of the Sahyadri Mountains and the Konkan coastline.VLake: This is a beautiful lake where tourists can enjoy boaand other water activities.Lingmala Waterfalls: This is a popular waterfall that is locamidst lush greenery and offers a breathtaking Mahabaleshwar is also famous for its temples. The MahabalesTemple, located in the old town of Mahabaleshwar, is one ofprominent attractions. It is an ancient temple dedicated to Shiva and is visited by many devotees. Mahabaleshwar is fafor its strawberries, and one can find varstrawberry-related delicacies such as strawberry ice crstrawberry milkshake, and strawberry cream in the local markApart from that, one can also try the local Maharashtcuisine, which includes dishes like vada pav, misal pav,bhakri.Some of the popular shopping places in Mahabalesinclude the Mahabaleshwar Market, Mapro Garden, and the ImperialStore. ',

      },
    },
    {
      46: {
        place: 'Gangtok, Sikkim',
        location: 'North East India',
        imgSrc: 'https://images.unsplash.com/photo-1635346537940-9d51faeb6e32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
        description: 'Gangtok is the capital city of the Indian state of Sikkim and is a popular tourist destination.Nathula Pass: Located at an altitude of 14,450 feet, Nathula Pass is a popular tourist spot for its scenic beauty, snow-clad mountains, and adventurous trekking options. Tsomgo Lake: Also known as Changu Lake, Tsomgo Lake is a glacial lake located at an altitude of 12,400 feet. The lake is surrounded by snow-clad mountains and is a popular spot for boating and photography.Banjhakri Falls: A popular picnic spot located on the outskirts of Gangtok, Banjhakri Falls is a natural waterfall surrounded by lush greenery and rocks.Momos: Sikkim is famous for its momos, which are a type of dumpling filled with minced meat or vegetables. They are available in various styles and are a must-try for all tourists.Chhurpi: It is a local cheese made from yak milk and is used in various dishes like momos and thukpa.MG Marg: It is a popular shopping street in Gangtok where you can find various shops selling local handicrafts, souvenirs, and clothing.Lal Bazaar: It is a traditional market in Gangtok where you can find fresh produce, spices, and other local products.',
      },
    },
    {
      45: {
        place: 'Mumbai, Maharashtra',
        location: 'West India',
        imgSrc: 'https://images.unsplash.com/photo-1567157577867-05ccb1388e66?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
        description: 'Mumbai is a bustling city located on the west coast of India. It is the financial capital of India and is also known as the city of dreams due to its film industry. Mumbai offers a blend of history, culture, and modernity, making it a popular tourist destination.Gateway of India: The Gateway of India is a famous landmark in Mumbai that was built during the British colonial period.Marine Drive: Marine Drive is a beautiful promenade that along the Arabian Sea. Vada pav: Vada pav is a popular street food in Mumbai consists of a potato fritter sandwiched between two slicebread.Pav bhaji: Pav bhaji is a dish made of mashed vegetablesspices, served with bread.Colaba Causeway: Colaba Causeway is a street market that ofa variety of goods, including clothing, accessories,souvenirs.Crawford Market: Crawford Market is a wholesale market offers a variety of goods, including fresh produce, spices,household items.Overall, Mumbai has a lot to offer and is a city that you shdefinitely visit if you get the chance!',
      },
    },
    {
      44: {
        place: 'Rishikesh, Uttarakhand',
        location: 'North India',
        imgSrc: 'https://images.unsplash.com/photo-1614605670899-47ecba60bf2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1272&q=80',
        description: 'Rishikesh is a popular tourist destination located in the northern state of Uttarakhand, India. It is situated at the foothills of the Himalayas, and is known for its scenic beauty, spiritual significance, adventure sports, and yoga and meditation centers.Triveni Ghat: A popular bathing spot where three holy riveGanga, Yamuna and Saraswati - converge.Laxman Jhula: A suspension bridge over the Ganga river, whicnamed after Lord Ramas brother Laxman.Parmarth Niketarenowned ashram that offers yoga and meditation classes, as as a Ganga Aarti ceremony every evening.When it comes to fRishikesh offers a variety of options to satisfy every palSome of the must-try dishes include aloo puri, chhole bhature momos, thukpa, and paranthas. For those with a sweet tooth,local delicacies like bal mithai and singhori are a must-try.Shopping in Rishikesh is a delightful experience. The lmarkets offer a range of traditional handicrafts, cloth jewelry, and souvenirs. The famous markets in Rishikesh areLakshman Jhula Market, Ram Jhula Market, and the Tibetan MarVisitors can buy items such as Rudraksha beads, yoga mats, bstatues, and musical instruments.'
        ,
      },
    },
    {
      43: {
        place: 'Kochi, Kerala',
        location: 'South India',
        imgSrc: 'https://images.unsplash.com/photo-1558013400-b724200f9c39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        description: 'Kochi, also known as Cochin, is a vibrant city located in the southern Indian state of Kerala. It is a popular tourist destination, known for its beautiful beaches, backwaters, historical landmarks, and vibrant culture.Fort Kochi: It is a popular tourist destination that is famous for its colonial-era buildings, beautiful beaches, and unique Chinese fishing nets.Mattancherry Palace: Also known as the Dutch Palace, 16th-century palace is a must-visit destination for hisbuffs. It is famous for its beautiful murals and artifacts depict the history and culture of Kerala.Kerala Folklore Music This museum is a treasure trove of Keralas rich cultheritage.Meen Pollichathu: This is a popular dish made fish, which is marinated in spices and then wrapped in baleaves and roasted.Karimeen Fry: This is a famous Kerala dish made with freshwfish, marinated in spices, and then deep-fried until crBroadway: This is a popular shopping district in Kochi thaknown for its street markets, antique shops, and boutiques.Lulu Mall: This is the largest shopping mall in Kochi anhome to some of the most popular international and natibrands.Overall, Kochi is a great destination for those looking to explore the rich culture, history, and natural beautKerala.',
      },
    },
    {
      42: {
        place: 'Pushkar, Rajasthan',
        location: 'North India',
        imgSrc: 'https://images.unsplash.com/photo-1558013400-b724200f9c39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        description: 'Pushkar is a small town located in the state of Rajasthan, India. It is a popular tourist destination known for its vibrant culture, rich history, and scenic beauty.Pushkar Lake: This is the main attraction in Pushkar. It is believed to be a holy lake and is surrounded by several temples and ghats where people take a dip to cleanse their sins. Brahma Temple: This temple is one of the few temples dedicated to Lord Brahma, the creator of the universe. It is a highly revered temple and attracts a large number of tourists and devotees.Pushkar Camel Fair: This is an annual event that takes place in November and is one of the biggest tourist attractions in Pushkar.Dal Baati Churma: This is a traditional Rajasthani dish that consists of dal (lentils), baati (a baked dough ball), and churma (a sweet dish made from wheat flour).Kachori: This is a deep-fried pastry filled with spicy lentils and served with chutney.Handmade leather items such as bags, shoes, and belts.Silver jewelry, especially the traditional Rajasthani style.Colorful textiles such as bandhani (tie and dye) and block prints.Handmade wooden items such as toys, boxes, and furniture',
      },
    },
    {
      41: {
        place: 'Kaziranga National Park, Assam',
        location: 'North East India',
        imgSrc: 'https://images.unsplash.com/photo-1675296098308-f9f526c6b724?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=834&q=80',
        description: 'Kaziranga National Park is a UNESCO World Heritage Site located in the Indian state of Assam. It is known for its high density of one-horned rhinoceroses, which is why it is often referred to as the "Land of the Rhinoceros." Kaziranga National Park is a popular tourist destination, especially for those interested in wildlife and nature. Visitors can take jeep and elephant safaris to explore the park and see its various animals, such as tigers, elephants, and water buffalo.Assam is known for its delicious cuisine, and Kaziranga National Park is no exception. Visitors can try local dishes such as fish curries, bamboo shoot pickle, and pitha (a type of rice cake). Tea is also a popular drink in the region, and visitors can enjoy a cup of hot Assam tea after a day of exploring the park.There are several souvenir shops near Kaziranga National Park that offer a variety of local handicrafts and souvenirs. Visitors can buy handwoven shawls, bamboo handicrafts, and Assamese silk sarees.Tea is also a popular souvenir, and visitors can buy various types of Assam tea to take home with them.'
      }
    },
    {
      40: {
        place: 'Udaipur, Rajasthan',
        location: 'North India',
        imgSrc: 'https://images.unsplash.com/photo-1575994532957-773da2f83eb1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1071&q=80',
        description: 'Udaipur is a city located in the state of Rajasthan, India. It is known as the "City of Lakes" and is a popular tourist destination because of its rich history, culture, and beautiful landscapes.City Palace - A majestic palace complex located on the banks of Lake Pichola, it is a fusion of Rajasthani and Mughal architecture and has several courtyards, gardens, and museums to explore. Lake Pichola - A serene lake surrounded by hills, it is dotted with several islands and has some of the best views of the city.Jagdish Temple - A 17th-century temple dedicated to Lord Vishnu, it has intricate carvings and sculptures and is one of the largest temples in Udaipur.Dal Bati Churma - A traditional Rajasthani dish made with lentil soup, baked wheat dumplings, and a sweet dessert made with wheat, ghee, and jaggery.Laal Maas - A spicy meat curry made with lamb or mutton, it is a specialty of Rajasthan.Mirchi Bada - A snack made with deep-fried green chilies stuffed with potato filling and served with chutney.Hathi Pol Bazaar - A popular market for traditional Rajasthani handicrafts, textiles, and jewelry.Bada Bazaar - A bustling market for souvenirs, spices, and street food.Shilpgram - A village-like complex showcasing the handicrafts and art of Rajasthan, it has several shops and stalls selling pottery, textiles, and paintings.',
      },
    },
    {
      39: {
        place: 'Coorg, Karnataka',
        location: 'South India',
        imgSrc: 'https://images.unsplash.com/photo-1622004468207-4f8b21600c20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        description: 'Coorg, also known as Kodagu, is a beautiful district located in the southwestern part of Karnataka, India. It is a popular tourist destination due to its stunning natural beauty, rich cultural heritage, and unique cuisine.Abbey Falls: A picturesque waterfall surrounded by lush greenery and coffee plantations.Talacauvery: The origin of the River Cauvery and a popular pilgrimage site.Dubare Elephant Camp: A unique experience where you can interact with elephants and learn about their daily routine.Rajas Seat: A beautiful garden with a stunning view of the surrounding hills.Coorg is known for its natural beauty and stunning landscapes. The lush green hills, coffee plantations, and serene waterfalls make it a perfect destination for nature lovers.Coorg cuisine is a unique blend of local spices, meats, and vegetables. Some of the must-try dishes include Pandi Curry (pork curry), Kadambuttu (steamed rice balls), Noolputtu (rice noodles), and Akki Roti (rice flour flatbread). Coorg is known for its handicrafts, which include silk saris, wooden handicrafts, and bamboo products. You can also buy locally grown spices like cardamom, pepper, and cinnamon.  ',
      },
    },
    {
      38: {
        place: 'Varanasi, Uttar Pradesh',
        location: 'North India',
        imgSrc: 'https://images.unsplash.com/photo-1561361058-c24cecae35ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=498&q=80',
        description: 'Varanasi, also known as Banaras or Kashi, is a city in the northern Indian state of Uttar Pradesh, situated on the banks of the holy river Ganges. It is one of the oldest continually inhabited cities in the world and is considered to be a sacred city by Hindus, Buddhists, and Jains.The Ghats of Varanasi: The city is renowned for its numerous ghats (steps leading down to the river) that line the banks of the Ganges.Kashi Vishwanath Temple: One of the most famous and significant Hindu temples dedicated to Lord Shiva, the Kashi Vishwanath Temple is located in the heart of Varanasi. Chaat: A popular snack made with boiled potatoes, chickpeas, and a tangy sauce.Kachori Sabzi: A savory pastry filled with spicy lentils and served with a vegetable curry.Thandai: A refreshing drink made with milk, almonds, and spices.Chowk: A popular shopping destination in Varanasi, Chowk is known for its brassware and copperware.Godowlia Market: A bustling market that sells everything from clothes to jewelry to electronics.Thatheri Bazaar: This market is famous for its handcrafted brass and copper products.',
      },
    },
    {
      37: {
        place: 'Ooty, Tamil Nadu',
        location: 'South India',
        imgSrc: 'https://images.unsplash.com/photo-1589136777351-fdc9c9cab193?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        description: 'Ooty, also known as Udhagamandalam, is a popular hill station located in the southern Indian state of Tamil Nadu. The town is situated at an altitude of 2,240 meters above sea level and is known for its pleasant weather, scenic beauty, and colonial architecture. Ooty is surrounded by lush green hills, dense forests, and tea plantations, making it a popular destination for nature lovers.Ooty Lake: This man-made lake is a popular spot for boating and is surrounded by lush greenery.Doddabetta Peak: It is the highest peak in the Nilgiri Mountains and offers panoramic views of the surrounding hills.Pykara Falls: These falls are located around 20 km from Ooty and are known for their scenic beauty.In terms of food, Ooty is known for its South Indian cuisine, which includes dishes such as dosa, idli, vada, and sambar. Some of the popular restaurants in Ooty include Willys Coffee Pub, Sidewalk Cafe, and Shinkows Chinese Restaurant. Ooty is also known for its shopping, with a range of items such as tea, spices, homemade chocolates, and handicrafts being popular among tourists. The main shopping areas in Ooty are Commercial Road, Charing Cross, and Main Bazaar. Some of the popular shops in Ooty include King Star Confectionery, Moddys Chocolates, and Kurinji Mini Supermarket.',
      },
    },
    {
      36: {
        place: 'Jaisalmer, Rajasthan',
        location: 'North India',
        imgSrc: 'https://plus.unsplash.com/premium_photo-1661951545793-ecb10ba445dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        description: 'aisalmer is a city located in the northwestern state of Rajasthan, India. It is known for its beautiful sandstone architecture, stunning desert landscapes, and rich cultural heritage. Jaisalmer Fort: Also known as Sonar Qila or Golden Fort, Jaisalmer Fort is a UNESCO World Heritage Site and one of the most popular tourist attractions in the city. The fort is made of yellow sandstone and is located on a hill, providing a stunning view of the city.Desert Safari: Jaisalmer is located in the heart of the Thar Desert, which makes it an ideal location for a desert safari. Tourists can enjoy camel rides, jeep safaris, and even overnight camping in the desert.Jain Temples: Jaisalmer has several Jain temples that are known for their stunning architecture and intricate carvings. Some of the popular Jain temples include Chandraprabhu Temple, Parsvanath Temple, and Shantinath Temple.When it comes to food, Jaisalmer is known for its traditional Rajasthani cuisine. Some of the popular dishes include dal baati churma, ker sangri, and gatte ki sabzi. For those with a sweet tooth, Jaisalmer offers plenty of options such as ghevar, mawa kachori, and rabri.Jaisalmer is also known for its traditional handicrafts and textiles. Tourists can shop for souvenirs such as camel leather goods, hand-embroidered textiles, and traditional jewelry. '
      },
    },
    {
      35: {
        place: 'Manali, Himachal Pradesh',
        location: 'North India',
        imgSrc: 'https://images.unsplash.com/photo-1597167231350-d057a45dc868?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1082&q=80',
        description: 'Manali is a popular hill station located in the northern Indian state of Himachal Pradesh. It is situated in the Beas River Valley and is known for its scenic beauty, adventure sports, and rich cultural heritage.Rohtang Pass: It is one of the most popular tourist attractions in Manali. The pass is located at an altitude of 3,978 meters and is known for its scenic beauty.Solang Valley: This beautiful valley is located about 14 kilometers from Manali and is a popular destination for adventure sports such as paragliding, skiing, and zorbing.Hadimba Temple: It is an ancient temple located in the middle of a dense forest and is dedicated to Goddess Hadimba.Sidu: It is a type of steamed bread that is made with wheat flour and is served with ghee or butter.Trout Fish: Fresh trout fish is easily available in Manali and is a popular dish among tourists.Shawls: Manali is known for its warm and beautiful shawls made of wool and pashmina.Himachali Hats: These hats are made of wool and are a popular souvenir to take back home.Tibetan Carpets: These carpets are made by Tibetan refugees in Manali and are known for their intricate designs and durability.',
      },
    },
    {
      34: {
        place: 'Kanyakumari, Tamil Nadu',
        location: 'South India',
        imgSrc: 'https://images.unsplash.com/photo-1527705381526-469031509a9d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
        description: 'Kanyakumari is a coastal town located in the southernmost tip of the Indian subcontinent, in the state of Tamil Nadu. It is a popular tourist destination known for its stunning natural beauty, cultural significance, and historical landmarks.One of the main attractions in Kanyakumari is the Vivekananda Rock Memorial, a majestic structure built on a rocky island off the coast of the town.Another popular tourist spot in Kanyakumari is the Kanyakumari Beach, where visitors can enjoy stunning views of the Indian Ocean and witness the convergence of the Bay of Bengal, Arabian Sea, and the Indian Ocean.In terms of food, Kanyakumari is famous for its seafood delicacies such as fish fry, prawn fry, and crab masala. Visitors can also try local dishes like dosa, idli, and vada, which are popular South Indian breakfast items.For shopping, Kanyakumari offers a variety of handicrafts and souvenirs, including shell products, wooden carvings, and traditional South Indian silk sarees. The Kanyakumari Main Road is a popular shopping destination, where visitors can find a wide range of shops and street vendors selling local goods.',

      },
    },
    {
      33: {
        place: 'Shillong, Meghalaya',
        location: 'North East India',
        imgSrc: 'https://images.unsplash.com/photo-1565716665452-2a4e3445b378?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
        description: 'Shillong is a beautiful city located in the northeastern part of India, in the state of Meghalaya. Known as the "Scotland of the East," it is a popular tourist destination for its stunning natural beauty, pleasant weather, and unique culture.Elephant Falls - A beautiful waterfall located just outside the city.Shillong Peak - The highest point in Shillong, offering panoramic views of the city and surrounding hills.Don Bosco Centre for Indigenous Cultures - A museum showcasing the diverse indigenous cultures of Northeast India.When it comes to food, Shillong has a unique culinary scene influenced by the Khasi and Jaintia tribes of Meghalaya. Some popular dishes to try include Jadoh (rice cooked with meat and spices), Dohneiiong (pork cooked with black sesame seeds), and Tungrymbai (fermented soybean paste).For shopping, Shillong offers a range of options from traditional handicrafts to modern fashion. Some popular markets to visit include Police Bazar, Iewduh (Bara Bazar), and Laitumkhrah. Here you can find everything from local spices and handwoven shawls to trendy clothing and accessories.',
      },
    },
    {
      32: {
        place: 'Puri, Odisha',
        location: 'East India',
        imgSrc: 'https://images.unsplash.com/photo-1629723248038-8b3bc1ecce29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80',
        description: 'Puri is a coastal city located in the state of Odisha, India. It is famous for its ancient temples, sandy beaches, and rich culture. Jagannath Temple: One of the most famous temples in India, Jagannath Temple is the center of attraction in Puri.Puri Beach: Puri Beach is a beautiful and serene stretch of golden sand along the Bay of Bengal. It is an ideal place to relax and enjoy the sunset.Chilika Lake: Chilika Lake, the largest brackish water lake in Asia, is located near Puri. It is home to a variety of migratory birds and is a popular spot for boating and fishing.Apart from the temples and beaches, Puri is also known for its rich culture and festivals. The Ratha Yatra or the Car Festival is one of the most important festivals celebrated in Puri.Puri is famous for its delicious and mouth-watering cuisine. Some of the must-try dishes include Khaja, a crispy sweet, Dalma, a lentil-based vegetable stew, and Macha Ghanta, a fish curry.Puri is famous for its handicrafts, especially the Pattachitra paintings, which are made on cloth and depict stories from the Hindu mythology. Other popular items include stone carvings, sand art, and seashell items. The local markets near the Jagannath Temple are a good place to shop for these items.',
      },
    },
    {
      31: {
        place: 'Amritsar, Punjab',
        location: 'North India',
        imgSrc: 'https://images.unsplash.com/photo-1609947017136-9daf32a5eb16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80',
        description: 'Amritsar is a vibrant city located in the northwestern Indian state of Punjab. It is best known for its iconic Golden Temple, which is considered to be one of the most sacred places in the Sikh religion.Golden Temple - This is the most popular attraction in Amritsar and is visited by millions of tourists every year.Jallianwala Bagh - This is a historical site where a massacre took place in 1919, when British soldiers opened fire on peaceful protesters. Wagah Border - This is the border between India and Pakistan, and is known for the daily closing ceremony where soldiers from both sides perform a synchronized parade. It is a patriotic and entertaining experience. Amritsari Kulcha - This is a type of bread stuffed with potato, onion, and spices. It is cooked in a tandoor oven and served with chole (chickpea curry) and pickle. Makki di Roti and Sarson da Saag - This is a classic Punjabi dish made with maize flour bread and a spinach-based curry. It is a must-try dish in Amritsar.Amritsar is a great place to shop for traditional Punjabi clothing, jewelry, handicrafts, and souvenirs. Hall Bazaar - This is a popular market in the city center that sells everything from clothes to spices to handicrafts.',
      },
    },
    {
      30: {
        place: 'Mysore, Karnataka',
        location: 'South India',
        imgSrc: 'https://images.unsplash.com/photo-1590766940554-634a7ed41450?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=999&q=80',
        description: 'Mysore is a city located in the southern state of Karnataka, India, famous for its rich cultural heritage, magnificent architecture, and beautiful natural landscapes. It is a popular tourist destination known for its historical significance, ancient temples, and colorful festivals.Mysore Palace: A magnificent palace built in the Indo-Saracenic style, which is the most popular tourist attraction in Mysore.Chamundi Hill: A scenic hill located on the outskirts of the city, which is home to the famous Chamundeshwari Temple and offers stunning views of the city.Mysore Zoo: A popular zoo known for its diverse collection of animals and birds, including tigers, lions, elephants, and more. Some of the popular shopping destinations in Mysore include Devaraja Market, Government Silk Factory, and Mall of Mysore. ',
      },
    },
    {
      29: {
        place: 'Tea Gardens',
        location: 'Munnar, Kerala',
        imgSrc: 'https://plus.unsplash.com/premium_photo-1661957883806-4f6d9ffff913?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        description: 'Tea gardens in Kerala are a popular tourist attraction, offering stunning views of the lush green tea plantations that cover the hillsides. Munnar, located in the Idukki district, is one of the most famous tea garden areas in Kerala and attracts tourists from all over the world.Apart from the tea gardens, Kerala is also home to several other tourist points, including wildlife sanctuaries, waterfalls, and hill stations. Some popular tourist attractions in Kerala include the Periyar Wildlife Sanctuary, Athirapally Waterfalls, and Wayanad.Some must-try dishes include Appam with Stew, Puttu with Kadala Curry, and Kerala-style Fish Curry.Kerala is famous for its handicrafts and spices. Visitors can shop for traditional handicrafts such as wood carvings, handloom textiles, and brassware. The state is also known for its high-quality spices, including cardamom, pepper, and cloves.',
      },
    },
    {

      28: {
        place: 'Sundarbans',
        location: 'West Bengal, India',
        imgSrc: 'https://images.unsplash.com/photo-1549300461-11c5b94e8855?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        description: 'The Sundarbans is a mangrove forest located in the delta region of the Bay of Bengal, between India and Bangladesh. The Indian part of the Sundarbans is located in the state of West Bengal and is a popular tourist destination known for its natural beauty, diverse wildlife, and unique cultural heritage.Sajnekhali Wildlife Sanctuary: This sanctuary is located on the banks of the Matla River and is a must-visit for wildlife enthusiasts. Visitors can spot a variety of bird species, including kingfishers, herons, and egrets, along with crocodiles, deer, and wild boars. Bhagabatpur Crocodile Project: This project is a breeding and conservation center for estuarine crocodiles, and visitors can witness the crocodiles in their natural habitat.Bhetki Macher Paturi: A traditional Bengali dish made with marinated fish cooked in banana leaves.Kosha Mangsho: A spicy mutton curry cooked with a blend of aromatic spices.Honey: The Sundarbans is also famous for its honey, which is harvested from the mangrove forests.Seafood: Visitors can buy fresh seafood from the local fishermen, including crabs, prawns, and fish.',
      },
    },
    {
      27: {
        place: 'Auli, Uttarakhand',
        location: 'North India',
        imgSrc: 'https://images.unsplash.com/photo-1618661057370-7cf87dfad271?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
        description: 'Auli is a beautiful hill station located in the Chamoli district of Uttarakhand, India. It is known for its stunning views of the Himalayan mountain range and is a popular tourist destination for adventure enthusiasts, nature lovers, and ski enthusiasts. Skiing: Auli is one of the best skiing destinations in India. It offers a perfect blend of adventure and scenic beauty. The slopes are perfect for both beginners and experienced skiers.Cable car ride: The Auli Ropeway is the highest and the longest cable car ride in Asia, offering breathtaking views of the surrounding mountains.Auli is a perfect place for people who love adventure and nature. The breathtaking views of the snow-capped mountains, skiing, and cable car rides make it a center of attraction for tourists.Auli has a range of local delicacies that you can try, such as Madua ki Roti, Bhang Ki Chutney, and Kumaoni Raita. You can also try the popular Garhwali Thali, which is a meal consisting of rice, dal, vegetables, and chapatis.',
      },
    },
    {
      26: {
        place: 'Ranthambore, Rajasthan',
        location: 'North India',
        imgSrc: 'https://images.unsplash.com/photo-1615551298862-0795063e3f1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80',
        description: 'Ranthambore National Park is one of the most popular tourist destinations in Rajasthan, located in the Sawai Madhopur district. It is renowned for its vast natural beauty, diverse flora and fauna, and the majestic Ranthambore Fort. Some of the main attractions at Ranthambore National Park are the tiger safaris, where visitors can explore the park in open jeeps and witness the majestic Bengal tigers in their natural habitat.When it comes to food, Ranthambore offers a variety of Rajasthani dishes, including dal bati churma, gatte ki sabzi, laal maas, and ker sangri. Shopping in Ranthambore is a unique experience as visitors can find a variety of handicrafts and souvenirs, including pottery, carpets, and textiles. Local markets and shops around the park offer these items at affordable prices. ',
      },
    },

  ];
  function refreshPage() {
    window.location.reload();
  }
  const recommendation = recommendations.filter(
    (item) => Object.keys(item)[0] == score
  )[0][score];

  return (
    <div className='rmcon'>
      <div className='rconl'>
        <div className='rd'>
          <p className='rh'>YAYY !!!</p>
          <p className='rh'>Pack your bags , plan your trip with us . </p>
          <p className='rhb'>{recommendation.place} it is ! </p>
          <p className='rh'>But where to go , what to eat , where to stay ? Need Help !</p>
          <p className='rh'>Checkout our Advisor page for assistance</p>
        </div>
        <div className='ri'>
          <h2>{recommendation.place}</h2>
          <p>{recommendation.location}</p>
          <p>{recommendation.description}</p>
          <button type="button" onClick={refreshPage} className='refresh'> <span>Retake Quiz</span> </button>
        </div>
      </div>
      <div className='rconr'>
        <img src={recommendation.imgSrc} alt={recommendation.place} className='rimg' />
      </div>


    </div>
  );
};

export default Recommendations;