import React from 'react'

const ProfileCard = ({author}) => (
  <div style={{ boxShadow: '2px 2px 2px 2px #ccc', borderRadius: 5, padding: 10, textAlign: 'center' }}>
    <h3>About me</h3>
    <img style={{ marginBottom: 0 }} src='http://res.cloudinary.com/dzvutmr06/image/upload/r_360/v1460890322/defaults/avatar.jpg' />
    {author? <p>{author.shortDesc}</p> : ``}
  </div>
)

export default ProfileCard