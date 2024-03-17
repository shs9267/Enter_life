// Home.js
import React from 'react';
import { Link } from 'react-router-dom';

function Home(){
  return (
    <div>
      <h2>홈 페이지</h2>
      <p>다음으로 이동하실 페이지를 선택하세요:</p>
      <ul>
        <li>
          <Link to="/chat">채팅 페이지로 이동</Link>
        </li>
        <li>
          <Link to="/review">리뷰 페이지로 이동</Link>
        </li>
        <li>
          <Link to="/question">질문 페이지로 이동</Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;
