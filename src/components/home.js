import {Link} from 'react-router-dom'

const Home =  () => {
    
    return (
        <div>
            <section class='header'>
                <section class='homeLogo'>Inti-Mate</section>
                <section class='homeLogin'>
                    <Link to='/login'>
                        Login
                    </Link>
                </section>
            </section>
            <body class='homeBody'>
                <section class='homeDescription'>Safe</section>
                <section class='homeDescription'>Direct</section>
                <section class='homeDescription'>Exact</section>
            </body>
        </div>
    )
}

export default Home