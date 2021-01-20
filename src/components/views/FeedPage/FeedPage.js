import { render } from '@testing-library/react';
import React, {Component, useState, useEffect} from 'react';
import './FeedPage.css';

const MyInfo = [
    { 
        id: 'bokjiho',
        password: 123456,
        profileImage: '',
    }
]

const Post = [
    {
        id: 1,
        author: 'skawngur',
        profileImage: '../../../images/profile_skawngur.jpg',
        images: [
            '../../../images/post1'
        ],
        text: '어쩌고 저쩌고 랄랄라',
        likes: 123234229,
        postedAt: '2020-12-07 15:00:00'
    },
    {
        id: 2,
        author: 'poloralphlauren',
        profileImage: '../../../images/profile_poloralphlauren.jpg',
        images: [
            '../../../images/post2jpg'
        ],
        text: 'Timeless Style.',
        likes: 5432,
        postedAt: '2020-12-17 16:00:00'
    },
    {
        id: 3,
        author: 'poloralphlauren',
        profileImage: '../../../images/profile_poloralphlauren.jpg',
        images: [
            '../../../images/post3.jpg', 
            '../../../images/post3 (2).jpg', 
            '../../../images/post3 (3).jpg'
        ],
        text: 'Holiday essentials for your loved ones.',
        likes: 20001,
        postedAt: '2020-12-17 20:30:00'
    },
    {
        id: 4,
        author: 'drmartenskr',
        profileImage: '../../../images/profile_drmartenskr.jpg',
        images: [
            '../../../images/post4.jpg'
        ],
        text: '💗💗💗',
        likes: 304,
        postedAt: '2020-12-17 22:50:00'
    },
];

const PostComments = [
    {
        post_id: 1,
        user: ['fan1', 'fan2', 'fan3', 'fan4'],
        content: ['남주혁 존잘!', '사진 너무 예쁘다', '워후~~~~', '캬~ 잘생겼구만'],
    },
    {
        post_id: 2,
        user: ['dailylooks_'],
        content: ['구매 각🤑'],
    },
    {
        post_id: 3,
        user: ['dailylooks_', 'ootdfashion'],
        content: ['I love polo sweaterssssssss 💘💘', 'they look so cute!!'],
    },
    {
        post_id: 4,
        user: ['dailylooks_', 'todaystyless'],
        content: ['so pretty', 'dm plz']
    }

]

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
        const userName = this.props.username;
        const comment = this.props.cont;
        // const likedOrNot = this.props.info.liked;

        return (
            <li style={{marginBottom: '4px', display: 'flex'}}>
                <a href="#"
                    className="user-id">{userName}</a>
                &nbsp;
                <span>{comment}</span>
                <span style={{marginLeft: 'auto', cursor: 'pointer'}}>
                    <svg id="empty-heart" viewBox="0 -28 512.001 512" xmlns="http://www.w3.org/2000/svg"
                        style={{width:'12px', height: '12px'}}>
                        <path d="m256 455.515625c-7.289062 0-14.316406-2.640625-19.792969-7.4375-20.683593-18.085937-40.625-35.082031-58.21875-50.074219l-.089843-.078125c-51.582032-43.957031-96.125-81.917969-127.117188-119.3125-34.644531-41.804687-50.78125-81.441406-50.78125-124.742187 
                        0-42.070313 14.425781-80.882813 40.617188-109.292969 26.503906-28.746094 62.871093-44.578125 102.414062-44.578125 29.554688 0 56.621094 9.34375 80.445312 27.769531 12.023438 9.300781 22.921876 20.683594 32.523438 33.960938 9.605469-13.277344 20.5-24.660157 
                        32.527344-33.960938 23.824218-18.425781 50.890625-27.769531 80.445312-27.769531 39.539063 0 75.910156 15.832031 102.414063 44.578125 26.191406 28.410156 40.613281 67.222656 40.613281 109.292969 0 43.300781-16.132812 82.9375-50.777344 124.738281-30.992187 
                        37.398437-75.53125 75.355469-127.105468 119.308594-17.625 15.015625-37.597657 32.039062-58.328126 50.167969-5.472656 4.789062-12.503906 7.429687-19.789062 7.429687zm-112.96875-425.523437c-31.066406 0-59.605469 12.398437-80.367188 34.914062-21.070312 
                        22.855469-32.675781 54.449219-32.675781 88.964844 0 36.417968 13.535157 68.988281 43.882813 105.605468 29.332031 35.394532 72.960937 72.574219 123.476562 115.625l.09375.078126c17.660156 15.050781 37.679688 32.113281 58.515625 50.332031 
                        20.960938-18.253907 41.011719-35.34375 58.707031-50.417969 50.511719-43.050781 94.136719-80.222656 123.46875-115.617188 30.34375-36.617187 43.878907-69.1875 43.878907-105.605468 
                        0-34.515625-11.605469-66.109375-32.675781-88.964844-20.757813-22.515625-49.300782-34.914062-80.363282-34.914062-22.757812 0-43.652344 7.234374-62.101562 21.5-16.441406 12.71875-27.894532 28.796874-34.609375 
                        40.046874-3.453125 5.785157-9.53125 9.238282-16.261719 9.238282s-12.808594-3.453125-16.261719-9.238282c-6.710937-11.25-18.164062-27.328124-34.609375-40.046874-18.449218-14.265626-39.34375-21.5-62.097656-21.5zm0 0"/>
                    </svg>
                    <svg id="filled-heart" viewBox="0 -28 512.00002 512" xmlns="http://www.w3.org/2000/svg"
                        style={{display: 'none', width: '12px', height: '12px'}}>
                        <path fill="#ed4956"
                            d="m471.382812 44.578125c-26.503906-28.746094-62.871093-44.578125-102.410156-44.578125-29.554687 0-56.621094 9.34375-80.449218 27.769531-12.023438 
                            9.300781-22.917969 20.679688-32.523438 33.960938-9.601562-13.277344-20.5-24.660157-32.527344-33.960938-23.824218-18.425781-50.890625-27.769531-80.445312-27.769531-39.539063 
                            0-75.910156 15.832031-102.414063 44.578125-26.1875 28.410156-40.613281 67.222656-40.613281 109.292969 0 43.300781 16.136719 82.9375 50.78125 124.742187 30.992188 37.394531 75.535156 75.355469 
                            127.117188 119.3125 17.613281 15.011719 37.578124 32.027344 58.308593 50.152344 5.476563 4.796875 12.503907 7.4375 19.792969 7.4375 7.285156 0 14.316406-2.640625 19.785156-7.429687 20.730469-18.128907 
                            40.707032-35.152344 58.328125-50.171876 51.574219-43.949218 96.117188-81.90625 127.109375-119.304687 34.644532-41.800781 50.777344-81.4375 50.777344-124.742187 0-42.066407-14.425781-80.878907-40.617188-109.289063zm0 0"/>
                    </svg>
                </span>
            </li>
        );
    }
}

