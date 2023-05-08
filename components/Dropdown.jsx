import { useState } from 'react'
import { IoMdArrowDropdown } from 'react-icons/io'

export default function Dropdown({ menus, onClickMenu, label }) {
    const [ showMenus, setShowMenus ] = useState(false)

    const handleClickMenu = (menu) => {
        setShowMenus(!showMenus)
        onClickMenu(menu)
    }

    return (
        <div className='dropdown'>
        <label 
            tabIndex={0} 
            className='btn border-none rounded-none w-36 bg-white text-black hover:bg-transparent'
            onClick={() => setShowMenus(!showMenus)}
        >
            {label}
            <IoMdArrowDropdown className='ml-3' />
        </label>
        {showMenus ||
        <ul tabIndex={0} className='dropdown-content menu p-2 shadow bg-base-100 w-52'>
            {menus.map(menu => (
               <li 
                    key={menu}
                    className='p-2 hover:bg-slate-600 hover:text-white hover:rounded hover:cursor-pointer'
                    onClick={() => handleClickMenu(menu)}
                >
                    {menu}
               </li> 
            ))}
        </ul>}
    </div>
    )
}