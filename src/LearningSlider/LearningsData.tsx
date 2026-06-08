const data = [
  {
    id: 0,
    name: `console.log(1);

setTimeout(() => console.log(2));

Promise.resolve().then(() => console.log(3));

Promise.resolve().then(() => setTimeout(() => console.log(4)));

Promise.resolve().then(() => console.log(5));

setTimeout(() => console.log(6));

console.log(7);`, 
  explanation : `The output will be: 1, 7, 3, 5, 2, 6, 4. Here's the breakdown:
1. console.log(1) is executed first, printing 1.
2. setTimeout(() => console.log(2)) is scheduled to run after the current call stack is empty, so it will be executed later.
3. Promise.resolve().then(() => console.log(3)) is added to the microtask queue and will be executed after the current call stack is empty but before any tasks in the macrotask queue (like setTimeout).
4. Promise.resolve().then(() => setTimeout(() => console.log(4))) schedules another setTimeout to log 4, which will be executed after the current call stack and all microtasks are completed.
5. Promise.resolve().then(() => console.log(5)) is added to the microtask queue and will be executed after the current call stack is empty but before any tasks in the macrotask queue.
6. setTimeout(() => console.log(6)) is scheduled to run after the current call stack is empty, so it will be executed later.
7. console.log(7) is executed immediately, printing 7.

After the current call stack is empty, the microtasks are executed in order:
- console.log(3) prints 3.
- console.log(5) prints 5.

Then the macrotasks are executed in order:
- setTimeout(() => console.log(2)) prints 2.
- setTimeout(() => console.log(6)) prints 6.
- setTimeout(() => console.log(4)) prints 4.`   
  },
  { id: 1, name: "Item 2", explanation: "This is the explanation for Item 2." },
  { id: 2, name: "Item 3", explanation: "This is the explanation for Item 3." },
];

export default data;