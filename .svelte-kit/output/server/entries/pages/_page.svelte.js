import { c as create_ssr_component, i as is_promise, n as noop, d as add_attribute, v as validate_component, e as escape, f as null_to_empty } from "../../chunks/ssr.js";
const void_element_names = /^(?:area|base|br|col|command|embed|hr|img|input|keygen|link|meta|param|source|track|wbr)$/;
function is_void(name) {
  return void_element_names.test(name) || name.toLowerCase() === "!doctype";
}
const Typewriter_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "@keyframes svelte-1gv2i7t-cursorFade{0%,100%{opacity:1}50%{opacity:0}}.typewriter-container.svelte-1gv2i7t *:not(.typing):not(.finished-typing):not([data-static]){display:none}.typewriter-container.svelte-1gv2i7t .finished-typing::after{content:none}.cursor.svelte-1gv2i7t .typing::after{content:'';width:var(--cursor-width, 1ch);height:2ch;display:inline-block;vertical-align:text-top;background-color:var(--cursor-color, #000000);animation:svelte-1gv2i7t-cursorFade 1.25s infinite}",
  map: null
};
const Typewriter = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isLoopMode;
  let isFiniteCursorMode;
  let invalidCursorOnFinish;
  let invalidCursorOnDelay;
  let invalidLoopProps;
  let invalidScrambleProps;
  let unnecessaryCursorOnFinish;
  let delayPromise;
  let { mode = "concurrent" } = $$props;
  let { interval = 30 } = $$props;
  let { cursor = true } = $$props;
  let { keepCursorOnFinish = false } = $$props;
  let { delay = 0 } = $$props;
  let { showCursorOnDelay = false } = $$props;
  let { disabled = false } = $$props;
  let { element = "div" } = $$props;
  let { scrambleDuration = 3e3 } = $$props;
  let { scrambleSlowdown = true } = $$props;
  let { unwriteInterval = 30 } = $$props;
  let { wordInterval = 1500 } = $$props;
  const modes = {
    concurrent: () => import("../../chunks/concurrent.js"),
    cascade: () => import("../../chunks/cascade.js"),
    loop: () => import("../../chunks/loop.js"),
    loopOnce: () => import("../../chunks/loopOnce.js"),
    loopRandom: () => import("../../chunks/loopRandom.js"),
    scramble: () => import("../../chunks/scramble.js")
  };
  if ($$props.mode === void 0 && $$bindings.mode && mode !== void 0)
    $$bindings.mode(mode);
  if ($$props.interval === void 0 && $$bindings.interval && interval !== void 0)
    $$bindings.interval(interval);
  if ($$props.cursor === void 0 && $$bindings.cursor && cursor !== void 0)
    $$bindings.cursor(cursor);
  if ($$props.keepCursorOnFinish === void 0 && $$bindings.keepCursorOnFinish && keepCursorOnFinish !== void 0)
    $$bindings.keepCursorOnFinish(keepCursorOnFinish);
  if ($$props.delay === void 0 && $$bindings.delay && delay !== void 0)
    $$bindings.delay(delay);
  if ($$props.showCursorOnDelay === void 0 && $$bindings.showCursorOnDelay && showCursorOnDelay !== void 0)
    $$bindings.showCursorOnDelay(showCursorOnDelay);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.element === void 0 && $$bindings.element && element !== void 0)
    $$bindings.element(element);
  if ($$props.scrambleDuration === void 0 && $$bindings.scrambleDuration && scrambleDuration !== void 0)
    $$bindings.scrambleDuration(scrambleDuration);
  if ($$props.scrambleSlowdown === void 0 && $$bindings.scrambleSlowdown && scrambleSlowdown !== void 0)
    $$bindings.scrambleSlowdown(scrambleSlowdown);
  if ($$props.unwriteInterval === void 0 && $$bindings.unwriteInterval && unwriteInterval !== void 0)
    $$bindings.unwriteInterval(unwriteInterval);
  if ($$props.wordInterval === void 0 && $$bindings.wordInterval && wordInterval !== void 0)
    $$bindings.wordInterval(wordInterval);
  $$result.css.add(css$1);
  isLoopMode = /^loop(Once|Random)?$/.test(mode);
  isFiniteCursorMode = ["concurrent", "cascade", "loopOnce"].includes(mode);
  invalidCursorOnFinish = !isFiniteCursorMode && keepCursorOnFinish;
  invalidCursorOnDelay = delay < 1 && showCursorOnDelay;
  invalidLoopProps = !isLoopMode && ($$props.unwriteInterval || $$props.wordInterval);
  invalidScrambleProps = mode !== "scramble" && ($$props.scrambleDuration || $$props.scrambleSlowdown);
  unnecessaryCursorOnFinish = typeof keepCursorOnFinish === "number" && keepCursorOnFinish < 1;
  invalidCursorOnFinish && console.warn("[svelte-typewriter] The prop 'keepCursorOnFinish' is compatible only with finite modes");
  invalidCursorOnDelay && console.warn("[svelte-typewriter] The prop 'showCursorOnDelay' has no effect if the delay is 0");
  invalidLoopProps && console.warn("[svelte-typewriter] The props 'unwriteInterval' and 'wordInterval' are only compatible with loop modes");
  invalidScrambleProps && console.warn("[svelte-typewriter] The props 'scrambleDuration' and 'scrambleSlowdown' are only compatible with scramble mode");
  unnecessaryCursorOnFinish && console.warn("[svelte-typewriter] The prop 'keepCursorOnFinish' has no effect with values lower than 1");
  delayPromise = () => new Promise((resolve) => setTimeout(() => resolve(delay), delay));
  return `<noscript>${slots.default ? slots.default({}) : ``}</noscript> ${disabled ? `<div class="typewriter-container svelte-1gv2i7t">${slots.default ? slots.default({}) : ``}</div>` : `${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return ` ${showCursorOnDelay ? `<div class="typewriter-container cursor svelte-1gv2i7t" data-svelte-h="svelte-1ssf3hl"><p class="typing"></p></div>` : ``} `;
    }
    return function() {
      return ` ${function(__value2) {
        if (is_promise(__value2)) {
          __value2.then(null, noop);
          return ``;
        }
        return function(selectedMode) {
          return ` ${((tag) => {
            return tag ? `<${element} class="${["typewriter-container svelte-1gv2i7t", cursor ? "cursor" : ""].join(" ").trim()}">${is_void(tag) ? "" : `${slots.default ? slots.default({}) : ``}`}${is_void(tag) ? "" : `</${tag}>`}` : "";
          })(element)} `;
        }();
      }(modes[mode]())} `;
    }();
  }(delayPromise())}`}`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".fadeOut.svelte-1grxoli{animation:svelte-1grxoli-fadeOut 1s ease-out forwards}@keyframes svelte-1grxoli-fadeOut{from{opacity:1}to{opacity:0}}.user-input.svelte-1grxoli{display:none}#submit.svelte-1grxoli{min-height:200px}.typing.svelte-1grxoli::after{content:'';width:var(--cursor-width, 1ch);height:2ch;display:inline-block;vertical-align:text-top;background-color:var(--cursor-color, #000000);animation:svelte-1gv2i7t-cursorFade 1.25s infinite}.prompt.svelte-1grxoli p:not(.typing):not(.finished-typing):not([data-static]),.prompt.svelte-1grxoli h1:not(.typing):not(.finished-typing):not([data-static]),.prompt.svelte-1grxoli h2:not(.typing):not(.finished-typing):not([data-static]){display:block !important}.display-inline.display-inline.svelte-1grxoli{display:inline !important}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const prerender = true;
  let userInput;
  let userPrompt = "";
  let prompt;
  let typewriterStatus = false;
  if ($$props.prerender === void 0 && $$bindings.prerender && prerender !== void 0)
    $$bindings.prerender(prerender);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<head data-svelte-h="svelte-19hji9e"><meta charset="utf-8"> <meta http-equiv="x-ua-compatible" content="ie=edge"> <meta name="viewport" content="width=device-width, initial-scale=1"> <meta name="Skelet." property="Sēlekkt. Studio" content="https://selekkt.dk/skelet/v3/"> <title>Bootstrap.ai</title> <meta name="description" content="Skelet. is a contemporary CSS framework which gives you the foundations to start building your next project, right away."> <meta name="author" content="Sēlekkt. Studio">  <meta property="og:url" content="https://selekkt.dk/skelet/"> <meta property="og:type" content="website"> <meta property="og:title" content="Skelet. a contemporary CSS framework"> <meta property="og:description" content="Skelet. is a contemporary CSS framework which gives you the foundations to start building your next project right away."> <meta property="og:image" content=""> <link rel="icon" type="image/png" href="img/favicon.png"> <link rel="apple-touch-icon-precomposed" href="img/touch.png"> <script src="https://unpkg.com/typewriter-effect@latest/dist/core.js"><\/script> <link rel="stylesheet" href="https://rsms.me/inter/inter.css"> <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"> <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Selekkt/skelet@master/css/skelet.min.css"> <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Selekkt/skelet@master/css/skelet-tooltips.css"> <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Selekkt/skelet@docs/docs/assets/app.min.css"></head> <body><div id="app"><button class="lightswitch lightsoff" title="Light switch"></button> <header id="intro" class="prompt center-axyz svelte-1grxoli"><div${add_attribute("class", "", 0)}>${validate_component(Typewriter, "Typewriter").$$render(
      $$result,
      {
        showCursorOnDelay: true,
        delay: 1e3,
        interval: 10,
        disabled: typewriterStatus,
        mode: "cascade",
        keepCursorOnFinish: true,
        this: prompt
      },
      {
        this: ($$value) => {
          prompt = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<span class="typewriter" data-svelte-h="svelte-l71egf">Welcome to</span> <h1 class="skelet typewriter" data-svelte-h="svelte-7onqhm">bootstrapp.ai</h1> <h2 class="heading typewriter" data-svelte-h="svelte-1kkr6dd">Transform your idea into a validated prototype using our powerful, AI-driven tool!</h2> <p class="typewriter" data-svelte-h="svelte-1s31btw">Turn &#39;One Day&#39; into &#39;Day One&#39;: Launch Your Entrepreneurship Journey Instantly.</p> <p class="typewriter" data-svelte-h="svelte-1b6ntli">Ready to take the first step? Enter your idea below and let&#39;s Bootstrapp it into reality!</p> <span class="display-inline svelte-1grxoli" data-svelte-h="svelte-1n8yesf">&gt;</span> <pre class="${escape(null_to_empty(`display-inline user-prompt ${""}`), true) + " svelte-1grxoli"}">${escape(userPrompt)}</pre>`;
        }
      }
    )}</div> <div id="submit" class="svelte-1grxoli">${userPrompt.length > 10 ? `<x-grid columns="2" ai="center" start animation="fadein" ease="easeInOutQuad" style="--duration: 1s;"><x-cell span-s="row"><a href="#" class="button fullwidth is-outline is-currentcolor" tabindex="0" data-svelte-h="svelte-w08779">Start</a></x-cell> <x-cell span-s="row" data-svelte-h="svelte-1vf6p2j"><p>or press ↳Enter.</p></x-cell></x-grid>` : ``}</div> <input${add_attribute("this", userInput, 0)}${add_attribute("value", userPrompt, 0)}></header> <nav class="backdrop" data-svelte-h="svelte-lx6tpu"><div class="scroll-snap no-scrollbars-s"><span><a href="#customization" class="button has-icon is-blank is-large" tabindex="0"><i class="fa fa-info-circle"></i><span>About</span></a></span> <span><a href="#typography" class="button has-icon is-blank is-large" tabindex="0"><i class="fa fa-cogs"></i><span>How it works</span></a></span> <span><a href="#miscellaneous" class="button has-icon is-blank is-large" tabindex="0"><i class="fa fa-dollar-sign"></i><span>Pricing</span></a></span></div></nav></div></body>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
