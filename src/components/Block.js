import React from 'react';
import PropTypes from 'prop-types';
import { Typography, makeStyles, Box } from '@material-ui/core';
import colors from '../constants/colors';

const Block = ({ block }) => {
  const classes = useStyles();
  const { data, index } = block.attributes;

  const addZeros = (index, length) => {
    let newIndex = index.toString();
    while (newIndex.length < length) {
      newIndex = '0' + newIndex;
    }
    return newIndex;
  };

  return (
    <Box className={classes.container}>
      <Typography className={classes.title}>{addZeros(index, 3)}</Typography>
      <Typography variant="body1" className={classes.detail}>
        {data}
      </Typography>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: colors.blockBackground,
    borderRadius: '6px',
    padding: '10px',
    marginBottom: '8px'
  },
  detail: {
    fontSize: theme.typography.pxToRem(14),
    color: colors.text
  },
  title: {
    fontSize: theme.typography.pxToRem(12),
    color: colors.title
  }
}));

Block.propTypes = {
  block: PropTypes.shape({
    id: PropTypes.string,
    type: PropTypes.string,
    attributes: {
      index: PropTypes.number,
      timestamp: PropTypes.number,
      data: PropTypes.string,
      ['previous-hash']: PropTypes.string,
      hash: PropTypes.string
    }
  }).isRequired
};

export default Block;
