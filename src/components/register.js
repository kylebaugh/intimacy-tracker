import {Link} from 'react-router-dom'

const Register = () => {

    return (
        <div>
            <section class='registerHeader'>
                <section>Inti-Mate</section>
                <section>
                    <Link to='/'>
                        Home
                    </Link>
                </section>
            </section>
            <body class='registerBody'>
                <section class='registerInputs'>
                    <input placeholder='First Name'/>
                    <input placeholder='Last Name'/>
                    <input placeholder='Email'/>
                    <input placeholder='Password'/>
                    <input placeholder='Re-Enter Password'/>
                    <button>Register</button>

                </section>
                <section class='registerLogin'>
                    <Link to='/login'>
                        Already have an account? Login here!
                    </Link>
                </section>
            </body>
        </div>
    )
}

export default Register