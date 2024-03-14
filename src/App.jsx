import { useState } from "react";
import "./App.css";
import Cart from "./components/Cart/Cart";
import Courses from "./components/Courses/Courses";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

function App() {
  const [cart, setCart] = useState([]);
  const [totalCredit, setTotalCredit] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [creditLeft, setCreditLeft] = useState(20);

  const handleCart = (course, credit, price) => {
    const exist = cart.find((item) => item.id === course.id);
    if (!exist) {
      if (creditLeft - credit < 0) {
        return toast.error("You can take maximum 20 credits.");
      } else {
        const newCart = [...cart, course];
        setCart(newCart);
        setTotalCredit(totalCredit + credit);
        setTotalPrice(totalPrice + price);
        setCreditLeft(creditLeft - credit);
        toast.success("Course Added !");
      }
    } else {
      toast.warn("Course Already Selected !");
    }
  };

  // console.log(cart);

  return (
    <div className="md:max-w-[1366px] mx-auto">
      <div>
        <h1 className="text-5xl text-primary font-bold text-center p-4">
          Coursen
        </h1>
      </div>
      <div className="flex md:flex-row flex-col justify-center md:items-start items-center gap-4">
        <div className="mb-8">
          <Courses handleCart={handleCart}></Courses>
        </div>
        <div className="">
          <Cart
            totalCredit={totalCredit}
            totalPrice={totalPrice}
            cart={cart}
            creditLeft={creditLeft}
          ></Cart>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
