import { useNavigate } from "react-router-dom"
import './styles/HotelCard.css'

const HotelCard = ({hotel}) => {

    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`hotels/${hotel.id}`)
    }

  return (
    <article className="card">
        <header className="card__header">
            <img className="card__img" src={hotel.images[0].url} alt="" />
        </header>
        <section className="card__body">
            <h3 className="card__title">{hotel.name}</h3>  
            <hr className="card__line"/>          
            <p className="card__data">{hotel.rating} ⭐</p> 
            <span className="card__data">{hotel.city.name}, {hotel.city.country}</span>
            <div className="card__data">$ {hotel.price}</div>
        </section>
        <footer className="footer">
            <button className="card__btn" onClick={handleClick}>See more...</button>
        </footer>
    </article>
  )
}


export default HotelCard