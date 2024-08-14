import { ReactNode } from 'react';
import { IEvent } from 'src/features/home/interfaces/components.interface';

export interface IResponse {
  message: string;
  data: IEvent[];
}

export interface IReduxState {
  landing: IResponse[];
}

export interface IAlertTypes {
  [key: string]: string;
  success: string;
  error: string;
  warning: string;
}

export interface IButtonProps {
  label?: string | ReactNode;
  type?: 'button' | 'submit' | 'reset' | undefined;
  id?: string;
  className?: string;
  role?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick?: (event?: any) => void;
  disabled?: boolean;
  testId?: string;
}
