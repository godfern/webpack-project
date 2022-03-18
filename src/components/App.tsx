import '../styles/index.scss';
import Recepies from './Recipies';
import banner2 from '../images/image3.svg';

const App = () => {
    return (
        <>
            <section className='banner'></section>
            <section className='banner2'>
                <img src={banner2} alt="banner3" width="200px" />
            </section>
            <div>Hello world</div>
            <Recepies />
        </>

    )
}

export default App;