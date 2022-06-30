import React from 'react'
import GridItems from './GridItems'

const MenuGrid = ({menuArray, folder}) => {

  return (
    <div className='menuGrid text-left grid'>
      {menuArray?.map((item, i) => <GridItems key={i} {...item} folder={folder} />)}
    </div>
  )
}

export default MenuGrid