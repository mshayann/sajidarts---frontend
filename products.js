// products.js
const products = [
  {
    id: 1,
    name: "Wooden Islamic Calligraphy",
    category: "Wooden Wall Decor Scenery",
    image:
      "img/products/Wooden Wall decor Scenery/wooden islamic caligraphy decor ..jpg",
    mediumPrice: 1100,
    mediumDimension: "12x48 inches",
  },
  {
    id: 2,
    name: "Abstract Stylish Wave Business",
    category: "Workplace Decor",
    image: "img/products/workplace decor/abstract-stylish-wave-business-c3.jpg",
    mediumPrice: 799,
    mediumDimension: "48x12 inches",
  },
  {
    id: 3,
    name: "Islamic Calligraphy Frame Decor",
    category: "Arabic Calligraphy",
    image:
      "img/products/arabic caligraphy frame/islamic cali graphy frame decor..jpg",
    mediumPrice: 4000,
    mediumDiscounted: 0.8 * 4000,
    largePrice: 10000,
    largeDiscounted: 0.8 * 10000,
    mediumDimension: "12x36 inches",
    largeDimension: "24x48 inches",
  },
  {
    id: 4,
    name: "Islamic Calligaphy Ayat Al Kursi Decor",
    category: "Gold Acrylic Decor",
    image:
      "img/products/Gold acrylic decor/islamic caligaphy aytal kursi decor.jpg",
    mediumPrice: 4000,

    largePrice: 7500,

    mediumDimension: "18x24 inches",
    largeDimension: "24x36 inches",
  },
  {
    id: 5,
    name: "Islamic ALLAH-HU- AKABR DECOR",
    category: "Chrome Acrylic Decor",
    image: "img/products/chrome  Acrylic decor/islamic caligraphy decor.JPG",
    mediumPrice: 2300,
    largePrice: 4000,
    mediumDimension: "18x18 inches",
    largeDimension: "24x24 inches",
  },
  {
    id: 6,
    name: "Couple Names Neon Sign Decor",
    category: "Customized Neon Signs",
    image:
      "img/products/Customized Neon sign/couple names neon sign decor..jpg",
    mediumPrice: 2000 + "/sq. feet"
  },
  {
    id: 7,
    name: "Acrylic And Wooden Wall Clock",
    category: "Acrylic Wall Clocks",
    image: "img/products/acrylic wall clock/acralic and wooden wall clock.jpg",
    mediumPrice: 1200,
    mediumDiscounted: 0.8 * 1200,
    largePrice: 1600,
    largeDiscounted: 0.8 * 1600,
    mediumDimension: "18x18 inches",
    largeDimension: "24x24 inches",
  },
  {
    id: 8,
    name: "Sets Frames Islamic Calligraphy",
    category: "Arabic Calligraphy",
    image:
      "img/products/arabic caligraphy frame/sets frames islamic caligrapgy.jpg",
    mediumPrice: 3500,
    mediumDiscounted: 0.8 * 3500,
  },
  {
    id: 9,
    name: "Wooden Islamic Calligraphy ",
    category: "Wooden Wall Decor Scenery",
    image:
      "img/products/Wooden Wall decor Scenery/wooden islamic caligraphy decor.jpg",
    mediumPrice: 1800,
    mediumDimension: "24x24 inches",
  },
  {
    id: 10,
    name: "Abstract Stylish Wave Business",
    category: "Workplace Decor",
    image: "img/products/workplace decor/abstract-stylish-wave-business.jpg",
    mediumPrice: 1600,
    mediumDimension: "48x24 inches",
  },
  {
    id: 11,
    name: "Islamic Calligraphy Frame Decor",
    category: "Arabic Calligraphy",
    image:
      "img/products/arabic caligraphy frame/islamic caligaphy frames decor.jpg",
    mediumPrice: 3000,
    mediumDiscounted: 0.8 * 3000,
    mediumDimension: "18x24 inches",
  },
  {
    id: 12,
    name: "Islamic Calligaphy Black & Golden Acrylic Decor",
    category: "Gold Acrylic Decor",
    image:
      "img/products/Gold acrylic decor/islamic caligaphy black & golden acrylic decor..JPG",
    mediumPrice: 2800,
    mediumDimension: "12x24 inches",
    
  },
  {
    id: 13,
    name: "Islamic Ma Sha Allah Decor",
    category: "Chrome Acrylic Decor",
    image:
      "img/products/chrome  Acrylic decor/islamic caligraphy mahsallah  decor.JPG",
    mediumPrice: 3000,
    largePrice: 5300,
    mediumDimension: "18x18 inches",
    largeDimension: "24x24 inches",
  },
  {
    id: 14,
    name: "Crown Neon Sign Decor",
    category: "Customized Neon Signs",
    image: "img/products/Customized Neon sign/crown neon sign decor.jpg",
    mediumPrice: 2000 + "/sq. feet"
  },
  {
    id: 15,
    name: "Acrylic Wall Clock Decor",
    category: "Acrylic Wall Clocks",
    image: "img/products/acrylic wall clock/acrylic wall  clock decor.jpg",
    mediumPrice: 1500,
    mediumDiscounted: 0.8 * 1500,
    largePrice: 2500,
    largeDiscounted: 0.8 * 2500,
    mediumDimension: "18x18 inches",
    largeDimension: "24x24 inches",
  },
  {
    id: 16,
    name: "Madinah Frame Home Decor",
    category: "Arabic Calligraphy",
    image: "img/products/arabic caligraphy frame/madina fram home decor.jpg",
    mediumPrice: 2500,
    mediumDiscounted: 0.8 * 2500,

    mediumDimension: "18x24 inches",
  },
  {
    id: 17,
    name: "Wooden Islamic Calligraphy",
    category: "Wooden Wall Decor Scenery",
    image:
      "img/products/Wooden Wall decor Scenery/islamic caligarphy wooden decor.jpg",
    mediumPrice: 600,

    largePrice: 1100,

    mediumDimension: "18x18 inches",
    largeDimension: "24x24 inches",
  },
  {
    id: 18,
    name: "Wooden Islamic Calligraphy",
    category: "Wooden Wall Decor Scenery",
    image:
      "img/products/Wooden Wall decor Scenery/islamic caligraphy  wooden decor.jpeg",
    mediumPrice: 2200,
    mediumDimension: "24x48 inches",
  },
  {
    id: 19,
    name: "Ayat Al Kursi Wooden Decor",
    category: "Wooden Wall Decor Scenery",
    image:
      "img/products/Wooden Wall decor Scenery/islamic caligraphy aytal kursi wooden decor.jpg",
    mediumPrice: 600,

    largePrice: 1100,

    mediumDimension: "18x18 inches",
    largeDimension: "24x24 inches",
  },
  {
    id: 20,
    name: "Wooden Islamic Calligraphy",
    category: "Wooden Wall Decor Scenery",
    image:
      "img/products/Wooden Wall decor Scenery/Islamic-Calligraphy wooden decor.jpg",
    mediumPrice: 1100,
    mediumDimension: "12x48 inches",
  },
  {
    id: 21,
    name: "Wooden Tree Decor",
    category: "Wooden Wall Decor Scenery",
    image:
      "img/products/Wooden Wall decor Scenery/wooden tree decor Scenery.jpg",
    mediumPrice: 1100,

    mediumDimension: "18x30 inches",
  },
  {
    id: 22,
    name: "Wooden Tree Scenery Decor",
    category: "Wooden Wall Decor Scenery",
    image:
      "img/products/Wooden Wall decor Scenery/wooden tree Scenery decor.jpg",
    mediumPrice: 1000,
    mediumDimension: "24x30 inches",
  },
  {
    id: 23,
    name: "Wooden Wall Flower Decor",
    category: "Wooden Wall Decor Scenery",
    image:
      "img/products/Wooden Wall decor Scenery/wooden wall flower decor.jpg",
    mediumPrice: 1100,
    mediumDimension: "24x24 inches",
  },
  {
    id: 24,
    name: "Wooden Wall Horse Decor",
    category: "Wooden Wall Decor Scenery",
    image:
      "img/products/Wooden Wall decor Scenery/wooden wall horse Scenery.jpg",
    mediumPrice: 1300,
    mediumDimension: "24x30 inches",
  },
  {
    id: 25,
    name: "Wooden Wall Islamic Calligraphy Decor",
    category: "Wooden Wall Decor Scenery",
    image:
      "img/products/Wooden Wall decor Scenery/wooden wall islamic caligraphy decor.jpg",
    mediumPrice: 1500,
    mediumDimension: "24x48 inches",
  },
  {
    id: 26,
    name: "Wooden Islamic Calligraphy ",
    category: "Wooden Wall Decor Scenery",
    image: "img/products/Wooden Wall decor Scenery/wooden wall tree decor.jpg",
    mediumPrice: 1500,
    mediumDimension: "24x48 inches",
  },

  {
    id: 27,
    name: "Innovative Wall Decor ",
    category: "Workplace Decor",
    image: "img/products/workplace decor/create innovate wall decor.jpg",
    mediumPrice: 1600,
    mediumDimension: "24x48 inches",
  },
  {
    id: 28,
    name: "Idea Wall Art",
    category: "Workplace Decor",
    image: "img/products/workplace decor/IDEA WALL ART.jpg",
    mediumPrice: 1600,
    mediumDimension: "48x24 inches",
  },

  {
    id: 29,
    name: "Office Wall Decor",
    category: "Workplace Decor",
    image: "img/products/workplace decor/office wall decor.jpg",
    mediumPrice: 1600,
    largePrice: 4000,
    mediumDimension: "24x48 inches",
    largeDimension: "48x60 inches",
  },

  {
    id: 30,
    name: "Team Work Wall Decor ",
    category: "Workplace Decor",
    image: "img/products/workplace decor/team work wall decor.jpg",
    mediumPrice: 1600,
    largePrice: 4000,
    mediumDimension: "24x48 inches",
    largeDimension: "48x60 inches",
  },
  {
    id: 31,
    name: "Think Digital Printed Wall Decor",
    category: "Workplace Decor",
    image: "img/products/workplace decor/think digital printed wall decor.jpg",
    mediumPrice: 4000,
    mediumDimension: "110x96 inches",
  },

  {
    id: 32,
    name: "Think Outside The Box Wall Decor",
    category: "Workplace Decor",
    image: "img/products/workplace decor/ThinkOutsideTheBoxWallStickerFor.jpg",
    mediumPrice: 2400,
    mediumDimension: "48x36 inches",
  },
  {
    id: 33,
    name: "Think Positive Wall Decor",
    category: "Workplace Decor",
    image: "img/products/workplace decor/think positive wall decor.jpg",
    mediumPrice: 1600,
    largePrice: 4000,
    mediumDimension: "24x48 inches",
    largeDimension: "48x60 inches",
  },
  {
    id: 34,
    name: "Call Center Wall Decor",
    category: "Workplace Decor",
    image: "img/products/workplace decor/call center wall decor cropped.png",
    mediumPrice: 799,
    largePrice: 3200,
    mediumDimension: "24x24 inches",
    largeDimension: "48x48 inches",
  },
  {
    id: 35,
    name: "Innovative Wall Art",
    category: "Workplace Decor",
    image: "img/products/workplace decor/innovations wall a rt.jpg",
    mediumPrice: 2000,
    mediumDimension: "30x48 inches",
  },
  {
    id: 36,
    name: "Office Wall Striker Decor",
    category: "Workplace Decor",
    image: "img/products/workplace decor/office wall stiker decor.jpg",
    mediumPrice: 1600,
    largePrice: 4000,
    mediumDimension: "24x48 inches",
    largeDimension: "48x60 inches",
  },

  {
    id: 37,
    name: "Islamic Calligraphy Frame",
    category: "Arabic Calligraphy",
    image: "img/products/arabic caligraphy frame/islamic caligraphy frames.jpg",
    mediumPrice: 3000,
    mediumDiscounted: 0.8 * 3000,
    mediumDimension: "18x24 inches",
  },
  {
    id: 38,
    name: "Islamic Calligraphy Home Decor Frame",
    category: "Arabic Calligraphy",
    image:
      "img/products/arabic caligraphy frame/islamic caligraphy home decor fram.jpg",
    mediumPrice: 4000,
    mediumDiscounted: 0.8 * 4000,
    largePrice: 6000,
    largeDiscounted: 0.8 * 6000,
    mediumDimension: "12x36 inches",
    largeDimension: "24x36 inches",
  },
  {
    id: 39,
    name: "Islamic Calligraphy Home Decor Frame",
    category: "Arabic Calligraphy",
    image:
      "img/products/arabic caligraphy frame/islamic caligraphy home decor frames.jpg",
    mediumPrice: 4000,
    mediumDiscounted: 0.8 * 4000,
    largePrice: 10000,
    largeDiscounted: 0.8 * 10000,
    mediumDimension: "12x36 inches",
    largeDimension: "24x48 inches",
  },
  {
    id: 40,
    name: "Khana e Kaabah Door Frame Decor",
    category: "Arabic Calligraphy",
    image:
      "img/products/arabic caligraphy frame/khana kaba door frame decor.jpg",
    mediumPrice: 10000,
    mediumDiscounted: 0.8 * 10000,

    mediumDimension: "24x48 inches",
  },
  {
    id: 41,
    name: "Khana e Kaabah Door Frame Home Decor 3 Frames",
    category: "Arabic Calligraphy",
    image:
      "img/products/arabic caligraphy frame/khana kaba frame home decor.JPG",
    mediumPrice: 2500,
    mediumDiscounted: 0.8 * 2500,

    mediumDimension: "18x24 inches",
  },
  {
    id: 42,
    name: "MashAllah Home Decor Frame",
    category: "Arabic Calligraphy",
    image: "img/products/arabic caligraphy frame/mahallah home decor fram.jpg",
    mediumPrice: 2500,
    mediumDiscounted: 0.8 * 2500,

    mediumDimension: "24x48 inches",
  },
  {
    id: 43,
    name: "Set Islamic Calligraphy Frames Decor",
    category: "Arabic Calligraphy",
    image:
      "img/products/arabic caligraphy frame/set islamic caligraphy frames decor.jpg",
    mediumPrice: 2500,
    mediumDiscounted: 0.8 * 2500,

    mediumDimension: "18x24 inches",
  },
  {
    id: 44,
    name: "Sets Islamic Calligraphy Home Decor",
    category: "Arabic Calligraphy",
    image:
      "img/products/arabic caligraphy frame/sets islamic caligraphy home decor.jpg",
    mediumPrice: 6000,
    mediumDiscounted: 0.8 * 6000,
    mediumDimension: "24x48 inches",
  },
  {
    id: 45,
    name: "Islamic Calligaphy Allah Name Decor",
    category: "Gold Acrylic Decor",
    image: "img/products/Gold acrylic decor/14.JPG",
    mediumPrice: 6000,
    mediumDimension: "24x48 inches"
  },
  {
    id: 46,
    name: "Islamic Calligaphy Silver & Golden Acrylic Decor",
    category: "Gold Acrylic Decor",
    image:
      "img/products/Gold acrylic decor/islamic caligaphy silver & golden acrylic decor.jpg",
    mediumPrice: 2300,

    largePrice: 4000,

    mediumDimension: "18x18 inches",
    largeDimension: "24x24 inches",
  },
  {
    id: 47,
    name: "Islamic Calligaphy Ayat Al Kursi Decor",
    category: "Gold Acrylic Decor",
    image:
      "img/products/Gold acrylic decor/islamic caligraphy acrylic aytal kursi decor.png",
    mediumPrice: 3000,
    largePrice: 5000,
    mediumDimension: "18x18 inches",
    largeDimension: "24x24 inches",
  },

  {
    id: 48,
    name: "Set Of Islamic ALLAH and MUHAMMAD (SAW) Decor Names",
    category: "Gold Acrylic Decor",
    image:
      "img/products/Gold acrylic decor/Set Of Islamic ALLAH and MUHAMMAD (SAW) DECOR Names.jpg",
    mediumPrice: 1200,
    mediumDimension: "12x12 inches",
    
  },
  {
    id: 49,
    name: "Set Of Islamic ALLAH and MUHAMMAD (SAW)",
    category: "Gold Acrylic Decor",
    image:
      "img/products/Gold acrylic decor/Set Of Islamic ALLAH and MUHAMMAD (SAW).JPG",
    mediumPrice: 6000,
    mediumDimension: "48x18 inches",
    
  },
  {
    id: 50,
    name: "Set Of Islamic ALLAH-HU-AKABR Decor",
    category: "Gold Acrylic Decor",
    image:
      "img/products/Gold acrylic decor/Set Of Islamic ALLAH-HU- AKABR DECOR.webp",
    mediumPrice: 1500,
    mediumDimension: "18x24 inches",
    
  },
  {
    id: 51,
    name: "Golden Acrylic Decor (2 Pieces)",
    category: "Gold Acrylic Decor",
    image: "img/products/Gold acrylic decor/tree  ggolden acralic decor.jpg",
    mediumPrice: 3000,
    mediumDimension: "18x18 inches",

  },
  {
    id: 52,
    name: "Gold Acrylic Decor/Premium Acrylic Kalma e Tayyaba Decor",
    category: "Gold Acrylic Decor",
    image:
      "img/products/Gold acrylic decor/Premium Acrylic Kalma Tayyaba Decor.jpg",
    mediumPrice: 3000,
    mediumDimension: "12x48 inches",
  },
  {
    id: 53,
    name: "Islamic Calligaphy Bismillah Decor",
    category: "Gold Acrylic Decor",
    image: "img/products/Gold acrylic decor/bismillah_cropped.png",
    mediumPrice: 2800,
    mediumDimension: "12x24 inches",
  },
  {
    id: 54,
    name: "Kalma e Tayyaba Decor",
    category: "Chrome Acrylic Decor",
    image:
      "img/products/chrome  Acrylic decor/islamic caligraphy  kalma-e-tayyaba  decor - cropped.JPG",
    mediumPrice: 5000,
    largePrice: 8000,
    mediumDimension: "18x30 inches",
    largeDimension: "24x48 inches",
  },
    {
    id: 55,
    name: "Couple Names Neon Sign Decor",
    category: "Customized Neon Signs",
    image: "img/products/Customized Neon sign/couple names neon sign decor.jpg",
    mediumPrice: 2000 + "/sq. feet"
  },
  {
    id: 56,
    name: "Couple Names Neon Sign Decor",
    category: "Customized Neon Signs",
    image: "img/products/Customized Neon sign/couple names decor.jpg",
    mediumPrice: 2000 + "/sq. feet"
  },


  {
    id: 57,
    name: "Donuts Neon Sign Decor",
    category: "Customized Neon Signs",
    image: "img/products/Customized Neon sign/donuts-neon-sign decor.jpg",
    mediumPrice: 2000 + "/sq. feet"
  },
  {
    id: 58,
    name: "Better Together Neon Sign Decor",
    category: "Customized Neon Signs",
    image:
      "img/products/Customized Neon sign/neon sign better together decor.jpg",
    mediumPrice: 2000 + "/sq. feet"
  },
  {
    id: 59,
    name: "Couple Names Neon Sign Decor",
    category: "Customized Neon Signs",
    image: "img/products/Customized Neon sign/neon sign decor (2).jpg",
    mediumPrice: 2000 + "/sq. feet"
  },

    {
    id: 60,
    name: "Customized Neon Sign",
    category: "Customized Neon Signs",
    image: "img/products/Customized Neon sign/customize neon sign.jpg",
    mediumPrice: 2000 + "/sq. feet"
  },
  {
    id: 61,
    name: "Couple Names Neon Sign Decor",
    category: "Customized Neon Signs",
    image: "img/products/Customized Neon sign/neon sign decor.jpg",
    mediumPrice: 2000 + "/sq. feet"
  },


    {
    id: 62,
    name: "Date Fix Neon Sign Decor",
    category: "Customized Neon Signs",
    image: "img/products/Customized Neon sign/date fix neon sign decor.jpg",
    mediumPrice: 2000 + "/sq. feet"
  },

    {
    id: 63,
    name: "Couple Names Neon Sign Decor",
    category: "Customized Neon Signs",
    image: "img/products/Customized Neon sign/neon sign.jpg",
    mediumPrice: 2000 + "/sq. feet"
  },
  {
    id: 64,
    name: "Acrylic Wall Clock Golden & Black",
    category: "Acrylic Wall Clocks",
    image:
      "img/products/acrylic wall clock/acralic wall clock  golden & black.jpg",
    mediumPrice: 1700,
    mediumDiscounted: 0.8 * 1700,
    largePrice: 3000,
    largeDiscounted: 0.8 * 3000,
    mediumDimension: "18x18 inches",
    largeDimension: "24x24 inches",
  },
  {
    id: 65,
    name: "Acrylic Wall Clock",
    category: "Acrylic Wall Clocks",
    image: "img/products/acrylic wall clock/acralic wall clocks.jpg",
    mediumPrice: 1500,
    mediumDiscounted: 0.8 * 1500,
    largePrice: 2500,
    largeDiscounted: 0.8 * 2500,
    mediumDimension: "18x18 inches",
    largeDimension: "24x24 inches",
  },
  {
    id: 66,
    name: "Acrylic Wall Clock",
    category: "Acrylic Wall Clocks",
    image: "img/products/acrylic wall clock/acrlic wall clock.jpg",
    mediumPrice: 1500,
    mediumDiscounted: 0.8 * 1500,
    largePrice: 2600,
    largeDiscounted: 0.8 * 2600,
    mediumDimension: "18x18 inches",
    largeDimension: "24x24 inches",
  },
  {
    id: 67,
    name: "Acrylic Wall Clock Decor",
    category: "Acrylic Wall Clocks",
    image: "img/products/acrylic wall clock/acrylic clock decor.jpg",
    mediumPrice: 1500,
    mediumDiscounted: 0.8 * 1500,
    largePrice: 2500,
    largeDiscounted: 0.8 * 2500,
    mediumDimension: "18x18 inches",
    largeDimension: "24x24 inches",
  },
  {
    id: 68,
    name: "Acrylic Wall Clock Decor",
    category: "Acrylic Wall Clocks",
    image: "img/products/acrylic wall clock/acrylic wall clock decor.jpg",
    mediumPrice: 1500,
    mediumDiscounted: 0.8 * 1500,
    largePrice: 2500,
    largeDiscounted: 0.8 * 2500,
    mediumDimension: "18x18 inches",
    largeDimension: "24x24 inches",
  },
  {
    id: 69,
    name: "Acrylic Wall Clock",
    category: "Acrylic Wall Clocks",
    image: "img/products/acrylic wall clock/acrylic wall clock...jpg",
    mediumPrice: 1500,
    mediumDiscounted: 0.8 * 1500,
    largePrice: 2500,
    largeDiscounted: 0.8 * 2500,
    mediumDimension: "18x18 inches",
    largeDimension: "24x24 inches",
  },
  {
    id: 70,
    name: "Acrylic Wall Clock",
    category: "Acrylic Wall Clocks",
    image: "img/products/acrylic wall clock/acrylic wall clock.jpg",
    mediumPrice: 1300,
    mediumDiscounted: 0.8 * 1300,
    largePrice: 2200,
    largeDiscounted: 0.8 * 2200,
    mediumDimension: "18x18 inches",
    largeDimension: "24x24 inches",
  },
  {
    id: 71,
    name: "Acrylic And Wooden Wall Clock",
    category: "Acrylic Wall Clocks",
    image:
      "img/products/acrylic wall clock/islamic caligraphy wooden decor.jpg",
    mediumPrice: 1000,
    mediumDiscounted: 0.8 * 1000,
    largePrice: 1200,
    largeDiscounted: 0.8 * 1200,
    mediumDimension: "12x18 inches",
    largeDimension: "15x24 inches",
  },
  {
    id: 72,
    name: "Modern Acrylic Wall Clock",
    category: "Acrylic Wall Clocks",
    image: "img/products/acrylic wall clock/modran acrlic wall clock.jpg",
    mediumPrice: 1500,
    mediumDiscounted: 0.8 * 1500,
    largePrice: 2600,
    largeDiscounted: 0.8 * 2600,
    mediumDimension: "18x18 inches",
    largeDimension: "24x24 inches",
  },
  {
    id: 73,
    name: "Wooden Wall Clock Decor",
    category: "Acrylic Wall Clocks",
    image: "img/products/acrylic wall clock/wooden wall clock decor.png",
    mediumPrice: 1200,
    mediumDiscounted: 0.8 * 1200,
    largePrice: 1500,
    largeDiscounted: 0.8 * 1500,
    mediumDimension: "18x18 inches",
    largeDimension: "24x24 inches",
  },
  {
    id: 74,
    name: "Wooden Wall Clock",
    category: "Acrylic Wall Clocks",
    image: "img/products/acrylic wall clock/wooden wall clock.jpg",
    mediumPrice: 1300,
    mediumDiscounted: 0.8 * 1300,
    largePrice: 2200,
    largeDiscounted: 0.8 * 2200,
    mediumDimension: "18x18 inches",
    largeDimension: "24x24 inches",
  },
  {
    id: 75,
    name: "Brochure Printing 8X3 MAX QTY 1000 128GM ART Paper Double Side Printing",
    category: "Offset Printing Works",
    image: "img/products/offset printing work/brochure printing.jpg",
    mediumPrice: 6000,
    
  },
  {
    id: 76,
    name: "Business Card Printing MAX QTY 1000 SINGLE SIDE 300 GM CARD OR DOUBLE SIDE 300GM CARD PRINTING ",
    category: "Offset Printing Works",
    image: "img/products/offset printing work/buiness card printing (2).jpg",
    mediumPrice: 2000,
    largePrice: 3500,
    mediumDimension: "Single Side",
    largeDimension: "Double Side",
    
  },

  {
    id: 77,
    name: "Pamphlet Printing SIZE 8X5 MAX QTY 1000 128GM ART PAPER DOUBLE SIDE",
    category: "Offset Printing Works",
    image: "img/products/offset printing work/pamphlet printing.jpg",
    mediumPrice: 6500,
    
    
  },
  {
    id: 78,
    name: "Real-Estate-Brochure printings SIZE A4 MAX QTY 1000 120GM ART PAPER DOUBLE SIDE",
    category: "Offset Printing Works",
    image:
      "img/products/offset printing work/Real-Estate-Brochure printings.jpg",
    mediumPrice: 8000
  },

  {
    id: 79,
    name: "Visiting- Card- Printing MAX QTY 1000 600GM CARD DOUBLE SIDE WITH UV PRINTING",
    category: "Offset Printing Works",
    image: "img/products/offset printing work/visiting-card- printing.jpg",
    mediumPrice: 4000
  },
  {
    id: 80,
    name: "Buiness Card Printing MAX QTY 1000 SINGLE SIDE 300 GM CARD OR DOUBLE SIDE 300GM CARD PRINTING",
    category: "Offset Printing Works",
    image: "img/products/offset printing work/buiness card printing.jpg",
    mediumPrice: 2000,
    largePrice: 3500,
    mediumDimension: "Single Side",
    largeDimension: "Double Side",
  },
  {
    id: 81,
    name: "Restaurant Menus Printing SIZE 8X5 MAX QTY 1000 128GM ART PAPER DOUBLE SIDE PARIING",
    category: "Offset Printing Works",
    image: "img/products/offset printing work/resturent menus printing.jpg",
    mediumPrice: 6500
  },
  {
    id: 82,
    name: "Golden Steel Letters",
    category: "Steel Letter Signs",
    image: "img/products/steel letter sign/golden steel letter had.jpg",
    mediumPrice: 2500 + "/sq. feet"
  },
  {
    id: 83,
    name: "Silver Steel Letters",
    category: "Steel Letter Signs",
    image: "img/products/steel letter sign/ss-letters-01.jpg",
    mediumPrice: 2500 + "/sq. feet"
  },
  {
    id: 84,
    name: "Steel Letters Sign Decor",
    category: "Steel Letter Signs",
    image: "img/products/steel letter sign/steel latters sign decor.jpg",
    mediumPrice: 2500 + "/sq. feet"
  },
  {
    id: 85,
    name: "Steel Letters Head Sign",
    category: "Steel Letter Signs",
    image: "img/products/steel letter sign/steel letters had sign.jpg",
    mediumPrice: 2500 + "/sq. feet"
  },
  {
    id: 86,
    name: "Steel Letters",
    category: "Steel Letter Signs",
    image: "img/products/steel letter sign/steels latters.jpg",
    mediumPrice: 2500 + "/sq. feet"
  },

  //add  products here
];