const Comments = (props) => {
    // numOfComment 변수는 commentsInfo 객체 갯수로 값 초기화
    const [commentsInfo, setCommentsInfo] = useState(PostComments[props.id - 1]); // 해당 게시글의 댓글 객체를 id를 이용해서 찾아서 저장 
    const numOfComments = commentsInfo.content.length; // 댓글의 갯수

    useEffect(() => { // 댓글 수 3개 이상부터 더보기 버튼 보이기
        if (numOfComments <= 2)
            document.getElementById('more-comments-button' + props.id).style.display = "none";         
    }, [numOfComments]);

    return (
        <section>
            <button className="more-comments-button" id={'more-comments-button' + props.id}>댓글 {numOfComments}개 모두 보기</button>
            <ul className="comments-box">
            {numOfComments >= 2 && 
                <CommentElement username={commentsInfo.user[numOfComments-2]} cont={commentsInfo.content[numOfComments-2]} />
            }
                <CommentElement username={commentsInfo.user[numOfComments-1]} cont={commentsInfo.content[numOfComments-1]} />
            </ul>
        </section>
    );
}

const NewComments = props => {
    
    return (
        <section className="new-comment">
            <form style={{width: '100%', height: '18px', display: 'inherit'}}>
                <textarea placeholder="댓글 달기..."></textarea>
                <button style={{
                    font: 'inherit', 
                    color: '#0095f6', 
                    fontWeight: 600, 
                    cursor: 'pointer', 
                    marginLeft: 'auto'}}>
                    게시
                </button>
            </form>
        </section>
    );
}

