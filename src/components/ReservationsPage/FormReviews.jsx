import { useForm } from "react-hook-form"
import useCrud from "../../hooks/useCrud"
import './styles/FormReview.css'


const FormReviews = ({reserveSelected, setReserveSelected}) => {

    

    const {handleSubmit, register, reset} = useForm()

    const [,, createReview] = useCrud()

    const submit = data => {
        const url = 'https://hotels-api.academlo.tech/reviews'
        data.hoteId = reserveSelected?.hotel.id
        data.rating = +data.rating
     createReview(url, data)
     setReserveSelected()
    }

  return (
    <article className="review__container">
      <h3 className="review__title">Reserve</h3>
      <section>
        <header>
          <img src={reserveSelected?.hotel.images[0].url} alt="" />
        </header>
        <h4>{reserveSelected?.hotel.name}</h4>
        <p>
          {reserveSelected?.hotel.city.name},{" "}
          {reserveSelected?.hotel.city.country}
        </p>
        <ul>
          <li>
            <span>Reservation Days</span>
            <span>{reserveSelected?.reservationsDays}</span>
          </li>
          <li>
            <span>subtotal Price</span>
            <span>{reserveSelected?.subtotal}</span>
          </li>
        </ul>
      </section>
      <form onSubmit={handleSubmit(submit)}>
        <label>
          <span>Rating</span>
          <select {...register('rating')}>
            <option value="5">⭐⭐⭐⭐⭐</option>
            <option value="4">⭐⭐⭐⭐</option>
            <option value="3">⭐⭐⭐</option>
            <option value="2">⭐⭐</option>
            <option value="1">⭐</option>
          </select>
        </label>
        <label>
          <span>Comments</span>
          <textarea {...register('comment')}/>
        </label>
        <button>Submit</button>
      </form>
    </article>
  )
}

export default FormReviews