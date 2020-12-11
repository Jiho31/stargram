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

class FeedContent extends Component {
    render() {
        const profileImagePath = "https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/126964130_733939787328468_8366251146435214274_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=bxdPI87bW5wAX8Qdz3L&tp=1&oh=469b3e6d7b1e3dfb69b872020178931a&oe=5FFAA577";
        const userId = 'skawngur';
        const feedImagePath = "https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-15/e35/130589843_222637495993984_5959484901458307571_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_cat=1&_nc_ohc=sNHgwZluFSQAX8jMvXU&tp=1&oh=03eb30f0bffdb13a3d6216fe1fa73760&oe=5FFDE616";
        const imageSize = { width: '614px', height: '614px'}

        return (
            <article className="contents">
                <div className="content-header">
                    <div style={{display: 'flex'}}>
                        <a style={{ width: '32px', height: '32px'}}>
                            <img src={profileImagePath} alt={userId + '님의 프로필 사진'} />   
                        </a>
                        <span style={{width: '90%'}}>
                            <a style={{fontSize: '14px', fontWeight: '500', marginLeft: '16px'}}>{userId}</a>
                        </span>
                        <a className="menu-icon">
                            <span />
                            <span style={{display: 'none'}}>menu icon</span>
                        </a>
                    </div>
                </div>
                <img className="content-image"
                    src={feedImagePath}
                    style={{width: imageSize.width, height: imageSize.height}}/>
                <div className="content-buttons"></div>
                <div>좋아요 1,234,234개</div>
                <div className="content-info"></div>
                <div className="comment-box"></div>
                <div className="new-comment"></div>
            </article>
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
                    <StoryContent uid="skuukzky" 
                        profileImagePath={imagePath} />
                </section>
                <section className="feed-content">
                    <FeedContent />
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