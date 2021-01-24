import * as Yup from 'yup';

import MapMarker from '@pagerland/icons/src/line/MapMarker';
import Phone from '@pagerland/icons/src/line/Phone';
import Envelope from '@pagerland/icons/src/line/Envelope';
import FacebookF from '@pagerland/icons/src/line/FacebookF';
import Instagram from '@pagerland/icons/src/line/Instagram';
import Youtube from '@pagerland/icons/src/line/Youtube';
import Dna from '@pagerland/icons/src/line/Dna';
import Flask from '@pagerland/icons/src/line/Flask';
import Atom from '@pagerland/icons/src/line/Atom';
import CheckCircle from '@pagerland/icons/src/line/CheckCircle';
import Gift from '@pagerland/icons/src/line/Gift';
import Coffee from '@pagerland/icons/src/line/Coffee';
import Medal from '@pagerland/icons/src/line/Medal';
import LightbulbAlt from '@pagerland/icons/src/line/LightbulbAlt';

import textToMultiline from '@pagerland/common/src/utils/textToMultiline';

import firstFuture from './assets/frist-feature.svg';
import secondFuture from './assets/second-feature.svg';
import thirdFuture from './assets/third-feature.svg';

import Phone1 from './assets/screenshots/Phone-1.png';
import Phone1x2 from './assets/screenshots/Phone-1@2x.png';
import Phone2 from './assets/screenshots/Phone-2.png';
import Phone2x2 from './assets/screenshots/Phone-2@2x.png';
import Phone3 from './assets/screenshots/Phone-3.png';
import Phone3x2 from './assets/screenshots/Phone-3@2x.png';
import Phone4 from './assets/screenshots/Phone-4.png';
import Phone4x2 from './assets/screenshots/Phone-4@2x.png';
import Phone5 from './assets/screenshots/Phone-5.png';
import Phone5x2 from './assets/screenshots/Phone-5@2x.png';
import Phone6 from './assets/screenshots/Phone-6.png';
import Phone6x2 from './assets/screenshots/Phone-6@2x.png';

import male from './assets/clients/photo-male.jpg';
import malex2 from './assets/clients/photo-male@2x.jpg';
import female from './assets/clients/photo-female.jpg';
import femalex2 from './assets/clients/photo-female@2x.jpg';

