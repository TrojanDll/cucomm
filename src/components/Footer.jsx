import { withStyles } from '@material-ui/styles';
import React, { Component } from 'react';
import CustomContainer from './CustomContainer';
import SpriteIcon from '../ui/SpriteIcon';

class Footer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { classes } = this.props;

    return (
      <footer className={classes.footer}>
        <CustomContainer>
          <div className={classes.wrapper}>
            <div className={classes.footerColumn}>
              <SpriteIcon id="icon-logo" className={classes.logo} />
              <SpriteIcon id="icon-trustpilot-rating-footer" className={classes.trustpilotImg} />
              <div className={classes.trustScore}>
                TrustScore <span>4.1 | XX</span> reviews
              </div>

              <div className={classes.copyright}>CUCOMM LLC © 2020–2023</div>
            </div>

            <div className={classes.footerColumn}>
              <div className={classes.columnTitle}>More</div>
              <a href="#" className={classes.moreLink}>
                FAQ
              </a>
              <a href="#" className={classes.moreLink}>
                Blog
              </a>
              <a href="#" className={classes.moreLink}>
                Pricing
              </a>
              <a href="#" className={classes.moreLink}>
                Terms of Service
              </a>
              <a href="#" className={classes.moreLink}>
                Privacy Policy
              </a>
            </div>

            <div className={classes.footerColumn}>
              <div className={classes.columnTitle}>Support</div>
              <a href="tel:+14842634799" className={classes.moreLink}>
                +1 484 263 47 99
              </a>
              <a href="mailto:help@cucomm.com" className={classes.linkBlue}>
                help@cucomm.com
              </a>

              <div className={`${classes.columnTitle} ${classes.columnTitleFreeTools}`}>
                Free Tools
              </div>
              <a href="mailto:help@cucomm.com" className={classes.linkBlue}>
                Click to Call
              </a>
            </div>

            <div className={classes.card}>
              <div className={classes.cardTitle}>Have any questions?</div>
              <div className={classes.cardDescr}>
                Ask in the live chat in the bottom right corner, via phone +1 484 263 47 99, or
                email:
              </div>
              <a href="mailto:help@cucomm.com" className={classes.cardEmail}>
                help@cucomm.com
              </a>

              <div className={classes.cardLinksWrapper}>
                <a href="#" className={classes.cardLink}>
                  <SpriteIcon id="icon-linkedin" className={classes.cardLink} />
                </a>
                <a href="#" className={classes.cardLink}>
                  <SpriteIcon id="icon-youtube" className={classes.cardLink} />
                </a>
                <a href="#" className={classes.cardLink}>
                  <SpriteIcon id="icon-twitter" className={classes.cardLink} />
                </a>
                <a href="#" className={classes.cardLink}>
                  <SpriteIcon id="icon-instagram" className={classes.cardLink} />
                </a>
                <a href="#" className={classes.cardLink}>
                  <SpriteIcon id="icon-tiktok" className={classes.cardLink} />
                </a>
                <a href="#" className={classes.cardLink}>
                  <SpriteIcon id="icon-pinterest" className={classes.cardLink} />
                </a>
              </div>
            </div>
          </div>
        </CustomContainer>
      </footer>
    );
  }
}

const styles = {
  footer: {
    padding: '102px 0 88px 0',
  },
  wrapper: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  footerColumn: {
    '&:first-child': {
      width: '216px',
    },
    '&:nth-child(2)': {
      width: '172px',
    },
    '&:nth-child(3)': {
      width: '172px',
    },
  },
  logo: {
    width: '186px',
    height: '52px',
    flexShrink: 0,
  },
  trustpilotImg: {
    marginTop: '26px',
    width: '158px',
    height: '75px',
    flexShrink: 0,
  },
  trustScore: {
    marginTop: '16px',
    fontSize: '18px',
    fontWeight: 400,
    lineHeight: '24px',
    '& span': {
      fontWeight: 600,
    },
  },
  copyright: {
    marginTop: '16px',
    fontSize: '18px',
    fontWeight: 400,
    lineHeight: '24px',
    opacity: '0.5',
  },
  columnTitle: {
    marginTop: '10px',
    fontSize: '18px',
    fontWeight: 600,
    lineHeight: '24px',
    color: 'var(--main-color)',
  },
  columnTitleFreeTools: {
    marginTop: '56px',
  },
  moreLink: {
    marginTop: '16px',
    display: 'block',
    fontSize: '18px',
    fontWeight: 400,
    lineHeight: '24px',
    color: 'var(--text-color)',
  },
  linkBlue: {
    marginTop: '16px',
    display: 'block',
    fontSize: '18px',
    fontWeight: 400,
    lineHeight: '24px',
    color: '#1F2DC2',
  },

  cardEmail: {
    fontSize: '18px',
    fontWeight: 400,
    lineHeight: '24px',
    color: '#1F2DC2',
  },
  card: {
    padding: '32px 40px 40px 40px',
    width: '452px',
    height: '288px',
    flexShrink: 0,
    borderRadius: '24px',
    background: '#ffffff',
    boxShadow: '0px 20px 60px 0px rgba(0, 48, 71, 0.20)',
  },
  cardTitle: {
    fontSize: '24px',
    fontWeight: 500,
    lineHeight: '32px',
  },
  cardDescr: {
    marginTop: '24px',
    fontSize: '18px',
    fontWeight: 400,
    lineHeight: '24px',
  },
  cardLinksWrapper: {
    marginTop: '32px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  cardLink: {
    width: '56px',
    height: '56px',
  },
};

export default withStyles(styles)(Footer);
