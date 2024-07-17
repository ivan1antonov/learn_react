declare module 'react-outside-click-handler' {
  import { ComponentType, ReactNode } from 'react';

  interface OutsideClickHandlerProps {
    onOutsideClick: (event: MouseEvent) => void;
    children?: ReactNode;
  }

  const OutsideClickHandler: ComponentType<OutsideClickHandlerProps>;

  export default OutsideClickHandler;
}
