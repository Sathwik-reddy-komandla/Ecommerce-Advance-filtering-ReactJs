import './Recommended.css'
import Button from '../components/Button'
function Recommended({handleClick}) {
  return (
    <>
      <div >
        <h2 className='recommended-title'>Recommended</h2>
        <div className="recommended-flex">
        <Button onClickHandler={handleClick} value="" title="All Products" >All Products</Button> 
          <Button onClickHandler={handleClick} value="Nike" title="Nike" >Nike</Button>
          <Button onClickHandler={handleClick} value="Adidas" title="Adidas" >Adidas</Button>
          <Button onClickHandler={handleClick} value="Puma" title="Puma" >Puma</Button>
          <Button onClickHandler={handleClick} value="Vans" title="Vans" >Vans</Button>
        </div>
      </div>
    </>
    )
}

export default Recommended