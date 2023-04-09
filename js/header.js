const header = document.querySelector("#header");
header.outerHTML = `<header class="header" id="header">
<div class="banner">
               <div class="header_navbar_col_search">
                   <form action="" class="search">
                       <input type="text" placeholder="Tìm Kiếm Sản Phẩm..."  >
                       <button class="searchbutton">
                           <i class="fa-solid fa-magnifying-glass" ></i>
                       </button>
                   </form>
               </div>
               <div class="header_navbar_logo">
                   <a href="/index.html"><img src="/img/logo.png" alt="logo"> </a>
               </div>
               <div class="header_navbar_hidden">
                   <div class="header_navbar_login">
                       <div class="header_navbar_loginbutton">
                           <p style="margin-bottom: 5px;"> Xin Chào Quý Khách </p>
                           <a href="/html/loginform.html">Đăng nhập</a> <small>hoặc</small> <a href="">Đăng ký</a>
                       </div>
                   </div>
                   <div class="header_navbar_heartcart">
                   <a href="">
                       <i class="fa-regular fa-heart" style="font-size: 30px;margin-left:5px"></i>
                   </a>
                   </div>
                   <div class="header_navbar_cart">
                       <a href="">
                           <i class="fa-sharp fa-regular fa-cart-plus" style="font-size: 28px;margin-left:5px"></i>
                       </a>
                   </div>
               </div>
           </div>
           <div class="header_nav">
               <ul class="navbar">
                <li class="navitem"><a href="/index.html">TRANG CHỦ</a></li>
                <li class="navitem"><a href="">GIỚI THIỆU</a></li>
                <li class="navitem">
                    <a href="">THƯƠNG HIỆU</a>
                    <div class="subnav">
                        <div class="subnav_item">
                            <a href="">Credd</a> <br>
                            <a href="">Versace</a> <br>
                            <a href="">Gucci</a> <br>
                            <a href="">Missoni</a> <br>
                            <a href="">Burberry</a>
                        </div>
                        <div class="subnav_item">
                            <a href="">Tom Ford</a> <br>
                            <a href="">Roja</a> <br>
                            <a href="">Maison</a> <br>
                            <a href="">Nar</a> <br>
                            <a href="">Calvin Klein</a>
                        </div>
                        <div class="subnav_item">
                            <a href="">Le Labo</a> <br>
                            <a href="">Channel</a> <br>
                            <a href="">Ultra</a> <br>
                            <a href="">Dior</a> <br>
                            <a href="">Afnan</a>
                        </div>
                        <div class="subnav_item">
                            <a href="">Hermes</a> <br>
                            <a href="">Kilian</a> <br>
                            <a href="">Nautica</a> <br>
                            <a href="">Gio</a> <br>
                            <a href="">Louis Vuitton</a>
                        </div>
                    </div>
                </li >
                <li class="navitem">
                    <a href="">NƯỚC HOA</a>
                    <div class="subnav" id="nuochoa">
                        <div>
                            <a href="">Nước hoa Nam</a> <br>
                            <a href="">Nước hoa Nữ</a> <br>
                            <a href="">Nước hoa Unisex</a>
                        </div>
                    </div>
                </li>
                <li class="navitem"><a href="">KIẾN THỨC</a></li>
                <li class="navitem"><a href="/html/lienhe.html">LIÊN HỆ</a></li>
               </ul>
           </div>
</header>`