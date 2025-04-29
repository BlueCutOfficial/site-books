import { D as BaseComponent, F as setComponentManager, G as EmberGlimmerComponentManager } from './main-BBMVW3A2.js';

let GlimmerComponent = BaseComponent;
{
  // Add assertions against using Glimmer.js only APIs

  // TODO: Add GlimmerComponent API docs link to these messages once API docs are live
  function throwMethodUseError(methodName) {
    throw new Error(`You attempted to define the '${methodName}' method on a Glimmer Component, but that lifecycle hook does not exist in Ember.js applications, it only exists in Glimmer.js apps. You can rename this method, and you can trigger it using a modifier such as {{did-insert}} from '@ember/render-modifiers': https://github.com/emberjs/ember-render-modifiers.`);
  }
  function throwPropertyUseError(propertyName) {
    throw new Error(`You attempted to access the '${propertyName}' property on a Glimmer Component, but that property does not exist in Ember.js applications, it only exists in Glimmer.js apps. You define a class field with the same name on your component class and it will overwrite this error message, but it will not be used by the framework.`);
  }
  GlimmerComponent = class GlimmerDebugComponent extends GlimmerComponent {
    constructor(owner, args) {
      super(owner, args);
      if (typeof this['didInsertElement'] === 'function') {
        throwMethodUseError('didInsertElement');
      }
      if (typeof this['didUpdate'] === 'function') {
        throwMethodUseError('didUpdate');
      }
    }
  };
  let proto = GlimmerComponent.prototype;
  function defineErrorProp(proto, key, getterMethod) {
    Object.defineProperty(proto, key, {
      get: () => getterMethod(key),
      set(value) {
        Object.defineProperty(this, key, {
          value
        });
      }
    });
  }

  // Methods should still throw whenever they are accessed
  defineErrorProp(proto, 'bounds', throwPropertyUseError);
  defineErrorProp(proto, 'element', throwPropertyUseError);
  defineErrorProp(proto, 'debugName', throwPropertyUseError);
}
{
  setComponentManager(owner => {
    return new EmberGlimmerComponentManager(owner);
  }, GlimmerComponent);
}
const Component = GlimmerComponent;

export { Component as C };
