import React from 'react'
import f1 from './Assets/slacks.png'
import f2 from './Assets/github.png'
import f5 from './Assets/mob.png'
import f6 from './Assets/web.png'

const Link = () => {
  return (
    <section>   
      <img src={f5} className='mob' alt='icon'/>
      <img src={f6} className='web' alt='icon1'/>
    <div className='profile'>
      <img id='profile__img' 
      src='https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg' 
      alt='Lisa' />
    </div>
    <h3 id='twitter'>Madame Lisa</h3>
    <p id='slack'>aipohRuth</p>
    <div className='links'>
       <a id='twitter__link' href='https://twitter.com/M_e_l_y_sa'>Twitter Link</a>
        <a id='btn__zuri' href="https://training.zuri.team/">Zuri Team</a>
        <a  id='books' href="http://books.zuri.team">Zuri Books</a>
        <a id='book__python' href="https://books.zuri.team/python-for-beginners?ref_id=aipohRuth">Python Books</a>
        <a   id='pitch'href="https://background.zuri.team">Background check for coders</a>
        <a  id='book__design'href="https://books.zuri.team/design-rules">Design Books</a>
        <a id='contact' href="/contact">Contact Me</a>
    </div>
    <div className="icons">
      <img src={f1}  alt='slack' />
      <img src={f2} className='icon' alt='github' />
    </div>
    </section> 
  )
}

export default Link
