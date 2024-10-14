import Layout from "../../Layouts/Layout";

function AddProduct(){
    return (
        <Layout>
            <section className="py-12">
                <div className="max-w-md mx-auto mt-8 bg-white p-7">
                    <h2 className="mb-4 text-2xl font-semibold">
                        Add Product
                    </h2>

                    <form>
                        <div className="mb-4">
                        <label htmlFor="name" 
                        className="block text-sm font-medium text-gray-700">
                        ProductName</label>
                        <input type="text" 
                        required
                        name="productName" id="name" 
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        />
                        </div>


                        <div className="mb-4">
                        <label htmlFor="description" 
                        className="block text-sm font-medium text-gray-700">
                        Description</label>
                        <input type="text" 
                        required
                        name="description" id="description" 
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        />
                        </div> 


                        <div className="mb-4">
                        <label htmlFor="price" 
                        className="block text-sm font-medium text-gray-700">
                        Price</label>
                        <input type="Number" 
                        required
                        name="price" id="price" 
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        />
                        </div> 



                        <div className="mb-4">
                        <label htmlFor="category" 
                        className="block text-sm font-medium text-gray-700">
                        Price</label>
                        <input type="text" 
                        required
                        name="price" id="price" 
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        />
                        </div> 
                        
                    </form>
                </div>
            </section>
        </Layout>
    )
}

export default AddProduct;