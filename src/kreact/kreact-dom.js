function render(vnode, node) {
    let realNode = createNode(vnode);

    node.appendChild(realNode)
}

function isString(val) {
    return typeof val === 'string'
}

function createNode(vnode) {
    if (isString(vnode)) {
        node = document.createTextNode(vnode);
        return node;
    }

    const { type, props } = vnode;

    let node;
    console.log(typeof type,type)
    if (typeof type === 'string') {
        node = updateHostComponent(vnode);
    }else if(typeof type === 'function'){
        if(type.isReactComponent){
            // class组件
            node = updateClassComponent(vnode);
        }else{
            // 函数组件
            node = updateFunctionComponent(vnode);
        }
    }else {
        node = updateFragmentComponent(vnode);
    }

    return node;
}

function updateHostComponent(vnode) {
    const { type, props } = vnode;
    let node = document.createElement(type);

    updateNode(node,props);

    reconcileChidlren(node, props.children)

    return node
}

function updateClassComponent(vnode){
    const {type,props} = vnode;
    
    // class 组件的render函数
    let classVNode = new type(props).render();

    return createNode(classVNode);
}

function updateFunctionComponent(vnode){
    const {type,props} = vnode;

    let node = type(props);

    return createNode(node);
}

function updateFragmentComponent(vnode){
    const {type,props} = vnode;

    let node = document.createDocumentFragment();
    console.log(vnode)
    reconcileChidlren(node,props.children)
    return node ;
}

function updateNode(node,props) {

    Object.keys(props).filter(item=>item!=='children').forEach(prop=>{
        node[prop] = props[prop]
    })
}

function reconcileChidlren(parentNode, children) {
    const newChildren = Array.isArray(children) ? children : [children || '']

    for (let i = 0; i < newChildren.length; i++) {
        let child = newChildren[i];

        render(child, parentNode)
    }
}


export default { render }