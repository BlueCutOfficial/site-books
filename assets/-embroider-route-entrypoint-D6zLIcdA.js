import { t as templateFactory, o as on, r as decorateMethodV2, u as action, f as setComponentTemplate, j as templateOnly, s as setModifierManager, w as setOwner, m as modifierCapabilities, x as destroy, c as helper$1, P as PageTitle, L as LinkTo, C as Controller, k as decorateFieldV2, l as tracked, p as initializeDeferredDecorator, y as getQuestions, z as validateScore, B as computeTmpScore, R as Route } from './main-BBMVW3A2.js';
import { C as Component } from './index-Ciq8VY-X.js';

const TEMPLATE$2 = templateFactory(
/*
  <div>
  <p data-test-label>{{@question.label}}</p>
  {{#each @question.choices as |choice|}}
    <div>
      <input 
        type="radio" 
        id={{choice.id}} 
        name="question" 
        value={{choice.id}} 
        {{on "input" this.selectAnswer}}
      >
      <label for={{choice.id}}>{{choice.label}}</label>
    </div>
  {{/each}}
</div>
*/
{
  "id": "NmCRHo9k",
  "block": "[[[10,0],[12],[1,\"\\n  \"],[10,2],[12],[1,[30,1,[\"label\"]]],[13],[1,\"\\n\"],[42,[28,[37,3],[[28,[37,3],[[30,1,[\"choices\"]]],null]],null],null,[[[1,\"    \"],[10,0],[12],[1,\"\\n      \"],[11,\"input\"],[16,1,[30,2,[\"id\"]]],[24,3,\"question\"],[16,2,[30,2,[\"id\"]]],[24,4,\"radio\"],[4,[32,0],[\"input\",[30,0,[\"selectAnswer\"]]],null],[12],[13],[1,\"\\n      \"],[10,\"label\"],[15,\"for\",[30,2,[\"id\"]]],[12],[1,[30,2,[\"label\"]]],[13],[1,\"\\n    \"],[13],[1,\"\\n\"]],[2]],null],[13]],[\"@question\",\"choice\"],false,[\"div\",\"p\",\"each\",\"-track-array\",\"input\",\"label\"]]",
  "moduleName": "/home/runner/work/site-books/site-books/app/components/form/adr-question.hbs",
  "scope": () => [on],
  "isStrictMode": false
});

class FormAdrQuestionComponent extends Component {
  selectAnswer(event) {
    this.args.onSelectAnswer(event.target.value);
  }
  static {
    decorateMethodV2(this.prototype, "selectAnswer", [action]);
  }
}
setComponentTemplate(TEMPLATE$2, FormAdrQuestionComponent);

const TEMPLATE$1 = templateFactory(
/*
  <div class="question-number">
  <p>{{@questionIndex}}/{{@questionLength}}</p>
</div>

*/
{
  "id": "WASyOv1b",
  "block": "[[[10,0],[14,0,\"question-number\"],[12],[1,\"\\n  \"],[10,2],[12],[1,[30,1]],[1,\"/\"],[1,[30,2]],[13],[1,\"\\n\"],[13],[1,\"\\n\"]],[\"@questionIndex\",\"@questionLength\"],false,[\"div\",\"p\"]]",
  "moduleName": "/home/runner/work/site-books/site-books/app/components/form/adr-question-number.hbs",
  "isStrictMode": false
});

const FormAdrQuestionNumber = setComponentTemplate(TEMPLATE$1, templateOnly());

/**
 * The state bucket used throughout the life-cycle of the modifier. Basically a
 * state *machine*, where the framework calls us with the version we hand back
 * to it at each phase. The two states are the two `extends` versions of this
 * below.
 *
 * @internal
 */

/**
 * The `State` after calling `createModifier`, and therefore the state available
 * at the start of `InstallModifier`.
 * @internal
 */

/**
 * The `State` after calling `installModifier`, and therefore the state
 * available in all `updateModifier` calls and in `destroyModifier`.
 * @internal
 */

