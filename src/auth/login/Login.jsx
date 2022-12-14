import './Login.css';
import e2s from "../../assets/images/e2s.png";
import elqano from "../../assets/images/elqano.svg";
import na from "../../assets/images/na.png";
import pb from "../../assets/images/pb.png";
import stack from "../../assets/images/stack.png";
import uppa from "../../assets/images/uppa.png";
import logo from "../../assets/images/opencems.png";
import {useState} from "react";

function Login({setUser, setAuthState}) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onSignInHandle = () => {
        if (email && password) {
            /*
            signInWithEmailAndPassword(auth, email, password).then(() => {
                setUser(email)
                setAuthState('home')
            }).catch((err) => {
                    alert(err)
            })

             */
            setAuthState('home')
        }
    }

    return (
        <div className="Container Container-authentification">
            <div className="Row Row-authentification">
                <div className="Col Col-authentification-logo Mt-4 Mb-2">
                    <img src={logo} alt="Logo"/>
                </div>
                <div className="Col Col-authentification-form Mb-2">
                    <div className='Form-authentification-element'>
                        <div className="Form-authentification-title">
                            <h4>Login</h4>
                        </div>
                    </div>
                    <form>
                        <div className='Form-authentification-element'>
                            <div className='Form-authentification-label'>
                                <label htmlFor="username">Username</label>
                            </div>
                            <input type="text" id="username" name="username" value={email}
                                   onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        <div className='Form-authentification-element Mt-2'>
                            <div className='Form-authentification-label'>
                                <label htmlFor="password">Username</label>
                            </div>
                            <input type="password" id="password" name="password" value={password}
                                   onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                        <div className='Form-authentification-element Form-submit Mt-2 Mb-1'>
                            <button onClick={onSignInHandle}>Sign in</button>
                            <span onClick={() => setAuthState('register')}>Pas encore de compte ?</span>
                        </div>
                    </form>
                </div>
                <div className="Col Col-authentification-copyright Mb-2">
                    <span>Copyright ????? Powered by EQL-CE</span>
                </div>
                <div className="Col Col-authentification-sponsor">
                    <div className="Authentification-images-sponsor">
                        <img src={e2s} alt=""/>
                    </div>
                    <div className="Authentification-images-sponsor">
                        <img src={elqano} alt=""/>
                    </div>
                    <div className="Authentification-images-sponsor">
                        <img src={na} alt=""/>
                    </div>
                    <div className="Authentification-images-sponsor">
                        <img src={pb} alt=""/>
                    </div>
                    <div className="Authentification-images-sponsor">
                        <img src={stack} alt=""/>
                    </div>
                    <div className="Authentification-images-sponsor">
                        <img src={uppa} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login