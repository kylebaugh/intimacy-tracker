import {Link} from 'react-router-dom'
import ('../cssFiles/home.css')

const Home =  () => {
    
    return (
        <div class='homeDiv'>
            <section class='homeHeader'>
                <section class='homeLogo'>Inti-Mate</section>
                {/* <section class='hamburger'>
                    <section class='hamTop'></section>
                    <section class='hamMid'></section>
                    <section class='hamBot'></section>
                </section> */}
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