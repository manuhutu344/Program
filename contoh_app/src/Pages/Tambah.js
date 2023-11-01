import React, { useEffect, useState  } from 'react'
import './Tambah.css'
import { Link, useParams} from 'react-router-dom'
import {toast} from 'react-toastify'
import axios from 'axios'


const initialState = {
  user_name: '',
  user_email: '',
  user_password: ''
}

function Tambah() {
    const [state, setState] = useState(initialState)
    const {user_name, user_email, user_password} = state
    const {id} = useParams()
    useEffect(()=>{
      axios.get(`http://localhost:9090/post/rubah/${id}`).then((resp)=> setState({...resp.data[0]}))
    },[id])
    
    const handleSubmit = (e) =>{
        e.preventDefault()
        if(!user_name || !user_email || !user_password){
          toast.error('masukan data yang benar')
        }else{
          if(!id){
            axios.post('http://localhost:9090/post/buat', {
            user_name,
            user_email,
            user_password
          }).then(()=>{
            setState({user_name: '', user_email: '', user_password: ''})
          }).catch((err)=> toast.error(err.response.data))
            toast.success('Data Berhasil Ditambahkan')
          }else{
            axios.put(`http://localhost:9090/post/update/${id}`, {
              user_name,
              user_email,
              user_password
            }).then(()=>{
              setState({user_name: '', user_email: '', user_password: ''})
            }).catch((err)=> toast.error(err.response.data))
              toast.success('Data Berhasil Diubah')
          }
        }
    }


    const handleInputChange = (e) =>{
        const {name, value} = e.target
        setState({...state, [name]: value})
    }

  return (
    <div style={{marginTop: '100px'}}>
    <form style={{margin: 'auto', padding: '15px', maxWidth: '400px', alignContent: 'center'}} onSubmit={handleSubmit}>
    <label htmlFor='name'>
    Nama
    </label>
    <input 
    type="text" 
    id='user_name'  
    name= 'user_name' 
    placeholder='Masukan nama Anda' value={user_name || ''} onChange={handleInputChange} />

    <label htmlFor='email'>
    Email
    </label>
    <input type='email' id='user_email'  name= 'user_email' placeholder='Masukan email Anda' value={user_email || ''} onChange={handleInputChange} />

    <label htmlFor='password'>
    Password
    </label>
    <input type='password' id='user_password'  name= 'user_password' placeholder='Masukan password Anda' value={user_password || ''} onChange={handleInputChange} />
    <input type='submit' value={id ? "Update" : "Save"} />
    <Link to='/'>
    <input type='button' value='Kembali ke home' />
    </Link>
    </form>
    </div>
  )
}

export default Tambah