import React from 'react'

const Slides = () => {
  return (
    <>
       <div className='home_page_slides_main'>
      <div className='home_page_slides_left'>
        <h3 className='home_page_slides_title'>Поможем с подбором исполнителя</h3>
        <p className='home_page_slides_paragraph'>Предлагаем исполнителей, которые соответствуют вашему заказу. Вам больше не нужно изучать десятки профилей — выбирайте сразу из подходящих вариантов</p>
        <p className='home_page_slides_paragraph'>Находим исполнителей, которые точно готовы взяться за дело</p>
        <p className='home_page_slides_paragraph'>Проверяем каждый отзыв. Если заказ спорный, мы узнаем подробности у исполнителя и заказчика</p>
        <p className='home_page_slides_paragraph'>Ставим объективную оценку. В рейтинге мы учитываем опыт исполнителя, стабильность качества работы, культуру общения и пунктуальность</p>
      </div>
      <div className='home_page_slides_right'>
        <div className="pic-ctn">
          <img src="https://picsum.photos/200/300?t=1" alt="" className="pic"/>
          <img src="https://picsum.photos/200/300?t=2" alt="" className="pic"/>
          <img src="https://picsum.photos/200/300?t=3" alt="" className="pic"/>
          <img src="https://picsum.photos/200/300?t=4" alt="" className="pic"/>
          <img src="https://picsum.photos/200/300?t=5" alt="" className="pic"/>
      </div>
    </div>

    </div>
    </>
  )
}

export default Slides