export default {
  title: 'FGE',
  navbar: {
    links: [
      {
        to: '',
        label: 'Home',
      },
      {
        to: 'about',
        label: 'About',
      },
      {
        to: 'features',
        label: 'Features',
      },
      {
        to: 'screens',
        label: 'Screens',
      },
      {
        to: 'clients',
        label: 'Clients',
      },
      {
        to: 'support',
        label: 'Support',
      },
      {
        to: 'pricing',
        label: 'Pricing',
      },
      {
        to: 'contact',
        label: 'Contact',
      },
    ],
    /*
    actions: [
      {
        href: 'http://mypags.app',
        label: 'Start free trial',
      },
    ],
    */
  },
  welcome: {
    title: 'Upgrade your trading game.',
    text: `We offer leading-edge communities, indicators, and bots for stocks, options, forex, and the like.`,
  },
  footer: {
    section1: {
      text: textToMultiline(`built with <3 by alex\nsweet graphics by Noomy`),
    },
    contact: {
      title: 'Contact',
      sections: [
        {
          icon: MapMarker,
          text: textToMultiline(`Phoenix4137#7462\n`),
        },
        {
          icon: Phone,
          text: '+1 (469) 910-7436‬',
        },
        {
          icon: Envelope,
          text: 'focusgroupinvestments@gmail.com',
        },
      ],
    },
    section3: {
      title: 'Other',
      text: `Our TOS & Return Policy`,
    },
  },
  about: {
    title: 'How can we help you?',
    text: `__`,
    features: [
      {
        id: 'feature1',
        IconProps: {
          icon: Dna,
          gradient: 'tertiary',
        },
        title: 'SFG',
        text:
          'Consistently delivering low-risk and consistent profit stream stock investments. Includes a prominient education channel to get you up to speed.',
      },
      {
        id: 'feature2',
        IconProps: {
          icon: Flask,
          gradient: 'primary',
        },
        title: 'OFG',
        text:
          'Volatile and difficult, and yet possibly far more rewarding: our options focus group requires a commitment, and your journey is aided by our education channel and some incredibly experienced traders.',
      },
      {
        id: 'feature3',
        IconProps: {
          icon: Atom,
          gradient: 'quaternary',
        },
        title: 'FGE AI',
        text:
          'Our indicator is an easy and incredibly effective tool to analyze stocks, enabling beginners to jumpstart their learning and experts to perfect their portfolio. Includes a support staff alongside YT videos and webinars!',
      },
    ],
  },
  socialLinks: [
    /*
    {
      icon: FacebookF,
      href: 'https://mypags.app',
      title: 'Facebook',
    },
    */
    {
      icon: Instagram,
      href: 'https://www.instagram.com/focusgroup_official/',
      title: 'Instagram',
    },
    {
      icon: Youtube,
      href: 'https://www.youtube.com/channel/UCMIpwcvbo2rsyClo8T0li2g',
      title: 'YouTube',
    },
  ],
  features: [
    {
      ImageProps: {
        src: firstFuture,
      },
      title: 'Stocks Focus Group',
      text:
        'Stocks Focus Group is a service that focuses on stock plays generally with blue - chip stocks(AAPL, FB, TSLA, etc). This group is perfect to get introduced to the stock market or to successfully invest for a low- risk, consistent profit stream. Since its beginning, our percentage of plays that paid off is 80 %, and we are continuously working to improve that number. Many people have used this as a stepping stone before going into Options Focus Group, getting their feet wet before diving into the deep end. We have a prominent education channel and do our best to put everyone on the same page.',
      list: [
        {
          IconProps: {
            icon: CheckCircle,
            gradient: 'quaternary',
          },
          title: 'Weekly Watchlists',
          text: 'with all price targets given (Long/Short entry, Stop-Losses, Ticker Targets) at an 85% success profit rate, and robust and customizable alerts for all stocks.',
        },
        {
          IconProps: {
            icon: CheckCircle,
            gradient: 'quaternary',
          },
          title: 'Extensive Resources',
          text: 'including admin alerts and long-term swing trades where we provide plentyful research on specific tickets for beginner traders.',
        },
        {
          IconProps: {
            icon: CheckCircle,
            gradient: 'quaternary',
          },
          title: '[your] Active Community',
          text: 'of like-minded traders and organization managers who are invested in your success as well as their own!',
        },
      ],
    },
    {
      ImageProps: {
        src: secondFuture,
      },
      title: 'Options Focus Group',
      text:
        'The first thing we tell people who join Options Focus Group is that it is not for the weak. Options Focus Group is focused around options trading, which is more difficult and volatile than stocks trading, but at the same time, is also more rewarding. For those who join this group, we recommend sincerely that you are ready to put in the time and effort that options trading demands, knowing that while it might not pay off immediately, when it does, it could be huge. To help you in this learning journey, we have some incredibly experienced traders willing to answer all your questions and an education channel focused around learning from mistakes and trying to prevent them in the future. When it works out, it will be huge - life-changing huge - but until then, you must put in the work.',
      list: [ {
          IconProps: {
            icon: CheckCircle,
            gradient: 'quaternary',
          },
          title: 'SILVER',
          text: 'Expect access to trade ideas from multiple accredited analysts, who specialize in different styles of trade, along with a robust community of active traders who uplift each other and help analyze and break down plays.',
        },
        {
          IconProps: {
            icon: CheckCircle,
            gradient: 'quaternary',
          },
          title: 'GOLD',
          text: 'Expect everything in "SILVER". And access to Flow Algo and Swwep Lookups, JARVIS AI (real-time trade ideas based on "smart money"), and or education platform, where we cover options trading techniques from the basics, to the more advanced methods.',
        },
        {
          IconProps: {
            icon: CheckCircle,
            gradient: 'quaternary',
          },
          title: 'PLATINUM',
          text: 'Expect everything from the previous two, free access to FGI AI, and the option to get the Makam-Student add-on.',
        },
      ],
    },
    {
      title: 'Indicators',
      text:
        'In the groups, we recommend stocks and options as they come in the market, and in doing so, have realized that many people miss out - due to fear, inexperience, or just not seeing the alert on time. For this, we have provided the indicator. The indicator is the perfect tool to complete the package. It promotes learning by making it easy to begin personal investing aside from what we provide - a crucial step to growing as an investor. The indicator is an easy and incredibly effective tool to use to technically analyze stocks and their trends and to come up with an estimate of which time to buy/sell a certain stock or option. It enables beginners to learn and experts to personalize their investments and portfolio, and has a support staff that makes YT videos, webinars, and is willing to sit with you personally should you need it. ',
      list: [
        {
          IconProps: {
            icon: Gift,
            gradient: 'primary',
          },
          title: 'Multiple smart signal modes',
          text: 'creating support/resistance lines, predicting volatility/overextension. Smart buy/sell signals for any ticker+crypto+more have a 95% success rate when confirmed.',
        },
        {
          IconProps: {
            icon: Coffee,
            gradient: 'tertiary',
          },
          title: 'Perfect Companion in trading Cryptocurrency',
          text: 'Accurately predicts all spikes (ex-buy signal triggered at 18k, current BTC prices at 37k). The current FGI AI has been crypto-enhanced to help cover all markets.',
        },
        {
          IconProps: {
            icon: Medal,
            gradient: 'secondary',
          },
          title: 'Proprietary technology',
          text: 'Allows our indicator to trade in ANY market (including sideways, where indicators usually fail).',
        },
        {
          IconProps: {
            icon: LightbulbAlt,
            gradient: 'quaternary',
          },
          title: 'The Latest Algorithm',
          text: 'Creates target entry, stop loss, and price targets for any chart when Smart Buy signal is triggered (beta).',
        },
      ],
    },
    {
      ImageProps: {
        src: thirdFuture,
      },
      title: 'More amazing features', // no
      text:
        'Ut commodo suscipit neque vitae suscipit. Mauris congue viverra dolor, vel lobortis elit venenatis vel. Nunc non orci ut mi semper aliquet. Nullam vitae tortor faucibus, vehicula lorem in, convallis mi.',
      list: [
        {
          title: 'Features subheading',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel vehicula dui.',
        },
        {
          title: 'Another features subheading',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel vehicula dui.',
        },
        {
          title: 'And just one more',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel vehicula dui.',
        },
        {
          title: 'Features subheading',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel vehicula dui.',
        },
        {
          title: 'Another features subheading',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel vehicula dui.',
        },
        {
          title: 'And just one more',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel vehicula dui.',
        },
      ],
    },
  ],
  screenshots: {
    title: 'Screenshots',
    text:
      'Our entire community is centrallized on Discord. This makes it very easy to communicate with like-minded people, access trading education, and catch up on FGE announcements all in one place!',
    images: [
      {
        src: Phone1,
        srcSet: `${Phone1} 1x, ${Phone1x2} 2x`,
        alt: 'Phone 1',
      },
      {
        src: Phone2,
        srcSet: `${Phone2} 1x, ${Phone2x2} 2x`,
        alt: 'Phone 2',
      },
      {
        src: Phone3,
        srcSet: `${Phone3} 1x, ${Phone3x2} 2x`,
        alt: 'Phone 3',
      },
      {
        src: Phone4,
        srcSet: `${Phone4} 1x, ${Phone4x2} 2x`,
        alt: 'Phone 4',
      },
      {
        src: Phone5,
        srcSet: `${Phone5} 1x, ${Phone5x2} 2x`,
        alt: 'Phone 5',
      },
      {
        src: Phone6,
        srcSet: `${Phone6} 1x, ${Phone6x2} 2x`,
        alt: 'Phone 6',
      },
    ],
  },
  clients: {
    title: 'What clients say about us?',
    comments: [
      {
        author: '"Palami", from OFG',
        text: `Great discord community to be part of. I am with OFG community from day 1. I joined with zero knowledge about options trading, and learned a lot from Varun and by making mistakes :-). With the addition of our new awesome admins, we got more expertise and experience. Just find a strategy that works for you, then you can do stress free trading! I would definitely recommend to join the OFG.`,
        AvatarProps: {
          src: male,
          srcSet: `${male} 1x, ${malex2} 2x`,
        },
      },
      {
        author: '"faksheshvyas", from SFG+OFG',
        text: `It is really good that admin are spending too much time in educating people, they are going beyond on what they have supposed to do.`,
        AvatarProps: {
          src: female,
          srcSet: `${female} 1x, ${femalex2} 2x`,
        },
      },
      {
        author: '"moneyisgreen5", from FGI AI',
        text: `It’s incredible effort to ensure each and every one has access to FGI AI indicator .. The amount of message which is being handled, dedicatedly replying to each of those.. taking care of each member step by step is amazing .. This just shows zeal and enthusiasm Varun and his team bring to table .. To catch hold each member hand and help them cross the river sets this group apart ...!!! Hats Off to Varun and his entire team.. Job well done !!!!`,
        AvatarProps: {
          src: female,
          srcSet: `${female} 1x, ${femalex2} 2x`,
        },
      },
      {
        author: '"Rajucheruri", from OFG+SFG',
        text: `Joined SFG few weeks back. Although was not able to trade much due to funds constraints and full time job, I have been following the alerts given by all admins. All admins are very knowledgeable and are available when needed. Apart from admins alerts, tools are available for picking the trades ourselves. They keep introducing new features to make trading experience better for subscribers. Wish to continue my association with this team for long term.`,
        AvatarProps: {
          src: female,
          srcSet: `${female} 1x, ${femalex2} 2x`,
        },
      },
    ],
  },
  discordwidget: {
    title: 'Here is our Widget.',
    text: `__`,
  },
  faq: {
    title: 'Do you have any questions?',
    text:
      'Investments of all kinds can be very complicated endeavors, and in consideration of that, our goal is to provide you with the resources to feel confident in your trading protfolio.',
    options: [
      {
        title: 'I have signed up for a service but I don’t have access. What do I do?',
        text:
          'Please contact a team member and give us all the necessary requisite information (such as your name, email, and screenshots of subscription confirmation) and we will reach back to you as soon as possible!',
      },
      {
        title: ' How does the SFG Alert system work?',
        text:
          'When you are a current member of SFG (shown if you have the “Swing Traders” role in SFG discord), go to #choose-your-ticker and sign up for the stocks that you like to have tailored alerts for according to the numbers given out in #watchlist\n.. For more information, here is a short video explaining the sfg system and hopefully the scs make more sense https://youtu.be/fXGqgs-J8tE',
      },
      {
        title: 'How does the indicator work?',
        text:
          `Once you have subscribed to the indicator by making a trading
          view account and signing up on memberly, a team member will
          give you access within 2 business days. From there on either refer
          to these guides to maximize the indicator:\n
          https://www.youtube.com/watch?v=dSUISz_YRrA&t=1s\n
          https://www.youtube.com/watch?v=0zI4_h9X0SY&t=18s\n
          https://www.youtube.com/watch?v=M-4z6UV9Sgw\n\n
          (on website have three separate video boxes so user does not
          have to leave the website)
          `
      },
    ],
  },
  pricing: {
    title: 'Quarterly and Lifetime payment and combination discounts offered!',
    prices: {
      currency: 'USD',
      types: {
        a: 'Monthly',
        b: 'Annually',
      },
      sections: [
        {
          title: 'OFG Silver',
          price: {
            a: '$100',
            b: 'N/A',
          },
          features: [
            {
              text: 'Options Plays in many styles (scalp, swing, etc)',
              check: true,
            },
            {
              text: 'Large community of active traders',
              check: true,
            },
          ],
          button: {
            text: 'I\'m interested!',
            ButtonProps: {
              as: 'a',
              href: 'https://mypags.app',
            },
          },
        },
        {
          title: 'OFG Gold',
          price: {
            a: '$150',
            b: '$1350',
          },
          features: [
            {
              text: 'Everything in Silver',
              check: true,
            },
            {
              text: 'Flow Algo + Sweep Lookups',
              check: true,
            },
            {
              text: 'JARVIS A.I',
              check: true,
            },
            {
              text: 'Basic -> Advanced Options Education',
              check: true,
            },
          ],
          button: {
            text: 'I\'m interested!',
            ButtonProps: {
              as: 'a',
              href: 'https://mypags.app',
            },
          },
        },
        {
          title: 'OFG Platinum',
          price: {
            a: '$250',
            b: '$2250',
          },
          features: [
            {
              text: 'Everything in Gold',
              check: true,
            },
            {
              text: 'Free access to FGI AI',
              check: true,
            },
            {
              text: 'Enables Makam-Student add-on',
              check: true,
            },
          ],
          button: {
            text: 'I\'m interested!',
            ButtonProps: {
              as: 'a',
              href: 'https://mypags.app',
            },
          },
          
        },
      ],
    },
  },
  pricing2: {
    title: '',
    prices: {
      currency: 'USD',
      types: {
        a: 'Monthly',
        b: 'Annually',
      },
      sections: [
        {
          title: 'SFG',
          price: {
            a: '$150',
            b: '$1350',
          },
          features: [
            {
              text: 'Weekly Watchlist with Price Targets',
              check: true,
            },
            {
              text: 'Proprietary Customizable Alert System',
              check: true,
            },
            {
              text: 'Researched Long-Term Trade Ideas',
              check: true,
            },
            {
              text: 'Works for all account sizes',
              check: true,
            },
          ],
          button: {
            text: 'I\'m interested!',
            ButtonProps: {
              as: 'a',
              href: 'https://mypags.app',
            },
          },
        },
        {
          title: 'FGI AI',
          price: {
            a: '$200',
            b: '$1800',
          },
          features: [
            {
              text: 'Buy/Sell signals -> up to 95% success rate',
              check: true,
            },
            {
              text: 'Works in all markets (stocks, crypto, forex, etc)',
              check: true,
            },
            {
              text: 'Creates Support/Resistance lines',
              check: true,
            },
            {
              text: 'Can predict Price Targets (BETA)',
              check: true,
            },
          ],
          button: {
            text: 'I\'m interested!',
            ButtonProps: {
              as: 'a',
              href: 'https://mypags.app',
            },
          },
          
        },
        {
          title: 'SFG Conbination Deals',
          price: {
            a: '',
            b: '',
          },
          features: [
            {
              text: 'SFG + OFG Silver Offered',
              check: false,
            },
            {
              text: 'SFG + OFG Gold Offered',
              check: true,
            },
            {
              text: 'SFG + OFG Platinum Offered',
              check: true,
            },
            {
              text: 'SFG + FGI AI',
              check: true,
            },
          ],
          button: {
            text: 'Contact us!'
          },
        },
      ],
    },
  },
  
  contact: {
    title: 'Contact us',
    text:
      'Is there anything that this site doesn\'t answer for you? We\'re here for it! Feel free to reach out!',
    sendButtonText: 'Send message',
    form: {
      validationSchema: Yup.object({
        firstName: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
        email: Yup.string().email('Must be an email').required('Required'),
        message: Yup.string().min(20, 'Must be at least 20 characters').required('Required'),
      }),
      // eslint-disable-next-line no-undef
      onSubmit: values => window.alert(`Form sent with values ${JSON.stringify(values)}`),
      fields: [
        {
          name: 'firstName',
          placeholder: 'First name',
          initialValue: '',
        },
        {
          name: 'email',
          placeholder: 'E-mail',
          type: 'email',
          initialValue: '',
        },
        {
          name: 'message',
          placeholder: 'Message',
          multiline: true,
          initialValue: '',
        },
      ],
    },
  },
  newsletter: { // Unneeded.
    title: 'Stay always up to date',
    text: 'Sign up to our monthly newsletter and get news and grest special offers!',
    buttonText: 'Sign up',
    inputPlaceholder: 'Your email address',
  },
  copyright: 'Alex Lindstrom © 2020 Coffeecream Themes',
};
