import { takeEvery } from 'redux-saga/effects';

function* handleSomething() {
  yield null;
}

export function* entitie() {
  yield [
    takeEvery('someactiontype', handleSomething)
  ];
}

export default entitie;
