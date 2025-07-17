import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';

import './SideDrawer.css';

const SideDrawer = props => {
  const nodeRef = useRef(null); // 👈 Fix: use a ref

  const content = (
    <CSSTransition
      in={props.show}
      timeout={200}
      classNames="slide-in-left"
      mountOnEnter
      unmountOnExit
      nodeRef={nodeRef} // 👈 Fix: tell CSSTransition what to animate
    >
      <aside
        className="side-drawer"
        onClick={props.onClick}
        ref={nodeRef} // 👈 Fix: attach the ref to the DOM node
      >
        {props.children}
      </aside>
    </CSSTransition>
  );

  return ReactDOM.createPortal(content, document.getElementById('drawer-hook'));
};

export default SideDrawer;
