

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.8b435de2.js","_app/immutable/chunks/scheduler.9cee2653.js","_app/immutable/chunks/index.1b01ea21.js","_app/immutable/chunks/preload-helper.cf010ec4.js"];
export const stylesheets = ["_app/immutable/assets/2.da4ac3c7.css"];
export const fonts = [];
