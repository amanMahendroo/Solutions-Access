import {BsChevronLeft, BsChevronRight} from 'react-icons/bs'
import React, { useState } from 'react'
import Pfp from '../assets/founder-pfp.jpeg'
import Carousel from './helper/carousel.js'

export default function Founder() {

    const quotes = [
        {
            text: `I have known Atul as a business partner who has been very focussed 
            on delivering on time results and have displayed supportive 
            leadership towards his team. His strong acumen towards business and 
            customer and his ability to strategically link things to the key 
            outcome is worth appreciation. Its been good working with him. 
            Atul brings immense value to those he works with.`,
            author: `Mahua Chakrabarty`,
            desn: `CHRO-APAC at Maccaferri`
        },
        {
            text: `Atul is known to me for last 5 years, he is an astute Consultant 
            helping us to close all kinds of challenging positions. he is our 
            partners in progress and as a person highly reliable, dependable.`,
            author: `Sujan Mukherjee`,
            desn: `HR leader for Group Software at Stellantis`
        },
        {
            text: `Atul is result oriented professional with an attitude to deliver 
            the quality services. He is prompt in response and always available 
            to support in case of any requirement. He is soft spoken but firm 
            in his views. Having good experience working with him.`,
            author: `Ashutosh Anshu`,
            desn: `CHRO at Hitachi India`
        },
    ]
    
    const [current, setCurrent] = useState(0)
    const [total, setTotal] = useState(quotes.length)

    return (
        <div className="section">
            <img className="pfp" align="left" src={Pfp} alt="Atul Mahendroo" />
            Atul Mahendroo founded Solutions Access in the year 2011 and has nurtured the 
            organisation to make it blossom into a respected and reliable name in the 
            executive search space. He has successfully built Solutions Access to become 
            a valued and trusted partner for their clients, fulfilling their talent 
            needs both within India and globally. Atul has 30 years of rich experience 
            behind him, both in industry as well as executive search. Prior to entering 
            the executive search business, Atul headed sales and marketing function in 
            some of the top business organisations in tyres, consumer goods, and 
            services sectors. He has also worked with a couple of leading global and 
            Indian search and selection firms as head of engineering, automotive, consumer, 
            services and retail practices. He has hands on experience of successfully 
            closing several senior/cxo level mandates for his clients. Coming from sales 
            and marketing background, Atul believes in building strong and lasting 
            relationships which have helped him immensely in developing an exhaustive network 
            of professionals across functions and industries.
            <br /><br />
            Atul is an MBA from IMT, Ghaziabad and holds a bachelors degree in business 
            studies from SS College of business studies, Delhi University. He is passionate 
            about fitness and is also keenly interested in travelling and food.

            <br /><br />

            <strong>Client Testimonials</strong>

            <Carousel>
                {quotes.map((el, i) => (
                    <div key={i}>
                        <div className="text">{el.text}</div>
                        <div className="author">- {el.author}</div>
                        <div className="desn">{el.desn}</div>
                    </div>
                ))}
            </Carousel>
        </div>
    )
}


