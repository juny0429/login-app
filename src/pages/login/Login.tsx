import loginStyle from './Login.module.scss';
import React from "react";

import logoImage from '../../images/logo.png';

const Login = () => {


    return (
        <div className={loginStyle.container}>
            <div className={loginStyle.content}>

                <div className={loginStyle.title}>
                    <img src={logoImage} alt="로고 이미지" />
                    <span>GALLERY</span>
                </div>

                <form>
                        <input className={loginStyle.userInfoInput} id="id" name="id" placeholder="아이디를 입력해주세요." />
                        <input className={loginStyle.userInfoInput} id="password" name="password" placeholder="비밀번호를 입력해주세요."/>
                        <div className={loginStyle.idSave}>
                            <input type="checkbox" id="myCheckbox" name="myCheckbox" />
                            <label>아이디 저장</label>
                            <div className={`${loginStyle.mobileOnly} ${loginStyle.linkList}`}>
                                <span>아이디 찾기</span>
                                <span>비밀번호 찾기</span>
                            </div>
                        </div>
                    <button className={loginStyle.loginButton} type="submit">로그인</button>

                    <button className={`${loginStyle.mobileOnly} ${loginStyle.signUp}`}>회원가입</button>
                </form>

                <div className={`${loginStyle.pcOnly} ${loginStyle.linkList}`}>
                    <span>아이디 찾기</span>
                    <span>비밀번호 찾기</span>
                    <span>회원가입</span>
                </div>

            </div>
        </div>
    );
}

export default Login; 