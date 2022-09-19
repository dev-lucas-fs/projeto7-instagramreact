import Post from "./Post";
import Sidebar from "./Sidebar";
import Story from "./Story";

import stories from "./../data/story";
import posts from "./../data/posts";

const Content = function () {
  stories.map((s) => {
    console.log(s);
  });

  return (
    <div className="corpo">
      <div className="esquerda">
        <div className="stories">
          {stories.map((story) => (
            <Story data={story} />
          ))}
          <div className="setinha">
            <ion-icon
              style={{ color: "#fff" }}
              name="chevron-forward-circle"
            ></ion-icon>
          </div>
        </div>

        <div className="posts">
          {posts.map((post) => (
            <Post data={post} />
          ))}
        </div>
      </div>

      <Sidebar />
    </div>
  );
};

export default Content;
