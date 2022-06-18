import React, {memo} from 'react';

const Weight = ({weight, className}) => {
  if (weight === 0.5) {
    return <span className={className}><strong>0,5</strong> кг</span>;
  }
  if (weight === 2) {
    return <span className={className}><strong>2</strong> кг</span>;
  }
  if (weight === 5) {
    return <span className={className}><strong>5</strong> кг</span>;
  }
};

export default memo(Weight);
