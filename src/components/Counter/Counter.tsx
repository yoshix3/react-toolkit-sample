import React from 'react';
import { useAppSelector } from '../../app/hooks'; // 追加
import { selectCount } from '../../features/counter/counterSlice'; // 追加

const Counter = () => {
  const counter = useAppSelector(selectCount); // 追加
  return (
    <React.Fragment>
      <div>カウント：{counter}</div>
    </React.Fragment>
  );
};

export default Counter;
