
import React from 'react'
import Table from './Table'
import image1 from "../images/image1.jpg"
import image2 from "../images/image2.jpg"
import image3 from "../images/image3.jpg"
import image4 from "../images/image4.jpg"
import image5 from "../images/image5.jpg"

const Item = () => {

    const data = [
        {
            number: 1,
            name: "Sweater",
            price: "2500",
            description: "A sweater is a piece of clothing worn on the upper body to keep the person warm. Sweaters are usually knitted or crocheted. Other names for sweaters are pullover, jersey, or jumper. Sweaters that open in the front are often called cardigans.",
            image: image1,


        },
        {
            number: 2,
            name: "Shoes",
            price: "2000",
            description: " Shoes are a type of footwear that provide comfort, support, and protection for the feet. They can also be worn for fashion, hygiene, and style. Some shoes are worn as safety equipment, such as steel-toe boots.",
            image: image2,
        },
        {
            number: 3,
            name: "Bag",
            price: "1000",
            description: "A bag is a soft container that can be used to carry items. Bags can be made from a variety of materials, including cloth, leather, plastic, or paper. They come in different shapes and sizes, and can have handles, straps, or wheels for carrying.",
            image: image3,
        },
        {
            number: 4,
            name: "Shoes",
            price: "1800",
            description: " Shoes are meant to provide support, comfort, and protection for the feet",
            image: image4,
        },
        {
            number: 5,
            name: "Watch",
            price: "1800",
            description: " watch makes it easy to see the time. It is also a fashion accessory for men and women, and expensive watches are designed for this purpose",
            image: image5,
        },
    ]

    return (
        <div >
            <table className='border-2 border-black'>
                <thead className='border-2 border-black'>
                    <th>S.N</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Description</th>
                    <th>Image</th>
                    <th>Action</th>
                </thead>

                {

                    data.map((item, index) => {
                        return (
                            <Table number={index + 1} name={item.name} price={item.price} des={item.description} img={item.image} />
                        )

                    })
                }
            </table>
        </div>
    )
}

export default Item
