import { useForm } from "react-hook-form"
import useCrud from "../../hooks/useCrud"
import './styles/FormReserve.css'

const FormReserve = ({hotelId}) => {

  const {handleSubmit, register, reset} = useForm()

  const [,,createBooking] = useCrud()

  

  const submit = data => {
    const url = 'https://hotels-api.academlo.tech/bookings'
    data.hotelId = Number(hotelId)
    createBooking(url, data)
    }

  return (

    <section>
      <h3 className="form__title">Do you want to reserve this hotel?</h3>
      <form className="form__container" onSubmit={handleSubmit(submit)}>
        <label className="form__label">
          <span>Check-in</span>
          <input {...register('checkIn')} type="date" />
        </label>
        <label className="form__label">
          <span>Check-out</span>
          <input {...register('checkOut')} type="date" />
        </label>
        <button className="form__btn">Submit</button>
      </form>
    </section>
  )
}

export default FormReserve