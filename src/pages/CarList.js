import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { getCars, handleDelete } from '../redux/actions/carAction'

export const CarList = () => {

    const dispatch = useDispatch();
    const {id} = useParams()

    const {carReducers} = useSelector(state => state)
    // console.log(carReducers, 'this is results of state')

    useEffect(() => {
        getAllCars()
    },[])

    useEffect(() => {
        getAllCars()
    },[carReducers.message])

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

    const handleDeleteCar = (id) => {
        dispatch(handleDelete(id))
    }
    

  return (
    <div>
       <h1>This Is Car List Page</h1>
        {
            !!carReducers.carsData.length ? carReducers.carsData.map((item, i) => {
                return (
                    <div key={i}>
                        <img  src={item.image}/>
                        <p>{item.name}</p>
                        <p>{item.price}</p>
                        <p>{item.category}</p>
                        <button onClick={() => handleDeleteCar(item, id)}>Delete</button>
                    </div>
                )
            }) : (null)
        } 
    </div>
  )
}