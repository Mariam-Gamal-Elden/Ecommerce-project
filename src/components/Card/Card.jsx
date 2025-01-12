import { Link } from "react-router-dom"

export default function Card({ productInfo }) {

    const { description, price, ratingsAverage, title, imageCover, category, id } = productInfo
    return <>
        <div className="card group/card shadow-lg rounded-lg overflow-hidden">
            <div className="relative">
                <img src={imageCover} alt={title}></img>
                <div className="layer group-hover/card:opacity-100 transition-opacity duration-300 absolute bg-slate-400 bg-opacity-40 opacity-0 w-full h-full top-0 left-0 flex justify-center items-center gap-3 cursor-pointer">

                    <div className="icon cursor-pointer w-8 h-8 bg-primary-800 rounded-full flex justify-center items-center text-white">
                        <i className="fa-solid fa-heart"></i>
                    </div>

                    <div className="icon cursor-pointer w-8 h-8 bg-primary-800 rounded-full flex justify-center items-center text-white">
                        <i className="fa-solid fa-cart-shopping"></i>
                    </div>

                    <Link to={`/product/${id}`} className="icon cursor-pointer w-8 h-8 bg-primary-800 rounded-full flex justify-center items-center text-white">
                        <i className="fa-solid fa-eye"></i>
                    </Link>
                </div>
            </div>
            <div className="card-body p-4 space-y-2">
                <header>
                    <h3 className="text-lg text-gray-600 font-semibold line-clamp-1"><Link to={`product/${id}`}>{title}</Link></h3>
                    <h4 className="text-primary-600 font-semibold">{category.name}</h4>
                </header>
                <p className="text-gray-400 text-sm line-clamp-2">{description}</p>
                <div className="flex items-center justify-between">
                    <span>{price} L.E</span>
                    <div className="flex gap-1 items-center">
                        <i className="fa-solid fa-star text-yellow-500"></i>
                        <span>{ratingsAverage}</span>
                    </div>

                </div>
            </div>
        </div >
    </>
}
