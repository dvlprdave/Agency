/* 
Debounce function helps avoid unecessary amounts of re-rendering. 
See https://www.pluralsight.com/guides/re-render-react-component-on-window-resize
*/

function debounce(fn, ms) {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}

export default debounce