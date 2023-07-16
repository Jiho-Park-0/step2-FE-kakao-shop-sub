import { comma } from "../../utils/convert";
import Photo from "../atoms/Photo";

/**
 * 상품 정보 컬럼
 *
 * @param {object} product - 상품 정보
 * @param {string} product.ProductName - 상품 이름
 * @param {number} product.price - 상품 가격
 * @param {string} product.image - 상품 이미지
 * @returns {JSX.Element} 상품 정보 컬럼
 */

const ProductInformationColumn = ({ product }) => {
  const { ProductName, price, image } = product;
  return (
    <div className="product-information-column">
      <div className="col">
        <Photo src={image} alt={ProductName} />
      </div>
      <div className="col">
        <h1 className="name">{ProductName}</h1>
        <p className="price">{comma(price)}</p>
      </div>
    </div>
  );
};

export default ProductInformationColumn;
