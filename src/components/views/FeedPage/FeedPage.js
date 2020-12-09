import React, {Component} from 'react';
import './FeedPage.css';

class HomeButton extends Component {
    render() {
        return (
            <img src="https://instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
                style={{ width: '103px', height: '29px', display: 'block' }}
                alt="homebutton" />
        );
    }
}

class SearchBar extends Component {
    render() {
        return (
            <input className="search-input"
                placeholder="검색" />
        );
    }
}

class NavIcons extends Component {
    render() {
        return (
            <div className="nav-icons">

            </div>
        );
    }
}

class FeedNav extends Component {
    render() {
        return (
            <nav className="nav-bar">
                <section>
                    <HomeButton />
                </section>
                <section>
                    <SearchBar />
                </section>
                <section>
                    <NavIcons />
                </section>
            </nav>
        );
    }
}

class StoryContent extends Component {
    // const profileImagePath = this.props.uimagepath;

    render() {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '80px', padding: '0 4px' }}>
                <div className="story-circle">
                    <img className="story-profile-image"
                        src={this.props.profileImagePath} 
                        alt="" />
                </div>
                <div className="story-user-id">
                    {this.props.uid}
                </div>
            </div>
        );
    }
}

class MainBody extends Component {
    render() {
        const imagePath = "https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s320x320/123286692_636049017275345_9161752167566283993_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=6T2wLw9gL5oAX99vxLM&tp=1&oh=3f6d12f8114066dc9787b17a76b2e459&oe=5FFBA2AA";

        return (
            <main className="main-body">
                <section className="story-box">
                    <StoryContent uid="diptyque" 
                        profileImagePath={imagePath} />
                    <StoryContent uid="zl.ll07" 
                        profileImagePath={imagePath} />
                </section>
                <section className="feed-content">

                </section>
            </main>
        );
    }
}

class SideBody extends Component {
    render() {
        return (
            <aside className="side-body">

            </aside>
        );
    }
}

class FeedBody extends Component {
    render() {
        return (
            <div className="feed-body">
                <MainBody />
                <SideBody />
            </div>
        );
    }
}

class FeedPage extends Component {
    render() {
        return (
            <>
                <FeedNav />
                <FeedBody />
            </>
        );
    }
}

export default FeedPage