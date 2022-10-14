import './Home.css';
import Map from '../../components/map/Map';
import Navbar from '../../components/navbar/Navbar';

function Home() {
    return (
        <div className='Container'>
            <Navbar />
            <Map />
        </div>
    );
}

export default Home;