import { AiFillStar } from 'react-icons/ai';
import { BsFillBagHeartFill} from 'react-icons/bs'

const Card = ({img,title,star,reviews,prevPrice,newPrice}) => {
  return (
    <>
        <section className="card">
          <img src={img}
          className='card-img'
           alt={title}/>
          <div className='card-details'>
            <h3 className='card-title'>{title}</h3>
            <section className="card-reviews">
              {/* <AiFillStar className='rating-star'/ >    
              <AiFillStar className='rating-star'/ > 
              <AiFillStar className='rating-star'/ > 
              <AiFillStar className='rating-star'/ >  */}
              {star}{star}{star}{star}{star}
            <span className='total-reviews'>{reviews}</span>
            </section>
            <div className='card-price'>
                <div className='price'>
                  <del>${prevPrice}</del>{newPrice}
                </div>
                <BsFillBagHeartFill className='bag-icon'/>
            </div>
          </div>
        </section>
    </>
  )
}

export default Card