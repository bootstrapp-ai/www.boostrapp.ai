

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.01d6570b.js","_app/immutable/chunks/scheduler.9cee2653.js","_app/immutable/chunks/index.1b01ea21.js","_app/immutable/chunks/singletons.2f73449f.js"];
export const stylesheets = [];
export const fonts = [];