function FeedContent({ post }) {

    const userId = post.author;
    const feedImagePath = post.images[0];
    const imageSize = { width: '614px', height: 'auto'};
    const postedTime = '1시간 전'; // 나중에 현재 시간 기준으로 db에 있는 포스트 등록 시간 뺀 결과로 초기화
    const [likeCount, setLikeCount] = useState(post.likes); // 좋아요 갯수
    const [liked, setLiked] = useState(false); // 좋아요 버튼 눌린 상태 = true, 좋아요 안 된 상태 = false

    const incrementLike = () => {
        setLikeCount(likeCount + 1);
        document.getElementById('empty-heart' + post.id).style.display="none";
        document.getElementById('filled-heart' + post.id).style.display="block";

        setLiked(true);
    } 
    const decrementLike = () => {
        setLikeCount(likeCount - 1);
        document.getElementById('empty-heart' + post.id).style.display="block";
        document.getElementById('filled-heart' + post.id).style.display="none";

        setLiked(false);
    }

    const reverseString = str => { // 문자열 str을 뒤집는 함수
        let r = '';
        
        for(let i = str.length - 1; i >= 0; i--) {
            r += str[i];
        }
        return r;
    }

    const addCommas = num => { // 앞에서부터 (3 x n)번째 문자 뒤에 콤마(,)를 붙여주는 함수 
        let n = '';
        for (let i = 0; i < num.length; i++) {
            if ((i + 1) % 3 === 0 && i + 1 !== num.length) 
                n += num[i] + ',';
            else n += num[i];
        }
        
        return reverseString(n);
    }

    useEffect(() => {
        // console.log(addCommas(reverseString(likeCount+'')));
        document.getElementById('like-stat'+post.id).innerHTML = `좋아요 ${addCommas(reverseString(likeCount+''))}개`;
    }, [likeCount]);
    
    return (
        <article className="contents">
            <section className="content-header">
                <div style={{display: 'flex'}}>
                    <span style={{ width: '32px', height: '32px'}}>
                        <a className="profile-img" href="#">
                            <img src={require('../../../images/profile_'+ userId +'.jpg')} alt={userId + '님의 프로필 사진'} />   
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
            <img className="content-image" alt={post.id + '번째 피드'}
                src={require('../../../images/post' + post.id + '.jpg')}
                style={{width: imageSize.width, height: imageSize.height}}/>
            <section className="content-buttons">
                <span className="like-icon"
                    onClick={ !liked ? incrementLike : decrementLike }
                    style={{marginLeft: '-10px'}}>
                    <svg id={'empty-heart'+ post.id} viewBox="0 -28 512.001 512" xmlns="http://www.w3.org/2000/svg">
                        <path d="m256 455.515625c-7.289062 0-14.316406-2.640625-19.792969-7.4375-20.683593-18.085937-40.625-35.082031-58.21875-50.074219l-.089843-.078125c-51.582032-43.957031-96.125-81.917969-127.117188-119.3125-34.644531-41.804687-50.78125-81.441406-50.78125-124.742187 
                        0-42.070313 14.425781-80.882813 40.617188-109.292969 26.503906-28.746094 62.871093-44.578125 102.414062-44.578125 29.554688 0 56.621094 9.34375 80.445312 27.769531 12.023438 9.300781 22.921876 20.683594 32.523438 33.960938 9.605469-13.277344 20.5-24.660157 
                        32.527344-33.960938 23.824218-18.425781 50.890625-27.769531 80.445312-27.769531 39.539063 0 75.910156 15.832031 102.414063 44.578125 26.191406 28.410156 40.613281 67.222656 40.613281 109.292969 0 43.300781-16.132812 82.9375-50.777344 124.738281-30.992187 
                        37.398437-75.53125 75.355469-127.105468 119.308594-17.625 15.015625-37.597657 32.039062-58.328126 50.167969-5.472656 4.789062-12.503906 7.429687-19.789062 7.429687zm-112.96875-425.523437c-31.066406 0-59.605469 12.398437-80.367188 34.914062-21.070312 
                        22.855469-32.675781 54.449219-32.675781 88.964844 0 36.417968 13.535157 68.988281 43.882813 105.605468 29.332031 35.394532 72.960937 72.574219 123.476562 115.625l.09375.078126c17.660156 15.050781 37.679688 32.113281 58.515625 50.332031 
                        20.960938-18.253907 41.011719-35.34375 58.707031-50.417969 50.511719-43.050781 94.136719-80.222656 123.46875-115.617188 30.34375-36.617187 43.878907-69.1875 43.878907-105.605468 
                        0-34.515625-11.605469-66.109375-32.675781-88.964844-20.757813-22.515625-49.300782-34.914062-80.363282-34.914062-22.757812 0-43.652344 7.234374-62.101562 21.5-16.441406 12.71875-27.894532 28.796874-34.609375 
                        40.046874-3.453125 5.785157-9.53125 9.238282-16.261719 9.238282s-12.808594-3.453125-16.261719-9.238282c-6.710937-11.25-18.164062-27.328124-34.609375-40.046874-18.449218-14.265626-39.34375-21.5-62.097656-21.5zm0 0"/>
                    </svg>
                    <svg id={'filled-heart'+ post.id} viewBox="0 -28 512.00002 512" xmlns="http://www.w3.org/2000/svg"
                        style={{display: 'none'}}>
                        <path fill="#ed4956"
                            d="m471.382812 44.578125c-26.503906-28.746094-62.871093-44.578125-102.410156-44.578125-29.554687 0-56.621094 9.34375-80.449218 27.769531-12.023438 
                            9.300781-22.917969 20.679688-32.523438 33.960938-9.601562-13.277344-20.5-24.660157-32.527344-33.960938-23.824218-18.425781-50.890625-27.769531-80.445312-27.769531-39.539063 
                            0-75.910156 15.832031-102.414063 44.578125-26.1875 28.410156-40.613281 67.222656-40.613281 109.292969 0 43.300781 16.136719 82.9375 50.78125 124.742187 30.992188 37.394531 75.535156 75.355469 
                            127.117188 119.3125 17.613281 15.011719 37.578124 32.027344 58.308593 50.152344 5.476563 4.796875 12.503907 7.4375 19.792969 7.4375 7.285156 0 14.316406-2.640625 19.785156-7.429687 20.730469-18.128907 
                            40.707032-35.152344 58.328125-50.171876 51.574219-43.949218 96.117188-81.90625 127.109375-119.304687 34.644532-41.800781 50.777344-81.4375 50.777344-124.742187 0-42.066407-14.425781-80.878907-40.617188-109.289063zm0 0"/>
                    </svg>
                </span>
                <span className="comment-icon">
                    <svg viewBox="0 0 511.072 511.072" xmlns="http://www.w3.org/2000/svg"
                        style={{height: '24px', width: '24px'}}>
                        <path d="m74.39 480.536h-36.213l25.607-25.607c13.807-13.807 22.429-31.765 24.747-51.246-36.029-23.644-62.375-54.751-76.478-90.425-14.093-35.647-15.864-74.888-5.121-113.482 
                        12.89-46.309 43.123-88.518 85.128-118.853 45.646-32.963 102.47-50.387 164.33-50.387 77.927 0 143.611 22.389 189.948 64.745 41.744 38.159 64.734 89.63 64.734 144.933 0 26.868-5.471 
                        53.011-16.26 77.703-11.165 25.551-27.514 48.302-48.593 67.619-46.399 42.523-112.042 65-189.83 65-28.877 0-59.01-3.855-85.913-10.929-25.465 26.123-59.972 40.929-96.086 40.929zm182-420c-124.039 
                        0-200.15 73.973-220.557 147.285-19.284 69.28 9.143 134.743 76.043 175.115l7.475 4.511-.23 8.727c-.456 17.274-4.574 33.912-11.945 48.952 17.949-6.073 34.236-17.083 46.99-32.151l6.342-7.493 9.405 
                        2.813c26.393 7.894 57.104 12.241 86.477 12.241 154.372 0 224.682-93.473 224.682-180.322 0-46.776-19.524-90.384-54.976-122.79-40.713-37.216-99.397-56.888-169.706-56.888z"/>
                    </svg>
                </span>
                <span className="send-message-icon">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                        viewBox="0 0 512.001 512.001" style={{width: '24px', height: '24px'}}>
                        <path d="M507.608,4.395c-4.243-4.244-10.609-5.549-16.177-3.321L9.43,193.872c-5.515,2.206-9.208,7.458-9.42,13.395
                            c-0.211,5.936,3.101,11.437,8.445,14.029l190.068,92.181l92.182,190.068c2.514,5.184,7.764,8.455,13.493,8.455
                            c0.178,0,0.357-0.003,0.536-0.01c5.935-0.211,11.189-3.904,13.394-9.419l192.8-481.998
                            C513.156,15.001,511.851,8.638,507.608,4.395z M52.094,209.118L434.72,56.069L206.691,284.096L52.094,209.118z M302.883,459.907
                            l-74.979-154.599l228.03-228.027L302.883,459.907z"/>
                    </svg>
                </span>
                <span className="bookmark-icon"
                    style={{marginLeft: 'auto', marginRight: '-10px'}}>
                    <svg id="empty-bookmark" viewBox="-161 -27 859 859.3038" xmlns="http://www.w3.org/2000/svg">
                        <path d="m514.824219 805.585938c-3.605469 0-7.140625-1.453126-9.726563-4.179688l-245.371094-258.277344-245.371093 258.277344c-3.792969 
                        4-9.628907 5.273438-14.710938 3.226562-5.109375-2.03125-8.453125-6.972656-8.453125-12.46875v-765.3125c0-14.808593 12.046875-26.851562 
                        26.855469-26.851562h483.351563c14.804687 0 26.855468 12.042969 26.855468 26.851562v765.308594c0 5.496094-3.34375 10.441406-8.441406 
                        12.472656-1.617188.640626-3.308594.953126-4.988281.953126zm-255.097657-295.378907c3.671876 0 7.195313 1.507813 9.730469 4.179688l231.941407 
                        244.144531v-731.679688h-483.351563v731.679688l231.941406-244.144531c2.535157-2.671875 6.058594-4.179688 9.738281-4.179688zm0 0"/>
                    </svg>
                    <svg id="filled-bookmark" viewBox="-110 -18 581 581.33331" xmlns="http://www.w3.org/2000/svg"
                        style={{display: 'none'}}>
                        <path d="m181.25 363.109375 172.75 181.890625v-545h-360v545l172.75-181.890625c1.886719-1.984375 4.511719-3.113281 7.25-3.113281s5.359375 1.128906 7.25 3.113281zm0 0"/>
                    </svg>
                </span>
            </section>
            <div style={{marginBottom: '8px'}}>
                <button class="like-stat" id={'like-stat' + post.id}>
                    좋아요 {likeCount}개
                </button>
            </div>
            <section className="content-info">
                <a href="#"
                    className="user-id">{userId}</a>
                &nbsp;
                <span style={{margin: '0'}}>{post.text}</span>
            </section>
            <Comments id={post.id} />
            <div style={{color: '#8e8e8e', fontSize: '10px', padding: '0 16px', margin: '6px 0'}}>{postedTime}</div>
            <NewComments />
        </article>
    );
}

