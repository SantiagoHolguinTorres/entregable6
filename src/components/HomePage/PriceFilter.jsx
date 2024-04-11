import { useForm } from "react-hook-form"
import './styles/PriceFilter.css'

const PriceFilter = ({setFromTo}) => {

    const { handleSubmit, register, reset } = useForm()

    const submit = data => {
    const from = +data.from
    const to = data.to

        setFromTo({
            from: from === '' ? 0 : +from,
            to: to === '' ? Infinity : +to
        })


    }
  return (
    <section className="price__container">
      <h3 className="price__title">Price</h3>
      <form className="price__form" onSubmit={handleSubmit(submit)}>
        <label>
          <span>From</span>
          <input {...register('from')} type="number" />
        </label>
        <label>
          <span>To</span>
          <input {...register('to')} type="number" />
        </label>        
        
      </form>
      <div className="price__button">
        <button>Apply</button>
        </div>
    </section>
  )
}

export default PriceFilter