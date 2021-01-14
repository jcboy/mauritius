import '../../styles/styles.css'
import '../../styles/welcome.css'
import {Navbar} from "../Navbar/Navbar";
import {Component} from "react/cjs/react.production.min";

import img from '../../assets/images/Le-morne-Unesco-ile-maurice.jpg';


const welcomeContent = [
    {
        path: '/',
        background: 'url(' + img + ')',
        title: 'WELCOME TO PARADISE'
    }
]


export class Welcome extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: 'WELCOME TO PARADISE',
            route: props.param.path
        }
        this.backgroundStyle = this.backgroundStyle.bind(this);

    }

    backgroundStyle(route) {
        const welcomeContentToDisplay = this.welcomeContent.find((content) => {
            return content.path === route;
        });
        const backgroundSize = welcomeContentToDisplay.path === '/' ? '120%' : '50%';
        return {
            backgroundImage: welcomeContentToDisplay.background,
            backgroundPositionX: 'center',
            backgroundSize,
        }
    }

    headerSize(route) {
        const mainHeaderSize = {marginTop: '9.6em', marginBottom: '9.6em'};
        const subHeaderSize = {marginTop: 70, marginBottom: 70};
        return route.path === '/' ? mainHeaderSize : subHeaderSize;
    }

    render() {
        return (
            <div
                style={this.backgroundStyle(this.state.route)}>
                <div className="container-fluid">
                    <Navbar/>
                    <div className="row justify-content-center">
                        <div className="col-7" style={this.headerSize(this.state.route)}>
                            <h1 className="h1 text-center" style={{color: 'white'}}> {this.state.title} </h1>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Welcome;