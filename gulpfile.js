import { series, parallel } from "gulp";
import { html } from "./gulp/tasks/html.js";
import gulpUtil from "gulp-util";
import { server } from "./gulp/tasks/server.js";
import { watcher } from "./gulp/tasks/watcher.js";
import { reset } from "./gulp/tasks/clean.js";
import { style } from "./gulp/tasks/style.js";
import gulpIf from "gulp-if";

export const isBuild = gulpUtil.env.type === "production";

export const build = series(reset, parallel(html, style));
export default series(reset, parallel(html, style), parallel(server, watcher));
