import Promptbottom from "./Promptbottom";
import CardContainer from "../Cards/CardsContainer";
import FilterButton from "../Filter/Filterbutton";
import useAuthMiddleware from "../Auth/useAuthMiddleware";
import { useContext, useEffect } from "react";
import { MyContext } from "../Contexts/ContextProvider";

function Home() {
  // const { authenticated } = useContext(MyContext) as any;
  const { getAuth } = useAuthMiddleware(); //use the context to set the authenticated state
  useEffect(() => {
    //when page loads, check if the user is authenticated
    const fetchAuthStatus = async () => {
      try {
        const res: boolean = await getAuth(); // Await the asynchronous function
        if (res) {
          console.log("authenticated");
        } else {
          console.log("not authenticated");
        }
      } catch (error) {
        console.error("Error fetching authentication status:", error);
      }
    };

    fetchAuthStatus();
  }, []);
  return (
    <div className="w-full ">
      {/* <ProductCard
  image="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSje8f2XJraeaNRBhGrijcz1a3fKKQ58jWTMlnsg2Hzs7oaSlGQrzTsEM3EKmg2tzt-SfY3pMNluGfAfSYjJbC1r7CDCeCPfT4NYEodrsmVOr50EdXNTrhtkg"
  name="Wireless Headphones"
  price="$199.99"
  link="https://example.com/product/wireless-headphones"
/> */}
      <CardContainer />
      <div className="">
        <FilterButton />
        <Promptbottom />
      </div>
    </div>
  );
}

export default Home;
