import React, { useContext } from 'react'
import { BasketContext } from '../../context/basketContext'
import Button from '@mui/material/Button';

const Basket = () => {
    const { basket, setBasket } = useContext(BasketContext)
    return (
        <div className='container' style={{display:'flex',justifyContent:'center',flexDirection:'column',border:'1px solid red',marginTop:'200px',paddingTop:'30px'}}>
            <h1 style={{textAlign:'center'}}>BasketPage</h1>
            <ul style={{marginTop:'50px'}}>
                {basket && basket.map((basketitem) => {
                    return <li style={{marginTop:'30px'}} key={basketitem._id}>
                        <span>{basketitem.title} || {basketitem.count}</span>
                        <Button onClick={() => {
                            const currentBasket = basket.find((x) => x._id == basketitem._id)
                            currentBasket.count += 1;
                            setBasket([...basket])
                            localStorage.setItem('basket', JSON.stringify([...basket]))

                        }} variant="outlined" color="error">
                            +
                        </Button>
                        <Button onClick={() => {
                            const currentBasket = basket.find((x) => x._id == basketitem._id)
                            if (currentBasket.count > 1) {
                                currentBasket.count -= 1;
                                setBasket([...basket])
                                localStorage.setItem('basket', JSON.stringify([...basket]))

                            } else {
                                const updateBasket = basket.filter((x) => x._id != basketitem._id)
                                setBasket(updateBasket);
                                localStorage.setItem('basket', JSON.stringify(updateBasket))
                            }
                        }} variant="outlined" color="error">
                            -
                        </Button>
                        <Button onClick={() => {
                            const updateBasket = basket.filter((x) => x._id != basketitem._id)
                            setBasket(updateBasket);
                            localStorage.setItem('basket', JSON.stringify(updateBasket))

                        }} variant="outlined" color="error">
                            Remove
                        </Button>
                       
                    </li>
                })}
            </ul>
          
            <Button style={{marginTop:'50px'}} onClick={() => {
                setBasket([])
                localStorage.setItem('basket', JSON.stringify([]))
            }} variant="outlined" color="error">
                Order
            </Button>
        </div>
    )
}

export default Basket