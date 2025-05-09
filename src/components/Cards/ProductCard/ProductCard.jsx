import Image from 'next/image';
import styles from './ProductCard.module.css';

const ProductCard = ({ product }) => {
  return (
    <article className={styles.cardBox}>
      <figure className={styles.imgContainer}>
        <Image 
          src={product.image} 
          fill
          style={{ objectFit: 'cover' }}
          alt="uf-generic" 
        />
      </figure>
      <div className={styles.footer}>
        <p className={styles.brandTitle}>{product.brand}</p>
        <h3 className={styles.title}>{product?.title}</h3>
        <div className={styles.priceRow}>
          {product?.discount_price > 0 && (
            <h4 className={styles.priceRowDiscount}>
              <p>{product.discount_price}</p>
            </h4>
          )}
          {product.discount_price > 0 ? (
            product?.discount_rate != '0%' && (
              <span className={styles.priceRowNormal}>
                <p>{product.normal_price}</p>
              </span>
            )
          ) : (
            <h4 className={styles.priceRowDiscount}>
              <p>{product.normal_price}</p>
            </h4>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
