

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.3324f6a6.js","_app/immutable/chunks/scheduler.9cee2653.js","_app/immutable/chunks/index.1b01ea21.js"];
export const stylesheets = [];
export const fonts = [];
