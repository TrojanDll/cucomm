import { withStyles } from '@material-ui/styles';
import React, { Component } from 'react';
import CustomContainer from './CustomContainer';
import FAQItem from './FAQItem';

class FAQSection extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { classes } = this.props;

    const faqItems = [
      {
        id: 1,
        title: 'Can I export users?',
        descr:
          'Yes. Export profiles to edit them in Excel, Google Sheets, or other software, to import them in your CRM, to handle different Facebook Groups separately, or for some other purposes. You can import them back when you need them.',
      },
      {
        id: 2,
        title: 'Will I send a message twice to the same person?',
        descr:
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit quas iusto id, odit accusamus quidem culpa! Quia incidunt aspernatur maxime suscipit! Sapiente repudiandae iusto minus. Modi officiis odio quos illo!',
      },
      {
        id: 3,
        title:
          'Will I have the same person in the collection twice if I collect profiles from different places?',
        descr:
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit quas iusto id, odit accusamus quidem culpa! Quia incidunt aspernatur maxime suscipit! Sapiente repudiandae iusto minus. Modi officiis odio quos illo!',
      },
      {
        id: 4,
        title: 'Do you have a tutorial or some kind of training?',
        descr:
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit quas iusto id, odit accusamus quidem culpa! Quia incidunt aspernatur maxime suscipit! Sapiente repudiandae iusto minus. Modi officiis odio quos illo!',
      },
      {
        id: 5,
        title: 'Can I use multiple Facebook accounts?',
        descr:
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit quas iusto id, odit accusamus quidem culpa! Quia incidunt aspernatur maxime suscipit! Sapiente repudiandae iusto minus. Modi officiis odio quos illo!',
      },
      {
        id: 6,
        title: 'Can I use multiple Facebook accounts at the same time?',
        descr:
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit quas iusto id, odit accusamus quidem culpa! Quia incidunt aspernatur maxime suscipit! Sapiente repudiandae iusto minus. Modi officiis odio quos illo!',
      },
      {
        id: 7,
        title: 'Can I use my computer while CUCOMM works?',
        descr:
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit quas iusto id, odit accusamus quidem culpa! Quia incidunt aspernatur maxime suscipit! Sapiente repudiandae iusto minus. Modi officiis odio quos illo!',
      },
      {
        id: 8,
        title: 'When I came back it has done almost nothing / was frozen. What is the reason?',
        descr:
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit quas iusto id, odit accusamus quidem culpa! Quia incidunt aspernatur maxime suscipit! Sapiente repudiandae iusto minus. Modi officiis odio quos illo!',
      },
    ];

    return (
      <section className={classes.faqSection}>
        <CustomContainer>
          <h2 className={classes.title}>Frequently Asked Questions</h2>
          <div className={classes.list}>
            {faqItems.map((item, i) =>
              i == 0 ? (
                <FAQItem
                  setDescrOpened="true"
                  key={item.id}
                  title={item.title}
                  descr={item.descr}
                />
              ) : (
                <FAQItem key={item.id} title={item.title} descr={item.descr} />
              ),
            )}
          </div>
        </CustomContainer>
      </section>
    );
  }
}

const styles = {
  faqSection: {
    padding: '112px 0',
  },
  title: {
    fontSize: '48px',
    fontWeight: 500,
    textAlign: 'center',
  },
  list: {
    margin: '0 auto',
    marginTop: '8px',
    width: '844px',
  },
};

export default withStyles(styles)(FAQSection);
