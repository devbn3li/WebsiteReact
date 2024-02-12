import PropTypes from "prop-types";

function ProductsCard({ data }) {
  return (
    <div className="absolute w-full h-full">
      <div className="bg-[#F9FFF5] text-[#000] duration-700 hover:scale-[.97] cursor-pointer overflow-hidden relative rounded-3xl h-full">
        {data}
      </div>
    </div>
  );
}

ProductsCard.propTypes = {
  data: PropTypes.object
  // title: PropTypes.string.isRequired,
  // discription: PropTypes.string.isRequired,
  // LOTTIEanimationData: PropTypes.string.isRequired,
};

export default ProductsCard;