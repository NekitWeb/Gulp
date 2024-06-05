import { src, dest } from "gulp";
import { html } from "./gulp/tasks/html.js";
import gulpUtil from "gulp-util";

export const isBuild = gulpUtil.env.type === "production";

export default html;
