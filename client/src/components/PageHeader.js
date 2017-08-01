import React from 'react';

const styles = {
  header: {
    paddingLeft: '3rem',
    paddingTop: '3rem',
    marginTop: '5rem',
    fontFamily: 'Roboto',
    fontSize: '3rem',
    fontWeight: 'bold',
  },
};

const PageHeader = props => {
  return (
    <div style={styles.header}>
      <h1>
        {props.title}
      </h1>
    </div>
  );
};

export default PageHeader;