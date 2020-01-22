import React from 'react';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';

const Example = (props) => {
  return (
    <div>
      <div className="p-3 my-2 rounded">
        <Toast>
          <ToastHeader>
            Reactstrap
          </ToastHeader>
          <ToastBody>
            This is a toast on a white background — check it out!
          </ToastBody>
        </Toast>
      </div>
      <div className="p-3 my-2 rounded bg-docs-transparent-grid">
        <Toast>
          <ToastHeader>
            Reactstrap
          </ToastHeader>
          <ToastBody>
            This is a toast on a gridded background — check it out!
          </ToastBody>
        </Toast>
      </div>
    </div>
  );
};

export default Example;