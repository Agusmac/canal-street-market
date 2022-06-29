import React from 'react'
import GridItems from './GridItems'


const menuArray = [
  { name: 'Azumma', description: 'Korean Meets Mexican', img: 'Azumma', w: 993, h:739 },
  { name: 'Boba Guys', description: 'Next Level Boba Milk Tea', img: 'Boba', w: 221, h:497 },
  { name: 'Domi', description: 'Artisanal Bakery', img: 'Domi', w: 650, h:640 },
  { name: 'Izakaya Samurice', description: 'Japanese Kitchen', img: 'Bento', w: 500, h:410 },
  { name: "Joe's Steam Rice Roll", description: 'Cantonese Steamed Rice Rolls', img: 'rice-roll', w: 500, h:472 },
  { name: 'Kuro-Obi', description: 'Ramen by Ippudo', img: 'ramen', w: 500, h:494 },
  { name: 'Mission Ceviche', description: 'New Peruvian Cuisine', img: 'mission', w: 1000, h:1000 },
  { name: 'Office Coffee', description: 'Coffee, Pastries & Smoothies', img: 'Coffee', w: 1000, h:961 },
  { name: 'Suki', description: 'Michelin Rated Katsu', img: 'Suki', w: 1326, h:992 },
  { name: 'fresh&co', description: 'Chef Inspired Salads', img: 'fresh', w: 945, h:992 },
  { name: 'ilili BOX', description: 'Inspired Mediterranean', img: 'wrap', w: 994, h:637 },

]


const MenuGrid = () => {



  return (


    <div className='menuGrid text-left grid'>
      {menuArray?.map((item, i) => <GridItems key={i} {...item} />)}
    </div>
  )
}

export default MenuGrid