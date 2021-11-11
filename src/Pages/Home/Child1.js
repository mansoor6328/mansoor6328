import React, { memo } from 'react';

const Child1 = () => {
  console.log('Child 1 component');
  return (
    <div>
      <h1>Child 1 component</h1>
    </div>
  );
};

export default memo(Child1);