class MainBody extends Component {
    render() {
        return (
            <main className="main-body">
                <section className="story-box">
                </section>
                <section className="feed-content">
                    { Post.map(fc => <FeedContent key={fc.id} post={fc} />)}
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
                        <img alt="profile image"
                            src={require('../../../images/profile_default.jpg')} />
                    </a>
                </span>
                <span className="my-userid"
                    style={{width: '187px'}}>
                    <div style={{fontWeight: 600, cursor: 'pointer'}}>zl.ll07</div>
                    <div style={{color: '#8e8e8e'}}>소개입니다</div>
                </span>
                <span><button style={{fontSize: '12px', color: '#0095f6', fontWeight: 600, cursor: 'pointer'}}>전환</button></span>
            </section>
        );
    }
}

class UserProfile extends Component {
    render() {
        return (
            <>
                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', padding: '8px 0'}}>
                    <span style={{width: '32px', height: '32px'}}>
                        <a className="profile-img">
                            <img alt={this.props.userId + '님의 프로필 사진'}
                                src={require('../../../images/profile_default.jpg')} />
                        </a>
                    </span>
                    <span className="my-userid"
                        style={{width: '201px'}}>
                        <div style={{fontWeight: 600, cursor: 'pointer'}}>{this.props.userid}</div>
                        <div style={{color: '#8e8e8e', fontSize: '12px'}}>인기</div>
                    </span>
                    <span><button style={{fontSize: '12px', color: '#0095f6', fontWeight: 600, cursor: 'pointer'}}>팔로우</button></span>
                </div>
            </>
        );
    }
}

class Recommendations extends Component {
    render() {
        const Users = ['user1', 'user2', 'user3', 'user4', 'user5'];
        const RecommendedUser = [];

        for (const [index, value] of Users.entries()) {
            RecommendedUser.push(<UserProfile key={index} userid={value} />);
        }

        return (
            <section>
                <div style={{width: '100%', display: 'flex', justifyContent: 'space-between'}}>
                    <h5 style={{color: '#8e8e8e', fontSize: '14px', fontWeight: 600, display: 'inline-block', margin: '10px 0'}}>회원님을 위한 추천</h5>
                    <button style={{color: '#262626', fontSize: '12px', fontWeight: 600}}>모두 보기</button>
                </div>
                {RecommendedUser}
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