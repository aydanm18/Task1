import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { BasketContext } from '../../context/basketContext'
import './index.scss'

const Header = () => {
    const { basket } = useContext(BasketContext)
    return (
        <div className='Header'>
            <div className="container">
                <div className="header" >
                    <div className='header-up'>
                        <h2>EATWELL</h2>
                    </div>
                    <div className='header-buttom'>
                        <ul>
                            <li>
                                <Link className='links' to={'/'}>Home</Link>
                            </li>
                            <li>
                                <Link className='links' to={'add-page'}>AddPAGE</Link>
                            </li>
                            <li>
                                <Link className='links' to={'basket'}>Basket <sup>{basket.length}</sup></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header