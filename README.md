# theorem

## The problem
Write some code, that will flatten an array of arbitrarily nested arrays of integers into a flat array of integers. e.g. [[1,2,[3]],4] -&gt; [1,2,3,4]. 

## Prerequisits for testing
Make sure that all dependencies for tests are available. Run:
```
yarn install
```

## How to test
```
yarn test
```

## The implementation
There are `2` implementations for this problem. One (`lazyFlatArray`) is using the very familiar method called `reduce` from the `Array` which reduces each elements to a initial value that is an empty `[]`.

The second (`fasterFlatArray`) method is a function that runs through the array which could be calling itself (recursively) to do a deeper flatten in the array.

The `fastFlatArray` is faster than the `reducer` method in almost 100%;

There is a `third` method called `createsNestedArray` which creates random nested arrays (that may contain numbers or, array of (numbers||array)

## The tests covering
The test cover the following scenarios:
✅ pass theorem test using lazyFlatArray();
✅ pass theorem test using fastFlatArray();
✅ lazyFlatArray() pass over 1000 tests;
✅ fasterFlatArray() pass over 1000 tests;
✅ fasterFlatArray() is faster than lazyFlatArray() method;


