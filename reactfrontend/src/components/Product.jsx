import React from 'react'
import Card from './card'
import image1 from "../images/ram.jpg"
import image2 from "../images/kedar.jpg"
import image3 from "../images/Pooja.jpg"
import image4 from "../images/hari.jpg"
import image5 from "../images/prashant.jpg"
import image6 from "../images/gopal.jpg"





const Product = () => {

  const data =[
    {
      image: image1,
      name: "Ram ",
      address: "Itahari",
      description: "Known for his courage, loyalty and devotion, Ram is a symbol of perseverance and justice and a role model of the perfect human being.",
    },
    {
      image: image2,
      name: "Kedar",
      address: "Biratnagar",
      description : "Barbarika alias Khatu Shyamji or Shyam Baba was a grandson of the brave prince, Bhima, second of the Pandava brothers. ",
    },
    {
      image:image3,
      name: "Pooja",
      address: "pokhara",
      description : "Devi Sita is a well known Hindu Goddess acknowledged for her courage, purity, dedication, loyalty, and sacrifice. ",
    },
    {
      image: image4,
      name: "Hari",
      address: "Ktm",
      description : "Lord Hari is called Lord Vishnu in Hinduism. Lord Hari is a synonym for Lord Vishnu.",
    },
    {
      image: image5,
      name: "Prashant",
      address: "Morang",
      description : "Prashant is a masculine name of Hindu origin that means it comes from sanskrit shanta means calm or peaceful.", 
    },
    {
      image: image6,
      name: "Gopal",
      address: "Udayapur",
      description : "Gopal was a very intelligent man. His King appreciated Gopal and the courtiers were jealous of Gopal.",
    },
  ]
  return (
    <div  className='w-full p-8'>
        <div className='grid grid-cols-3 gap-2'>
          {
            data.map((item)=>{
                return(
                    
                           <Card img={item.image} name={item.name} address={item.address} des = {item.description}/>
                    
                )
            })
            }
           
            </div>
            </div>
  )
}

export default Product