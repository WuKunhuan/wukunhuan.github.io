import React from 'react';
import ReactDOM from 'react-dom';

class NavigationBar extends React.Component {

    componentDidMount() {
        const { tabNames } = this.props;

        function handleTabClick(tabName) {
            window.location.href =
                (tabName === "Homepage" ? "index" : tabName.toLowerCase()) + ".html";
        }

        var tabsContainer = document.getElementById("tabs");
        for (var i = 0; i < tabNames.length; i++) {
            var tab = document.createElement("div");
            tab.className = "tab";
            tab.textContent = tabNames[i];
            tab.addEventListener(
                "click",
                (function (name) {
                    return function () {
                        handleTabClick(name);
                    };
                })(tabNames[i])
            );
            tabsContainer.appendChild(tab);
        }
    }

    render() {
        return (
            <div id="tabs">
                <a href="https://wukunhuan.github.io/">
                    <img
                        src="assets/images/favicon_wukunhuan_knowledge.png"
                        alt="cannot display"
                        style={{
                            float: "left",
                            width: 200,
                            height: "auto",
                            marginTop: 10,
                            marginLeft: 10,
                            marginRight: 10,
                        }}
                    />
                </a>
            </div>
        );
    }
}

const tabNames = ["Homepage", "Skills", "Courses", "Posts", "Contacts"];

ReactDOM.render(<NavigationBar tabNames={tabNames} />, document.getElementById("navigation-bar"));