
import './Products.css';

function Products({result}) {
  console.log("results from product")
  console.log(result)
  return (
    <>
      <section className='card-container'>
      {result}
      
      
      </section>
    </>
  )
}

export default Products