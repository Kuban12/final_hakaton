import React from 'react'

const Location = () => {
  return (
    <div className='home_page_location_main'>
      <div className='home_page_location_right'>
        <h3 className='home_page_location_title'>53 исполнителя живут неподалёку</h3>
        <p className='home_page_location_paragraph'>Обратитесь к ним, чтобы не ждать специалиста с другого конца города</p>
        <input type="text" className='home_page_location_input' placeholder='Ваш адрес' />
        <button className='home_page_location_button' >Расскажите что у вас случилось</button>
      </div>
      <div className='home_page_location_left'>
      <iframe className='home_page_location_map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15601.216752589704!2d74.56129981386907!3d42.87308001312088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb7dc91b3c881%3A0x492ebaf57cdee27d!2z0JHQuNGI0LrQtdC6!5e0!3m2!1sru!2skg!4v1667217781073!5m2!1sru!2skg"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  )
}

export default Location