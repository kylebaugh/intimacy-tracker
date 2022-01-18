// import {useState} from 'react'
// import {useSelector, useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'


const Header = (props) => {

    // let dispatch = useDispatch()
    const {push} = useHistory()

    const toLogin = () =>{
        push('/Login')
    }

    return (

        <div>
            <h1>Header Section</h1>
            <button onClick={() => toLogin()}>Login</button>
            <button>Profile</button>
        </div>
    )
}

export default Header