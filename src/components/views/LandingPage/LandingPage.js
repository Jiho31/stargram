import React, { Component } from 'react';
import './LandingPage.css'

class IphoneContainer extends Component {
    render() {
        return (
            <section className="iphone-image">

            </section>
        );
    }
}

class LoginContainer extends Component {
    render() {
        return (
        <section className="login-container">
            <h2 className="insta-logo" /> 
            <form className="login-form">
                <input placeholder="전화번호, 사용자 이름 또는 이메일" />

                <input type="password" placeholder="비밀번호" />

                <button>로그인</button>
            </form>
            <div className="divider">
                <div className="dividing-bar"></div>
                <div style={{ fontSize: '13px', color: '#8e8e8e', margin: '0 5px', fontWeight: '600' }}>또는</div>
                <div className="dividing-bar"></div>
            </div>
            <a className="facebook-login" >
                <span className="facebook-logo"></span>
                <span style={{ fontSize: '14px', fontWeight: '600' }}>Facebook으로 로그인</span>
            </a>
            <a className="find-password">비밀번호를 잊으셨나요?</a>
        </section>
        );
    }
}

class RegisterContainer extends Component {
    render() {
        return (
            <section>
                <span>계정이 없으신가요?</span>
                <button id="registerButton">가입하기</button>
            </section>
        );
    }
}

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <nav>
                    <ul>
                        <li>소개</li>
                        <li>도움말</li>
                        <li>홍보 센터</li>
                        <li>API</li>
                        <li>채용 정보</li>
                        <li>개인정보처리방침</li>
                        <li>약관</li>
                        <li>위치</li>
                        <li>인기 계정</li>
                        <li>해시태그</li>
                        <li>언어</li>
                    </ul>
                </nav>
                <div className="copyright-info">
                    © 2020 INSTAGRAM FROM FACEBOOK
                </div>
            </footer>
        );
    }
}

class LandingPage extends Component {
  render() {
    return (
        <>
            <article style={{ display: 'flex', flexDirection: 'row' }}>
                <IphoneContainer />
                <LoginContainer />
                <RegisterContainer />
            </article>
            <Footer />
        </>
    );
  }
}

export default LandingPage;