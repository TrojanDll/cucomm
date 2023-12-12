import { withStyles } from '@material-ui/styles';
import React, { Component } from 'react';
import CustomContainer from './CustomContainer';
import listPoint from './../assets/img/listPoint.svg';
import longArrow from './../assets/img/longArrow.svg';
import videoThumbnail from './../assets/img/video-thumbnail.png';
import firstImg from './../assets/img/promo-img-1.png';
import SpriteIcon from '../ui/SpriteIcon';

class VideoBenefitsSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isYoutubeShown: false,
    };
  }
  render() {
    const { classes } = this.props;
    const { isYoutubeShown } = this.state;

    let videoHeight = 0;

    const toggleVideo = () => {
      this.setState({ isYoutubeShown: true });
      playVideoCustom();
    };

    const setVideoheight = () => {
      if (window.innerWidth <= 576) {
        const videoWidth = window.innerWidth - 60;
        videoHeight = videoWidth * 0.5625;
      }
    };

    // 2. This code loads the IFrame Player API code asynchronously.
    var tag = document.createElement('script');

    tag.src = 'https://www.youtube.com/iframe_api';
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // 3. This function creates an <iframe> (and YouTube player)
    //    after the API code downloads.
    var player;
    function onYouTubeIframeAPIReady() {
      player = new YT.Player('player', {
        playerVars: { playsinline: 1, rel: 0 },
        videoId: 'M7lc1UVf-VE',
        events: {
          onReady: onPlayerReady,
          onStateChange: onPlayerStateChange,
        },
      });
    }

    // 4. The API will call this function when the video player is ready.
    function onPlayerReady(event) {
      // event.target.playVideo();
    }

    const playVideoCustom = () => {
      // const fn = function () {
      //   player.playVideo();
      // };
      // setTimeout(fn, 2000);
    };

    // 5. The API calls this function when the player's state changes.
    //    The function indicates that when playing a video (state=1),
    //    the player should play for six seconds and then stop.
    var done = false;
    function onPlayerStateChange(event) {
      // if (event.data == YT.PlayerState.PLAYING && !done) {
      //   setTimeout(stopVideo, 6000);
      //   done = true;
      // }
    }
    // function stopVideo() {
    //   player.stopVideo();
    // }

    // youtubePlayerInit();
    setVideoheight();

    return (
      <section className={classes.benefits}>
        <CustomContainer>
          <div className={classes.wrapper}>
            <div className={classes.textWrapper}>
              <div className={classes.sign}>BENEFITS</div>

              <h2 className={classes.title}>Benefits lorem ipsum dolor set amet</h2>

              <ul className={classes.list}>
                <li className={classes.listItem}>
                  Automated everything: parsing, friend requesting, messaging, linking, statistics
                  calculating
                </li>
                <li className={classes.listItem}>Export/import leads</li>
                <li className={classes.listItem}>Up-to-date (core udpates automatically)</li>
                <li className={classes.listItem}>
                  No duplicates. Optional. Does not send messages to the same prospects multiple
                  times, even outreaching from multiple accounts (use the same profiles collection)
                </li>
                <li className={classes.listItem}>
                  Team. All colleagues share the same profile collections. Reach prospects without
                  duplicates
                </li>
              </ul>

              <div className={classes.btnWrapper}>
                <button className={classes.btn}>Shut up and take my money!</button>
                <div className={classes.videoClue}>Look how it works</div>
              </div>
            </div>

            <div className={classes.imgWrapper}>
              <img src={firstImg} alt="benefits-img" className={classes.img} />

              <div
                alt="video-thumbnail"
                className={`${classes.videoImg} ${classes.videoThumbnail}`}
                style={{
                  height: `${window.innerWidth <= 576 ? videoHeight + 'px' : ''}`,
                  display: `${isYoutubeShown ? 'none' : 'block'}`,
                }}
                onClick={toggleVideo}>
                <SpriteIcon id="icon-video-button" className={classes.videoPlayButton} />
                <img src={videoThumbnail} alt="videoThumbnail" />
              </div>

              <iframe
                id="player"
                type="text/html"
                src="https://www.youtube.com/embed/amyFtnIv9gA?si=qp-VfP5w8AHZjR6n"
                frameBorder="0"
                className={classes.videoImg}
                style={{
                  display: `${isYoutubeShown ? 'block' : 'none'}`,
                  height: `${window.innerWidth <= 576 ? videoHeight + 'px' : ''}`,
                }}
                // style={window.innerWidth <= 576 ? { height: videoHeight } : {}}
              ></iframe>
            </div>
          </div>
        </CustomContainer>
      </section>
    );
  }
}

