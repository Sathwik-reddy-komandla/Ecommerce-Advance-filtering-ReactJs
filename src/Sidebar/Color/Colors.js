import './Colors.css';
import Input from '../../components/Input';
const Colors = ({handleChange}) => {
  return (
    <div>
     <h2 className="sidebar-label-container color-title">
        Color
          </h2>
          <label className="sidebar-label-container">
            <input type="radio" name="test2" onChange={handleChange} value="" />
            <span className="checkmark all"></span>All
          </label>
          <Input
            handleChange={handleChange}
            value="black"
            title="Black"
            name="test1"
            color="black"
          />
          <Input
            handleChange={handleChange}
            value="blue"
            title="blue"
            name="test1"
            color="blue"
          />
          <Input
            handleChange={handleChange}
            value="red"
            title="red"
            name="test1"
            color="red"
          />
          <Input
            handleChange={handleChange}
            value="green"
            title="green"
            name="test1"
            color="green"
          />
      
        <label className="sidebar-label-container">
        <input type="radio" onChange={handleChange} value="white" name="test1"/>
        <span className='checkmark' style={{background:"White",border:"2px solid black"}}></span>White
        </label>
     
    
    </div>
  )
}

export default Colors