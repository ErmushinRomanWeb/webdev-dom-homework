import { getFunction } from "./modules/getFunction.js";
import { commentsRender } from "./modules/render.js";
import { addForm, commentBlockElement, commentators, loader } from "./modules/variables.js";

"use strict";

loader
addForm
commentBlockElement
commentators

getFunction(commentators, loader, addForm, commentBlockElement);



commentsRender(commentators, commentBlockElement)