// Wraps the unsafe (b/c it mutates, rather than creating new state) code that
// TS does not yet understand.
function installElement$1(state, element) {
  // SAFETY: this cast represents how we are actually handling the state machine
  // transition: from this point forward in the lifecycle of the modifier, it
  // always behaves as `InstalledState<S>`. It is safe because, and *only*
  // because, we immediately initialize `element`. (We cannot create a new state
  // from the old one because the modifier manager API expects mutation of a
  // single state bucket rather than updating it at hook calls.)
  const installedState = state;
  installedState.element = element;
  return installedState;
}
class ClassBasedModifierManager {
  capabilities = modifierCapabilities('3.22');
  constructor(owner) {
    this.owner = owner;
  }
  createModifier(modifierClass, args) {
    const instance = new modifierClass(this.owner, args);
    return {
      instance,
      element: null
    };
  }
  installModifier(createdState, element, args) {
    const state = installElement$1(createdState, element);
    state.instance.modify(element, args.positional, args.named);
  }
  updateModifier(state, args) {
    state.instance.modify(state.element, args.positional, args.named);
  }
  destroyModifier({
    instance
  }) {
    destroy(instance);
  }
}

// Preserve the signature on a class-based modifier, so it can be plucked off
// later (by e.g. Glint), using interface merging with an opaque item to
// preserve it in the type system. The fact that it's an empty interface is
// actually the point: it *only* hooks the type parameter into the opaque
// (nominal) type. Note that this is distinct from the function-based modifier
// type intentionally, because it is actually the static class side of a
// class-based modifier which corresponds to the result of calling `modifier()`
// with a callback defining a function-based modifier.
// eslint-disable-next-line @typescript-eslint/no-empty-interface

/**
 * A base class for modifiers which need more capabilities than function-based
 * modifiers. Useful if, for example:
 *
 * 1. You need to inject services and access them
 * 2. You need fine-grained control of updates, either for performance or
 *    convenience reasons, and don't want to teardown the state of your modifier
 *    every time only to set it up again.
 * 3. You need to store some local state within your modifier.
 *
 * The lifecycle hooks of class modifiers are tracked. When they run, they any
 * values they access will be added to the modifier, and the modifier will
 * update if any of those values change.
 */
// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
class ClassBasedModifier {
  // `args` is passed here for the sake of subclasses to have access to args in
  // their constructors while having constructors which are properly asssignable
  // for the superclass.
  /**
   *
   * @param owner An instance of an Owner (for service injection etc.).
   * @param args The positional and named arguments passed to the modifier.
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  constructor(owner, args) {
    setOwner(this, owner);
  }

  /**
   * Called when the modifier is installed and any time any tracked state used
   * in the modifier changes.
   *
   * If you need to do first-time-only setup, create a class field representing
   * the initialization state and check it when running the hook. That is also
   * where and when you should use `registerDestructor` for any teardown you
   * need to do. For example:
   *
   * ```js
   * function disconnect(instance) {
   *  instance.observer?.disconnect();
   * }
   *
   * class IntersectionObserver extends Modifier {
   *   observer;
   *
   *   constructor(owner, args) {
   *     super(owner, args);
   *     registerDestructor(this, disconnect);
   *   }
   *
   *   modify(element, callback, options) {
   *     disconnect(this);
   *
   *     this.observer = new IntersectionObserver(callback, options);
   *     this.observer.observe(element);
   *   }
   * }
   * ```
   *
   * @param element The element to which the modifier is applied.
   * @param positional The positional arguments to the modifier.
   * @param named The named arguments to the modifier.
   */
  modify(/* eslint-disable @typescript-eslint/no-unused-vars */
  element, positional, named
  /* eslint-enable @typescript-eslint/no-unused-vars */) {
    /* no op, for subclassing */
  }
}
setModifierManager(owner => new ClassBasedModifierManager(owner), ClassBasedModifier);

