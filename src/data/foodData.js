const menuData = {
  categories: [
    { id: 'burger', label: 'Burger' },
    { id: 'pizza', label: 'Pizza' },
    { id: 'sandwich', label: 'Sandviçler' },
    { id: 'salads', label: 'Salatalar' },
    { id: 'drinks', label: 'İçecekler' },
    { id: 'desserts', label: 'Tatlılar' },
  ],
  
  specialOffers: [
    {
      id: 'double-beef-burger',
      name: 'Double Beef Burger',
      description: 'İki kat sulu dana eti, özel sos, cheddar peyniri ve taze sebzeler',
      price: 250,
      discount: 25,
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=2899&auto=format&fit=crop',
      category: 'burger'
    }
  ],
  
  foodItems: [
    // Burger kategorisi (8 ürün)
    {
      id: 'chicken-burger',
      name: 'Chicken Burger',
      description: 'Izgara tavuk, taze yeşillikler ve özel sos',
      price: 165,
      image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      category: 'burger'
    },
    {
      id: 'beef-burger',
      name: 'Beef Burger',
      description: 'Sulu dana eti, karamelize soğan, cheddar peyniri',
      price: 195,
      image: 'https://images.unsplash.com/photo-1551782450-17144efb9c50?q=80&w=2069&auto=format&fit=crop',
      category: 'burger'
    },
    {
      id: 'veggie-burger',
      name: 'Veggie Burger',
      description: 'Sebze köftesi, avokado, roka ve özel vegan sos',
      price: 145,
      image: 'https://images.unsplash.com/photo-1661529515567-dcb300f41da5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      category: 'burger'
    },
    {
      id: 'fish-burger',
      name: 'Fish Burger',
      description: 'Izgara somon, turp, salatalık ve teriyaki sos',
      price: 175,
      image: 'https://images.unsplash.com/photo-1671522635273-f70d28b00493?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      category: 'burger'
    },
    {
      id: 'bacon-burger',
      name: 'Bacon Burger',
      description: 'Dana eti, crispy bacon, karamelize soğan ve BBQ sos',
      price: 205,
      image: 'https://images.unsplash.com/photo-1598182198871-d3f4ab4fd181?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      category: 'burger'
    },
    {
      id: 'mushroom-burger',
      name: 'Mushroom Burger',
      description: 'Portobello mantarı, swiss peyniri ve truffle mayo',
      price: 185,
      image: 'https://images.unsplash.com/photo-1683882330182-eb8f64d7231c?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      category: 'burger'
    },
    {
      id: 'spicy-burger',
      name: 'Spicy Burger',
      description: 'Acılı tavuk, jalapeño, pepper jack peyniri',
      price: 170,
      image: 'https://images.unsplash.com/photo-1606755962773-d324e0a13086?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      category: 'burger'
    },
    {
      id: 'classic-burger',
      name: 'Classic Burger',
      description: 'Geleneksel dana eti, marul, domates ve pickle',
      price: 155,
      image: 'https://images.unsplash.com/photo-1571091655789-405eb7a3a3a8?q=80&w=2072&auto=format&fit=crop',
      category: 'burger'
    },

    // Pizza kategorisi (8 ürün)
    {
      id: 'cheese-pizza',
      name: 'Cheese Pizza',
      description: 'Özel pizza sosu, mozzarella peyniri, fesleğen',
      price: 140,
      image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop',
      category: 'pizza'
    },
    {
      id: 'pepperoni-pizza',
      name: 'Pepperoni Pizza',
      description: 'Dilimlenmiş pepperoni, mozzarella, pizza sosu',
      price: 155,
      image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=2080&auto=format&fit=crop',
      category: 'pizza'
    },
    {
      id: 'margherita-pizza',
      name: 'Margherita Pizza',
      description: 'Taze mozzarella, domates, fesleğen yaprakları',
      price: 150,
      image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=2069&auto=format&fit=crop',
      category: 'pizza'
    },
    {
      id: 'mushroom-pizza',
      name: 'Mushroom Pizza',
      description: 'Taze mantarlar, mozzarella, truffle yağı',
      price: 165,
      image: 'https://images.unsplash.com/photo-1717883235373-ef10b2a745a3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      category: 'pizza'
    },
    {
      id: 'meat-lovers-pizza',
      name: 'Meat Lovers Pizza',
      description: 'Pepperoni, sosis, jambon, dana sucuk',
      price: 185,
      image: 'https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?q=80&w=2064&auto=format&fit=crop',
      category: 'pizza'
    },
    {
      id: 'veggie-pizza',
      name: 'Veggie Pizza',
      description: 'Biber, soğan, mantar, zeytin, domates',
      price: 160,
      image: 'https://images.unsplash.com/photo-1520201163981-8cc95007dd2a?q=80&w=2070&auto=format&fit=crop',
      category: 'pizza'
    },
    {
      id: 'bbq-chicken-pizza',
      name: 'BBQ Chicken Pizza',
      description: 'BBQ soslu tavuk, soğan, mozzarella',
      price: 175,
      image: 'https://images.unsplash.com/photo-1588315029754-2dd089d39a1a?q=80&w=2071&auto=format&fit=crop',
      category: 'pizza'
    },
    {
      id: 'hawaiian-pizza',
      name: 'Hawaiian Pizza',
      description: 'Jambon, ananas, mozzarella peyniri',
      price: 170,
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=962&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      category: 'pizza'
    },

    // Sandwich kategorisi (8 ürün)
    {
      id: 'club-sandwich',
      name: 'Club Sandwich',
      description: 'Izgara tavuk, pastırma, marul, domates ve mayonez',
      price: 135,
      image: 'https://images.unsplash.com/photo-1567234669003-dce7a7a88821?q=80&w=2070&auto=format&fit=crop',
      category: 'sandwich'
    },
    {
      id: 'tuna-sandwich',
      name: 'Tuna Sandwich',
      description: 'Ton balığı, mayonez, kornişon ve yeşil salata',
      price: 125,
      image: 'https://images.unsplash.com/photo-1558985250-27a406d64cb3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      category: 'sandwich'
    },
    {
      id: 'grilled-chicken-sandwich',
      name: 'Grilled Chicken Sandwich',
      description: 'Izgara tavuk göğsü, avokado, domates',
      price: 140,
      image: 'https://images.unsplash.com/photo-1700937244987-92488ab2ada5?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      category: 'sandwich'
    },
    {
      id: 'veggie-sandwich',
      name: 'Veggie Sandwich',
      description: 'Hummus, salatalık, domates, roka ve avokado',
      price: 110,
      image: 'https://images.unsplash.com/photo-1626353297837-2e24b3bb23d1?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      category: 'sandwich'
    },
    {
      id: 'blt-sandwich',
      name: 'BLT Sandwich',
      description: 'Bacon, marul, domates ve mayonez',
      price: 130,
      image: 'https://images.unsplash.com/photo-1705537238393-86337520ef8c?q=80&w=1065&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      category: 'sandwich'
    },
    {
      id: 'turkey-sandwich',
      name: 'Turkey Sandwich',
      description: 'Hindi dilimi, swiss peyniri, hardal ve kornişon',
      price: 145,
      image: 'https://images.unsplash.com/photo-1481070414801-51fd732d7184?q=80&w=1024&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      category: 'sandwich'
    },
    {
      id: 'steak-sandwich',
      name: 'Steak Sandwich',
      description: 'Izgara dana eti, sote mantar ve cheddar',
      price: 195,
      image: 'https://images.unsplash.com/photo-1667055251919-88fd6ff02e86?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      category: 'sandwich'
    },
    {
      id: 'caprese-sandwich',
      name: 'Caprese Sandwich',
      description: 'Mozzarella, domates, fesleğen ve balsamic',
      price: 120,
      image: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      category: 'sandwich'
    },

    // Salatalar kategorisi (8 ürün)
    {
      id: 'caesar-salad',
      name: 'Caesar Salatası',
      description: 'Iceberg marul, kruton, parmesan ve caesar sos',
      price: 120,
      image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      category: 'salads'
    },
    {
      id: 'turkish-salad',
      name: 'Mevsim Salatası',
      description: 'Domates, salatalık, zeytin, beyaz peynir ve zeytinyağı',
      price: 110,
      image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=1084&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      category: 'salads'
    },
    {
      id: 'chicken-salad',
      name: 'Tavuklu Salata',
      description: 'Izgara tavuk, karışık yeşillik, domates ve balzamik sos',
      price: 140,
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      category: 'salads'
    },
    {
      id: 'tuna-salad',
      name: 'Ton Balıklı Salata',
      description: 'Ton balığı, yeşil yapraklar, cherry domates ve limon sosu',
      price: 135,
      image: 'https://images.unsplash.com/photo-1515543237350-b3eea1ec8082?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      category: 'salads'
    },
    {
      id: 'avocado-salad',
      name: 'Avokadolu Salata',
      description: 'Taze avokado, roka, cherry domates ve limon vinaigrette',
      price: 125,
      image: 'https://images.unsplash.com/photo-1542814880-7e62cf14b7c8?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      category: 'salads'
    },
    {
      id: 'quinoa-salad',
      name: 'Kinoa Salatası',
      description: 'Kinoa, nohut, biber, salatalık ve tahini sos',
      price: 130,
      image: 'https://images.unsplash.com/photo-1505576399279-565b52d4ac71?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      category: 'salads'
    },
    {
      id: 'mediterranean-salad',
      name: 'Akdeniz Salatası',
      description: 'Karışık yeşillik, kapari, siyah zeytin ve feta peyniri',
      price: 115,
      image: 'https://plus.unsplash.com/premium_photo-1699881081705-755bbc84a1e1?q=80&w=1956&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      category: 'salads'
    },
    {
      id: 'arugula-salad',
      name: 'Roka Salatası',
      description: 'Taze roka, armut, ceviz ve parmesan peyniri',
      price: 120,
      image: 'https://images.unsplash.com/photo-1607532941433-304659e8198a?q=80&w=1978&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      category: 'salads'
    },

    // İçecekler kategorisi (8 ürün)
    {
      id: 'fresh-lemonade',
      name: 'Taze Limonata',
      description: 'Taze sıkılmış limon, nane ve buz ile',
      price: 85,
      image: 'https://images.unsplash.com/photo-1555949366-819808d99159?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      category: 'drinks'
    },
    {
      id: 'iced-coffee',
      name: 'Ice Latte',
      description: 'Soğuk demleme kahve, süt ve karamel şurubu',
      price: 100,
      image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=1974&auto=format&fit=crop',
      category: 'drinks'
    },
    {
      id: 'strawberry-smoothie',
      name: 'Çilek Smoothie',
      description: 'Taze çilek, yoğurt ve bal ile',
      price: 120,
      image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      category: 'drinks'
    },
    {
      id: 'mango-juice',
      name: 'Mango Suyu',
      description: 'Taze mango püresi, buz parçaları ile',
      price: 95,
      image: 'https://images.unsplash.com/photo-1525385133512-2f3bdd039054?q=80&w=985&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      category: 'drinks'
    },
    {
      id: 'cola',
      name: 'Kola',
      description: 'Klasik gazlı içecek, buzlu servis',
      price: 60,
      image: 'https://images.unsplash.com/photo-1656514335031-a4fefa23a16d?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      category: 'drinks'
    },
    {
      id: 'orange-juice',
      name: 'Portakal Suyu',
      description: 'Taze sıkılmış portakal suyu',
      price: 80,
      image: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?q=80&w=1974&auto=format&fit=crop',
      category: 'drinks'
    },
    {
      id: 'green-tea',
      name: 'Yeşil Çay',
      description: 'Organik yeşil çay, nane ile',
      price: 70,
      image: 'https://images.unsplash.com/photo-1606377695906-236fdfcef767?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      category: 'drinks'
    },
    {
      id: 'milkshake',
      name: 'Milkshake',
      description: 'Vanilya dondurması, süt ve çikolata parçaları',
      price: 110,
      image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=2070&auto=format&fit=crop',
      category: 'drinks'
    },

    // Tatlılar kategorisi (8 ürün)
    {
      id: 'chocolate-souffle',
      name: 'Çikolatalı Sufle',
      description: 'Sıcak çikolatalı sufle, vanilyalı dondurma ile',
      price: 150,
      image: 'https://images.unsplash.com/photo-1608157238315-eb4321f6d8a9?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      category: 'desserts'
    },
    {
      id: 'tiramisu',
      name: 'Tiramisu',
      description: 'Klasik İtalyan tatlısı, espresso ve mascarpone peyniri ile',
      price: 140,
      image: 'https://images.unsplash.com/photo-1714385905983-6f8e06fffae1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      category: 'desserts'
    },
    {
      id: 'cheesecake',
      name: 'Cheesecake',
      description: 'New York stili cheesecake, frambuaz sosu ile',
      price: 160,
      image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?q=80&w=1470&auto=format&fit=crop',
      category: 'desserts'
    },
    {
      id: 'chocolate-cake',
      name: 'Çikolatalı Pasta',
      description: 'Üç katlı çikolata keki, ganaj ile',
      price: 130,
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1989&auto=format&fit=crop',
      category: 'desserts'
    },
    {
      id: 'ice-cream-sundae',
      name: 'Dondurmalı Sundae',
      description: 'Vanilya dondurması, çikolata sos, çilek ve fındık',
      price: 95,
      image: 'https://images.unsplash.com/photo-1447195047884-0f014b0d9288?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      category: 'desserts'
    },
    {
      id: 'fruit-tart',
      name: 'Meyveli Tart',
      description: 'Tereyağlı hamur, pastane kreması ve taze meyveler',
      price: 125,
      image: 'https://images.unsplash.com/photo-1550617931-e17a7b70dce2?q=80&w=2070&auto=format&fit=crop',
      category: 'desserts'
    },
    {
      id: 'baklava',
      name: 'Baklava',
      description: 'Geleneksel Türk tatlısı, ceviz ve şerbet ile',
      price: 110,
      image: 'https://images.unsplash.com/photo-1617806501441-2a4a45c5316c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      category: 'desserts'
    },
    {
      id: 'creme-brulee',
      name: 'Crème Brûlée',
      description: 'Klasik Fransız tatlısı, karamelize şeker ile',
      price: 145,
      image: 'https://images.unsplash.com/photo-1676300184943-09b2a08319a3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      category: 'desserts'
    }
  ]
};

export default menuData; 