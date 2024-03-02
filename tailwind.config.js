/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: "poppins",
        Pacifico: "Pacifico",
        DancingScript : 'Dancing Script',
        Slabo: 'Slabo',
        Rajdhani: 'Rajdhani'
        
       },

       backgroundImage: {
        hero: 'url(/src/assets/water.webp)',
        secondHero: "url(/src/assets/cat.jpg)",
        cage: "url(/src/assets/cage.jpeg)",
        legacy: "url(/src/assets/legacy.jpg)"
       },

       screens:{
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },   colors:{
        amazon_blue: "#131921",
        amazon_light: "#232F3E",
        amazon_yellow: "#febd69",
        whiteText: "#ffffff",
        lightText: "#ccc",
        quantity_box: "#F0F2F2",
        FooterBottom: "#131A22",
        testimonial: '#1F1F21'
      },
    
    },
    
  },
  plugins: [],
}