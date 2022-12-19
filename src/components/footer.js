import React from 'react';
import icon from '../images/icon.jpg';
import githubIcon from '../images/github.png';
import dght from '../images/dght.png';


function CustomFooter() { 
    return (
        <> 
        <footer class="footer">
            <div class="container footer-container">
                <img 
                    alt="Icon"
                    style={{height: '20px'}}
                    src={icon}
                />
                <h3>Save the turtles</h3>
                { <ul class="footer-nav">
                    <li><a href="https://github.com/GUnzner" target="_blank"
                    rel="noreferrer">
                        <img alt="Github" style={{width: "50px"}} src={githubIcon}/>
                    </a></li>
                    <li><a href="https://schildkroeten.dght.de/" target="_blank"
                     rel="noreferrer">
                        <img alt="dght" style={{width: "50px"}} src={dght}/>
                    </a></li>
                </ul> }
            </div>
        </footer>
        </>
    );
}

export default CustomFooter