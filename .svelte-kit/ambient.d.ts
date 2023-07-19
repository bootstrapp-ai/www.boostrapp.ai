
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const npm_package_devDependencies_vitest: string;
	export const LANGUAGE: string;
	export const USER: string;
	export const npm_config_user_agent: string;
	export const XDG_SEAT: string;
	export const XDG_SESSION_TYPE: string;
	export const npm_package_devDependencies_vite: string;
	export const npm_node_execpath: string;
	export const SHLVL: string;
	export const HOME: string;
	export const LESS: string;
	export const OLDPWD: string;
	export const npm_package_devDependencies__typescript_eslint_parser: string;
	export const DESKTOP_SESSION: string;
	export const npm_package_devDependencies_eslint_config_prettier: string;
	export const npm_package_devDependencies_eslint_plugin_svelte: string;
	export const LSCOLORS: string;
	export const ZSH: string;
	export const npm_package_devDependencies__sveltejs_adapter_static: string;
	export const GTK_MODULES: string;
	export const PAGER: string;
	export const XDG_SEAT_PATH: string;
	export const npm_package_devDependencies_svelte_check: string;
	export const LC_MONETARY: string;
	export const npm_package_scripts_check: string;
	export const DBUS_SESSION_BUS_ADDRESS: string;
	export const npm_config_engine_strict: string;
	export const npm_config_resolution_mode: string;
	export const COLORTERM: string;
	export const npm_package_devDependencies_typescript: string;
	export const VOLTA_HOME: string;
	export const _VOLTA_TOOL_RECURSION: string;
	export const QT_QPA_PLATFORMTHEME: string;
	export const npm_package_scripts_dev: string;
	export const npm_package_devDependencies__playwright_test: string;
	export const npm_package_devDependencies_prettier: string;
	export const LOGNAME: string;
	export const npm_package_type: string;
	export const DESKTOP_AUTOSTART_ID: string;
	export const _: string;
	export const npm_package_private: string;
	export const npm_package_scripts_check_watch: string;
	export const XDG_SESSION_CLASS: string;
	export const npm_package_scripts_lint: string;
	export const npm_package_devDependencies__typescript_eslint_eslint_plugin: string;
	export const npm_config_registry: string;
	export const GTK_OVERLAY_SCROLLING: string;
	export const TERM: string;
	export const XDG_SESSION_ID: string;
	export const GNOME_DESKTOP_SESSION_ID: string;
	export const npm_package_dependencies_svelte_typewriter: string;
	export const npm_config_node_gyp: string;
	export const PATH: string;
	export const GDM_LANG: string;
	export const GTK3_MODULES: string;
	export const SESSION_MANAGER: string;
	export const npm_package_name: string;
	export const NODE: string;
	export const LC_ADDRESS: string;
	export const XDG_RUNTIME_DIR: string;
	export const XDG_SESSION_PATH: string;
	export const npm_package_scripts_test_integration: string;
	export const DISPLAY: string;
	export const npm_package_scripts_test_unit: string;
	export const DESKTOP_STARTUP_ID: string;
	export const LANG: string;
	export const LC_TELEPHONE: string;
	export const XDG_CURRENT_DESKTOP: string;
	export const npm_package_devDependencies_eslint: string;
	export const LS_COLORS: string;
	export const XAUTHORITY: string;
	export const XDG_SESSION_DESKTOP: string;
	export const npm_lifecycle_script: string;
	export const SSH_AUTH_SOCK: string;
	export const XDG_GREETER_DATA_DIR: string;
	export const npm_package_scripts_test: string;
	export const npm_package_devDependencies__sveltejs_kit: string;
	export const GOPATH: string;
	export const LC_NAME: string;
	export const NODE_PATH: string;
	export const SHELL: string;
	export const npm_package_version: string;
	export const npm_lifecycle_event: string;
	export const GDMSESSION: string;
	export const QT_ACCESSIBILITY: string;
	export const npm_package_scripts_build: string;
	export const npm_package_devDependencies_svelte: string;
	export const npm_package_devDependencies_tslib: string;
	export const npm_config_update_notifier: string;
	export const LC_MEASUREMENT: string;
	export const ANDROID_SDK_ROOT: string;
	export const GPG_AGENT_INFO: string;
	export const LC_IDENTIFICATION: string;
	export const XDG_VTNR: string;
	export const npm_package_scripts_format: string;
	export const GUAKE_TAB_UUID: string;
	export const JAVA_HOME: string;
	export const PWD: string;
	export const npm_execpath: string;
	export const ANDROID_HOME: string;
	export const XDG_CONFIG_DIRS: string;
	export const XDG_DATA_DIRS: string;
	export const LC_NUMERIC: string;
	export const npm_package_devDependencies__sveltejs_adapter_auto: string;
	export const npm_command: string;
	export const PNPM_SCRIPT_SRC_DIR: string;
	export const LC_PAPER: string;
	export const npm_package_scripts_preview: string;
	export const npm_package_devDependencies_prettier_plugin_svelte: string;
	export const VTE_VERSION: string;
	export const npm_config__fortawesome_registry: string;
	export const INIT_CWD: string;
	export const NODE_ENV: string;
}

