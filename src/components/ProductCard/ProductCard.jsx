import './ProductCard.css'

const ProductCard = ({product}) => {
    return (
        <div className="product-card-container">
            <div className="prod-card-img-container">
                <img src={product.imageUrl} alt="" />
            </div>

            <div className="prod-card-description-container">
                <h2>{product.description}</h2>
                <span>u$s {product.price.toFixed(2)}</span>
            </div>
        </div>
    )
}
export default ProductCard;