import { FiExternalLink } from "react-icons/fi";
import { GoHeart } from "react-icons/go";
const ProductCard = ({
  image,
  name,
  price,
  link,
}: {
  image: string;
  name: string;
  price: string;
  link: string;
  favorite?: boolean;
}) => {
  return (
    <div className="relative bg-black rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
 
<div><GoHeart className="absolute top-3 right-3 text-red-600 text-xl cursor-pointer z-10" />
      <img src={image} alt={name} className="w-full h-40 object-cover" />

      <div className="p-4 flex flex-col gap-1">
        <h2 className="text-gray-200">{name}</h2>
        <div className="flex justify-between items-center ">
        <p className=" font-bold text-green-600">{price}</p>
       
          
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 transition-colors"
          title="View Product"
        >
          <FiExternalLink className="text-xl" />
        </a></div>
      </div>
      </div>
    </div>
  );
};

export default ProductCard;
