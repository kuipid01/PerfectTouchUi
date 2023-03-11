import React from 'react'
import './offer.scss'
import tel from '../../assets/teli.png'
import code from '../../assets/code.png'
import webdesign from '../../assets/webdesign.png'

const Offer = () => {
    const Cardoffer = ({card}) => <div className='offercard'>
        <div className="imgcontainer">
            <img src={card.img} alt="" />
        </div>
        <h2>{card.title}</h2>
        <p>{card.text}</p>
    </div>
    const offers = [
        {
            id:1,
            title:"Technical Writing",
            text:"A technical writer who is fice in diverse matters concerning the tech world",
            img:tel

        },
        {
            id:2,
            title:"Web Design",
            text:"I designed responsive and clean web pages and applications",

            img:code
        },
        {
            id:3,
            title:"Graphic Design",
            text:"Graphic design",

            img:webdesign
        },
    ]
  return (
    <div className='offer'>
        <p className='fistp'>Specialized in</p>
        <h4>What I Offer</h4>
        <div className="wrapper">
{
    offers.map((card)=>(
 
            <Cardoffer card={card}/>
  
        
    ))
}
</div>
    </div>
  )
}

export default Offer