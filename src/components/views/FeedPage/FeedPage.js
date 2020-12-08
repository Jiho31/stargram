import React, {Component} from 'react';
import './FeedPage.css';

class FeedNav extends Component {
    render() {
        return (
            <nav className="nav-bar">
                <section>
                    
                </section>
                <section>

                </section>
                <section>

                </section>
            </nav>
        );
    }
}

class FeedBody extends Component {
    render() {
        return (
            <>
                <main>
                    hiiiiiii
                </main>
                <aside>
        
                </aside>
            </>
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