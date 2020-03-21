<audio id="music" src="./music/bgmusic.mp3" loop="true" autoplay="true"></audio>

<header id="topHeader">
    <div id="navStatus">
        <div id="soundStatus">
            <img src="./img/icon/music_btn_off.svg" id="soundClick" />
            <p id="soundTxt">Sound On</p>
        </div>
        <div id="memStatus">
            <a href="">
                <img src="./img/icon/default_header.svg" />
            </a>
            <p><span class="login_btn">登入</span></p>
            <p><span class="creat_btn">註冊</span></p>
        </div>
    </div>
    <nav class="desktopHeader">
        <ul>
            <li class="@@link001-1">
                <a href="ghostIsland.php" class="title @@link001">
                    前進鬼島
                </a>
            </li>
            <li class="@@link001-2">
                <a href="adventrue.html" class="title @@link002">
                    尋鬼探險
                </a>
            </li>
            <li class="@@link001-3">
                <a href="leaderboard.html" class="title @@link003">
                    靈異票選
                </a>
            </li>
            <li>
                <a href="index.html">
                    <img id="topLogo" src="./img/logo/LOGO_white.png" />
                </a>
            </li>
            <li class="@@link001-4">
                <a href="game.html" class="title @@link004">
                    試膽測驗
                </a>
            </li>
            <li class="@@link001-5">
                <a href="forum.html" class="title @@link005">
                    靈異討論
                </a>
            </li>
            <li class="@@link001-6">
                <a href="member.html" class="title @@link006">
                    會員中心
                </a>
            </li>
        </ul>
    </nav>

    <nav class="rwdHeader">
        <div class="rwdHeaderWrap">
            <a href="../index.html">
                <img id="topLogo2" src="./img/logo/LOGO_white.png" />
            </a>

            <button class="hamburger hamburger--elastic" id="hamburger" type="button">
                <span class="hamburger-box">
                    <span class="hamburger-inner"></span>
                </span>
            </button>
        </div>
    </nav>

    <div id="rwdHamburgerMenu">
        <nav>
            <ul>
                <a href="../ghostIsland.html">
                    <li class="title">前進鬼島</li>
                </a>
                <a href="../adventrue.html">
                    <li class="title">尋鬼探險</li>
                </a>
                <a href="../leaderboard.html">
                    <li class="title">靈異票選</li>
                </a>
                <a href="../game.html">
                    <li class="title">試膽測驗</li>
                </a>
                <a href="../forum.html">
                    <li class="title">靈異討論</li>
                </a>
                <a href="../member.html">
                    <li class="title">會員中心</li>
                </a>
                <a>
                    <li class="title login_btn">登入/註冊</li>
                </a>

                <li id="hamburgerSound" class="title">Sound Off</li>
            </ul>
        </nav>
    </div>
    <div id="indexLogin">
        <section class="login_page1" style="display: none;">
            <div class="logincancel"></div>
            <div class="login_cover">
                <img src="./img/logo/LOGO_black.png" alt="" />
            </div>
            <form action="" method="POST">
                <p>
                    <input type="text" id="memid" placeholder="帳號" />
                </p>
                <p>
                    <input type="text" id="mempwd" placeholder="密碼" />
                </p>
            </form>
            <div id="loginbutton">登入</div>
            <div class="next_login">註冊會員</div>
        </section>

        <section class="login_page2" style="display: none;">
            <div class="logincancel"></div>
            <div class="login_cover">
                <img src="./img/login/registered-01 (1).png" alt="" />
            </div>
            <form action="" method="POST">
                <p>
                    <label for="memid">會員帳號</label>
                    <input type="text" id="memid" placeholder="4~12英文字母、數字" />
                </p>
                <p>
                    <label for="mempwd">會員密碼</label>
                    <input type="text" id="mempwd" placeholder="4~12英文字母、數字" />
                </p>
                <p>
                    <label for="mempwdcheck">確認密碼</label>
                    <input type="text" id="mempwdcheck" placeholder="重新確認密碼" />
                </p>
                <p>
                    <label for="memname">會員姓名</label>
                    <input type="text" id="memname" placeholder="姓名" />
                </p>
                <p>
                    <label for="memcell">手機號碼</label>
                    <input type="text" id="memcell" placeholder="09XX-XXX-XXX" />
                </p>
                <p>
                    <label for="memail">電子信箱</label>
                    <input type="text" id="memail" placeholder="輸入Email須包含{@和.}" />
                </p>
            </form>
            <div id="sure_btn">註冊會員</div>
        </section>
        <!-- <script>
            $(document).ready(function() {
                $(".login_btn").click(function() {
                    $("#indexLogin, .login_page1").css("display", "block")
                })
                $(".creat_btn").click(function() {
                    $("#indexLogin, .login_page2").css("display", "block")
                })
                $(".next_login").click(function() {
                    $(".login_page2").css("display", "block")
                    $(".login_page1").css("display", "none")
                })
                $(".logincancel").click(function() {
                    $(".login_page1 , .login_page2").css("display", "none")
                    $("#memid, #mempwd, #mempwdcheck, #memname, #memcell, #memail").val("")
                })
            })
        </script> -->
    </div>
</header>
