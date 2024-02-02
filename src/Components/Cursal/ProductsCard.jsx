
import PropTypes from "prop-types";
import { Suspense } from "react";

const ProductsCard = ({ title, discription, LOTTIEanimationData, id }) => (
    <div
      className='lg:w-3/5 w-full  min-h-[400px] bg-[#3092DB] relative rounded-3xl overflow-hidden '
      role='tabpanel'
      id={`product-tab-${id}`}>
      <Suspense fallback={<div>Loading...</div>}>
        <ProductsCard
          title={title}
          discription={discription}
          LOTTIEanimationData={LOTTIEanimationData}
        />
      </Suspense>
    </div>
  )

ProductsCard.propTypes = {
  title: PropTypes.string.isRequired,
  discription: PropTypes.string.isRequired,
  LOTTIEanimationData: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
};

export default ProductsCard;