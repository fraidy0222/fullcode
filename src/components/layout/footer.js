import React from 'react';

import { BackTop } from 'antd';
import {ThunderboltFilled ,FacebookFilled, TwitterSquareFilled, LinkedinFilled, InstagramFilled, UpSquareFilled} from '@ant-design/icons';

function AppFooter() {
  return (
    <div className="container-fluid">
      <div className="footer">
        <div className="logo">
          <ThunderboltFilled/>
          <a href="http://google.com">Full Code</a>
        </div>
        <ul className="socials">
          <li><a href="https://www.facebook.com/"><FacebookFilled /></a></li>
          <li><a href="https://www.twitter.com/"><TwitterSquareFilled /></a></li>
          <li><a href="https://www.linkedin.com/"><LinkedinFilled /></a></li>
          <li><a href="https://www.instagram.com/"><InstagramFilled /></a></li>
        </ul>
        <div className="copyright">Copyright &copy; 2020 Full Code</div>
        <BackTop>
          <div className="goTop"><UpSquareFilled/></div>
        </BackTop>
      </div>
    </div>
  );
}

export default AppFooter;