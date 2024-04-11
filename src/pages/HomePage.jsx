import { useSelector } from "react-redux"
import HotelCard from "../components/HomePage/HotelCard"
import { useRef, useState } from "react"
import CategoryFilter from "../components/HomePage/CategoryFilter"
import PriceFilter from "../components/HomePage/PriceFilter"
import './styles/HomePage.css'

const HomePage = () => {

  const [menu, setMenu] = useState(true)

  const toggleMenu = () => {
    setMenu(!menu)
  }

  const [inputName, setInputName] = useState('')

  const [fromTo, setFromTo] = useState({
    from: 0,
    to: Infinity
  })

  const hotels = useSelector((states) => states.hotels)

  const inputValue = useRef()

  const handleChange = () => {  
    setInputName(inputValue.current.value)

  }

  console.log(hotels)

  const cbfilter = hotelInfo => {
    //filter by name
    const filterName = hotelInfo.name
    .toLowerCase()
    .includes(inputName.toLowerCase().trim())
    //filter by price
    const price = Number(hotelInfo.price)
    const filterPrice = price >= fromTo.from && price <= fromTo.to
    return filterName, filterPrice;
  }

  return (
    <div className="filter__container">
      
      <section className="filter__section">

      
      <h2 onClick={toggleMenu} className="filter__title">Filters <i class='bx bx-search-alt lupa' ></i></h2>  


      <div className={`first__section ${menu ? 'isActive' : ''}`}>
     
      <div className="input__card"> 
        <input className="input" onChange={handleChange} ref={inputValue} type="text" />
      </div>
      
        <div className="filter__price">
        <PriceFilter 
        setFromTo={setFromTo}
        />
        </div>

        <div>
        <CategoryFilter/>
        </div>

      
      </div>
      </section>


      <div className="container-card">
      {
        hotels?.filter(cbfilter).map((hotelInfo) => (
          <HotelCard
          key={hotelInfo.id}
          hotel={hotelInfo}
          />
        ))
      }
      </div>
    </div>
  )
}

export default HomePage