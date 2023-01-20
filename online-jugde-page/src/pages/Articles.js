import { getQueriesForElement } from '@testing-library/react'
import {Link, Outlet, NavLink} from 'react-router-dom'

const Articles = () => {
    const activeStyle = {
        color: 'green',
        fontSize: 21,
    }

    return (
        <div>
            <Outlet/>
            <ul>
                <li>
                    <NavLink to={'/articles/1'} 
                    style={({isActive}) => (isActive ? activeStyle : undefined)}>
                        article 1</NavLink>
                </li>
                <li>
                    <NavLink to={'/articles/2'}>article 2</NavLink>
                </li>
                <li>
                    <NavLink to={'/articles/3'}>article 3</NavLink>
                </li>
            </ul>
            
        </div>
    )
}

export default Articles