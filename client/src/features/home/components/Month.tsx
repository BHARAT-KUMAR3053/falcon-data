import React from 'react';
import { v4 as uuid } from 'uuid';

import { IMonth } from '../interfaces/components.interface';
import Day from './Day';

const Month = ({ month }: { month: IMonth }): React.ReactElement => {
  return (
    <div className="grid flex-1 grid-cols-7 grid-rows-5">
      {month.map((row, i) => (
        <React.Fragment key={uuid()}>
          {row.map((day) => (
            <Day day={day} key={uuid()} rowIdx={i} />
          ))}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Month;
