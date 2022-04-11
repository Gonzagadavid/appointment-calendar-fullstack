import React from 'react';
import { PropsCondition } from '../../types';

function ConditionComponent(props: PropsCondition) {
  const { children, condition, className } = props;
  if (!condition) return null;

  return <div className={className}>{children}</div>;
}

export default ConditionComponent;
