import React from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks'; // 追加
import { incrementAsync, isLoading } from '../../features/counter/counterSlice'; // 追加

const Button = () => {
  const dispatch = useAppDispatch();
  const disabled = useAppSelector(isLoading);

  return (
    <React.Fragment>
      <button disabled={disabled} onClick={() => dispatch(incrementAsync(5))}>
        カウントアップ
      </button>
    </React.Fragment>
  );
};

export default Button;
