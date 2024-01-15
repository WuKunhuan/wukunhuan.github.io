import React from 'react';
import ReactDOM from 'react-dom/client';

class NavigationBar extends React.Component {

    constructor(props) {
        super(props); 
        this.setState({
            tabs: props.tabs
        })
    }

    render() {
        return (

<div>
    <a href="https://wukunhuan.github.io/">
        <img    src="assets/images/favicon_wukunhuan_knowledge.png"
                alt="cannot display"
                style= {{float: 'left', width: 200, height: 'auto', marginTop: 10, marginLeft: 10, marginRight: 10}}
                
        />
    </a>
</div>

        ); 
    }

}

let navbar = ReactDOM.createRoot(document.getElementById('navigation-bar')); 
navbar.render(<NavigationBar tabs=""/>)
