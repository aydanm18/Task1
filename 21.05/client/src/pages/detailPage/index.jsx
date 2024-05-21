import React from 'react'
import { useGetOneQuery } from '../../services/eatApi'
import Button from '@mui/material/Button';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useNavigate, useParams } from 'react-router';
const DetailPage = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const { data } = useGetOneQuery(id)
    return (
        <div className='container'>
            {data && <div className="row"   style={{justifyContent:'center',marginTop:'200px'}} >
                <div style={{ padding:0}} className="col-4 ">
                    <img style={{width:'100%'}} src={data.data.image} alt={data.title} />
                    <h3>{data.data.price}</h3>
                    <p>{data.data.title}</p>
                    <p>{data.data.description}</p>
                    <Button onClick={() => { navigate('/') }} variant="contained" style={{ backgroundColor: 'orange' }}>
                        Go bACK
                    </Button>

                </div>
            </div>}
        </div>
    )
}

export default DetailPage