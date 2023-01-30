import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCars } from '../redux/actions/carAction'

export const CarList = () => {

    const dispatch = useDispatch();

    const {carReducers} = useSelector(state => state)
    console.log(carReducers, 'this is results of state')

    useEffect(() => {
        getAllCars()
    },[])

    const getAllCars = () => {
        const token = localStorage.getItem('token');
        const configurasi = {
            headers: {
                access_token : token,
            },
        }
        // console.log('res')
        dispatch(getCars(configurasi))
    }

    

  return (
    <div>
       <h1>This Is Car List Page</h1>
        {carReducers.carsData.length && carReducers.carsData.map((item, i) => {
            <div key={i}>
                <img src={item.image} />
                <p>{item.name}</p>
                <p>{item.price}</p>
                <p>{item.category}</p>
            </div>
        })}
    </div>
  )
}