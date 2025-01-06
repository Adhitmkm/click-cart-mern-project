import { Link } from 'react-router-dom'
import { PaddingAlignment } from '../../Layout/Layout'
import './navbar.css'
function Navbar() {
  return (
    <PaddingAlignment>
        <div className="nav">
            <div className='logo'>
                <img  className='logo-1' src='src\assets\navbar icons\Screenshot 2025-01-05 021934.png'></img>
            </div>
            <div className="pages">
            <div className='home'>
                <Link to="/home">HOME</Link>
            </div>
            <div className='collection'>
                COLLECTION
            </div>
            <div className='about'>
                ABOUT
            </div>
            <div className='contact'>
                CONTACT
            </div>  

            </div>
            <div className='icons' >
                <div className='serch'>
                    <img className='serch-1' src='src\assets\navbar icons\search icon.png'></img>
                </div>
                <div className='profile'>
                    <Link to="/profile"><img className='profile-1' src='src\assets\navbar icons\profile-icon.png'></img></Link>
                    
                    
                </div>
                <div className='cart'>
                    <img className='cart-1' src='src\assets\navbar icons\Vector.png'></img>                    
                    
                </div>
                <div className='icon-2'>
                    <p>2</p>
                </div>
            </div>

        </div>
  
    </PaddingAlignment>
  )
}

export default Navbar