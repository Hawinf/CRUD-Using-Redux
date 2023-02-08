import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { handleDetailCar } from '../redux/actions/carAction'

export const CarDetail = () => {
  const {id} = useParams()
  const dispatch = useDispatch()

  const state = useSelector(state => state)
  console.log(state.carReducers.carData)
  const singleCar = state.carReducers.carData

  useEffect(() => {
    singleCarDetail()
  },[])

  const singleCarDetail = () => {
    dispatch(handleDetailCar(id))
  }

  return (
    <div className='detail-car-wrapper'>
        <h1>Detail Car Page</h1>
        {
          Object.entries(singleCar).length ? (
            <>
              <img src={singleCar.image} />
              <p>{singleCar.name}</p>
              <p>{singleCar.price}</p>
            </>
          ) :
           (
            <p>Data Tidak Ditemukan</p>
          )
        }
    </div>
  )
}
