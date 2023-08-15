import { autorisation } from "./modules/autorisation.js";
import { getFunction } from "./modules/getFunction.js";
import { commentsRender, renderLoginForm, renderRegistrationForm } from "./modules/render.js";
import { commentBlockElement, commentators, loader } from "./modules/variables.js";

"use strict";


export function appRender(isLogin) {
  const app = document.querySelector('.app');
  if (isLogin) {
    app.innerHTML = `<div class="container">
        <ul id="comment-block" class="comments">
          <!-- render -->
        </ul>
        <div id="appElement" class="add-form">
          <!-- render -->
        </div>
      </div>`;
    getFunction(commentators, loader, commentBlockElement);
    commentsRender(commentators, commentBlockElement);
  } else {
    autorisation()
  }
}