// Wraps the unsafe (b/c it mutates, rather than creating new state) code that
// TS does not yet understand.
function installElement(state, element) {
  // SAFETY: this cast represents how we are actually handling the state machine
  // transition: from this point forward in the lifecycle of the modifier, it
  // always behaves as `InstalledState<S>`. It is safe because, and *only*
  // because, we immediately initialize `element`. (We cannot create a new state
  // from the old one because the modifier manager API expects mutation of a
  // single state bucket rather than updating it at hook calls.)
  const installedState = state;
  installedState.element = element;
  return installedState;
}
class FunctionBasedModifierManager {
  capabilities = modifierCapabilities('3.22');
  createModifier(instance) {
    return {
      element: null,
      instance
    };
  }
  installModifier(createdState, element, args) {
    const state = installElement(createdState, element);
    const {
      positional,
      named
    } = args;
    const teardown = createdState.instance(element, positional, named);
    if (typeof teardown === 'function') {
      state.teardown = teardown;
    }
  }
  updateModifier(state, args) {
    if (typeof state.teardown === 'function') {
      state.teardown();
    }
    const teardown = state.instance(state.element, args.positional, args.named);
    if (typeof teardown === 'function') {
      state.teardown = teardown;
    }
  }
  destroyModifier(state) {
    if (typeof state.teardown === 'function') {
      state.teardown();
    }
  }
  getDebugName(state) {
    return state.instance.toString();
  }
  getDebugInstance(state) {
    return state;
  }
}

// Provide a singleton manager.
const MANAGER = new FunctionBasedModifierManager();

// This type exists to provide a non-user-constructible, non-subclassable
// type representing the conceptual "instance type" of a function modifier.
// The abstract field of type `never` prevents subclassing in userspace of
// the value returned from `modifier()`. By extending `Modifier<S>`, any
// augmentations of the `Modifier` type performed by tools like Glint will
// also apply to function-based modifiers as well.

// This provides a type whose only purpose here is to represent the runtime
// type of a function-based modifier: a virtually opaque item. The fact that it's
// a bare constructor type allows `modifier()` to preserve type parameters from
// a generic function it's passed, and by making it abstract and impossible to
// subclass (see above) we prevent users from attempting to instantiate the return
// value from a `modifier()` call.

/**
 * The (optional) return type for a modifier which needs to perform some kind of
 * cleanup or teardown -- for example, removing an event listener from an
 * element besides the one passed into the modifier.
 */

/**
 * An API for writing simple modifiers.
 *
 * This function runs the first time when the element the modifier was applied
 * to is inserted into the DOM, and it *autotracks* while running. Any values
 * that it accesses will be tracked, including any of its arguments that it
 * accesses, and if any of them changes, the function will run again.
 *
 * **Note:** this will *not* automatically rerun because an argument changes. It
 * will only rerun if it is *using* that argument (the same as with auto-tracked
 * state in general).
 *
 * The modifier can also optionally return a *destructor*. The destructor
 * function will be run just before the next update, and when the element is
 * being removed entirely. It should generally clean up the changes that the
 * modifier made in the first place.
 *
 * @param fn The function which defines the modifier.
 */
// This overload allows users to write types directly on the callback passed to
// the `modifier` function and infer the resulting type correctly.

/**
 * An API for writing simple modifiers.
 *
 * This function runs the first time when the element the modifier was applied
 * to is inserted into the DOM, and it *autotracks* while running. Any values
 * that it accesses will be tracked, including any of its arguments that it
 * accesses, and if any of them changes, the function will run again.
 *
 * **Note:** this will *not* automatically rerun because an argument changes. It
 * will only rerun if it is *using* that argument (the same as with auto-tracked
 * state in general).
 *
 * The modifier can also optionally return a *destructor*. The destructor
 * function will be run just before the next update, and when the element is
 * being removed entirely. It should generally clean up the changes that the
 * modifier made in the first place.
 *
 * @param fn The function which defines the modifier.
 */
// This overload allows users to provide a `Signature` type explicitly at the
// modifier definition site, e.g. `modifier<Sig>((el, pos, named) => {...})`.
// **Note:** this overload must appear second, since TS' inference engine will
// not correctly infer the type of `S` here from the types on the supplied
// callback.

