import React from "react";

function Footer () {
    return (
        <footer>
            <div id="socials">
                <ul class="nav flex-column">
                    <li class="nav-item">
                        <a href="https://github.com/nenebeji" id="github" target="_blank" rel='noreferrer noopener'><i class="fa-brands fa-github"></i></a>
                    </li>
                    <li class="nav-item">
                        <a href="https://www.linkedin.com/in/oritsegidenenebeji/" id="linkedin" target="_blank" rel='noreferrer noopener'><i class="fa-brands fa-linkedin"></i></a>
                    </li>
                </ul>
            </div>
            <div id="emailcont">
                <h2 id="emailfooter">nenebeji@gmail.com</h2>
            </div>
        </footer>
    )
}

export default Footer;