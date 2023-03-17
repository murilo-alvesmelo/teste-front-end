import './Banner.css'
import logo1 from '../../assets/logo1.jpg'
import logo2 from '../../assets/logo2.png'

export default function Banner(){
    return(
        <header className='banner'>
            <img src={logo1} className='img-planeta' style={{borderRadius: 50}} alt='Logo NicePlanet'/>
            <img src={logo2} alt='Logo NicePlanet'/>
        </header>
    )
}