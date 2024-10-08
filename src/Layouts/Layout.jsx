import PizzaLogo from "../assets/images/pizza2.png"
import Footer from "../components/Footer";
function Layout({children})
{
    return(
        <div>
            <nav className="flex items-center justify-around h-16 text-[#6B7280] font-mono border-none shadow-md">
                <div className="flex items-center justify-center">
                    <img src={PizzaLogo} alt="PizzaLogo" />
                    <p>Pizza App</p>
                </div>
                <div className="hidden md:block">
                    <ul className="flex gap-4">
                        <li className="hover:text-[#FF9110]">
                            {' '}
                            <p>Menu{' '}</p>
                        </li>
                        <li className="hover:text-[#FF9110]">
                            {' '}
                            <p>Services{' '}</p>
                        </li>
                         <li className="hover:text-[#FF9110]">
                            {' '}
                            <p>About{' '}</p>
                        </li>
                    </ul>
                </div>
            </nav>
                {children}
           <Footer/>
        </div>
    )
}
export default Layout;