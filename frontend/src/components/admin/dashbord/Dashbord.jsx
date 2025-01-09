import './Dashbord.css'
import  {useNavigate} from "react-router-dom"
function Dashbord() {

    const navigate = useNavigate();
    const logout = ()=>{
    localStorage.clear()
    navigate('/admin/login')

    console.log("users")   }

   const userlist = ()=>{
    navigate('/admin/user')
   }
   
//    const profile = ()=>{
//     navigate('/admin/dashbord')
//    }

  return (
    <div>
        <div className="main">

            <diV className="dashbord">
            <h1>Dashbord</h1>
            <diV className="dashbord-head">
                <div className='user' onClick={userlist}>
                <h3 >Users</h3>
                </div>
                <div className='admin' >
                <h3>Profile</h3>
                </div>


            </diV>
            <div className='settings'>
                <h3>Settings</h3>
            </div>
            <div className='logout' onClick={logout}>
                <h3 >Logout</h3>
            </div>
            </diV>



        </div>
    </div>
  )
}

export default Dashbord