// This is the runtime signature; it performs no inference whatsover and just
// uses the simplest version of the invocation possible since, for the case of
// setting it on the modifier manager, we don't *need* any of that info, and
// the two previous overloads capture all invocations from a type perspective.
function modifier(fn, options) {
  fn.toString = () => fn.name;
  // SAFETY: the cast here is a *lie*, but it is a useful one. The actual return
  // type of `setModifierManager` today is `void`; we pretend it actually
  // returns an opaque `Modifier` type so that we can provide a result from this
  // type which is useful to TS-aware tooling (e.g. Glint).
  return setModifierManager(() => MANAGER, fn);
}

const position1 = '0px';
const position2 = '50px';
const position3 = '100px';
const bookPosition = (results, bookId) => {
  // Find the first (and only) element corresponding to the bookId in the results array
  let resultItem = results.find(({
    id
  }) => id === bookId);
  // Find the first element with the same score as the found book
  let firstScoreItem = results.find(({
    value
  }) => resultItem.value === value);
  // Then return the index of this element + 1 to get its position
  return {
    // The rank is the actual rank related to the score
    rank: results.indexOf(firstScoreItem) + 1,
    // The position id for the display order of the boxes
    position: results.indexOf(resultItem) + 1
  };
};
const onScoreChange = modifier(function onScoreChange(element, [results, bookItem]) {
  let ranking = bookPosition(results, bookItem.id);
  let marginValue = position1;
  switch (ranking.position) {
    case 2:
      marginValue = position2;
      break;
    case 3:
      marginValue = position3;
      break;
  }
  element.style['margin-top'] = marginValue;
  element.innerHTML = `${ranking.rank}. ${bookItem.title}`;
});

/**
 * Sums two or more numbers
 *
 * ```hbs
 * {{add a b}}
 * ```
 *
 * @function add
 * @param {number[]} numbers A list of numbers to sum
 * @return {number} The sum of all the passed numbers
 */
function add(numbers) {
  return numbers.reduce((a, b) => Number(a) + Number(b));
}
var add$1 = helper$1(add);

const TEMPLATE = templateFactory(
/*
  <div class="result-list">
  {{#each this.bookListing as |book index|}}
    <p 
      id="result-{{book.id}}" 
      class="result-item" 
      {{on-score-change this.results book}}
    >
      {{add index 1}}. {{book.title}}
    </p>
  {{/each}}
</div>
*/
{
  "id": "jqQhQoQf",
  "block": "[[[10,0],[14,0,\"result-list\"],[12],[1,\"\\n\"],[42,[28,[37,2],[[28,[37,2],[[30,0,[\"bookListing\"]]],null]],null],null,[[[1,\"    \"],[11,2],[16,1,[29,[\"result-\",[30,1,[\"id\"]]]]],[24,0,\"result-item\"],[4,[32,0],[[30,0,[\"results\"]],[30,1]],null],[12],[1,\"\\n      \"],[1,[28,[32,1],[[30,2],1],null]],[1,\". \"],[1,[30,1,[\"title\"]]],[1,\"\\n    \"],[13],[1,\"\\n\"]],[1,2]],null],[13]],[\"book\",\"index\"],false,[\"div\",\"each\",\"-track-array\",\"p\"]]",
  "moduleName": "/home/runner/work/site-books/site-books/app/components/form/adr-result-list.hbs",
  "scope": () => [onScoreChange, add$1],
  "isStrictMode": false
});

class FormAdrResultListComponent extends Component {
  bookListing = [{
    id: 'suzuha',
    title: 'Suzuha'
  }, {
    id: 'ede',
    title: "L'Enfant des Esprits"
  }, {
    id: 'vdy',
    title: 'Le Voeu de Yoko'
  }];
  get results() {
    if (!this.score) {
      return [{
        id: 'suzuha',
        value: 1
      }, {
        id: 'ede',
        value: 2
      }, {
        id: 'vdy',
        value: 3
      }];
    }
    // Transform the score dictionary into an array
    let results = [];
    for (let [key, value] of Object.entries(this.score)) {
      results.push({
        id: key,
        value
      });
    }
    // Sort the array by score
    return results.sort((a, b) => b.value - a.value);
  }
  get score() {
    return this.args.score ? JSON.parse(this.args.score) : undefined;
  }
}
setComponentTemplate(TEMPLATE, FormAdrResultListComponent);

