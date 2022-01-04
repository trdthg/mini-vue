# js语法细节

## Map vs WeakMap

WeakMap只能用Object做键，而且是一个弱引用，
1. 能够触发垃圾回收机制
2. 不能被enumerate

Map使用任意类型作为键
1. 在gc时不能自动删除关联内存
2. 可以被迭代