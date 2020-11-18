import addVfjsListener from './addVfjsListener';
import addVfjsListeners from './addVfjsListeners';
import removeVfjsListener from './removeVfjsListener';
import removeVfjsListeners from './removeVfjsListeners';
import removeVfjsListenersAll from './removeVfjsListenersAll';
import vfjsBusInitialize from './vfjsBusInitialize';
import vfjsBusEventHandler from './vfjsBusEventHandler';

const vfjsBus = {
  addVfjsListener,
  addVfjsListeners,
  removeVfjsListener,
  removeVfjsListeners,
  removeVfjsListenersAll,
  vfjsBusInitialize,
  vfjsBusEventHandler,
};

export default vfjsBus;