const queChoisir = templateFactory(
/*
  {{page-title "Quelle lecture choisir ? - L'Académie des Renards"}}

<div id="whattoread" class="pure-g">
  <div class="book-background background--classic">
    <div class="pure-u-1 pure-u-sm-1 pure-u-md-12-24 pure-u-lg-10-24">
      <div class="book padding--large">
        <h2>Quelle lecture choisir ?</h2>
        <p>Contrairement à une saga classique, les romans de l'Académie des Renards ne visent pas tous le même public&nbsp;; chacun possède son propre style narratif et développe des thèmes différents. Pour découvrir le livre qui vous correspond le mieux, répondez aux différentes questions de madame Mayanoko 😉</p>
        <hr />
        {{#if this.currentQuestion}}
          <Form::AdrQuestion
            id="wtr-question" 
            @question={{this.currentQuestion}}
            @onSelectAnswer={{this.updateScore}}>
          </Form::AdrQuestion>
          <Form::AdrQuestionNumber 
            id="wtr-question-number" 
            @questionIndex={{this.currentQuestionNumber}} 
            @questionLength={{this.questions.length}}>
          </Form::AdrQuestionNumber>
          <br />
          {{#if this.isLastQuestion}}
            <button
              id="wtr-button-next"
              type="button"
              class="pure-button pure-button--black"
              {{on "click" this.showNext}}
            >
              Valider les résultats
            </button>
          {{else}}
              <button
              id="wtr-button-next"
              type="button"
              class="pure-button pure-button--black"
              {{on "click" this.showNext}}
            >
              Question suivante
            </button>
          {{/if}}
        {{/if}}
        <Form::AdrResultList
          id="wtr-result"
          @score={{this.currentScore}}
        ></Form::AdrResultList>
        {{#unless this.currentQuestion}}
          <LinkTo @route="livres">Voir les livres</LinkTo>
        {{/unless}}
      </div>
    </div>
    <div class="pure-u-1 pure-u-sm-1 pure-u-md-1-24 pure-u-lg-6-24">
    </div>
    <div class="pure-u-1 pure-u-sm-1 pure-u-md-11-24 pure-u-lg-8-24">
    </div>
  </div>
</div>
*/
{
  "id": "Yf6DsbX2",
  "block": "[[[1,[28,[32,0],[\"Quelle lecture choisir ? - L'Académie des Renards\"],null]],[1,\"\\n\\n\"],[10,0],[14,1,\"whattoread\"],[14,0,\"pure-g\"],[12],[1,\"\\n  \"],[10,0],[14,0,\"book-background background--classic\"],[12],[1,\"\\n    \"],[10,0],[14,0,\"pure-u-1 pure-u-sm-1 pure-u-md-12-24 pure-u-lg-10-24\"],[12],[1,\"\\n      \"],[10,0],[14,0,\"book padding--large\"],[12],[1,\"\\n        \"],[10,\"h2\"],[12],[1,\"Quelle lecture choisir ?\"],[13],[1,\"\\n        \"],[10,2],[12],[1,\"Contrairement à une saga classique, les romans de l'Académie des Renards ne visent pas tous le même public ; chacun possède son propre style narratif et développe des thèmes différents. Pour découvrir le livre qui vous correspond le mieux, répondez aux différentes questions de madame Mayanoko 😉\"],[13],[1,\"\\n        \"],[10,\"hr\"],[12],[13],[1,\"\\n\"],[41,[30,0,[\"currentQuestion\"]],[[[1,\"          \"],[8,[32,1],[[24,1,\"wtr-question\"]],[[\"@question\",\"@onSelectAnswer\"],[[30,0,[\"currentQuestion\"]],[30,0,[\"updateScore\"]]]],[[\"default\"],[[[[1,\"\\n          \"]],[]]]]],[1,\"\\n          \"],[8,[32,2],[[24,1,\"wtr-question-number\"]],[[\"@questionIndex\",\"@questionLength\"],[[30,0,[\"currentQuestionNumber\"]],[30,0,[\"questions\",\"length\"]]]],[[\"default\"],[[[[1,\"\\n          \"]],[]]]]],[1,\"\\n          \"],[10,\"br\"],[12],[13],[1,\"\\n\"],[41,[30,0,[\"isLastQuestion\"]],[[[1,\"            \"],[11,\"button\"],[24,1,\"wtr-button-next\"],[24,0,\"pure-button pure-button--black\"],[24,4,\"button\"],[4,[32,3],[\"click\",[30,0,[\"showNext\"]]],null],[12],[1,\"\\n              Valider les résultats\\n            \"],[13],[1,\"\\n\"]],[]],[[[1,\"              \"],[11,\"button\"],[24,1,\"wtr-button-next\"],[24,0,\"pure-button pure-button--black\"],[24,4,\"button\"],[4,[32,3],[\"click\",[30,0,[\"showNext\"]]],null],[12],[1,\"\\n              Question suivante\\n            \"],[13],[1,\"\\n\"]],[]]]],[]],null],[1,\"        \"],[8,[32,4],[[24,1,\"wtr-result\"]],[[\"@score\"],[[30,0,[\"currentScore\"]]]],[[\"default\"],[[[],[]]]]],[1,\"\\n\"],[41,[51,[30,0,[\"currentQuestion\"]]],[[[1,\"          \"],[8,[32,5],null,[[\"@route\"],[\"livres\"]],[[\"default\"],[[[[1,\"Voir les livres\"]],[]]]]],[1,\"\\n\"]],[]],null],[1,\"      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,0],[14,0,\"pure-u-1 pure-u-sm-1 pure-u-md-1-24 pure-u-lg-6-24\"],[12],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,0],[14,0,\"pure-u-1 pure-u-sm-1 pure-u-md-11-24 pure-u-lg-8-24\"],[12],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n\"],[13]],[],false,[\"div\",\"h2\",\"p\",\"hr\",\"if\",\"br\",\"button\",\"unless\"]]",
  "moduleName": "/home/runner/work/site-books/site-books/app/templates/que-choisir.hbs",
  "scope": () => [PageTitle, FormAdrQuestionComponent, FormAdrQuestionNumber, on, FormAdrResultListComponent, LinkTo],
  "isStrictMode": false
});

