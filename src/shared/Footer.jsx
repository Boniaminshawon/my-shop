import { Link } from "react-router-dom";
import logo from '../assets/Image/logo (2).png'


const Footer = () => {
    return (
        <div className=" bg-[#b71c1c]  text-white lg:px-16  pb-4 pt-7 md:pt-16 md:pb-10  ">
            <div className="flex flex-col md:flex-row justify-between">
                <div className="flex-1 text-center space-y-3 flex justify-center items-center flex-col">
                {/* <h3 className=" mb-2 font-bold text-3xl md:text-5xl font-heading"><Link className="font-h " to={'/'}>Hotel Luxury</Link> </h3> */}
                <img src={logo} alt="" className="" />
                <p className="font-secondary text-base md:text-xl">Where opulent comfort meets unparalleled hospitality, creating an unforgettable residential experience that transcends mere accommodation.</p>
            </div>

           


                <div className="flex  flex-1 md:justify-around justify-between mt-5 md:mt-0 px-3">
                    <div className="space-y-3">
                        <h3 className="tracking-wide  uppercase font-primary md:text-xl text-lg font-bold">Our Pages</h3>
                        <ul className="space-y-1 font-primary md:text-lg text-base">
                            <li>
                                <Link to={'/'}>Home</Link>
                            </li>
                            <li>
                                {/* <a rel="noopener noreferrer" href="#">Integrations</a> */}
                            </li>
                            <li>
                                <Link to={'/'}>About</Link>
                            </li>
                            <li>
                                <Link to={'/'}>Contact</Link>
                            </li>
                        </ul>
                    </div>


                    <div className="space-y-3 ">
                        <h3 className="uppercase font-primary   md:text-xl text-lg font-bold">Developers</h3>
                        <ul className="space-y-1 font-primary md:text-lg text-base">
                            <li>
                                <a rel="noopener noreferrer" href="#">Public API</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#">Documentation</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#">Guides</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="border border-black my-4 md:my-7"></div>


            <div className="md:space-y-7 space-y-3 text-center flex justify-center flex-col items-center">

                <div className="uppercase font-primary text-white  md:text-xl text-lg font-bold">Social media</div>
                <div className="flex gap-8">
                    <a><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" className="fill-current text-sky-400  "><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
                    <a><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" className="fill-current text-white"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
                    <a><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" className="fill-current  text-blue-800"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
                </div>
            </div>




            <div className="border border-black my-4 md:my-7"></div>



            <div className=" md:text-xl text-base text-white text- font-primary justify-center items-center gap-2  flex flex-col-reverse md:flex-row md:justify-between ">
                <div className=" "> <p className="">Copyright © 2024 - All right reserved</p></div>
                <div className=" space-x-6 ">
                    <a className="underline" href="">Privacy policy</a>
                    <a className="underline" href="">Terms of service</a>
                </div>
            </div>




        </div>
    );
};

export default Footer;