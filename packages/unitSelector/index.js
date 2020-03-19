import UnitSelector from './src/main';

/* istanbul ignore next */
UnitSelector.install = function(Vue) {
  Vue.component(UnitSelector.name, UnitSelector);
};

export default UnitSelector;
