import IconArrowRightShort from "../components/icons/IconArrowRightShort";
import PizzaImage from "../assets/images/pizza.jpeg"
function Home(){
    return(
        <div>
            {/*hero section*/ }
            <section className="flex flex-col-reverse items-center justify-center py-5 md:flex-row md:gap-7 bg-gradient-to-l from-amber-200 to-orange-100">
                <div className="w=4/6 ml-4 text-center md:w-2/6 md:text-left">
                    <div className="flex justify-center text-4xl md:justify-normal">
                        <h1 className="pb-5 font-bold text-transparent bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text">
                            Enjoy the Slice{' '}
                        </h1>
                        <h1>
                            😋
                        </h1>
                    </div>
                    <p className="pb-4 text-[#6b7280]">
                        The pizza App lets you order your favourite pizza from the comfort of your home.<br></br>
                        enjoy the best pizza in town with just a few clicks.
                    </p>
                

                <button className="flex items-center   px-4 py-2 text-white bg-orange-500 rounded-md hover:bg-orange-600 group">
                    Order Now
                    <span className="inline-block ml-1 transistion-transform ease-in-out group-hover:translate-x-2">
                        <IconArrowRightShort/>
                    </span>
                    
                </button>
                </div>
                <div>
                    <img 
                        src={PizzaImage}
                        alt="Pizza"
                        //className="w-4/6 md:w-3/6"
                        width={400}
                        height={400}
                    />
                </div>
            </section>
        </div>
    );
}
export default Home;