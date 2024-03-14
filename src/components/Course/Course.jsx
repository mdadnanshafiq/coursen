import { FaDollarSign } from "react-icons/fa6";
import { IoBookOutline } from "react-icons/io5";

const Course = ({ course, handleCart }) => {
  const { name, description, photo, price, credit } = course;
  return (
    <div>
      <div className="card w-[330px] h-[500px] bg-base-100 shadow-xl flex flex-col *:text-left *:items-start">
        <figure className="px-10 pt-10">
          <img src={photo} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
          <div className="flex gap-4 items-center justify-between my-4">
            <FaDollarSign /> Price: {price} <IoBookOutline /> Credit: {credit}hr
          </div>
          <div className="card-actions w-full">
            <button
              onClick={() => handleCart(course, credit, price)}
              className="btn btn-primary w-full"
            >
              Select
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
