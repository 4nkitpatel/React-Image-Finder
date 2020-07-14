import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.imageRef = React.createRef();
    this.state = {
      spans: 0,
    };
  }

  componentDidMount() {
    //console.log(this.imageRef.current.clientHeight); // givees 0 why?
    // bcz its to fast and images are (src) coming from unspplash so it take time so that why 0
    // this.imageRef work fine bcz as long u click on it , it find that DOM then then then it gives us info not immidiatly
    this.imageRef.current.addEventListener("load", this.setSpans);
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10); // how much span we will need for image
    this.setState({ spans }); // spans:spans 
  };

  render() {
    const { description, urls } = this.props.image;
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.imageRef} alt={description} src={urls.regular} />
      </div>
    );
  }
}

export default ImageCard;
