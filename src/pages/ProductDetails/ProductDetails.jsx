import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Loading from "../../components/Loading/Loading";
import { useParams } from "react-router-dom";
import ReactImageGallery from "react-image-gallery";

export default function ProductDetails() {

    const [productDetails, setProductDetails] = useState(null);

    let { id } = useParams();

    async function getProductDetails() {

        try {
            const options = {
                url: `https://ecommerce.routemisr.com/api/v1/products/${id}`,
                method: "Get"
            };

            let { data } = await axios.request(options);
            setProductDetails(data.data);

            console.log(data);
        } catch (error) {
            console.log(error);

        }


    }

    useEffect(() => {
        getProductDetails()
    }, [])

    return <>

        {productDetails ? <section className="grid gap-12 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-8 lg:grid-cols-12">
            <div className="lg:col-span-3 xs:col-span-1 sm:col-span-1 md:col-span-2">

                <ReactImageGallery showPlayButton={false} showNav={false} items={productDetails.images.map((image) => {
                    return {
                        original: image,
                        thumbnail: image,
                    }
                })} />
            </div>

            <div className="lg:col-span-9 space-y-3 xs:col-span-2 sm:col-span-3 md:col-span-6">

                <div>
                    <h2 className="text-2xl text-gray-600 font-bold">{productDetails.title}</h2>
                    <h3 className="text-primary-700  font-semibold">{productDetails.category.name}</h3>
                </div>

                <div>
                    <p className="text-gray-400">{productDetails.description}</p>
                </div>

                <div className="flex justify-between">
                    <span className="text-slate-600">{productDetails.price} L.E</span>

                    <div className='flex gap-1 justify-center items-center'>
                        <i className="fa-solid fa-star text-yellow-500"></i>
                        <span>{productDetails.ratingsAverage}</span>
                    </div>
                </div>

                <button className="btn uppercase bg-primary-800 hover:bg-primary-900 w-full text-white font-semibold">add to cart</button>
            </div>

        </section> : <Loading />}
    </>
}
