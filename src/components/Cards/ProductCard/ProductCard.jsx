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
        <h3 className={styles.title}>{product.brand}</h3>
        <p className={styles.brandTitle}>{product?.title}</p>
        <div className={styles.priceRow}>
          {product?.discount_price > 0 && (
            <h4 className={styles.priceRowDiscount}>{product.discount_price}</h4>
          )}
          {product.discount_price > 0 ? (
            product?.discount_rate != '0%' && (
              <p className={styles.priceRowNormal}>{product.normal_price}</p>
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
