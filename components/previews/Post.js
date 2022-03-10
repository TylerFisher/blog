import Post from "../posts/Post";
import showdown from "showdown";
import React from "react";

const converter = new showdown.Converter();

class PostPreview extends React.Component {
  componentDidMount() {
    const { document } = this.props;
    const script = document.createElement("script");
    script.src = "https://cdn.tailwindcss.com?plugins=typography";
    document.head.appendChild(script);
  }

  render() {
    const title = this.props.entry.getIn(["data", "title"]);
    const thumbnail = this.props.entry.getIn(["data", "thumbnail"]);
    const date = this.props.entry.getIn(["data", "date"]);
    const description = this.props.entry.getIn(["data", "description"]);
    const body = this.props.entry.getIn(["data", "body"]);

    const post = {
      attributes: {
        title,
        thumbnail,
        date,
        description,
      },
      html: converter.makeHtml(body),
    };

    return (
      <>
        <Post post={post} />
      </>
    );
  }
}

export default PostPreview;
