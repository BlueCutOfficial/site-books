import { s as setModifierManager, m as modifierCapabilities, h as hash$1, g as get$1, a as array$1, i as isArray, b as get$2, E as EmberObject, c as helper$1, d as isEmpty, _ as _importSync20, H as Helper, n as newDeprecate, e as getOwner, t as templateFactory, P as PageTitle, L as LinkTo, f as setComponentTemplate, j as templateOnly, o as on, k as decorateFieldV2, l as tracked, p as initializeDeferredDecorator, q as select, r as decorateMethodV2, u as action, A as AdrArticleButton, C as Controller, v as initDropdowns, R as Route } from './main-BBMVW3A2.js';
import { C as Component } from './index-Ciq8VY-X.js';

/**
  The `{{did-insert}}` element modifier is activated when an element is
  inserted into the DOM.

  In this example, the `fadeIn` function receives the `div` DOM element as its
  first argument and is executed after the element is inserted into the DOM.

  ```handlebars
  <div {{did-insert this.fadeIn}} class="alert">
    {{yield}}
  </div>
  ```

  ```js
  export default Component.extend({
    fadeIn(element) {
      element.classList.add('fade-in');
    }
  });
  ```

  By default, the executed function will be unbound. If you would like to access
  the component context in your function, use the `action` decorator as follows:

  ```handlebars
  <div {{did-insert this.incrementCount}}>first</div>
  <div {{did-insert this.incrementCount}}>second</div>

  <p>{{this.count}} elements were rendered</p>
  ```

  ```js
  export default Component.extend({
    count: tracked({ value: 0 }),

    incrementCount: action(function() {
      this.count++;
    })
  });
  ```

  @method did-insert
  @public
*/
const didInsert = setModifierManager(() => ({
  capabilities: modifierCapabilities('3.22', {
    disableAutoTracking: true
  }),
  createModifier() {},
  installModifier(_state, element, {
    positional: [fn, ...args],
    named
  }) {
    fn(element, args, named);
  },
  updateModifier() {},
  destroyModifier() {}
}), class DidInsertModifier {});

/**
@module @ember/helper
*/
// SAFETY: we need to provide interfaces that Glint can declaration-merge with
// to provide appropriate completions. In each case, the imported item is
// currently typed only as `object`, and we are replacing it with a similarly
// low-information interface type: these are empty objects which are simply able
// to be distinguished so that Glint can provide the relevant extensions.
/* eslint-disable @typescript-eslint/no-empty-interface */
/**
 * Using the `{{hash}}` helper, you can pass objects directly from the template
 * as an argument to your components.
 *
 * ```
 * import { hash } from '@ember/helper';
 *
 * <template>
 *   {{#each-in (hash givenName='Jen' familyName='Weber') as |key value|}}
 *     <p>{{key}}: {{value}}</p>
 *   {{/each-in}}
 * </template>
 * ```
 *
 * **NOTE:** this example uses the experimental `<template>` feature, which is
 * the only place you need to import `hash` to use it (it is a built-in when
 * writing standalone `.hbs` files).
 */
const hash = hash$1;
/**
 * Using the `{{array}}` helper, you can pass arrays directly from the template
 * as an argument to your components.
 *
 * ```js
 * import { array } from '@ember/helper';
 *
 * <template>
 *   <ul>
 *   {{#each (array 'Tom Dale' 'Yehuda Katz' @anotherPerson) as |person|}}
 *     <li>{{person}}</li>
 *   {{/each}}
 *   </ul>
 * </template>
 *
 * **NOTE:** this example uses the experimental `<template>` feature, which is
 * the only place you need to import `array` to use it (it is a built-in when
 * writing standalone `.hbs` files).
 * ```
 */
const array = array$1;
/**
 * The `{{get}}` helper makes it easy to dynamically look up a property on an
 * object or an element in an array. The second argument to `{{get}}` can be a
 * string or a number, depending on the object being accessed.
 *
 * To access a property on an object with a string key:
 *
 * ```js
 * import { get } from '@ember/helper';
 *
 * <template>
 *   {{get @someObject "objectKey"}}
 * </template>
 * ```
 *
 * To access the first element in an array:
 *
 * ```js
 * import { get } from '@ember/helper';
 *
 * <template>
 *   {{get @someArray 0}}
 * </template>
 * ```
 *
 * To access a property on an object with a dynamic key:
 *
 * ```js
 * import { get } from '@ember/helper';
 *
 * <template>
 *   {{get @address @field}}
 * </template>
 * ```
 *
 * This will display the result of `@foo.item1` when `index` is `1`, and
 * `this.foo.item2` when `index` is `2`, etc.
 *
 * **NOTE:** this example uses the experimental `<template>` feature, which is
 * the only place you need to import `concat` to use it (it is a built-in when
 * writing standalone `.hbs` files).
 */
const get = get$1;
/* eslint-enable @typescript-eslint/no-empty-interface */

function isIterable(value) {
  return Symbol.iterator in Object(value);
}

// from https://github.com/flexyford/ember-power-select/blob/78a5430c1ac89daf315d0801fd5201e444e82434/addon/components/power-select.ts
function isArrayable(thing) {
  return typeof thing.toArray === 'function';
}
function isPromiseLike(thing) {
  return typeof thing.then === 'function';
}
function isPromiseProxyLike(thing) {
  return isPromiseLike(thing) && Object.hasOwnProperty.call(thing, 'content');
}
function toExtendable(array) {
  if (!Object.isExtensible(array)) {
    return Array.from(array);
  } else {
    return array;
  }
}
function asArray(maybeArray) {
  return toExtendable(_asArray(maybeArray));
}
function _asArray(maybeArray) {
  if (typeof maybeArray === 'number') {
    throw new Error('Numbers not supported as arrays [ember-composable-helpers]');
  }
  if (typeof maybeArray === 'string') {
    return maybeArray.split('');
  }
  // for perf-reasons falling back to e-array, instead of using it first
  if (Array.isArray(maybeArray)) {
    return maybeArray;
  } else if (isArray(maybeArray)) {
    return maybeArray;
  } else if (typeof maybeArray === 'object' && maybeArray === null) {
    return [];
  } else if (typeof maybeArray === 'undefined') {
    return [];
  } else if (maybeArray instanceof Set) {
    return Array.from(maybeArray.values());
  } else if (maybeArray instanceof Map) {
    return Array.from(maybeArray.values());
  } else if (maybeArray instanceof WeakMap) {
    throw new Error('WeakMaps is not supported as arrays [ember-composable-helpers]');
  } else if (maybeArray instanceof WeakSet) {
    throw new Error('WeakSets is not supported as arrays [ember-composable-helpers]');
  }
  if (typeof maybeArray === 'object') {
    if (isPromiseProxyLike(maybeArray)) {
      // eslint-disable-next-line ember/no-get -- TODO: Revisit this
      const content = get$2(maybeArray, 'content');
      if (typeof content !== 'object' || content === null) {
        throw new Error('Unknown content type in array-like object [ember-composable-helpers]');
      }
      if (isArrayable(content)) {
        return content.toArray();
      } else {
        return _asArray(content);
      }
    }
    if (isPromiseLike(maybeArray)) {
      throw new Error('Promise-like objects is not supported as arrays [ember-composable-helpers]');
    }
    if (isArrayable(maybeArray)) {
      return maybeArray.toArray();
    }
    if (maybeArray instanceof EmberObject) {
      throw new Error('EmberObjects is not supported as arrays [ember-composable-helpers]');
    }
    return Array.from(Object.values(maybeArray));
  }
  if (!maybeArray) {
    return [];
  }
  if (!isIterable(maybeArray)) {
    throw new Error('Argument, passed as array is not iterable [ember-composable-helpers]');
  }
  return maybeArray;
}

