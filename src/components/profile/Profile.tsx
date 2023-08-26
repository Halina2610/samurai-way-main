import React from 'react';

export const Profile = () => {
    return (
        <div>
            <div className="content">
                <div>
                    <img className="img" src="https://fatcatart.com/wp-content/uploads/2016/04/space-cat-min.jpg"/>
                </div>
                <div className="avatar_info">
                    <div>
                        <img src="https://klike.net/uploads/posts/2019-03/1551511801_1.jpg"/>
                    </div>
                    <div>
                        <h3>Mr.Cat</h3>
                        <p><span>City: </span><span>LA</span></p>
                        <p><span>Date of Birth: </span><span>9 Feb.</span></p>
                        <p><span>Web-site: </span><span><a>www.google.com</a></span></p>
                    </div>
                </div>

                <div>My post</div>
                <div>New post</div>
                <div>Post 1</div>
                <div>Post 2</div>
            </div>
        </div>
    );
};

