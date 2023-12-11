import React from 'react';
import { withStyles } from '@material-ui/styles';
import CustomContainer from './CustomContainer';
import SpriteIcon from '../ui/SpriteIcon';

class BenefitsSection extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { classes } = this.props;

    return (
      <section className={classes.benefitsWrapper}>
        <CustomContainer>
          <div className={classes.benefits}>
            <h2 className={classes.title}>Better than manual</h2>
            <div className={classes.descr}>
              You spend 4 times less time and get 7 times more leads compared to manual!
            </div>

            <div className={classes.list}>
              <div className={classes.listItem}>
                <SpriteIcon id="icon-benefits-1" className={classes.listItemImg} />
                <div className={classes.listItemText}>
                  Saves you up to 75% of time on messaging your clients
                </div>
              </div>

              <div className={classes.listItem}>
                <SpriteIcon id="icon-benefits-2" className={classes.listItemImg} />
                <div className={classes.listItemText}>
                  Saves you 100% of time on statistics gathering
                </div>
              </div>

              <div className={classes.listItem}>
                <SpriteIcon id="icon-benefits-3" className={classes.listItemImg} />
                <div className={classes.listItemText}>
                  Doesn’t visit the same profiles again and again
                </div>
              </div>

              <div className={classes.listItem}>
                <SpriteIcon id="icon-benefits-4" className={classes.listItemImg} />
                <div className={classes.listItemText}>
                  Allows to work from 7+ accounts at the same time
                </div>
              </div>

              <div className={classes.listItem}>
                <SpriteIcon id="icon-benefits-5" className={classes.listItemImg} />
                <div className={classes.listItemText}>
                  Doesn’t message the same people from different accounts
                </div>
              </div>
            </div>
          </div>
        </CustomContainer>
      </section>
    );
  }
}

const styles = {
  benefitsWrapper: {
    paddingTop: '112px',
    backgroundColor: 'var(--lightest-grey-color)',
  },
  benefits: {
    padding: '88px 109px',
    width: '100%',
    minHeight: '516px',
    borderRadius: '24px',
    background: '#fff',
    filter: 'drop-shadow(0px 20px 60px rgba(0, 48, 71, 0.2))',
  },
  title: {
    fontSize: '40px',
    fontWeight: 500,
    lineHeight: '48px',
    textAlign: 'center',
  },
  descr: {
    marginTop: '16px',
    fontSize: '24px',
    fontWeight: 300,
    lineHeight: '32px',
    textAlign: 'center',
  },
  list: {
    marginTop: '44px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  listItem: {
    width: '189px',
  },
  listItemImg: {
    display: 'block',
    margin: '0 auto',
    width: '100%',
    height: '112px',
  },
  listItemText: {
    fontSize: '18px',
    fontWeight: 400,
    lineHeight: '24px',
    textAlign: 'center',
  },

  '@media (max-width: 1320px)': {
    benefits: {
      padding: '64px 72px',
    },
    listItem: {
      width: '140px',
    },
  },

  '@media (max-width: 992px)': {
    list: {
      flexWrap: 'wrap',
      rowGap: '48px',
    },
    listItem: {
      width: '100%',
    },
  },
  '@media (max-width: 768px)': {
    title: {
      fontSize: '44px',
      lineHeight: '56px',
    },
    descr: {
      fontSize: '24px',
      lineHeight: '32px',
      fontWeight: 400,
    },
  },
  '@media (max-width: 576px)': {
    benefitsWrapper: {
      paddingTop: '64px',
    },
    benefits: {
      padding: '64px 30px',
    },
    title: {
      fontSize: '32px',
      lineHeight: '40px',
    },
    descr: {
      fontSize: '18px',
      lineHeight: '24px',
    },
    list: {
      rowGap: '32px',
    },
  },
};

export default withStyles(styles)(BenefitsSection);
