// runQueue
export function runQueue(queue: Array<any>, iterator: (queue, cb?: Function) => any, cb: Function) {
  const step = index => {
    if (index >= queue.length) {
      cb();
    } else {
      if (queue[index]) {
        iterator(queue[index], () => {
          step(index + 1);
        });
      } else {
        step(index + 1);
      }
    }
  };
  step(0);
}
