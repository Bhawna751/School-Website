import ImageGallery from "react-image-gallery";
import Section from "./Section";
import Heading from "./Heading";


export default class MyGallery extends React.Component {
  constructor() {
    super();
    this.state = {
      showIndex: false,
      showBullets: true,
      infinite: true,
      showThumbnails: true,
      showFullscreenButton: true,
      showGalleryFullscreenButton: true,
      showPlayButton: false,
      showGalleryPlayButton: false,
      showNav: true,
      slideVertically: false,
      isRTL: false,
      slideDuration: 450,
      slideInterval: 2000,
      slideOnThumbnailOver: false,
      thumbnailPosition: "bottom",
      showVideo: true,
      useWindowKeyDown: true,
    };
    this._toggleShowVideo = this._toggleShowVideo.bind(this);

    this.images = [
      {
        embedUrl: "https://www.youtube.com/embed/LFOx-vmYrts?si=GSyOtUOo5nAGYSzS",
        original: "https://travelinlife.blog/wp-content/uploads/2024/04/95aa5-screen-shot-2022-06-22-at-8.00.12-am.png?w=1024",
        thumbnail: "https://travelinlife.blog/wp-content/uploads/2024/04/95aa5-screen-shot-2022-06-22-at-8.00.12-am.png?w=1024",
        description: "Render custom slides (such as videos)",
        renderItem: this._renderVideo.bind(this),
      },
      {
        original: "https://picsum.photos/id/1018/1000/600/",
        thumbnail: "https://picsum.photos/id/1018/250/150/",
        description: "Students participating in various sports events",
      },
      {
        original: "https://picsum.photos/id/1015/1000/600/",
        thumbnail: "https://picsum.photos/id/1015/250/150/",
        description: "Students presenting their science projects.",
      },
      {
        original: "https://picsum.photos/id/1019/1000/600/",
        thumbnail: "https://picsum.photos/id/1019/250/150/",
        description:  "Students performing in the cultural fest.",
      },
      {
        original: "https://picsum.photos/id/1018/1000/600/",
        thumbnail: "https://picsum.photos/id/1018/250/150/",
        description: "A glimpse of our interactive classrooms.",
      },
      {
        original: "https://picsum.photos/id/1015/1000/600/",
        thumbnail: "https://picsum.photos/id/1015/250/150/",
        description: "Students reading and studying in the school library.",
      }
    ];
  }

  _onImageClick(event) {
    console.debug(
      "clicked on image",
      event.target,
      "at index",
      this._imageGallery.getCurrentIndex()
    );
  }

  _onImageLoad(event) {
    console.debug("loaded image", event.target.src);
  }

  _onSlide(index) {
    this._resetVideo();
    console.debug("slid to index", index);
  }

  _onPause(index) {
    console.debug("paused on index", index);
  }

  _onScreenChange(fullScreenElement) {
    console.debug("isFullScreen?", !!fullScreenElement);
  }

  _onPlay(index) {
    console.debug("playing from index", index);
  }

  _handleInputChange(state, event) {
    if (event.target.value > 0) {
      this.setState({ [state]: event.target.value });
    }
  }

  _handleCheckboxChange(state, event) {
    this.setState({ [state]: event.target.checked });
  }

  _handleThumbnailPositionChange(event) {
    this.setState({ thumbnailPosition: event.target.value });
  }

  _resetVideo() {
    this.setState({ showVideo: false });

    if (this.state.showPlayButton) {
      this.setState({ showGalleryPlayButton: true });
    }

    if (this.state.showFullscreenButton) {
      this.setState({ showGalleryFullscreenButton: true });
    }
  }

  _toggleShowVideo() {
    const { showVideo } = this.state;
    this.setState({
      showVideo: !showVideo,
    });

    if (!showVideo) {
      if (this.state.showPlayButton) {
        this.setState({ showGalleryPlayButton: false });
      }

      if (this.state.showFullscreenButton) {
        this.setState({ showGalleryFullscreenButton: false });
      }
    }
  }

  _renderVideo(item) {
    return (
      <div>
        {this.state.showVideo ? (
          <div className="video-wrapper">
            <button className="close-video" onClick={this._toggleShowVideo} />
            <iframe
              title="sample video"
              src={item.embedUrl}
              style={{ border: "none", margin: '0 auto'}}
              allowFullScreen
            />
          </div>
        ) : (
          <>
            <button className="play-button" onClick={this._toggleShowVideo} />
            <img
              alt="sample video cover"
              className="image-gallery-image"
              src={item.original}
            />
            {item.description && (
              <span
                className="image-gallery-description"
                style={{ right: "0", left: "initial" }}
              >
                {item.description}
              </span>
            )}
          </>
        )}
      </div>
    );
  }

  render() {
    return (
      <Section id="gallery">
        <div className="container text-violet-300">
        <Heading title="Gallery"/>
        <div style={{ width: '70%', margin: '0 auto'}}>
          <ImageGallery items={this.images} showThumbnails={true}/>
        </div>
        </div>
      </Section>
    );
  }
}