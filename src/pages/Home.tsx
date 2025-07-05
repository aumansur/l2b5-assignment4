import AllBookLanding from "@/components/module/AllBookLanding";

import Slider from "@/components/module/Slider";
import BorrowBook from "./BorrowBook";

const Home = () => {
  return (
    <div>
      <div className="min-h-screen w-screen">
        <Slider />
      </div>
      <div className="mt-10">
        <AllBookLanding />
      </div>
      <div className="mt-10">
        <BorrowBook />
      </div>

      <div className="py-8"></div>
    </div>
  );
};

export default Home;
