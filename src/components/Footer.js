import "./FooterStyles.css"

const Footer = () => {
    return(
        <div className="footer">
            <div className="top">
                <div>
                    <h1>Truth</h1>
                <p>choose your favourite destination</p>
                </div>
                <div>
                    <a href="/">
                        <i className="fa-brands fa-facebook-square"></i>
                    </a>
                    <a href="/">
                        <i className="fa-brands fa-twitter-square"></i>
                    </a>
                    <a href="/">
                        <i className="fa-brands fa-instagram-square"></i>
                    </a>
                    <a href="/">
                        <i className="fa-brands fa-snapchat-square"></i>
                    </a>
                </div>

            </div>
            <div className="bottom">
            <div>
                <h4>Project</h4>
                <a href="/">Changelog</a>
                <a href="/">Status</a>
                <a href="/">Licence</a>
                <a href="/">All Versions</a>
            </div>
           
            <div>
                <h4>Project</h4>
                <a href="/">Support</a>
                <a href="/">Troubleshooting</a>
                <a href="/">Contact Us</a>
                <a href="/">All Versions</a>
            </div>
            <div>
                <h4>Community</h4>
                <a href="/">Terms of services</a>
                <a href="/">Privacy Policy</a>
                <a href="/">Contact Us</a>
                <a href="/">All Versions</a>
            </div>
            <div>
                <h4>Help</h4>
                <a href="/">Support</a>
                <a href="/">Troubleshooting</a>
                <a href="/">Contact Us</a>
                <a href="/">All Versions</a>
            </div>
            </div>
        </div>
    )
}
export default Footer;