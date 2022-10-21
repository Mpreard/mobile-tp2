import { signOut } from "firebase/auth";
import { auth } from "../firebase";

function Home ({ user, setAuthState, setUser }) {
    const signOutHandler = () => {
        signOut(auth).then(() => {
            setUser(null)
            setAuthState('login')
        })
            .catch((err) => {
                alert(err)
            })
    }
    return (
        <div>

        </div>
    )
}

export default Home;