const collator = new Intl.Collator(undefined, {
  sensitivity: 'base'
});
function normalizeToBoolean(val) {
  if (typeof val === 'boolean') {
    return val;
  }
  if (typeof val === 'number') {
    if (val > 0) {
      return false;
    } else if (val < 0) {
      return true;
    }
  }
  return val;
}
function safeValueForKey(ctx, key) {
  if (ctx === null || ctx === undefined) {
    return ctx;
  }
  return get$2(ctx, key);
}
function sortDesc(key, a, b) {
  if (isEmpty(key)) {
    return 0;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const aValue = safeValueForKey(a, key);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const bValue = safeValueForKey(b, key);
  const isANullable = typeof aValue == 'undefined' || aValue === null;
  const isBNullable = typeof bValue == 'undefined' || bValue === null;
  if (isANullable && isBNullable) {
    //both values are nullable
    return 0;
  }
  if (isBNullable) {
    // keep bValue last
    return -1;
  }
  if (isANullable) {
    // put aValue last
    return 1;
  }
  if (aValue.toLowerCase && bValue.toLowerCase) {
    return collator.compare(bValue, aValue);
  }
  if (aValue < bValue) {
    return 1;
  } else if (aValue > bValue) {
    return -1;
  }
  return 0;
}
function sortAsc(key, a, b) {
  if (isEmpty(key)) {
    return 0;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const aValue = safeValueForKey(a, key);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const bValue = safeValueForKey(b, key);
  const isANullable = typeof aValue == 'undefined' || aValue === null;
  const isBNullable = typeof bValue == 'undefined' || bValue === null;
  if (isANullable && isBNullable) {
    //both values are nullable
    return 0;
  }
  if (isBNullable) {
    // keep bValue last
    return -1;
  }
  if (isANullable) {
    // put aValue last
    return 1;
  }
  if (aValue.toLowerCase && bValue.toLowerCase) {
    return collator.compare(aValue, bValue);
  }
  if (aValue < bValue) {
    return -1;
  } else if (aValue > bValue) {
    return 1;
  }
  return 0;
}
class SortBy {
  array;
  constructor(...args) {
    let [array] = args;
    if (typeof array.toArray === 'function') {
      array = array.toArray();
    }
    this.array = [...array];
  }
  comparator(key) {
    return typeof key === 'function' ? key : this.defaultSort(key);
  }
  defaultSort(sortKey) {
    let func = sortAsc;
    if (sortKey.match(':desc')) {
      func = sortDesc;
    }
    return (a, b) => func(sortKey.replace(/:desc|:asc/, ''), a, b);
  }
}

/**
 * best O(n); worst O(n^2)
 * If we feel like swapping with something more performant like QuickSort or MergeSort
 * then it should be easy
 *
 * @class BubbleSort
 * @extends SortBy
 */
class BubbleSort extends SortBy {
  perform(keys = []) {
    let swapped = false;
    const compFuncs = keys.map(key => this.comparator(key));
    const compFunc = (a, b) => {
      for (let i = 0; i < compFuncs.length; i += 1) {
        const result = compFuncs[i]?.(a, b);
        if (result === 0) {
          continue;
        }
        return result;
      }
      return 0;
    };
    for (let i = 1; i < this.array.length; i += 1) {
      for (let j = 0; j < this.array.length - i; j += 1) {
        const shouldSwap = normalizeToBoolean(compFunc(this.array[j + 1], this.array[j]));
        if (shouldSwap) {
          [this.array[j], this.array[j + 1]] = [this.array[j + 1], this.array[j]];
          swapped = true;
        }
      }

      // no need to continue sort if not swapped in any inner iteration
      if (!swapped) {
        return this.array;
      }
    }
  }
}

// eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
function sortBy(params) {
  // slice params to avoid mutating the provided params
  const sortParams = params.slice();
  const array = asArray(sortParams.pop());
  let sortKeys = sortParams;
  if (!array || !sortKeys || sortKeys.length === 0) {
    return [];
  }
  if (sortKeys.length === 1 && Array.isArray(sortKeys[0])) {
    sortKeys = sortKeys[0];
  }
  const sortKlass = new BubbleSort(array);
  sortKlass.perform(sortKeys);
  return sortKlass.array;
}
var sortBy$1 = helper$1(sortBy);

function esCompat(m) {
  return m?.__esModule ? m : {
    default: m,
    ...m
  };
}

let runtime;
{
  // new enough ember has a real module we can import
  runtime = esCompat(_importSync20);
}
let {
  isCurriedComponentDefinition,
  CurriedComponentDefinition,
  curry,
  CurriedValue
} = runtime;

// older embers have isCurriedComponentDefinition, new ones have CurriedValue
// and instanceof CurriedValue seems good enough.
if (!isCurriedComponentDefinition) {
  isCurriedComponentDefinition = function (value) {
    return value instanceof CurriedValue;
  };
}
function runtimeResolver(owner) {
  let resolver = owner.lookup('renderer:-dom')._runtimeResolver;
  if (resolver) {
    return resolver;
  }
  let entry = Object.entries(owner.__container__.cache).find(e => e[0].startsWith('template-compiler:main-'));
  if (entry) {
    return entry[1].resolver.resolver;
  }
  throw new Error(`@embroider/util couldn't locate the runtime resolver on this ember version`);
}
function lookupCurriedComponentDefinition(name, owner) {
  let resolver = runtimeResolver(owner);
  if (typeof resolver.lookupComponentHandle === 'function') {
    let handle = resolver.lookupComponentHandle(name, contextForLookup(owner));
    if (handle != null) {
      return new CurriedComponentDefinition(resolver.resolve(handle), null);
    }
  }

  // here we're doing the same thing the internal currying does, in order to
  // generate a sane error message (even though we don't actually use
  // resolvedDefinition as part of our return value).
  let resolvedDefinition = resolver.lookupComponent(name, owner);
  if (!resolvedDefinition) {
    throw new Error(`Attempted to resolve \`${name}\` via ensureSafeComponent, but nothing was found.`);
  }
  return curry(0, name, owner, {
    named: {},
    positional: []
  });
}
function contextForLookup(owner) {
  {
    return owner;
  }
}

function ensureSafeComponent(value, thingWithOwner) {
  if (typeof value === 'string') {
    return handleString(value, thingWithOwner);
  } else if (isCurriedComponentDefinition(value)) {
    return value;
  } else if (value == null) {
    return value;
  } else {
    return handleClass(value);
  }
}
class EnsureSafeComponentHelper extends Helper {
  compute([value]) {
    return ensureSafeComponent(value, this);
  }
}
function handleString(name, thingWithOwner) {
  (newDeprecate(`You're trying to invoke the component "${name}" by passing its name as a string. This won't work under Embroider.`, false, {
    id: 'ensure-safe-component.string',
    url: 'https://github.com/embroider-build/embroider/blob/main/docs/replacing-component-helper.md#when-youre-passing-a-component-to-someone-else',
    until: 'embroider',
    for: '@embroider/util',
    since: '0.27.0'
  }));
  let owner = getOwner(thingWithOwner);
  return lookupCurriedComponentDefinition(name, owner);
}
function handleClass(klass, thingWithOwner) {
  {
    return klass;
  }
}

const livres = templateFactory(
/*
  {{page-title "Les livres - L'Académie des Renards"}}

<nav id="sorting-menu" class="pure-menu pure-menu-horizontal" aria-label="Menu de tri des romans">
  <ul id="menuList" class="pure-menu-list pure-menu-list-horizontal" {{did-insert this.initSortingDropdown}}>
    <li id="sorting-trigger" class="pure-menu-item pure-menu-has-children pure-menu-allow-hover">
      <LinkTo id="sorting" class="pure-menu-link" @query={{hash sorting="latest"}}>{{get this.sortingTexts this.sorting}}</LinkTo>
      <ul class="pure-menu-children">
        <li class="pure-menu-item">
          <LinkTo class="pure-menu-link" @query={{hash sorting="latest"}}>{{this.sortingTexts.latest}}</LinkTo>
        </li>
        <li class="pure-menu-item">
          <LinkTo class="pure-menu-link" @query={{hash sorting="date"}}>{{this.sortingTexts.date}}</LinkTo>
        </li>
        <li class="pure-menu-item">
          <LinkTo class="pure-menu-link" @query={{hash sorting="chrono"}}>{{this.sortingTexts.chrono}}</LinkTo>
        </li>
      </ul>
    </li>
  </ul>
  <LinkTo class="pure-button pure-button--black" @route="que-choisir">Quelle lecture choisir ?</LinkTo>
</nav>

<div id="books" class="pure-g">
  <div id="books-list">
    {{#each (sort-by this.sorting this.books) as |book|}}
      {{component (ensure-safe-component book.component)}}
    {{/each}}
  </div>

  <p class="pure-u-1 padding--small">
    ⚠️ <strong>Information TW:</strong> Parce qu'ils sont adaptés à la jeunesse et parce que chaque lecteur(ice) est unique, les romans de l'Académie des Renards ne contiennent pas de <a href="https://fr.wikipedia.org/wiki/Trigger_warning_(psychologie)" rel="noopener noreferrer" target="_blank">trigger warnings</a>. Si votre sensibilité à certains thèmes vous retient de lire les romans sans TW, vous pouvez envoyer un mail à <a href="mailto:academiedesrenards@gmail.com">academiedesrenards@gmail.com</a> afin de recevoir une réponse personnalisée sur le contenu.
  </p>
</div>
*/
{
  "id": "vPFCz1QD",
  "block": "[[[1,[28,[32,0],[\"Les livres - L'Académie des Renards\"],null]],[1,\"\\n\\n\"],[10,\"nav\"],[14,1,\"sorting-menu\"],[14,0,\"pure-menu pure-menu-horizontal\"],[14,\"aria-label\",\"Menu de tri des romans\"],[12],[1,\"\\n  \"],[11,\"ul\"],[24,1,\"menuList\"],[24,0,\"pure-menu-list pure-menu-list-horizontal\"],[4,[32,1],[[30,0,[\"initSortingDropdown\"]]],null],[12],[1,\"\\n    \"],[10,\"li\"],[14,1,\"sorting-trigger\"],[14,0,\"pure-menu-item pure-menu-has-children pure-menu-allow-hover\"],[12],[1,\"\\n      \"],[8,[32,2],[[24,1,\"sorting\"],[24,0,\"pure-menu-link\"]],[[\"@query\"],[[28,[32,3],null,[[\"sorting\"],[\"latest\"]]]]],[[\"default\"],[[[[1,[28,[32,4],[[30,0,[\"sortingTexts\"]],[30,0,[\"sorting\"]]],null]]],[]]]]],[1,\"\\n      \"],[10,\"ul\"],[14,0,\"pure-menu-children\"],[12],[1,\"\\n        \"],[10,\"li\"],[14,0,\"pure-menu-item\"],[12],[1,\"\\n          \"],[8,[32,2],[[24,0,\"pure-menu-link\"]],[[\"@query\"],[[28,[32,3],null,[[\"sorting\"],[\"latest\"]]]]],[[\"default\"],[[[[1,[30,0,[\"sortingTexts\",\"latest\"]]]],[]]]]],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,\"li\"],[14,0,\"pure-menu-item\"],[12],[1,\"\\n          \"],[8,[32,2],[[24,0,\"pure-menu-link\"]],[[\"@query\"],[[28,[32,3],null,[[\"sorting\"],[\"date\"]]]]],[[\"default\"],[[[[1,[30,0,[\"sortingTexts\",\"date\"]]]],[]]]]],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,\"li\"],[14,0,\"pure-menu-item\"],[12],[1,\"\\n          \"],[8,[32,2],[[24,0,\"pure-menu-link\"]],[[\"@query\"],[[28,[32,3],null,[[\"sorting\"],[\"chrono\"]]]]],[[\"default\"],[[[[1,[30,0,[\"sortingTexts\",\"chrono\"]]]],[]]]]],[1,\"\\n        \"],[13],[1,\"\\n      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n  \"],[8,[32,2],[[24,0,\"pure-button pure-button--black\"]],[[\"@route\"],[\"que-choisir\"]],[[\"default\"],[[[[1,\"Quelle lecture choisir ?\"]],[]]]]],[1,\"\\n\"],[13],[1,\"\\n\\n\"],[10,0],[14,1,\"books\"],[14,0,\"pure-g\"],[12],[1,\"\\n  \"],[10,0],[14,1,\"books-list\"],[12],[1,\"\\n\"],[42,[28,[37,5],[[28,[37,5],[[28,[32,5],[[30,0,[\"sorting\"]],[30,0,[\"books\"]]],null]],null]],null],null,[[[1,\"      \"],[46,[28,[32,6],[[30,1,[\"component\"]]],null],null,null,null],[1,\"\\n\"]],[1]],null],[1,\"  \"],[13],[1,\"\\n\\n  \"],[10,2],[14,0,\"pure-u-1 padding--small\"],[12],[1,\"\\n    ⚠️ \"],[10,\"strong\"],[12],[1,\"Information TW:\"],[13],[1,\" Parce qu'ils sont adaptés à la jeunesse et parce que chaque lecteur(ice) est unique, les romans de l'Académie des Renards ne contiennent pas de \"],[10,3],[14,6,\"https://fr.wikipedia.org/wiki/Trigger_warning_(psychologie)\"],[14,\"rel\",\"noopener noreferrer\"],[14,\"target\",\"_blank\"],[12],[1,\"trigger warnings\"],[13],[1,\". Si votre sensibilité à certains thèmes vous retient de lire les romans sans TW, vous pouvez envoyer un mail à \"],[10,3],[14,6,\"mailto:academiedesrenards@gmail.com\"],[12],[1,\"academiedesrenards@gmail.com\"],[13],[1,\" afin de recevoir une réponse personnalisée sur le contenu.\\n  \"],[13],[1,\"\\n\"],[13]],[\"book\"],false,[\"nav\",\"ul\",\"li\",\"div\",\"each\",\"-track-array\",\"component\",\"p\",\"strong\",\"a\"]]",
  "moduleName": "/home/runner/work/site-books/site-books/app/templates/livres.hbs",
  "scope": () => [PageTitle, didInsert, LinkTo, hash, get, sortBy$1, EnsureSafeComponentHelper],
  "isStrictMode": false
});

const amdModule0 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: livres
}, Symbol.toStringTag, { value: 'Module' }));

