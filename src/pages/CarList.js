import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { carAction, getCars } from '../redux/actions/carAction'
import {carReducers} from '../redux/reducers/carReducers'

export const CarList = () => {
    const {carReducers} = useSelector(state => state)
    console.log(carReducers)
    
    const dispatch = useDispatch();

    const getAllCars = () => {
        const token = localStorage.getItem('token');
        const configurasi = {
            headers: {
                access_token : token,
            },
        }
        console.log('res')
        dispatch(getCars(configurasi))
    }

    useEffect(() => {
        getAllCars()
    },[])

  return (
    <div>
       
    </div>
  )
}