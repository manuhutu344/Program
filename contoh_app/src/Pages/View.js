import React, {useState, useEffect} from 'react'
import {useParams, Link} from 'react-router-dom'
import axios from 'axios'
import './View.css'

function View() {
    const [user, setUser] = useState({})
    const {id} = useParams()
    useEffect(()=>{
        axios.get(`http://localhost:9090/post/rubah/${id}`).then((resp)=> setUser({...resp.data[0]}))
      },[id])
  return (
    <div style={{marginTop:'150'}}>
    <div className='card'>
    <div className='card-header'>
    <p>
    Data Detail User
    </p>
    </div>
    <div className='container'>
    <strong>
    ID:
    </strong>
    <span>{id}</span>
    <br />
    <br />
    <strong>Nama:</strong>
    <span>{user.user_name}</span>
    <br />
    <br />
    <strong>Email:</strong>
    <span>{user.user_email}</span>
    <br />
    <br />
    <strong>Password:</strong>
    <span>{user.user_password}</span>
    <br />
    <br />
    <Link to='/'>
    <div className='btn btn-edit'>Kembali</div>
    </Link>
    </div>
    </div>
    </div>
  )
}

export default View