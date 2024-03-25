import PropTypes from "prop-types";
import Feature from "../Feature/Feature";
const PriceOption = ({ option }) => {
  const { name, price, features } = option;

  return (
    <div className="bg-teal-700 p-6 flex flex-col rounded-2xl mt-6 ">
      <h2 className="text-center">
        <span className="text-7xl font-extrabold">{price}</span>
        <span className="text-2xl">/month</span>
      </h2>
      <h4 className="text-3xl text-center my-5">{name}</h4>
      <div className="pl-8 flex-grow">
        {features.map((feature, index) => (
          <Feature key={index} feature={feature}></Feature>
        ))}
      </div>

      <button className="bg-slate-600 w-full mt-6 py-2 font-bold rounded-xl hover:bg-slate-700">Buy Now</button>
    </div>
  );
};

PriceOption.propTypes = {
  option: PropTypes.object,
};
export default PriceOption;
