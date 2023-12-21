import React, { Component, createRef } from 'react';

class ParallaxBlock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      translateY: 0,
      loaded: false,
    };
    this.ref = createRef();
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    this.checkVisibility();
    this.handleScroll();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    if (this.isComponentVisible()) {
      requestAnimationFrame(() => {
        const rect = this.ref.current.getBoundingClientRect();
        const { strength } = this.props;
        const translateY = (window.innerHeight - rect.top) * strength;
        this.setState({ translateY, loaded: true });
      });
    }
  }

  checkVisibility() {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.handleScroll();
          observer.disconnect();
        }
      });
    }, options);

    if (this.ref.current) {
      observer.observe(this.ref.current);
    }
  }

  isComponentVisible() {
    if (!this.ref.current) return false;
    const rect = this.ref.current.getBoundingClientRect();
    return rect.top <= window.innerHeight && rect.bottom >= 0;
  }

  render() {
    const { backgroundImage, children, isPromoFilter } = this.props;
    const { translateY, loaded } = this.state;

    const parallaxStyle = {
      backgroundImage: `url(${backgroundImage})`,
      transform: loaded ? `translateY(${translateY}px)` : 'none',
      transition: loaded ? 'transform 0.5s ease-out' : 'none',
      zIndex: isPromoFilter ? '0' : '-1',
    };

    return (
      <div ref={this.ref} className="parallax-block" style={parallaxStyle}>
        {children}
      </div>
    );
  }
}

export default ParallaxBlock;
