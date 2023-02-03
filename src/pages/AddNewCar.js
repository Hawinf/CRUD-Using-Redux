import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

export const AddNewCar = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const state = useSelector(state => state)
    console.log(state)

    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [image, setImage] = useState(null)
    const [category, setCategory] = useState('')

    const handleName = (e) => {
        setName(e.target.value)
    }
    const handlePrice = (e) => {
        setPrice(e.target.value)
    }
    const handleCategory = (e) => {
        setCategory(e.target.value)
    }
    const handleImage = (e) => {
        setImage(e.target.files[0])
    }

    const onKlikAddCar = () => {
        const formData = new FormData();
            formData.append('name', name)
            formData.append('category', category)
            formData.append('price,', price)
            formData.append('image', image)

            // dispatch(handleAddCar(formData))
    }



  return (
    <div className='wrapper-addnewcar'>
        <h1>Add New Car Page</h1>
        <input onClick={handleName} placeholder='Nama-Mobil'/>
        <input onClick={handlePrice} placeholder='Harga'/>
        <input onChange={handleImage} type='file'/>
        <select onChange={handleCategory} placeholder='Kategory'>
            <option value='small'>
                2 - 4 Orang
            </option>
            <option value='medium'>
                4 - 6 Orang
            </option>
            <option value='large'>
                6 - 8 Orang
            </option>
        </select>
        <button onClick={onKlikAddCar}>Add New Car</button>
    </div>
  )
}