/**
 * Similar to [`$env/static/private`](https://kit.svelte.dev/docs/modules#$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/master/packages/adapter-node) (or running [`vite preview`](https://kit.svelte.dev/docs/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		npm_package_devDependencies_vitest: string;
		LANGUAGE: string;
		USER: string;
		npm_config_user_agent: string;
		XDG_SEAT: string;
		XDG_SESSION_TYPE: string;
		npm_package_devDependencies_vite: string;
		npm_node_execpath: string;
		SHLVL: string;
		HOME: string;
		LESS: string;
		OLDPWD: string;
		npm_package_devDependencies__typescript_eslint_parser: string;
		DESKTOP_SESSION: string;
		npm_package_devDependencies_eslint_config_prettier: string;
		npm_package_devDependencies_eslint_plugin_svelte: string;
		LSCOLORS: string;
		ZSH: string;
		npm_package_devDependencies__sveltejs_adapter_static: string;
		GTK_MODULES: string;
		PAGER: string;
		XDG_SEAT_PATH: string;
		npm_package_devDependencies_svelte_check: string;
		LC_MONETARY: string;
		npm_package_scripts_check: string;
		DBUS_SESSION_BUS_ADDRESS: string;
		npm_config_engine_strict: string;
		npm_config_resolution_mode: string;
		COLORTERM: string;
		npm_package_devDependencies_typescript: string;
		VOLTA_HOME: string;
		_VOLTA_TOOL_RECURSION: string;
		QT_QPA_PLATFORMTHEME: string;
		npm_package_scripts_dev: string;
		npm_package_devDependencies__playwright_test: string;
		npm_package_devDependencies_prettier: string;
		LOGNAME: string;
		npm_package_type: string;
		DESKTOP_AUTOSTART_ID: string;
		_: string;
		npm_package_private: string;
		npm_package_scripts_check_watch: string;
		XDG_SESSION_CLASS: string;
		npm_package_scripts_lint: string;
		npm_package_devDependencies__typescript_eslint_eslint_plugin: string;
		npm_config_registry: string;
		GTK_OVERLAY_SCROLLING: string;
		TERM: string;
		XDG_SESSION_ID: string;
		GNOME_DESKTOP_SESSION_ID: string;
		npm_package_dependencies_svelte_typewriter: string;
		npm_config_node_gyp: string;
		PATH: string;
		GDM_LANG: string;
		GTK3_MODULES: string;
		SESSION_MANAGER: string;
		npm_package_name: string;
		NODE: string;
		LC_ADDRESS: string;
		XDG_RUNTIME_DIR: string;
		XDG_SESSION_PATH: string;
		npm_package_scripts_test_integration: string;
		DISPLAY: string;
		npm_package_scripts_test_unit: string;
		DESKTOP_STARTUP_ID: string;
		LANG: string;
		LC_TELEPHONE: string;
		XDG_CURRENT_DESKTOP: string;
		npm_package_devDependencies_eslint: string;
		LS_COLORS: string;
		XAUTHORITY: string;
		XDG_SESSION_DESKTOP: string;
		npm_lifecycle_script: string;
		SSH_AUTH_SOCK: string;
		XDG_GREETER_DATA_DIR: string;
		npm_package_scripts_test: string;
		npm_package_devDependencies__sveltejs_kit: string;
		GOPATH: string;
		LC_NAME: string;
		NODE_PATH: string;
		SHELL: string;
		npm_package_version: string;
		npm_lifecycle_event: string;
		GDMSESSION: string;
		QT_ACCESSIBILITY: string;
		npm_package_scripts_build: string;
		npm_package_devDependencies_svelte: string;
		npm_package_devDependencies_tslib: string;
		npm_config_update_notifier: string;
		LC_MEASUREMENT: string;
		ANDROID_SDK_ROOT: string;
		GPG_AGENT_INFO: string;
		LC_IDENTIFICATION: string;
		XDG_VTNR: string;
		npm_package_scripts_format: string;
		GUAKE_TAB_UUID: string;
		JAVA_HOME: string;
		PWD: string;
		npm_execpath: string;
		ANDROID_HOME: string;
		XDG_CONFIG_DIRS: string;
		XDG_DATA_DIRS: string;
		LC_NUMERIC: string;
		npm_package_devDependencies__sveltejs_adapter_auto: string;
		npm_command: string;
		PNPM_SCRIPT_SRC_DIR: string;
		LC_PAPER: string;
		npm_package_scripts_preview: string;
		npm_package_devDependencies_prettier_plugin_svelte: string;
		VTE_VERSION: string;
		npm_config__fortawesome_registry: string;
		INIT_CWD: string;
		NODE_ENV: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
