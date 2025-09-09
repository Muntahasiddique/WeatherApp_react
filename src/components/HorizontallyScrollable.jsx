import { useRef } from "react";

function HorizontallyScrollable({ children, className = "" }) {
  const scrollref = useRef();

  const HandleMouseDown = (evt) => {
    const oldX = evt.pageX;
    const scrollLeft = scrollref.current.scrollLeft;

    const HandleMouseMove = (evt) => {
      const newX = evt.pageX;
      const offset = newX - oldX;

      scrollref.current.scrollLeft = scrollLeft - offset;
    };
    const HandleMouseUp = () => {
      window.removeEventListener("mousemove", HandleMouseMove);
          window.removeEventListener("mouseup", HandleMouseUp);
    };

    window.addEventListener("mousemove", HandleMouseMove);
    window.addEventListener("mouseup", HandleMouseUp);
  };
  return (
    <div className={className} ref={scrollref} onMouseDown={HandleMouseDown}>
      {children}
    </div>
  );
}

export default HorizontallyScrollable;