const TEMPLATE$7 = templateFactory(
/*
  <div>
  <a class="pure-button pure-button--black"
    target="_blank"
    rel="noopener noreferrer"
    href={{@link}}
  >
    {{yield}}
  </a>
</div>
*/
{
  "id": "d4HQQ+9A",
  "block": "[[[10,0],[12],[1,\"\\n  \"],[10,3],[14,0,\"pure-button pure-button--black\"],[14,\"target\",\"_blank\"],[14,\"rel\",\"noopener noreferrer\"],[15,6,[30,1]],[12],[1,\"\\n    \"],[18,2,null],[1,\"\\n  \"],[13],[1,\"\\n\"],[13]],[\"@link\",\"&default\"],false,[\"div\",\"a\",\"yield\"]]",
  "moduleName": "/home/runner/work/site-books/site-books/app/components/adr-shop-button.hbs",
  "isStrictMode": false
});

const AdrShopButton = setComponentTemplate(TEMPLATE$7, templateOnly());

const TEMPLATE$6 = templateFactory(
/*
  <div class="book-links">
  <AdrShopButton @link={{@bookLink}}>
    Commander le livre ({{@price}}€)
  </AdrShopButton>
  <AdrShopButton @link={{@ebookLink}}>
    Télécharger l'e-book (0€)
  </AdrShopButton>
</div>

*/
{
  "id": "adjRJpR1",
  "block": "[[[10,0],[14,0,\"book-links\"],[12],[1,\"\\n  \"],[8,[32,0],null,[[\"@link\"],[[30,1]]],[[\"default\"],[[[[1,\"\\n    Commander le livre (\"],[1,[30,2]],[1,\"€)\\n  \"]],[]]]]],[1,\"\\n  \"],[8,[32,0],null,[[\"@link\"],[[30,3]]],[[\"default\"],[[[[1,\"\\n    Télécharger l'e-book (0€)\\n  \"]],[]]]]],[1,\"\\n\"],[13],[1,\"\\n\"]],[\"@bookLink\",\"@price\",\"@ebookLink\"],false,[\"div\"]]",
  "moduleName": "/home/runner/work/site-books/site-books/app/components/adr-book-links.hbs",
  "scope": () => [AdrShopButton],
  "isStrictMode": false
});

