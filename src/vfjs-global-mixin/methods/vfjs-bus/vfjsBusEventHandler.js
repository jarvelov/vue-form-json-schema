import actions from './actions';

function vfjsBusEventHandler(event, payload) {
  if (event && event in actions) {
    actions[event].call(this, payload);
  }
}

export default vfjsBusEventHandler;
