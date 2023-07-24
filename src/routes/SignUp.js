import Navbar from "../components/Navbar";
import "./SignUpStyles.css"

function SignUp() {
  return (
    <>
     <Navbar/>
     <div className="from-container">
           
            <form>
                <input placeholder="Name"/>
                <input placeholder="Email"/>
                <input placeholder="Password"/>
                <input placeholder="Confirm Password"/>
                
                <button className="Sign">Sign Up</button>
            </form>
            <h4>Already have an account?</h4><button className="Log">Login here</button>
        </div>

    </>
  )
 

}

export default SignUp;

