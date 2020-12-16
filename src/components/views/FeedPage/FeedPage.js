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
            <span style={{width: '80px'}}>
                <div style={{width: '56px', height: '56px'}}>
                    <a className="profile-img">
                        <img src={this.props.profileImagePath} 
                            alt="" />
                    </a>
                </div>
                <div className="story-user-id">
                    {this.props.uid}
                </div>
            </span>
        );
    }
}

class CommentElement extends Component {
    render() {
        const userName = this.props.info.username;
        const comment = this.props.info.content;
        const likedOrNot = this.props.info.liked;

        return (
            <li style={{marginBottom: '4px'}}>
                <a href="#"
                    className="user-id">{userName}</a>
                &nbsp;
                <span>{comment}</span>
                <span><button />{likedOrNot}</span>
            </li>
        );
    }
}

class Comments extends Component {
    render() {
        // commentsInfo로 Class 생성해서 for문 돌려서 db에 있는 comment들 받아와서 객체 생성해서 하나씩 값 할당하고
        // numOfComment 변수는 commentsInfo 객체 갯수로 값 초기화
        let commentsInfo = [{ username: 'fan1', content: '남주혁 존잘!', liked: 0 }, { username: 'fan2', content: '핫바디', liked: 0 }];
        // const commentsInfo = { username: 'fan1', content: '남주혁 존잘!', liked: 0 }
        const numOfComments = '12,345';

        return (
            <section>
                <button className="more-comments-button">댓글 {numOfComments}개 모두 보기</button>
                <ul className="comments-box">
                    <CommentElement info={commentsInfo[0]} />
                    <CommentElement info={commentsInfo[1]} />
                </ul>
            </section>
        );
    }
}

class FeedContent extends Component {
    render() {
        const profileImagePath = "https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/126964130_733939787328468_8366251146435214274_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=bxdPI87bW5wAX8Qdz3L&tp=1&oh=469b3e6d7b1e3dfb69b872020178931a&oe=5FFAA577";
        const userId = 'skawngur';
        const feedImagePath = "https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-15/e35/130589843_222637495993984_5959484901458307571_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_cat=1&_nc_ohc=sNHgwZluFSQAX8jMvXU&tp=1&oh=03eb30f0bffdb13a3d6216fe1fa73760&oe=5FFDE616";
        const imageSize = { width: '614px', height: '614px'};
        const likeCount = '1,234,234';
        const postedTime = '1시간 전'; // 나중에 현재 시간 기준으로 db에 있는 포스트 등록 시간 뺀 결과로 초기화

        return (
            <article className="contents">
                <section className="content-header">
                    <div style={{display: 'flex'}}>
                        <span style={{ width: '32px', height: '32px'}}>
                            <a className="profile-img" href="#">
                                <img src={profileImagePath} alt={userId + '님의 프로필 사진'} />   
                            </a>
                        </span>
                        
                        <span style={{width: '90%'}}>
                            <a href="#"
                                className="user-id" 
                                style={{marginLeft: '16px'}}>{userId}</a>
                        </span>
                        <a href="#"
                            className="menu-icon">
                            <span />
                            <span style={{display: 'none'}}>menu icon</span>
                        </a>
                    </div>
                </section>
                <img className="content-image"
                    src={feedImagePath}
                    style={{width: imageSize.width, height: imageSize.height}}/>
                <section className="content-buttons"></section>
                <div style={{marginBottom: '8px'}}>
                    <button className="like-stat">좋아요 {likeCount}개</button>
                </div>
                <section className="content-info">
                    <a href="#"
                        className="user-id">{userId}</a>
                    &nbsp;
                    <span style={{margin: '0'}}>어쩌고 저쩌고 랄랄라</span>
                </section>
                <Comments />
                <div style={{color: '#8e8e8e', fontSize: '10px', padding: '0 16px', marginBottom: '4px'}}>{postedTime}</div>
                <section className="new-comment">
                    <form style={{width: '100%', height: '18px'}}>
                        <textarea placeholder="댓글 달기..."></textarea>
                        <button style={{font: 'inherit', color: '#0095f6', fontWeight: 600, cursor: 'pointer'}}>게시</button>
                    </form>
                </section>
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

class MyProfile extends Component {
    render() {
        return (
            <section className="my-profile">
                <span style={{width: '56px', height: '56px'}}>
                    <a className="profile-img">
                        <img src="https://instagram.fakl4-1.fna.fbcdn.net/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=instagram.fakl4-1.fna.fbcdn.net&_nc_ohc=O2yhhr3Hd90AX-g48SG&oh=d8fe77e52c08e1384eee2205c7fbf299&oe=6000FA8F&ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2" />
                    </a>
                </span>
                <span className="my-userid">
                    <div style={{fontWeight: 600, cursor: 'pointer'}}>zl.ll07</div>
                    <div style={{color: '#8e8e8e'}}>소개입니다</div>
                </span>
                <span><button style={{fontSize: '12px', color: '#0095f6', fontWeight: 600, cursor: 'pointer'}}>전환</button></span>
            </section>
        );
    }
}

class Recommendations extends Component {
    render() {
        return (
            <section>
                <div style={{width: '100%', display: 'flex', justifyContent: 'space-between'}}>
                    <h5 style={{color: '#8e8e8e', fontSize: '14px', fontWeight: 600, display: 'inline-block', margin: '10px 0'}}>회원님을 위한 추천</h5>
                    <button style={{color: '#262626', fontSize: '12px', fontWeight: 600}}>모두 보기</button>
                </div>
                <div>
                    
                </div>
            </section>
        );
    }
}

class SideBody extends Component {
    render() {
        return (
            <aside className="side-body">
                <MyProfile />
                <Recommendations />
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