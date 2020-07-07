import React, { SFC } from 'react';
import './Hello.scss';

export interface HelloProps {
  name: string;
}

export const Hello: SFC<HelloProps> = ({ name}) => (
  <h1 className='test'>{ name }</h1>
);
