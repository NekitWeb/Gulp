import { series, parallel } from "gulp";
import { html } from "./gulp/tasks/html.js";
import gulpUtil from "gulp-util";
import { server } from "./gulp/tasks/server.js";
import { watcher } from "./gulp/tasks/watcher.js";

export const isBuild = gulpUtil.env.type === "production";

export default series(html, parallel(server, watcher));
