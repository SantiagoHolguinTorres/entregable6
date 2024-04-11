import { useEffect, useState } from "react"
import useCrud from "../hooks/useCrud"
import ReserveCard from "../components/ReservationsPage/ReserveCard"
import FormReviews from "../components/ReservationsPage/FormReviews"
import './styles/ReservationsPage.css'

const ReservationsPage = () => {

  const [reserveSelected, setReserveSelected] = useState()

    const [ bookings, getBookings, , deleteBooking ] = useCrud()

    useEffect(() => {
        const url = 'https://hotels-api.academlo.tech/bookings'
      getBookings(url)
    }, [])
    console.log(bookings)
    
  return (
    <section className="reservations__container">
      <FormReviews
      reserveSelected={reserveSelected}
      setReserveSelected={setReserveSelected} 
      />
        <h2>Reservations</h2>
        <div>
            {
                bookings?.map(reserve => (
                    <ReserveCard
                    key={reserve.id}
                    reserve={reserve}
                    setReserveSelected={setReserveSelected} 
                    deleteBooking={deleteBooking}
                    />
                ))
            }
        </div>
    </section>
  )
}

export default ReservationsPage
