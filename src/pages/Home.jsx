import IconArrowRightShort from "../components/icons/IconArrowRightShort";
import PizzaImage from "../assets/images/pizza1.png"
import cookImage from "../assets/images/cook.avif"
import orderFood from "../assets/images/orderFood.png"
import IconPatchCheckFill from "../components/icons/iconPatch";
import pickup from "../assets/images/pickup.png"
import enjoy from "../assets/images/enjoy.png"
import Layout from "../Layouts/Layout";

function Home(){
    return(
        <Layout>
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
            {/*servicesSection*/}
            <section className="py-4 mt-6 bg-gradient-to-l from-amber-200 to-orange-100">
                <div className="container flex flex-col md:flex-row">
                    <div className="flex flex-col items-center justify-center rounded-lg lg:w-1/2">
                        <img src={cookImage} width={500}
                            className="rounded-lg"
                            alt="cooking"
                        />

                    </div>
                    <div className="flex flex-col flex-wrap text-center lg:py-6 lg:w-1/2 lg:pl-12 lg:text-left">
                        <div className="flex flex-col items-center lg:items-start">
                            <div>
                                <h2 className="mb-2 text-5xl font-extrabold text-transparent title-font bg-gradient-to-r from-orange-600 to-orange-300 bg-clip-text">
                                    cooked by the best<br />chef in the world
                                    <p className="text-base leading-relaxed text-[#687280]">
                                        there are many benefits but the main ones are:
                                    </p>
                                </h2>
                            </div>
                        </div>
                        <div className="w-full p-l">
                            <div className="flex items-center h-full p-2 text-2xl rounded">
                                <IconPatchCheckFill className="text-[#F38339] w-10 h-10 mr-4"/>
                                <span className="font-bold title-font">Perfect Taste</span>
                            </div>
                        </div>
                        <div className="w-full p-l">
                            <div className="flex items-center h-full p-2 text-2xl rounded">
                                <IconPatchCheckFill className="text-[#F38339] w-10 h-10 mr-4"/>
                                <span className="font-bold title-font">Prepared Quickly</span>
                            </div>
                        </div>
                        <div className="w-full p-l">
                            <div className="flex items-center h-full p-2 text-2xl rounded">
                                <IconPatchCheckFill className="text-[#F38339] w-10 h-10 mr-4"/>
                                <span className="font-bold title-font">Food Hygiene Guarenteed</span>
                            </div>
                        </div>

                        <div className="px-5 py-4 mx-auto">
                            <div className="flex justify-center py-4">
                                <div className="inline-flex w-16 h-1 bg-yellow-500 rounded-full"></div>

                            </div>
                            <div className="flex flex-wrap space-y-6 md:space-y-0">
                                <div className="flex flex-col items-center text-center p-4 md:w-1/3">
                                    <div className="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 mb-5 bg-yellow-100 rounded-full">
                                        <img src={orderFood}/>
                                    </div>
                                    <div className="flex-grow">
                                        <h2 className="mb-3 text-lg font-bold font-medium text-gray-900 title-font">
                                            Order Food
                                        </h2>
                                        <p className="text-base leading-relaxed">
                                            as easy as 1,2,3. just select your favourite pizza and place your order
                                        </p>
                                    </div>

                                </div>
                                <div className="flex flex-col items-center text-center p-4 md:w-1/3">
                                    <div className="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 mb-5 bg-yellow-100 rounded-full">
                                        <img src={pickup}/>
                                    </div>
                                    <div className="flex-grow">
                                        <h2 className="mb-3 text-lg font-bold font-medium text-gray-900 title-font">
                                            Pickup Food
                                        </h2>
                                        <p className="text-base leading-relaxed">
                                           pick up your order form the nearest store or get it deliverd at your door step
                                        </p>
                                    </div>

                                </div>
                                <div className="flex flex-col items-center text-center p-4 md:w-1/3">
                                    <div className="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 mb-5 bg-yellow-100 rounded-full">
                                        <img src={enjoy}/>
                                    </div>
                                    <div className="flex-grow">
                                        <h2 className="mb-3 text-lg font-bold font-medium text-gray-900 title-font">
                                            Enjoy Food
                                        </h2>
                                        <p className="text-base leading-relaxed">
                                           as soon as you get your order ,enjoy the delicious pizza with your loved ones
                                        </p>
                                    </div>

                                </div>

                            </div>

                        </div>
                    </div>
                
                </div>

            </section>
        </div>
        </Layout>
    );
}
export default Home;