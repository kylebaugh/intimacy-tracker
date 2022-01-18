import {Link} from 'react-router-dom'

const Login = () => {

    return (
        <div>
            <section class='loginHeader'>
                <section>Inti-Mate</section>
                <section>
                    <Link to='/'>Home</Link>
                </section>
            </section>
            <body class='loginBody'>
                <section class='loginInputs'>
                    <input placeholder='Email'/>
                    <input placeholder='Password'/>
                    <button>Login</button>

                </section>
                <section class='loginRegister'>
                    <Link to='/register'>
                        Don't have an account? Register here!
                    </Link>
                </section>
            </body>
        </div>
    )
}

export default Login