const AdrBookLinks = setComponentTemplate(TEMPLATE$6, templateOnly());

function gt(left, right, options) {
  if (options?.forceNumber) {
    if (typeof left !== 'number') {
      left = Number(left);
    }
    if (typeof right !== 'number') {
      right = Number(right);
    }
  }
  return left > right;
}

const TEMPLATE$5 = templateFactory(
/*
  <div id={{@book}} class="infobox">
  <div class="centered">
    {{#if (gt @slots 1)}}
      <button
        class="pure-button pure-button--black"
        type="button"
        {{on "click" this.previous}}
        data-test-previous>
        &lt;
      </button>
      <button
        class="pure-button pure-button--black"
        type="button"
        {{on "click" this.next}}
        data-test-next>
        &gt;
      </button>
    {{/if}}
    {{yield}}
  </div>
</div>
*/
{
  "id": "zmUViqOu",
  "block": "[[[10,0],[15,1,[30,1]],[14,0,\"infobox\"],[12],[1,\"\\n  \"],[10,0],[14,0,\"centered\"],[12],[1,\"\\n\"],[41,[28,[32,0],[[30,2],1],null],[[[1,\"      \"],[11,\"button\"],[24,0,\"pure-button pure-button--black\"],[24,4,\"button\"],[4,[32,1],[\"click\",[30,0,[\"previous\"]]],null],[12],[1,\"\\n        <\\n      \"],[13],[1,\"\\n      \"],[11,\"button\"],[24,0,\"pure-button pure-button--black\"],[24,4,\"button\"],[4,[32,1],[\"click\",[30,0,[\"next\"]]],null],[12],[1,\"\\n        >\\n      \"],[13],[1,\"\\n\"]],[]],null],[1,\"    \"],[18,3,null],[1,\"\\n  \"],[13],[1,\"\\n\"],[13]],[\"@book\",\"@slots\",\"&default\"],false,[\"div\",\"if\",\"button\",\"yield\"]]",
  "moduleName": "/home/runner/work/site-books/site-books/app/components/adr-book-details.hbs",
  "scope": () => [gt, on],
  "isStrictMode": false
});

class AdrBookDetailsComponent extends Component {
  static {
    decorateFieldV2(this.prototype, "current", [tracked], function () {
      return this.args.current;
    });
  }
  #current = (initializeDeferredDecorator(this, "current"), void 0);
  previous() {
    // Hide the current slot
    let wrapperId = this.args.book;
    select(`${wrapperId}-${this.current}`).classList.remove('show-from-left');
    select(`${wrapperId}-${this.current}`).classList.remove('show-from-right');
    select(`${wrapperId}-${this.current}`).classList.add('hidden');
    // Compute the new current slot and do the changes
    this.current = this.current > 0 ? this.current - 1 : this.args.slots - 1;
    select(`${wrapperId}-${this.current}`).classList.remove('hidden');
    select(`${wrapperId}-${this.current}`).classList.add('show-from-left');
  }
  static {
    decorateMethodV2(this.prototype, "previous", [action]);
  }
  next() {
    // Hide the current slot
    let wrapperId = this.args.book;
    select(`${wrapperId}-${this.current}`).classList.remove('show-from-left');
    select(`${wrapperId}-${this.current}`).classList.remove('show-from-right');
    select(`${wrapperId}-${this.current}`).classList.add('hidden');
    // Compute the new current slot and do the changes
    this.current = this.current + 1 < this.args.slots ? this.current + 1 : 0;
    select(`${wrapperId}-${this.current}`).classList.remove('hidden');
    select(`${wrapperId}-${this.current}`).classList.add('show-from-right');
  }
  static {
    decorateMethodV2(this.prototype, "next", [action]);
  }
}
setComponentTemplate(TEMPLATE$5, AdrBookDetailsComponent);

