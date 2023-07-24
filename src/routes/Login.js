function Login() {
    return (
      <>
       <Navbar/>

       <div className="from-container">
              <h1>Sign Up today!</h1>
              <form>
                  <input placeholder="Name"/>
                  <input placeholder="Email"/>
                  <input placeholder="Password"/>
                  
                  
                  <button className="Log"> Log In</button>
              </form>
              <button>Don't have an account?SignUp here</button>
          </div>
  
      </>
    )

   
}

export default Login