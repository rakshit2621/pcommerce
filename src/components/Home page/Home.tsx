import Promptbottom from "./Promptbottom"; 
import CardContainer from "../Cards/CardsContainer";
import FilterButton from "../Filter/Filterbutton";

function Home() {
  return (
    <div>
{/* <ProductCard
  image="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSje8f2XJraeaNRBhGrijcz1a3fKKQ58jWTMlnsg2Hzs7oaSlGQrzTsEM3EKmg2tzt-SfY3pMNluGfAfSYjJbC1r7CDCeCPfT4NYEodrsmVOr50EdXNTrhtkg"
  name="Wireless Headphones"
  price="$199.99"
  link="https://example.com/product/wireless-headphones"
/> */}
<CardContainer />
<FilterButton />
      <Promptbottom />
    </div>
  );
}

export default Home;
