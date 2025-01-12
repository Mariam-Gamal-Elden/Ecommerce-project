import { useEffect, useState } from "react";
import Loading from "../Loading/Loading";
import axios from "axios";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


export default function CategorySlider() {
    const [categories, setCategories] = useState(null)

    async function getCategories() {
        const options = {
            url: "https://ecommerce.routemisr.com/api/v1/categories",
            method: "GET",
        };
        let { data } = await axios.request(options)
        setCategories(data.data)
    }
    useEffect(() => {
        getCategories()
    }, [])

    return <>

        <section className="my-10">
            <h2 className="font-semibold text-gray-600 text-lg mb-5">Shop Popular Categories</h2>
            {!categories ? <Loading /> : <Swiper slidesPerView={6} loop={true}>
                {categories.map((category) => <SwiperSlide key={category._id}>
                    <div className="h-64">
                        <img src={category.image} alt="" className="w-full h-full object-cover" />
                    </div>
                    <h3 className="mt-2">{category.name}</h3>
                </SwiperSlide>)}
            </Swiper>}
        </section>

    </>
}

