import { Link, useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import { useEffect } from "react"
import { Map, Marker } from "pigeon-maps"
import OtherHotels from "../components/HotelsIdPage/OtherHotels"
import FormReserve from "../components/HotelsIdPage/FormReserve"
import './styles/HotelesIdPage.css'

const HotelsIdPage = () => {

const { id } = useParams()
const url = `https://hotels-api.academlo.tech/hotels/${id}`
const [ hotel, getHotel ] = useFetch(url)

useEffect(() => {
  getHotel()
}, [id])




  return (
    <div className="id__container">

      <h2 className="id__name">{hotel?.name}</h2>
      <h3 className="id__rating">RATING - {hotel?.rating} ⭐</h3>
      <div className="slider">        
        <img className="id__photo" src={hotel?.images[0].url} alt="" />

        <div className="id__map">
        {
          hotel &&
          <Map 
          height={200} 
          defaultCenter={[+hotel?.lat, +hotel?.lon]} 
          zoom={15} 
          maxZoom={16} 
          minZoom={10}
          >
            <Marker anchor={[+hotel?.lat, +hotel?.lon]} color="#0A1828" width={40}/>
          </Map>
        }
        </div>
        
        
        
      </div>
      <section className="id__characrteristics">
        <h3 className="id__country">{hotel?.city.name}, {hotel?.city.country}</h3>
        <p className="id__address">
          <i className = 'bx bx-map' ></i>
          <span>{hotel?.address}</span>
          <hr className="id__line"/>
        </p>
        <p className="id__description">
          {hotel?.description}
        </p>
        <section className="id__reservation">
          {
            localStorage.getItem('token')
            ? <FormReserve hotelId={hotel?.id}/>
            : <h4>If you want to make a reservation, please <Link to ='/login' className="id__login">Login</Link></h4>
          }          
          
        </section>
        <OtherHotels hotel={hotel}/>
      </section>
      
    </div>
  )
}

export default HotelsIdPage