const amdModule0 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: queChoisir
}, Symbol.toStringTag, { value: 'Module' }));

class QueChoisirController extends Controller {
  static {
    decorateFieldV2(this.prototype, "currentIndex", [tracked], function () {
      return 0;
    });
  }
  #currentIndex = (initializeDeferredDecorator(this, "currentIndex"), void 0);
  static {
    decorateFieldV2(this.prototype, "currentScore", [tracked]);
  }
  #currentScore = (initializeDeferredDecorator(this, "currentScore"), void 0);
  get questions() {
    return getQuestions();
  }
  get currentQuestion() {
    return this.currentIndex < this.questions.length ? this.questions[this.currentIndex] : undefined;
  }
  get currentQuestionNumber() {
    return this.currentIndex + 1;
  }
  get isLastQuestion() {
    return this.currentIndex + 1 === this.questions.length;
  }
  showNext() {
    validateScore();
    this.currentIndex++;
  }
  static {
    decorateMethodV2(this.prototype, "showNext", [action]);
  }
  updateScore(answer) {
    this.currentScore = computeTmpScore(this.currentQuestion, answer);
  }
  static {
    decorateMethodV2(this.prototype, "updateScore", [action]);
  }
}

const amdModule1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: QueChoisirController
}, Symbol.toStringTag, { value: 'Module' }));

class QueChoisirRoute extends Route {}

const amdModule2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: QueChoisirRoute
}, Symbol.toStringTag, { value: 'Module' }));

const output = {};
  output["site-books-ember/templates/que-choisir"] = amdModule0;
  output["site-books-ember/controllers/que-choisir"] = amdModule1;
  output["site-books-ember/routes/que-choisir"] = amdModule2;

export { output as default };
