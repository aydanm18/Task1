import React, { useContext } from 'react'
import { useGetAllQuery } from '../../services/eatApi'
import Button from '@mui/material/Button';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import { BasketContext } from '../../context/basketContext';
import './index.scss'
const Home = () => {
    const { basket, setBasket } = useContext(BasketContext)
    const { data: eats, error, isLoading } = useGetAllQuery()
    return (
        <>
            <div id='section'>
                <h1>Welcome To EatWell</h1>
                <p>Come and eat well with our delicious & healthy foods.</p>
                <button>Reservation</button>
            </div>
            <div id="section1">
                <div className="container">
                    <div className="card-text" style={{ textAlign: 'center' }}>
                        <h5 style={{ marginBottom: '15px' }} >OUR OFFERS</h5>
                        <h1 style={{ marginBottom: '15px' }} >Our Offer This Summer</h1>
                        <p>Far far away, behind the word mountains, </p>
                        <p style={{ marginBottom: '15px' }}>far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    </div>

                    <div className="row">
                        {eats && eats.data.map((eat) => {
                            return <div className="col-4 col-md-6 col-sm-12 col-xs-12 card" key={eat._id}>
                                <img src={eat.image} alt={eat.title} style={{ width: '100%' }} />
                                <h3>{eat.price}</h3>
                         <p>{eat.title}</p>
                                <Button variant="contained" style={{ backgroundColor: 'orange', color: 'white',marginRight:'10px' }}>
                                    <Link to={`eats/${eat._id}`} style={{color:'white'}}
                                    >
                                        Detail</Link>
                                </Button>
                                <Button onClick={() => {
                                    const dublicatebasket = basket.find((x) => x._id == eat._id)
                                    if (dublicatebasket) {
                                        dublicatebasket.count += 1;
                                        setBasket([...basket])
                                        localStorage.setItem('basket', JSON.stringify([...basket]))
                                    } else {
                                        const newbasketitem = { ...eat };
                                        newbasketitem.count = 1;
                                        setBasket([...basket, newbasketitem]);
                                        localStorage.setItem('basket', JSON.stringify([...basket, newbasketitem]))

                                    }
                                }} variant="contained" style={{ backgroundColor: 'red'  }}>
                                    <ShoppingBasketIcon />
                                </Button>
                            </div>
                        })}
                    </div>
                </div>
            </div>
            <div className="section2">
                <div className="container">
                    <div className="row">
                        <div className="col-6 col-md-6 col-sm-12 col-xs-12 title">
                            <h4>OUR STORY</h4>
                            <h1>Welcome</h1>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p><br />
                            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                            <button>Learn More About Us</button>
                        </div>
                        <div className="col-6 col-md-6 col-sm-12 col-xs-12">
                            <img src="https://preview.colorlib.com/theme/eatwell/images/about_img_1.jpg" alt="" />
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Home