const TEMPLATE$4 = templateFactory(
/*
  <div class="quote" data-test-quote>
  <q><em>{{@content}}</em></q>
  <span>-&nbsp;<strong>{{@author}}</strong></span>
</div>

*/
{
  "id": "QGC/m2H7",
  "block": "[[[10,0],[14,0,\"quote\"],[12],[1,\"\\n  \"],[10,\"q\"],[12],[10,\"em\"],[12],[1,[30,1]],[13],[13],[1,\"\\n  \"],[10,1],[12],[1,\"- \"],[10,\"strong\"],[12],[1,[30,2]],[13],[13],[1,\"\\n\"],[13],[1,\"\\n\"]],[\"@content\",\"@author\"],false,[\"div\",\"q\",\"em\",\"span\",\"strong\"]]",
  "moduleName": "/home/runner/work/site-books/site-books/app/components/adr-quote.hbs",
  "isStrictMode": false
});

const AdrQuote = setComponentTemplate(TEMPLATE$4, templateOnly());

const TEMPLATE$3 = templateFactory(
/*
  <h2>🦊📖 Les retours de lecture</h2>
{{#each @quotes as |quote|}}
  <AdrQuote
    @content={{quote.content}}
    @author={{quote.author}}
></AdrQuote>
{{/each}}
*/
{
  "id": "Vcpi0Nuv",
  "block": "[[[10,\"h2\"],[12],[1,\"🦊📖 Les retours de lecture\"],[13],[1,\"\\n\"],[42,[28,[37,2],[[28,[37,2],[[30,1]],null]],null],null,[[[1,\"  \"],[8,[32,0],null,[[\"@content\",\"@author\"],[[30,2,[\"content\"]],[30,2,[\"author\"]]]],[[\"default\"],[[[],[]]]]],[1,\"\\n\"]],[2]],null]],[\"@quotes\",\"quote\"],false,[\"h2\",\"each\",\"-track-array\"]]",
  "moduleName": "/home/runner/work/site-books/site-books/app/components/adr-book-details-feedback.hbs",
  "scope": () => [AdrQuote],
  "isStrictMode": false
});

const AdrBookDetailsFeedback = setComponentTemplate(TEMPLATE$3, templateOnly());

