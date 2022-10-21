import React from 'react'

const Link = () => {
  return (
    <section>   
    <div className='profile'>
      <img id='profile_img' 
      src='https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg' 
      alt='Lisa' />
    </div>
    <h4 id='twitter'>Madame Lisa</h4>
    <p id='slack'>Ruth Aipoh</p>
    <div className='links'>
        <button id='btn_zuri'><a href="https://training.zuri.team/">Twitter Link</a></button>
        <button id='btn_zuri'><a href="https://training.zuri.team/">Zuri Team</a></button>
        <button id='books'><a href="http://books.zuri.team">Zuri Books</a></button>
        <button id='book_python'><a href="https://books.zuri.team/python-for-beginners?ref_id=melissa">Python Books</a></button>
        <button id='pitch'><a href="https://background.zuri.team">Background check for coders</a></button>
        <button id='book_design'><a href="https://books.zuri.team/design-rules">Design Books</a></button>
    </div>
    
    </section> 
  )
}

export default Link
