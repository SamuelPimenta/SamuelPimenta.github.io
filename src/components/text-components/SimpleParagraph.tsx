import React from 'react';

const SimpleParagraph = (props: {text: string, cssClassName?: string}) => {
  return (
    <p className={props.cssClassName}>{props.text}</p>
  );
};

export default SimpleParagraph;
