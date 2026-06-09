/* *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family:'poppins', sans-serif;
} */
/* .navigation .btnLogin-popup{
    width: 130px;
    height: 50px;
    background: transparent;
    border: 2px solid white;
    outline: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 1.1em;
    color: #fff;
    font-weight: 500;
    
} */
body{
    justify-content: center;
    text-align: center;
    display: flex;
    background: url("https://t3.ftcdn.net/jpg/05/73/34/02/360_F_573340270_dxzNvPan30gMk6YsHiYvR9JnX87ulIzc.jpg") no-repeat;
    background-position: center;
    background-size: cover;
}
.wrapper{
    margin-top: 100px;
    position: relative;
    width: 400px;
    height: 450px;
    background: transparent;
    border: 2px solid rgba(255, 255,255,.5);
    border-radius: 20px;
    backdrop-filter: blur(20px);
    box-shadow: 0 0 30px rgba(0,0 ,0,.5);
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden; 
    /* transform: scale(0); */
    transition: transform .5s ease ,height .2s ease;
}
/* .wrapper.active-popup{
    transform: scale(1);
} */
.wrapper.active{
    height: 520px;
}
.wrapper .form-box{
    width: 100%;
    padding: 45px;
}
.wrapper .form-box.login{
    transition: transform .18s ease;
    transform: translateX(0);
}
.wrapper.active .form-box.login{
    position: absolute;
    transform: translateX(-400px);
}
.wrapper .form-box.Register{
    position: absolute;
    transition: none;
    transform: translateX(400px);
}
.wrapper.active .form-box.Register{
    transition: transform .18s ease;
    transform: translateX(0);
}
.wrapper .icon-close{
    position: absolute;
    top: 0;
    right: 0;
    width: 45px;
    height: 45px;
    background: #162938;
    font-size: 2em;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom-left-radius: 20px;
    cursor: pointer;
    z-index: 1;

}
.form-box h2{
    font-size: 2rem;
    color: #162938;

}
.input-box{
    position: relative;
    width: 100%;
    height: 50px;
    border-bottom: 2px solid #162938;
    margin: 30px 0;
}
.input-box label{
    position: absolute;
    top: 50%;
    left: 5px;
    transform: translateY(-50%);
    font-size: 1rem;
    color: #162938;
    pointer-events: none;
    transition: .5s;
}
.input-box input:focus~label,
.input-box input:valid~label{
    top: -5px;

}
.input-box input{
    width: 100%;
    height: 100%;
    background: transparent;
    border: none;
    outline: none;
    font-size: 1em;
    color: #162938;
    font-weight: 600;
    padding: 0 35px 0 5px;
     position: relative; /* Ensure it's interactive */
    z-index: 1; 
}
.input-box .icon{
    position: absolute;
    right: 8px;
    font-size: 1.2rem;
    color:#162938 ;
    line-height: 57px;

}
.remember-forget{
    font-size: .9em;
    color: #162938;
    font-weight: 500;
    margin: -15px 0 15px;
    display: flex;
    justify-content: space-evenly;
}
.remember-forget1{
    position: relative;
    width: 100%;
    height: 50px;
    border-bottom: 2px solid #162938;
    margin: 5px 0;
}
.remember-forget label input{
    accent-color: #162938;
    margin-right:3px;
}
.remember-forget a{
    color: #162938;
    text-decoration: none;
}
.remember-forget a:hover{
    text-decoration: underline;
}
.btn{
    width: 100%;
    height: 45px;
    background: #162938;
    border: none;
    outline: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 1em;
    color: #fff;
    font-weight: 500;

}
.btn1{
    width: 100%;
    height: 45px;
    background: #162938;
    border: none;
    outline: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 1em;
    color: #fff;
    font-weight: 500;
    margin-top: 40px;
}
.login-register{
    font-size: .9em;
    color: #162938;
    text-align: center;
    font-weight: 500;
    margin: -10px 0 1px;
}
.login-register p a{
    color: #162938;
    text-decoration: none;
    font-weight: 600;
}
.login-register p a:hover{
    text-decoration: underline;
}
.register{
    width: 80%;
    padding-left: 40px;
}
.btnn{
	width: 100%;
    height: 45px;
    background: #162938;
    border: none;
    outline: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 1em;
    color: #fff;
    font-weight: 500;
}