const styles = {
  benefits: {
    paddingTop: '112px',
    background: 'var(--lightest-grey-color)',
  },
  wrapper: {
    display: 'flex',
  },
  textWrapper: {
    width: '516px',
  },
  sign: {
    width: '89px',
    display: 'flex',
    alignItems: 'center',
    borderRadius: '9999px',
    textTransform: 'uppercase',
    fontFamily: 'BarlowCondensed',
    letterSpacing: '1.4px',
    height: '40px',
    fontSize: '14px',
    fontWeight: 500,
    color: 'var(--main-color)',
    background: '#ffffff',
    padding: '0 16px',
  },
  title: {
    marginTop: '24px',
    fontSize: '48px',
    fontWeight: 500,
    lineHeight: '56px',
  },
  list: {
    marginTop: '40px',
    paddingRight: '40px',
  },
  listItem: {
    marginTop: '16px',
    display: 'flex',
    columnGap: '24px',
    fontSize: '18px',
    fontWeight: 400,
    lineHeight: '24px',

    '&:first-child': {
      marginTop: 0,
    },
    '&::before': {
      content: '""',
      display: 'block',
      marginTop: '8px',
      width: '8px',
      height: '9px',
      background: `url("${listPoint}") center center/cover no-repeat`,
      flexShrink: 0,
    },
  },
  btnWrapper: {
    display: 'flex',
    columnGap: '32px',
    marginTop: '40px',
    alignItems: 'center',
  },
  btn: {
    height: '64px',
    padding: '20px 32px',
    fontSize: '18px',
    fontWeight: '600',
    color: '#ffffff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    lineHeight: '24px',
    background: 'var(--main-color)',
    borderRadius: '9999px',
    '&:focus': {
      outline: 'none',
    },
    '&:hover': {
      background: 'var(--hover-color)',
    },
  },
  videoClue: {
    position: 'relative',
    fontSize: '18px',
    fontWeight: 600,
    lineHeight: '24px',
    zIndex: 5,
    '&::after': {
      content: '""',
      display: 'block',
      position: 'absolute',
      width: '85px',
      height: '35px',
      right: '-32px',
      top: '-18px',
      transform: 'translateX(100%)',
      background: `url("${longArrow}") center center/cover no-repeat`,
      zIndex: 5,
    },
  },
  videoThumbnail: {
    position: 'relative',
    cursor: 'pointer',
  },
  videoPlayButton: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80px',
    height: '80px',
    cursor: 'pointer',
    '&:hover': {
      width: '85px',
      height: '85px',
    },
  },
  imgWrapper: {
    position: 'relative',
    width: 'calc(100% - 516px)',
    height: '100%',
  },
  img: {
    position: 'absolute',
    width: '625px',
    height: '378px',
    filter: 'drop-shadow(0px 20px 60px rgba(0, 48, 71, 0.20))',
    borderRadius: '24px',
    top: 0,
    right: 0,
  },
  videoImg: {
    position: 'absolute',
    display: 'block',
    width: '625px',
    height: '352px',
    filter: 'drop-shadow(0px 20px 60px rgba(0, 48, 71, 0.20))',
    borderRadius: '24px',
    top: '250px',
    right: '109px',
    zIndex: 3,
  },

  '@media (max-width: 1320px)': {
    wrapper: {
      flexWrap: 'wrap',
    },
    textWrapper: {
      width: '100%',
    },
    sign: {
      margin: '0 auto',
    },
    title: {
      textAlign: 'center',
    },
    img: {
      display: 'none',
    },
    list: {
      paddingRight: '0',
    },
    videoImg: {
      position: 'static',
      display: 'block',
      height: '352px',
    },
    videoClue: {
      '&::after': {
        display: 'none',
      },
    },
    btnWrapper: {
      justifyContent: 'center',
    },
    imgWrapper: {
      margin: '0 auto',
      marginTop: '48px',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
    },
  },

  // '@media (max-width: 992px)': {
  //   videoImg: {
  //     width: '100%',
  //     height: '304px',
  //   },
  // },

  '@media (max-width: 768px)': {
    title: {
      fontSize: '44px',
      lineHeight: '56px',
    },
    videoImg: {
      width: '100%',
      height: '304px',
    },
  },

  '@media (max-width: 576px)': {
    benefits: {
      paddingTop: '64px',
    },
    title: {
      fontSize: '32px',
      lineHeight: '40px',
    },
    listItem: {
      fontSize: '18px',
      lineHeight: '24px',
    },
    btnWrapper: {
      flexWrap: 'wrap',
    },
    btn: {
      width: '100%',
    },
    videoClue: {
      marginTop: '32px',
      textAlign: 'center',
    },
    imgWrapper: {
      marginTop: '32px',
    },
    videoImg: {
      width: '100%',
    },
    videoPlayButton: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '64px',
      height: '64px',
      cursor: 'pointer',
      '&:hover': {
        width: '68px',
        height: '68px',
      },
    },
  },
};

export default withStyles(styles)(VideoBenefitsSection);
