import { useContext, useState } from 'react'
import { LOGOURL } from '../utils/constants'
import { Link } from 'react-router-dom'
import About from './About'
import useOnlineStatus from '../utils/useOnineStatus'
import UserContext from '../utils/UserContext'
import { useSelector } from 'react-redux'

const Header = () => {
  // let buttonName = "Login"
  const onlineStatus = useOnlineStatus();

  const user = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);

  const [buttonName, setButtonName] = useState('Login')
  return (
    <div className='flex justify-between bg-pink-50 shadow-lg m-2 '>
      <div className='logo-container'>
        <img className='w-40' src={LOGOURL} />
      </div>
      <div className='flex items-center'>
        <ul className='flex p-4 m-4'>
          <li className='px-4'>
            OnlineStatus :
            {onlineStatus ? 'Yes' : 'No'}
          </li>
          <li className='px-4'>
            <Link to='/'> Home
            </Link>
          </li>
          <li className='px-4'>
            {/**we can navigate using below code but it will refresh the whole page */}
            <a href='/About'>About Us</a>
          </li>
          <li className='px-4'>
            <Link to='/ContactUs'> Contact Us
            </Link>
          </li>
         {/** <li className='px-4'>
            <Link to='/grocery'> Grocery
            </Link>
  </li> */}
          <li className='px-4'>
            <Link to='/cart'>Cart ({cartItems.length} Items)</Link>
            
          </li>
          <li className='px-4'>
            {user.loggedInUser}
          </li>
          <button className='Login' onClick={() => {
                                               buttonName === 'Login' ?
                                                 setButtonName('Logout') :
                                                 setButtonName('Login')
                                             }}>
            {buttonName}
          </button>
        </ul>
      </div>
    </div>
  )
}

export default Header
