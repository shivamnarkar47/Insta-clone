import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import SendIcon from '@material-ui/icons/Send';
import './Header.css';

function Header() {
  return (
    <div className="header">
      <AddIcon />
      <h2>Instagram</h2>
      <SendIcon />
    </div>
  );
}

export default Header;
