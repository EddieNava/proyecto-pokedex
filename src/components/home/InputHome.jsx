import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setNameGlobal } from '../../store/slices/nameUser.slice'

const InputHome = () => {

  const {handleSubmit, reset, register} = useForm()

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const submit = data => {
    dispatch(setNameGlobal(data.nameUser))
    reset({
      nameUser: ''
    })
    navigate('/pokedex')
  }

  return (
    <form onSubmit={handleSubmit(submit)}>
      <input placeholder='Ingresa tu nombre de entrenador' required={true} type="text" {...register('nameUser')} />
      <button className='butUser' >Comenzar</button>
    </form>
  )
}

export default InputHome