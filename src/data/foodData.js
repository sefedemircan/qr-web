const menuData = {
  categories: [
    { id: 'all', label: 'Tümü' },
    { id: 'burger', label: 'Burger' },
    { id: 'pizza', label: 'Pizza' },
    { id: 'sandwich', label: 'Sandwich' },
    { id: 'katsu', label: 'Katsu' },
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
    {
      id: 'spicy-chicken',
      name: 'Spicy Chicken',
      description: 'Acılı tavuk parçaları, özel baharat karışımı',
      price: 150,
      image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=2070&auto=format&fit=crop',
      category: 'katsu'
    },
    {
      id: 'chicken-burger',
      name: 'Chicken Burger',
      description: 'Izgara tavuk, taze yeşillikler ve özel sos',
      price: 165,
      image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      category: 'burger'
    },
    {
      id: 'pappardelle',
      name: 'Pappardelle',
      description: 'El yapımı geniş makarna, dana ragu sos ve parmesan',
      price: 100,
      image: 'https://images.unsplash.com/photo-1608219992759-8d74ed8d76eb?q=80&w=2070&auto=format&fit=crop',
      category: 'pasta'
    },
    {
      id: 'garlic-chicken',
      name: 'Garlic Chicken',
      description: 'Sarımsaklı tavuk parçaları, özel dip sos ile',
      price: 185,
      image: 'https://images.unsplash.com/photo-1562967914-608f82629710?q=80&w=2073&auto=format&fit=crop',
      category: 'katsu'
    },
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
      id: 'club-sandwich',
      name: 'Club Sandwich',
      description: 'Izgara tavuk, pastırma, marul, domates ve mayonez',
      price: 135,
      image: 'https://images.unsplash.com/photo-1567234669003-dce7a7a88821?q=80&w=2070&auto=format&fit=crop',
      category: 'sandwich'
    },
    {
      id: 'beef-katsu',
      name: 'Beef Katsu',
      description: 'Panelenmiş sığır eti, geleneksel katsu sosu ile',
      price: 225,
      image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=2013&auto=format&fit=crop',
      category: 'katsu'
    },
    // İçecekler kategorisi
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
      name: 'Buzlu Kahve',
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
    // Tatlılar kategorisi
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
    }
  ]
};

export default menuData; 