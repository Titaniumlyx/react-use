import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Home extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let pathname = this.props.location.pathname.split("/")[1];
        return (
            <div className="container">
                <h1>home—标题</h1>
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <Link to="/" className={pathname==""?"nav-link active":"nav-link"}>
                            home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className={pathname=="about"?"nav-link active":"nav-link"}>
                            about
                        </Link>
                    </li>
                </ul>

                <div>
                    <h2>主页的文章</h2>
                    <p>主页文章内容</p>
                </div>
            </div>
        );
    }
}

export default Home;