const TEMPLATE$2 = templateFactory(
/*
  <div id="suzuha" class="book-background background--suzuha">
  <div class="pure-u-1 pure-u-sm-1 pure-u-md-12-24 pure-u-lg-10-24">
    <div class="book padding--large">
      <h1>Suzuha</h1>
      <p>Les enfants de l'île aux voix naissent sans voix ni reflet. Melle est l'une de ces enfants. Comme toutes les filles, elle restera muette toute sa vie.</p>
      <p>Mais quand des étrangers débarquent sur l'île, son monde vacille. Une femme lui parle pour la première fois&nbsp;!</p>
      <p>Sur un coup de tête, l'aventure commence. Melle embarque vers une terre où les femmes ont une voix, où les femmes peuvent apprendre l'art du combat.</p>
      <p>Cette terre... Melle y trouvera-t-elle sa voix&nbsp;?</p>
      <AdrBookLinks
        @bookLink="https://ko-fi.com/s/f11811b37b"
        @ebookLink="https://ko-fi.com/s/a9d904a96b"
        @price="12,90"
      />
      <p>Suzuha est aussi disponible sur la <a href="https://librairiejeunespousses.fr/produit/suzuha-de-marine-dunstetter/" target="_blank" rel="noopener noreferrer">librairie Jeunes Pousses</a> et sur <a href="https://www.kobo.com/fr/fr/ebook/suzuha" target="_blank" rel="noopener noreferrer">Kobo</a>.</p>
    </div>
  </div>
  <div class="pure-u-1 pure-u-sm-1 pure-u-md-12-24 pure-u-lg-14-24">
    <div class="padding--large">
      <AdrBookDetails @book="book-info-suzuha" @slots={{3}} @current={{1}}>
        <div id="book-info-suzuha-0" class="hidden">
          <div class="margin-bottom--medium">
            <AdrBookDetailsFeedback @quotes={{array
              (hash
                author="Sissicat"
                content="Dès les premières lignes, on est embarqué dans ce voyage extraordinaire mêlant magie et combat et on ne veut plus quitter l'héroïne jusqu'à la fin. Bien écrit et facile à lire, c'est un livre super pour les jeunes."
              )
              (hash
                author="Dadone"
                content="J'ai adoré ce livre car je trouve Suzuha magnifique et je trouve qu'elle avait raison sur le point que les femmes ont le droit d'avoir une voix."
              )
            }} />
          </div>
        </div>
        <div id="book-info-suzuha-1">
          <h2>🦊✨ Le <em>booktrailer</em></h2>
          <div class="video-container centered">
            <iframe
              width="430"
              height="242"
              src="https://www.youtube.com/embed/9o6yO7G0q9Y?si=0YYtz2_WtpwFL2CU" 
              title="Lecteur de vidéo YouTube, Booktrailer de Suzuha"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
              lazy="true" 
            />
          </div>
          <div class="video-link centered">
            <a href="https://www.youtube.com/embed/9o6yO7G0q9Y?si=0YYtz2_WtpwFL2CU" rel="noopener noreferrer">
              Regarder sur YouTube
            </a>
          </div>
        </div>
        <div id="book-info-suzuha-2" class="hidden">
          <h2>🦊📚 Articles et ressources</h2>
          <AdrArticleButton
            @title="7 raisons de lire (ou pas) Suzuha"
            @link="https://panodyssey.com/fr/article/culture/7-raisons-de-lire-ou-pas-suzuha-j7n8cjh4f5js"
            @platform="Panodyssey"
          ></AdrArticleButton>
          <AdrArticleButton
            @title="Page Babelio du livre"
            @link="https://www.babelio.com/livres/Dunstetter-LAcademie-des-renards-Suzuha/1212187"
            @platform="Babelio (⚠️ Contient des extraits obsolètes, le texte a été amélioré)"
          ></AdrArticleButton>
        </div>
      </AdrBookDetails>
    </div>   
  </div>
</div>
*/
{
  "id": "apwGkyXF",
  "block": "[[[10,0],[14,1,\"suzuha\"],[14,0,\"book-background background--suzuha\"],[12],[1,\"\\n  \"],[10,0],[14,0,\"pure-u-1 pure-u-sm-1 pure-u-md-12-24 pure-u-lg-10-24\"],[12],[1,\"\\n    \"],[10,0],[14,0,\"book padding--large\"],[12],[1,\"\\n      \"],[10,\"h1\"],[12],[1,\"Suzuha\"],[13],[1,\"\\n      \"],[10,2],[12],[1,\"Les enfants de l'île aux voix naissent sans voix ni reflet. Melle est l'une de ces enfants. Comme toutes les filles, elle restera muette toute sa vie.\"],[13],[1,\"\\n      \"],[10,2],[12],[1,\"Mais quand des étrangers débarquent sur l'île, son monde vacille. Une femme lui parle pour la première fois !\"],[13],[1,\"\\n      \"],[10,2],[12],[1,\"Sur un coup de tête, l'aventure commence. Melle embarque vers une terre où les femmes ont une voix, où les femmes peuvent apprendre l'art du combat.\"],[13],[1,\"\\n      \"],[10,2],[12],[1,\"Cette terre... Melle y trouvera-t-elle sa voix ?\"],[13],[1,\"\\n      \"],[8,[32,0],null,[[\"@bookLink\",\"@ebookLink\",\"@price\"],[\"https://ko-fi.com/s/f11811b37b\",\"https://ko-fi.com/s/a9d904a96b\",\"12,90\"]],null],[1,\"\\n      \"],[10,2],[12],[1,\"Suzuha est aussi disponible sur la \"],[10,3],[14,6,\"https://librairiejeunespousses.fr/produit/suzuha-de-marine-dunstetter/\"],[14,\"target\",\"_blank\"],[14,\"rel\",\"noopener noreferrer\"],[12],[1,\"librairie Jeunes Pousses\"],[13],[1,\" et sur \"],[10,3],[14,6,\"https://www.kobo.com/fr/fr/ebook/suzuha\"],[14,\"target\",\"_blank\"],[14,\"rel\",\"noopener noreferrer\"],[12],[1,\"Kobo\"],[13],[1,\".\"],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n  \"],[10,0],[14,0,\"pure-u-1 pure-u-sm-1 pure-u-md-12-24 pure-u-lg-14-24\"],[12],[1,\"\\n    \"],[10,0],[14,0,\"padding--large\"],[12],[1,\"\\n      \"],[8,[32,1],null,[[\"@book\",\"@slots\",\"@current\"],[\"book-info-suzuha\",3,1]],[[\"default\"],[[[[1,\"\\n        \"],[10,0],[14,1,\"book-info-suzuha-0\"],[14,0,\"hidden\"],[12],[1,\"\\n          \"],[10,0],[14,0,\"margin-bottom--medium\"],[12],[1,\"\\n            \"],[8,[32,2],null,[[\"@quotes\"],[[28,[32,3],[[28,[32,4],null,[[\"author\",\"content\"],[\"Sissicat\",\"Dès les premières lignes, on est embarqué dans ce voyage extraordinaire mêlant magie et combat et on ne veut plus quitter l'héroïne jusqu'à la fin. Bien écrit et facile à lire, c'est un livre super pour les jeunes.\"]]],[28,[32,4],null,[[\"author\",\"content\"],[\"Dadone\",\"J'ai adoré ce livre car je trouve Suzuha magnifique et je trouve qu'elle avait raison sur le point que les femmes ont le droit d'avoir une voix.\"]]]],null]]],null],[1,\"\\n          \"],[13],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,0],[14,1,\"book-info-suzuha-1\"],[12],[1,\"\\n          \"],[10,\"h2\"],[12],[1,\"🦊✨ Le \"],[10,\"em\"],[12],[1,\"booktrailer\"],[13],[13],[1,\"\\n          \"],[10,0],[14,0,\"video-container centered\"],[12],[1,\"\\n            \"],[10,\"iframe\"],[14,\"width\",\"430\"],[14,\"height\",\"242\"],[14,\"src\",\"https://www.youtube.com/embed/9o6yO7G0q9Y?si=0YYtz2_WtpwFL2CU\"],[14,\"title\",\"Lecteur de vidéo YouTube, Booktrailer de Suzuha\"],[14,\"frameborder\",\"0\"],[14,\"allow\",\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\"],[14,\"allowfullscreen\",\"\"],[14,\"lazy\",\"true\"],[12],[13],[1,\"\\n          \"],[13],[1,\"\\n          \"],[10,0],[14,0,\"video-link centered\"],[12],[1,\"\\n            \"],[10,3],[14,6,\"https://www.youtube.com/embed/9o6yO7G0q9Y?si=0YYtz2_WtpwFL2CU\"],[14,\"rel\",\"noopener noreferrer\"],[12],[1,\"\\n              Regarder sur YouTube\\n            \"],[13],[1,\"\\n          \"],[13],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,0],[14,1,\"book-info-suzuha-2\"],[14,0,\"hidden\"],[12],[1,\"\\n          \"],[10,\"h2\"],[12],[1,\"🦊📚 Articles et ressources\"],[13],[1,\"\\n          \"],[8,[32,5],null,[[\"@title\",\"@link\",\"@platform\"],[\"7 raisons de lire (ou pas) Suzuha\",\"https://panodyssey.com/fr/article/culture/7-raisons-de-lire-ou-pas-suzuha-j7n8cjh4f5js\",\"Panodyssey\"]],[[\"default\"],[[[],[]]]]],[1,\"\\n          \"],[8,[32,5],null,[[\"@title\",\"@link\",\"@platform\"],[\"Page Babelio du livre\",\"https://www.babelio.com/livres/Dunstetter-LAcademie-des-renards-Suzuha/1212187\",\"Babelio (⚠️ Contient des extraits obsolètes, le texte a été amélioré)\"]],[[\"default\"],[[[],[]]]]],[1,\"\\n        \"],[13],[1,\"\\n      \"]],[]]]]],[1,\"\\n    \"],[13],[1,\"   \\n  \"],[13],[1,\"\\n\"],[13]],[],false,[\"div\",\"h1\",\"p\",\"a\",\"h2\",\"em\",\"iframe\"]]",
  "moduleName": "/home/runner/work/site-books/site-books/app/components/books/adr-suzuha.hbs",
  "scope": () => [AdrBookLinks, AdrBookDetailsComponent, AdrBookDetailsFeedback, array, hash, AdrArticleButton],
  "isStrictMode": false
});

const BookSuzuha = setComponentTemplate(TEMPLATE$2, templateOnly());

