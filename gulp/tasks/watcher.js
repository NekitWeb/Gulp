import { watch } from "gulp";
import { path } from "../config/path.js";
import { html } from "./html.js";

export const watcher = () => {
  watch(path.watcher.html, html);
};
