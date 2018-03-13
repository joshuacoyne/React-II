import React, {Component} from 'react';
import nolikeLogo from "./nolike.png";
import yeslikeLogo from "./yeslike.png";

class Like extends Component {
    constructor() {
        super();

        this.state = {
            like_count: 0,
            clicked: false
        }
    }

    handleClick = () => {
        let count = this.state.like_count;
        
        this.state.clicked ? count-- : count++;
        this.setState({like_count: count,
                        clicked: !this.state.clicked});
          
        document.getElementById('yesLike').classList.toggle('hidden');
        document.getElementById('noLike').classList.toggle('hidden');
        

    
    }


    render() {
        return(
            <div className='row'>
                <div className='col d-flex justify-content-start '>
                    <img src={yeslikeLogo} onClick={this.handleClick} alt="yes like" className="like_image hidden" id="yesLike"/>
                    <img src={nolikeLogo} onClick={this.handleClick} alt="no like" className="like_image" id="noLike"/>
                </div>
            </div>
        )
    }
}

export default Like;