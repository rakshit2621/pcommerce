
import ProductCard from "./ProductCard"; // Assuming your card component is named like this

const CardContainer = () => {
  const products = [
    {
      name: "Wireless Headphones",
      price: "$199.99",
      image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSje8f2XJraeaNRBhGrijcz1a3fKKQ58jWTMlnsg2Hzs7oaSlGQrzTsEM3EKmg2tzt-SfY3pMNluGfAfSYjJbC1r7CDCeCPfT4NYEodrsmVOr50EdXNTrhtkg",
      link: "https://example.com/product/1",
      favourite: true,
    },
    {
        name: "Wireless Headphones",
        price: "$199.99",
        image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSje8f2XJraeaNRBhGrijcz1a3fKKQ58jWTMlnsg2Hzs7oaSlGQrzTsEM3EKmg2tzt-SfY3pMNluGfAfSYjJbC1r7CDCeCPfT4NYEodrsmVOr50EdXNTrhtkg",
        link: "https://example.com/product/1",
        favourite: false,
      },
      
  ];

  return (
    <div className="w-full pt-2 px-2 sm:px-4 pb-4 min-h-screen mt-20">


      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            name={product.name}
            price={product.price}
            image={product.image}
            link={product.link}
            favorite={product.favourite} 
          />
        ))}
      </div>
    </div>
  );
};

export default CardContainer;
