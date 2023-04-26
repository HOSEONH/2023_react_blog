// 리액트 부트스크랩을 사용하기 위해서는 css추가 필요
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import logo from './logo.svg';

// 라우터를 사용할 때는 BrowserRouter를 들고와서 사용
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// 각각의 페이지를 import 해서 사용
import Home from './page/Home'
import Boardlist from './page/Boardlist'
import Board from './page/Board'
import BoardForm from './page/BoardForm'
import LoginForm from './page/LoginForm'
import NavHeader from './components/NavHeader';

function App() {
  // 주소와 페이지(컴포넌트 연결)
  return (
    <div className="App">
      <BrowserRouter>
      {/* NavHeader의 Link를 사용하기 위해 Browser */}
      <NavHeader />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/boardlist' element={<Boardlist />} />
          <Route path='/board' element={<Board />} />
          <Route path='/boardform' element={<BoardForm />} />

          <Route path='/loginform' element={<LoginForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
