type TreeNode = {
    value: string
  }
  
  type LeafNode = TreeNode & {
    isLeaf: true
  }
  
  type InnerNode = TreeNode & {
    children: [TreeNode] | [TreeNode, TreeNode]
  }
  
  let a: TreeNode = {value: 'a'}
  let b: LeafNode = {value: 'b', isLeaf: true}
  let c: InnerNode = {value: 'c', children: [{value:'abc'}]}
  console.log(c.children)
  
  let a1 = mapNode(a, val => val.toUpperCase())
  let b1 = mapNode(b, val => val.toUpperCase())
  let c1 = mapNode(c, val => val.toUpperCase())
  
  function mapNode<T extends TreeNode>( // T타입은 최대 TreeNode 이거나 TreeNode의 서브타입
    node: T,  // 타입이 T인 노드
    f: (value: string) => string  // string을 반환하는 함수
  ): T {  // T를 반환
    return {
      ...node,
      value: f(node.value)
    }
  }

  type HasSides = {numberOfSides: number}
type SidesHaveLength = {sideLength: number}

function logPerimeter<Shape extends HasSides & SidesHaveLength> (s:Shape): Shape {
  console.log(s.numberOfSides * s.sideLength)
  return s
}

type Square = HasSides & SidesHaveLength
let square:Square = {numberOfSides: 4, sideLength: 3}
logPerimeter(square)

function call<T extends unknown[], R>(
  f: (...args: T) => R,
  ...args: T
): R {
  return f(...args)
}

function fill(length: number, value: string): string[] {
  return Array.from({length}, () => value)
}

console.log(call(fill, 10, 'a'))
