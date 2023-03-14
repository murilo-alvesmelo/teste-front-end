import git from '../../assets/git.png'
import net from '../../assets/internet.png'
import './Footer.css'

export default function Footer(){
    return(
        <footer className="footer">
            <section>
                <ul>
                    <li>
                        <a href='https://github.com/murilo-alvesmelo'>
                            <img src={git} alt=''/>
                        </a>
                    </li>
                    <li>
                        <a href='http://niceplanet.com.br/'>
                            <img src={net} alt=''/>
                        </a>
                    </li>
                </ul>
            </section>
        </footer>
    )
}