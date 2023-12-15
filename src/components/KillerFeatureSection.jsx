import React from 'react';
import { withStyles } from '@material-ui/styles';
import CustomContainer from './CustomContainer';
import featureImg1 from './../assets/img/feature-img-1.jpg';
import featureImg2 from './../assets/img/feature-img-2.jpg';

class KillerFeatureSection extends React.Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
    this.state = {
      offsetY: 0,
      scrolledPart: 0,
    };

    this.intersectionObserver = null;
    this.parallaxBlockRef = React.createRef();
  }

  handleScroll() {
    this.setState({ offsetY: window.scrollY });
    console.log(window.scrollY);
  }

  componentDidMount() {
    // window.addEventListener('scroll', this.handleScroll);

    // return () => window.removeEventListener('scroll', this.handleScroll);

    this.intersectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log('Элемент появился в кадре!');

            this.setState({ scrolledPart: window.scrollY });
            window.addEventListener('scroll', this.handleScroll);
          }
          if (!entry.isIntersecting) {
            console.log('Элемент вышел из кадра!');
            window.removeEventListener('scroll', this.handleScroll);
          }
        });
      },
      { threshold: 0.5 },
    );

    if (this.parallaxBlockRef.current) {
      this.intersectionObserver.observe(this.parallaxBlockRef.current);
    }
  }

  componentWillUnmount() {
    if (this.parallaxBlockRef.current && this.intersectionObserver) {
      this.intersectionObserver.unobserve(this.parallaxBlockRef.current);
    }
  }

  render() {
    const { classes } = this.props;
    const { offsetY, scrolledPart } = this.state;

    return (
      <section className={classes.feature}>
        <CustomContainer>
          <div className={classes.sign}>KILLER FEATURE</div>

          <h2 className={classes.title}>Common inbox</h2>
          <div className={classes.descr}>One inbox for all your Facebook accounts</div>

          <img
            ref={this.parallaxBlockRef}
            style={{ transform: `translateY(${(offsetY - scrolledPart) * -0.5}px)` }}
            src={featureImg1}
            alt="man-with-glasses"
            className={`${classes.img} ${classes.img1}`}
          />
          <img
            src={featureImg2}
            alt="woman-with-glasses"
            className={`${classes.img} ${classes.img2}`}
          />
        </CustomContainer>
      </section>
    );
  }
}

const styles = {
  feature: {
    paddingBottom: '152px',
    paddingTop: '112px',
    backgroundColor: 'var(--text-color)',
  },
  sign: {
    margin: '0 auto',
    width: '131px',
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
    color: '#ffffff',
    fontWeight: 500,
    fontSize: '48px',
    lineHeight: '56px',
    textAlign: 'center',
  },
  descr: {
    marginTop: '16px',
    color: '#ffffff',
    fontWeight: 300,
    fontSize: '24px',
    lineHeight: '32px',
    textAlign: 'center',
  },
  img: {
    position: 'absolute',
    width: '188px',
    height: '188px',
    borderRadius: '24px',
  },
  img1: {
    left: 0,
    top: '-160px',
  },
  img2: {
    right: 0,
    bottom: '-104px',
  },

  '@media (max-width: 992px)': {
    img1: {
      display: 'none',
    },
    img2: {
      display: 'none',
    },
  },

  '@media (max-width: 768px)': {
    title: {
      fontSize: '44px',
    },
    descr: {
      fontSize: '22px',
    },
  },

  '@media (max-width: 576px)': {
    feature: {
      paddingBottom: '120px',
      paddingTop: '64px',
    },
    title: {
      fontSize: '32px',
      lineHeight: '40px',
    },
    descr: {
      fontSize: '18px',
      lineHeight: '24px',
    },
  },
};

export default withStyles(styles)(KillerFeatureSection);
