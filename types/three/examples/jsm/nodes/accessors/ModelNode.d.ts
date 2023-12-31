import { NodeFrame } from '../Nodes.js';
import Object3DNode, { Object3DNodeScope } from './Object3DNode.js';

/**
 * Similar to {@link Object3DNode} but the object comes from {@link NodeFrame}
 */
export default class ModelNode extends Object3DNode {
    constructor(scope?: Object3DNodeScope);
}
