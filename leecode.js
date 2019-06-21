(function (){ //这里定义一个自执行函数
    //构建链表 这里要注意，链在最后的对象要最开始声明，不然取到next的值就是undefined，这里变量提升，都先赋值为undefined
 var obj3 = {
     name: 'obj3',
     next: null
 }
 var obj2 = {
     name: 'obj2',
     next: obj3
 }
 var obj1 = {
     name: 'obj1',
     next: obj2
 }

 function printLst(node) { //这段是用来输出链表的
     var p = node;
     while(p) {
         console.log(p.name)
         p = p.next;
     }
 }
 function reverse(nodeLst) {
     var pNode = nodeLst; 
     var pPre = null;   //翻转之后 第一个节点的next值 为 null
     var pNext;
     while (pNode) {
         pNext = pNode.next;        //获取到当前节点的下一个节点
         pNode.next = pPre;         //当前节点的前一个指向上一个节点
         pPre = pNode;               //上一个节点赋值为当前节点
         pNode = pNext;              //当前节点赋值为下一个节点
     }
     return pPre;
 }
 printLst(reverse(obj1));
})()
