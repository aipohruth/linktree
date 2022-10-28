import React from 'react'
import f1 from './Assets/slacks.png'
import f2 from './Assets/github.png'
import f3 from './Assets/Vector.png'
import f4 from './Assets/footer3.png'
import f5 from './Assets/mob.png'
import f6 from './Assets/web.png'

const Link = () => {
  return (
    <section>   
      <img src={f5} className='mob' alt='icon'/>
      <img src={f6} className='web' alt='icon1'/>
    <div className='profile'>
      <img id='profile_img' 
      src='https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg' 
      alt='Lisa' />
    </div>
    <h3 id='twitter'>Madame Lisa</h3>
    <p id='slack'>aipohRuth</p>
    <div className='links'>
        <button id='twitter_link'><a href="#">Twitter Link</a></button>
        <button id='btn_zuri'><a href="https://training.zuri.team/">Zuri Team</a></button>
        <button id='books'><a href="http://books.zuri.team">Zuri Books</a></button>
        <button id='book_python'><a href="https://books.zuri.team/python-for-beginners?ref_id=aipohRuth">Python Books</a></button>
        <button id='pitch'><a href="https://background.zuri.team">Background check for coders</a></button>
        <button id='book_design'><a href="https://books.zuri.team/design-rules">Design Books</a></button>
    </div>
    <div className="icons">
      <img src={f1}  alt='slack' />
      <img src={f2} className='icon' alt='github' />
    </div>
    
<hr/>
    <footer className='footers'>
      <div className="inner-footer">
      <img src={f3} alt='Zuri' />
    <p>HNG Internship 9 Frontend Task</p>
      <img src={f4} alt='Zuri' />
      </div>
    </footer>
    </section> 
  )
}

export default Link