const TEMPLATE$1 = templateFactory(
/*
  <div id="ede" class="book-background background--ede">
  <div class="pure-u-1 pure-u-sm-1 pure-u-md-12-24 pure-u-lg-10-24">
    <div class="book padding--large">
      <h1>L'Enfant des Esprits</h1>
      <p>Les esprits existent-ils vraiment&nbsp;?</p>
      <p>Certains le pensent, et leurs croyances influencent les pas des enfants de ce monde&nbsp;; ceux de cette jeune Rêveuse, cloîtrée dans son temple sous-marin, ou ceux de ce garçon maudit, résigné à un avenir fade.</p>
      <p>Entre relique du Rêve qui ne fonctionne plus et manifestation de pouvoirs étranges, c'est ensemble qu'ils quittent leur foyer en quête de réponses. Mais le destin les sépare déjà et les entraine en un même lieu&nbsp;: la mystérieuse Académie des Renards.</p><p>On raconte qu'on peut tout y apprendre... y apprendront-ils l'évidence qui se cache en eux&nbsp;?</p>
      {{!-- <adr-book-links file="enfant-des-esprits-extrait.pdf" ebook-link="https://ko-fi.com/s/3a9743c5de"></adr-book-links>  --}}
      {{!-- <p>L'Enfant des Esprits est aussi disponible sur <a href="https://www.kobo.com/fr/fr/ebook/l-enfant-des-esprits" target="_blank" rel="noopener">Kobo</a>.</p> --}}
      <br />
      <p>L'Enfant des Esprits est en cours de ré-écriture, en vue d'améliorer le texte avant l'impression d'un livre broché.</p>
    </div>      
  </div>
  <div class="pure-u-1 pure-u-sm-1 pure-u-md-12-24 pure-u-lg-14-24">
    <div class="padding--large">
      <AdrBookDetails @book="book-info-ede" @slots={{1}} @current={{0}}>
        <div id="book-info-ede-0">
          <div class="margin-bottom--medium">
            <AdrBookDetailsFeedback @quotes={{array
              (hash
                author="Guillaume"
                content="Les personnages ont tous une personnalité unique et voyagent dans des lieux tous très différents qu'on prend plaisir à découvrir. Il y a une bonne immersion dans l'univers et l'histoire garde le tout très rythmé. J'ai particulièrement apprécié les chapitres dans le désert."
              )
              (hash
                author="Ana"
                content="J'ai beaucoup aimé par contre je me demandais s'il y a une suite, histoire de savoir ce que deviennent Ben et Sun..."
              )
              }} />
          </div>
        </div>
      </AdrBookDetails>
    </div>
  </div>
</div>
*/
{
  "id": "aTx3Ti1M",
  "block": "[[[10,0],[14,1,\"ede\"],[14,0,\"book-background background--ede\"],[12],[1,\"\\n  \"],[10,0],[14,0,\"pure-u-1 pure-u-sm-1 pure-u-md-12-24 pure-u-lg-10-24\"],[12],[1,\"\\n    \"],[10,0],[14,0,\"book padding--large\"],[12],[1,\"\\n      \"],[10,\"h1\"],[12],[1,\"L'Enfant des Esprits\"],[13],[1,\"\\n      \"],[10,2],[12],[1,\"Les esprits existent-ils vraiment ?\"],[13],[1,\"\\n      \"],[10,2],[12],[1,\"Certains le pensent, et leurs croyances influencent les pas des enfants de ce monde ; ceux de cette jeune Rêveuse, cloîtrée dans son temple sous-marin, ou ceux de ce garçon maudit, résigné à un avenir fade.\"],[13],[1,\"\\n      \"],[10,2],[12],[1,\"Entre relique du Rêve qui ne fonctionne plus et manifestation de pouvoirs étranges, c'est ensemble qu'ils quittent leur foyer en quête de réponses. Mais le destin les sépare déjà et les entraine en un même lieu : la mystérieuse Académie des Renards.\"],[13],[10,2],[12],[1,\"On raconte qu'on peut tout y apprendre... y apprendront-ils l'évidence qui se cache en eux ?\"],[13],[1,\"\\n\"],[1,\"      \"],[10,\"br\"],[12],[13],[1,\"\\n      \"],[10,2],[12],[1,\"L'Enfant des Esprits est en cours de ré-écriture, en vue d'améliorer le texte avant l'impression d'un livre broché.\"],[13],[1,\"\\n    \"],[13],[1,\"      \\n  \"],[13],[1,\"\\n  \"],[10,0],[14,0,\"pure-u-1 pure-u-sm-1 pure-u-md-12-24 pure-u-lg-14-24\"],[12],[1,\"\\n    \"],[10,0],[14,0,\"padding--large\"],[12],[1,\"\\n      \"],[8,[32,0],null,[[\"@book\",\"@slots\",\"@current\"],[\"book-info-ede\",1,0]],[[\"default\"],[[[[1,\"\\n        \"],[10,0],[14,1,\"book-info-ede-0\"],[12],[1,\"\\n          \"],[10,0],[14,0,\"margin-bottom--medium\"],[12],[1,\"\\n            \"],[8,[32,1],null,[[\"@quotes\"],[[28,[32,2],[[28,[32,3],null,[[\"author\",\"content\"],[\"Guillaume\",\"Les personnages ont tous une personnalité unique et voyagent dans des lieux tous très différents qu'on prend plaisir à découvrir. Il y a une bonne immersion dans l'univers et l'histoire garde le tout très rythmé. J'ai particulièrement apprécié les chapitres dans le désert.\"]]],[28,[32,3],null,[[\"author\",\"content\"],[\"Ana\",\"J'ai beaucoup aimé par contre je me demandais s'il y a une suite, histoire de savoir ce que deviennent Ben et Sun...\"]]]],null]]],null],[1,\"\\n          \"],[13],[1,\"\\n        \"],[13],[1,\"\\n      \"]],[]]]]],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n\"],[13]],[],false,[\"div\",\"h1\",\"p\",\"br\"]]",
  "moduleName": "/home/runner/work/site-books/site-books/app/components/books/adr-ede.hbs",
  "scope": () => [AdrBookDetailsComponent, AdrBookDetailsFeedback, array, hash],
  "isStrictMode": false
});

const BookEde = setComponentTemplate(TEMPLATE$1, templateOnly());

