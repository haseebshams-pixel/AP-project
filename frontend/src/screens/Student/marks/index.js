import MotionHoc from '../MotionHoc';

import './style.css';

const MarkComponent = () => {
  return (
    <div id = "start">
      <h1>Marks</h1>
      <div id = "course">
        <h2>CS2019</h2>
        <h2>CS2019</h2>
        <h2>CS2019</h2>
        <h2>CS2019</h2>
      </div>
    </div>
  );
};

const Mark = MotionHoc(MarkComponent);

export default Mark;