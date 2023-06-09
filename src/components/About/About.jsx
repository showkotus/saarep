import React, { useState } from 'react';
import lavina from '../../assets/Lavina Photo.jpg'
import tanvir from '../../assets/Tanvir Headshot.jpg'
import atul from '../../assets/atul gupta_photo.jpeg'
import ayesha from '../../assets/ayeshaayubi.jpg'
import anita from '../../assets/anita.jpg'
import nick from '../../assets/nick.jpg'
import Modal from '../Modal/Modal';
const About = () => {
    const [name, setName] = useState('')
    const [modalStatus, setModalStatus] = useState(false)
    const users = [
        {
            name: "Lavina Samtani",
            position: "Member Relations",
            img: lavina
        },
        {
            name: "Tanvir Aziz",
            position: "President",
            img: tanvir
        },
        {
            name: "Atul Gulta",
            position: "Treasurer",
            img: atul
        },
        {
            name: "Ayesha Ayubi",
            position: "Director - Business Relations",
            img: ayesha
        },
        {
            name: "Anita George",
            position: "Cultural Director",
            img: anita
        },
        {
            name: "Nick Rowan",
            position: "Education Director",
            img: nick
        },

    ]
    return (
        <div>
            <h1 className='text-center text-black text-2xl font-bold my-4 uppercase'>About Us</h1>
            <div id='about' className='my-4 p-4 grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    users.map((user, index) => {
                        return <div key={index} className='rounded shadow-lg p-4 text-center'>
                            <img src={user.img} alt="" className='rounded-full mb-3 h-[220px] w-[220px] mx-auto' />
                            <div>
                                <h3 className='font-bold capitalize text-gray-500'>{user.name}</h3>
                                <h4 className='font-bold capitalize text-gray-500'>{user.position}</h4>
                                <button onClick={() => setName(`${user.name}`)} className='my-4'><label onClick={() => setModalStatus(true)} htmlFor="see-bio-modal" className="px-6 py-2 rounded text-white uppercase text-sm bg-gray-800 hover:bg-gray-900 font-bold cursor-pointer">view bio</label></button>
                            </div>
                        </div>
                    })
                }
            </div>
            {
                name.length > 0 && <Modal names={{ name, modalStatus, setModalStatus }}></Modal>
            }

        </div>

    );
};

export default About;