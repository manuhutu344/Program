import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import axios from 'axios'
import { toast } from 'react-toastify'

function Home() {
    const [data, setData] = useState([])
    const loadData = async() =>{
        const response = await axios.get("http://localhost:9090/post/data")
        setData(response.data)
    }
    useEffect(()=>{
        loadData()
    },[])

    function deleteData(id){
        if(window.confirm('Apakah Anda Yakin Inggin Menghapus Data Ini ?')){
            axios.delete(`http://localhost:9090/post/hapus/${id}`)
            toast.success('Data Berhasil Di Hapus')
            setTimeout(() => loadData(), 500)
        }
    }

  return (
    <div style={{marginTop: '150px'}}>
    <Link to={'/tambah'}>
    <button className='btn btn-tambah'>Tambah Data</button>
    </Link>
    <table className='styled-table'>
    <thead>
    <tr>
    <th style={{textAlign: 'center'}}>
    NO.
    </th>
    <th style={{textAlign: 'center'}}>
    Nama.
    </th>
    <th style={{textAlign: 'center'}}>
    Email.
    </th>
    <th style={{textAlign: 'center'}}>
    password.
    </th>
    <th style={{textAlign: 'center'}}>
    aksi
    </th>
    </tr>
    </thead>
    <tbody>
    {data.map((item, index)=>{
        return(
            <tr key={item.user_id}>
            <th scope='row'>{index + 1}</th>
            <td>{item.user_name}</td>
            <td>{item.user_email}</td>
            <td>{item.user_password}</td>
            <td>
            <Link to={`/update/${item.user_id}`}>
            <button className='btn btn-edit'>
            Edit
            </button>
            </Link>
            <button className='btn btn-delete' onClick={() => deleteData(item.user_id)}>
            Hapus
            </button>
            <Link to={`/view/${item.user_id}`}>
            <button className='btn btn-view'>
            Lihat
            </button>
            </Link>
            </td>
            </tr>
        )
    })}
    </tbody>
    </table>
    </div>
  )
}

export default Home