import React from 'react'

const ProfileCard = ({author}) => (
  <div style={{ boxShadow: '2px 2px 2px 2px #ccc', borderRadius: 5, padding: 10, textAlign: 'center' }}>
    <h3>About me</h3>
    <img style={{ marginBottom: 0 }} src='https://res.cloudinary.com/dzvutmr06/image/upload/c_fill,ar_1:1,g_auto,r_max,b_rgb:FFFFFF/v1531310594/20171229_112320_e5f0zb.jpg' />
    {author? <p>{author.shortDesc}</p> : ``}
  </div>
)

export default ProfileCard