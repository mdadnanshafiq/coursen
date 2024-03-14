import List from "../List/List";

const Cart = ({ cart, totalCredit, totalPrice, creditLeft }) => {
  //   console.log(cart);
  return (
    <div>
      <div className="card w-[330px] bg-base-100 shadow-xl">
        <div className="card-body items-start text-left">
          <p>
            Credit Hour Remaining: <span>{creditLeft}</span> hr
          </p>
          <hr className="w-full"></hr>
          <h2 className="card-title">Course Name</h2>
          {cart.map((item, idx) => {
            return (
              <div key={idx} className="flex">
                <span>{idx + 1}</span>
                <List course={item}> </List>
              </div>
            );
          })}
          <hr className="w-full"></hr>
          <p>
            Total Credit Hour: <span>{totalCredit}</span>
          </p>
          <hr className="w-full"></hr>
          <p>
            Total Price: <span>{totalPrice}</span> USD
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
