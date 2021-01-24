import React from 'react';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';

import Box from '@pagerland/common/src/components/Box';
import Container from '@pagerland/common/src/components/Container';
import WidgetBot from '@widgetbot/react-embed';

import data from '../../data';

const DiscordWidget = ({
  name,
  WrapperProps,
  CaptionProps,
}) => (
  <Box name={name} {...WrapperProps}>
    <Container>
      <Box {...CaptionProps}>
        <Fade bottom cascade duration={600}>
        <WidgetBot
          server="299881420891881473"
          channel="355719584830980096"
        />
        </Fade>
      </Box>
    </Container>
  </Box>
);

DiscordWidget.propTypes = {
  /**
   * Name of container, can be used for anchors
   */
  name: PropTypes.string.isRequired,
  /**
   * Main wrapper props
   * @See @pagerland/common/src/components/Box
   */
  WrapperProps: PropTypes.object,
  /**
   * Caption wrapper props
   * @See @pagerland/common/src/components/Box
   */
  CaptionProps: PropTypes.object,
  /**
   * Title text props
   * @See @pagerland/common/src/components/Typography
   */
};

DiscordWidget.defaultProps = {
  ...data.discordwidget,
  WrapperProps: {
    py: {
      _: 30,
      lg: 60,
    },
  },
  CaptionProps: {
    maxWidth: 770,
    mx: 'auto',
    textAlign: {
      _: 'left',
      md: 'center',
    },
    mb: {
      _: 4,
      lg: 5,
    },
  },
};

export default DiscordWidget;
