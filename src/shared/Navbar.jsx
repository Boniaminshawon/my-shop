import { Link } from 'react-router-dom';
import logo from '../assets/Image/logo (2).png'
import { FaSearch } from "react-icons/fa";
import useAuth from '../hooks/useAuth';

const Navbar = () => {
  const { user, logOut } = useAuth();
    return (
        <div className="navbar bg-[#b71c1c] py-[14px]">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
           
          </div>

          {/* navbar start - logo  */}
          <a className="btn btn-ghost text-xl"> <img src={logo} alt="" /> </a>
        </div>


        {/* navbar center */}
        <div className="navbar-center hidden lg:flex w-1/3">

            <div className='w-full flex '>
            <input type="search" placeholder="Type here" className="input w-full rounded-r-none" />
            <button className='text-lg px-[18px] text-white bg-black rounded-r-lg'><FaSearch></FaSearch></button>
           
            </div>
          
        </div>

        {/* nav bar end  */}
        <div className="navbar-end ">
          {user ?

            <div className="">

              <div className="dropdown dropdown-bottom dropdown-hover dropdown-end text-black z-10">

                <div tabIndex={0} role="button" className="w-12 tooltip   tooltip-info tooltip-left z-10 " >
                  <img className="rounded-full md:h-[44px] md:w-[44px] h-[32px] w-[32px] bg-white" alt="" src={user?.photoURL || "https://i.ibb.co/L1kVMdW/images-removebg-preview.png"} />
                </div>


                <ul tabIndex={0} className="dropdown-content text-sm sm:text-lg font-semibold text-black text-left bg-white z-[1] menu  shadow rounded w-[100px] md:w-[120px]">


                 
                  <hr />
                  <li> <button onClick={logOut} className="sm:py-2 py-1 px-3 sm:h-[44px] rounded   border-black   ">Log Out</button></li>
                  <hr />
                </ul>
              </div>

            </div>
            :

            <div className="space-x-2 flex">
              <div className="hidden md:flex">
                <Link to={'/registration'} className=""> <button className=" py-1 text-sm sm:py-2 px-3 sm:h-[44px] font-bold rounded  btn  xl:text-lg md:text-base bg-white hover:text-black text-black border-black ext-white">Sign Up</button></Link>
              </div>
              <div>
                <Link to={'/login'}> <button className="md:py-1  py-[5px] text-sm sm:py-2 px-3 sm:h-[44px] md:font-bold rounded bg-white md:btn md:bg-white md:text-black md:rounded hover:text-black xl:text-lg md:text-base           text-black md:border-black ext-white">Login</button></Link>
              </div>
            </div>
          }
        </div>
      </div>
    );
};

export default Navbar;