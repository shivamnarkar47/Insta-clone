import React from 'react';
import './Feed.css';
import InstaPost from './InstaPost';

function Feed() {
  return (
    <div className="feed">
      <InstaPost
        profilepic="https://images.unsplash.com/profile-1622240285757-b65539d1fbe2image?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff"
        username="austin_daniel"
        img="https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
        likes={2500}
        caption="Where you are dreaming to go, I am living there"
      />
      <InstaPost
        profilepic="https://images.unsplash.com/profile-1622240285757-b65539d1fbe2image?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff"
        username="jaritos_soda_47"
        img="https://images.unsplash.com/photo-1622495805440-0075dfea3318?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        likes={2500}
        caption="Where you are dreaming to go, I am living there"
      />
      <InstaPost
        profilepic="https://images.unsplash.com/profile-fb-1531682210-f4c4f6a917b2.jpg?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff"
        username="hari_panicker"
        img="https://images.unsplash.com/photo-1625190273603-0f5814961433?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        likes={2500}
        caption="Where you are dreaming to go, I am living there"
      />
    </div>
  );
}

export default Feed;
