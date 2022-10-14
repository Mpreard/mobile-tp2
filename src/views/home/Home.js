import './Home.css';
import Map from '../../components/map/Map';
import Navbar from '../../components/navbar/Navbar';
import TopNavbar from '../../components/topNavbar/TopNavbar';

function Home() {
    return (
        <div className='Container'>
            <Navbar />
            <TopNavbar />
            <Map />
        </div>
    );
}

export default Home;