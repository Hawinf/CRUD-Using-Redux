import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleEditCar } from '../redux/actions/carAction'
import { useNavigate, useParams } from 'react-router-dom'

export const EditCar = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {id} = useParams()

    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [image, setImage] = useState(null)
    const [category, setCategory] = useState('')

    const state = useSelector( state => state)
    console.log(state)

    const handleName = (e) => {
        setName(e.target.value)
    }
    const handlePrice = (e) => {
        setPrice(e.target.value)
    }
    const handleCategory = (e) => {
        setCategory(e.target.value)
    }
    const  handleImage = (e) => {
        setImage(e.target.file[0])
    }

    const onKlikEdit = () => {
        const formData = new FormData();
            formData.append('name', name)
            formData.append('price', price)
            formData.append('category', category)
            formData.append('image', image)

            dispatch(handleEditCar(id, formData))
    }

    const handleRedirect = () => {
        setTimeout(() => {
            if(state.carReducers.message === 'OK') {
                navigate('/car-list')
            }
        }, 1000)
    }
    
    useEffect(() => {
        if (state.carReducers.message !== '') {
            alert(state.carReducers.message)
        }
        handleRedirect()
    }, [state.carReducers.message])

  return (
    <div className='edit-car-wrapper'>
        <h1>Edit Car Page</h1>
        <div>
            <input onChange={handleName} placeholder='Nama-Mobil' type='text'/>
            <input onChange={handlePrice} placeholder='Harga' type='number' />
            <input onChange={handleImage} type='file' />
            <div>
                <select onChange={handleCategory}>
                    <option value='small'>
                        2-4 Orang
                    </option>
                    <option value='medium'>
                        4-6 Orang
                    </option>
                    <option value='large'>
                        6-8 Orang
                    </option>
                </select>
            </div>
            <button onClick={onKlikEdit}>
                Save Edit
            </button>
        </div>
    </div>
  )
}