const TEMPLATE = templateFactory(
/*
  <div id="le-voeu-de-yoko" class="book-background background--vdy">
  <div class="pure-u-1 pure-u-sm-1 pure-u-md-12-24 pure-u-lg-10-24">
    <div class="book padding--large">
      <h1>Le Voeu de Yoko</h1>
      <h2>I. Renaissance</h2>
      <p>Tobias Fènnel est un jeune homme devenu acariâtre et très affaibli depuis un sort qui a mal tourné. Privé de sa magie, fardeau pour sa famille, son existence a perdu tout son sens.</p>
      <p>Pour le guérir, son père place ses derniers espoirs en une chamane du Pays Rouge. Tobias accepte avec fatalité cet exil et s'apprête à attendre la mort loin de chez lui.</p>
      <p>Qui aurait cru que cette région mystérieuse, cachée derrière le Mur d'Athos, réveillerait en lui de tels sentiments&nbsp;?</p>
      <p>Mais le désir de vivre ne suffit pas toujours à donner un sens à la vie. Tobias saura-t-il trouver, dans l'avenir qui se dessine, assez de détermination pour combattre son état&nbsp;? et assez d'inspiration pour partager ce nouvel amour du Pays Rouge&nbsp;?</p>
      <a class="pure-button pa"
        target="_blank" 
        rel="noopener noreferrer"  
        href="https://www.plumedargent.fr/histoire/renaissance-1"
      >
        Lire sur Plume d'Argent
      </a>
    </div>
  </div>
  <div class="pure-u-1 pure-u-sm-1 pure-u-md-12-24 pure-u-lg-14-24">
    <div class="padding--large">
      <AdrBookDetails @book="book-info-vdy" @slots={{1}} @current={{0}}>
        <div id="book-info-vdy-0">
          <div class="margin-bottom--medium">
            <AdrBookDetailsFeedback @quotes={{array
              (hash
                author="Ewjoachim"
                content="Je l'ai lu d'une traite. J'ai trouvé plutôt énergisant la &ldquo;renaissance&rdquo; du protagoniste, et la subtilité de l'écriture où, à travers le roman, il comprend que c'est moins sa reconstruction physique qui est en jeu, qui est un thème de moins en moins présent au fur et à mesure des pages, et de plus en plus la réinvention de sa personnalité."
              )
              (hash
                author="Mlle Ellute"
                content="C'est une très belle histoire que celle de Tobias et Yoko. J'ai été transportée dans l'ambiance du pays rouge et apaisée par sa sérénité. En même temps, j'aime beaucoup la réflexion autour de l'isolement dans les traditions : oui c'est exotique et apaisant, mais c'est aussi un enfermement. C'est une histoire douce et intelligente. J'ai hâte de découvrir comment cette histoire va évoluer. Je pense que le développement de Tobias et Yoko sera aussi intéressant que celui de l'univers."
              )
            }} />
          </div>
        </div>
      </AdrBookDetails>
    </div> 
  </div>
</div>
*/
{
  "id": "KzyFWtg9",
  "block": "[[[10,0],[14,1,\"le-voeu-de-yoko\"],[14,0,\"book-background background--vdy\"],[12],[1,\"\\n  \"],[10,0],[14,0,\"pure-u-1 pure-u-sm-1 pure-u-md-12-24 pure-u-lg-10-24\"],[12],[1,\"\\n    \"],[10,0],[14,0,\"book padding--large\"],[12],[1,\"\\n      \"],[10,\"h1\"],[12],[1,\"Le Voeu de Yoko\"],[13],[1,\"\\n      \"],[10,\"h2\"],[12],[1,\"I. Renaissance\"],[13],[1,\"\\n      \"],[10,2],[12],[1,\"Tobias Fènnel est un jeune homme devenu acariâtre et très affaibli depuis un sort qui a mal tourné. Privé de sa magie, fardeau pour sa famille, son existence a perdu tout son sens.\"],[13],[1,\"\\n      \"],[10,2],[12],[1,\"Pour le guérir, son père place ses derniers espoirs en une chamane du Pays Rouge. Tobias accepte avec fatalité cet exil et s'apprête à attendre la mort loin de chez lui.\"],[13],[1,\"\\n      \"],[10,2],[12],[1,\"Qui aurait cru que cette région mystérieuse, cachée derrière le Mur d'Athos, réveillerait en lui de tels sentiments ?\"],[13],[1,\"\\n      \"],[10,2],[12],[1,\"Mais le désir de vivre ne suffit pas toujours à donner un sens à la vie. Tobias saura-t-il trouver, dans l'avenir qui se dessine, assez de détermination pour combattre son état ? et assez d'inspiration pour partager ce nouvel amour du Pays Rouge ?\"],[13],[1,\"\\n      \"],[10,3],[14,0,\"pure-button pa\"],[14,\"target\",\"_blank\"],[14,\"rel\",\"noopener noreferrer\"],[14,6,\"https://www.plumedargent.fr/histoire/renaissance-1\"],[12],[1,\"\\n        Lire sur Plume d'Argent\\n      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n  \"],[10,0],[14,0,\"pure-u-1 pure-u-sm-1 pure-u-md-12-24 pure-u-lg-14-24\"],[12],[1,\"\\n    \"],[10,0],[14,0,\"padding--large\"],[12],[1,\"\\n      \"],[8,[32,0],null,[[\"@book\",\"@slots\",\"@current\"],[\"book-info-vdy\",1,0]],[[\"default\"],[[[[1,\"\\n        \"],[10,0],[14,1,\"book-info-vdy-0\"],[12],[1,\"\\n          \"],[10,0],[14,0,\"margin-bottom--medium\"],[12],[1,\"\\n            \"],[8,[32,1],null,[[\"@quotes\"],[[28,[32,2],[[28,[32,3],null,[[\"author\",\"content\"],[\"Ewjoachim\",\"Je l'ai lu d'une traite. J'ai trouvé plutôt énergisant la &ldquo;renaissance&rdquo; du protagoniste, et la subtilité de l'écriture où, à travers le roman, il comprend que c'est moins sa reconstruction physique qui est en jeu, qui est un thème de moins en moins présent au fur et à mesure des pages, et de plus en plus la réinvention de sa personnalité.\"]]],[28,[32,3],null,[[\"author\",\"content\"],[\"Mlle Ellute\",\"C'est une très belle histoire que celle de Tobias et Yoko. J'ai été transportée dans l'ambiance du pays rouge et apaisée par sa sérénité. En même temps, j'aime beaucoup la réflexion autour de l'isolement dans les traditions : oui c'est exotique et apaisant, mais c'est aussi un enfermement. C'est une histoire douce et intelligente. J'ai hâte de découvrir comment cette histoire va évoluer. Je pense que le développement de Tobias et Yoko sera aussi intéressant que celui de l'univers.\"]]]],null]]],null],[1,\"\\n          \"],[13],[1,\"\\n        \"],[13],[1,\"\\n      \"]],[]]]]],[1,\"\\n    \"],[13],[1,\" \\n  \"],[13],[1,\"\\n\"],[13]],[],false,[\"div\",\"h1\",\"h2\",\"p\",\"a\"]]",
  "moduleName": "/home/runner/work/site-books/site-books/app/components/books/adr-vdy.hbs",
  "scope": () => [AdrBookDetailsComponent, AdrBookDetailsFeedback, array, hash],
  "isStrictMode": false
});

const BookVdy = setComponentTemplate(TEMPLATE, templateOnly());

class LivresController extends Controller {
  // 'latest', 'date', 'chrono'
  queryParams = ['sorting'];
  static {
    decorateFieldV2(this.prototype, "sorting", [tracked], function () {
      return 'latest';
    });
  }
  #sorting = (initializeDeferredDecorator(this, "sorting"), void 0);
  books = [{
    id: 'suzuha',
    latest: 3,
    date: 2017,
    chrono: 784,
    component: BookSuzuha
  }, {
    id: 'ede',
    latest: 2,
    date: 2020,
    chrono: 782,
    component: BookEde
  }, {
    id: 'vdy',
    latest: 1,
    date: 2021,
    chrono: 682,
    component: BookVdy
  }];
  sortingTexts = {
    latest: 'Plus récent',
    date: 'Date de publication',
    chrono: 'Ordre chronologique'
  };
  initSortingDropdown() {
    initDropdowns();
  }
  static {
    decorateMethodV2(this.prototype, "initSortingDropdown", [action]);
  }
}

const amdModule1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: LivresController
}, Symbol.toStringTag, { value: 'Module' }));

class LivresRoute extends Route {}

const amdModule2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: LivresRoute
}, Symbol.toStringTag, { value: 'Module' }));

const output = {};
  output["site-books-ember/templates/livres"] = amdModule0;
  output["site-books-ember/controllers/livres"] = amdModule1;
  output["site-books-ember/routes/livres"] = amdModule2;

export { output as default };
