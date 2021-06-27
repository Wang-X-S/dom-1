const div = dom.create('<td>123</td>')
console.log(div)


dom.after(test,div)

const div2 = dom.create('<span>haha<span>')
dom.before(test2,div2)

const div3 = dom.create('<div>儿子</div>')
dom.append(test2,div3)

const div4 = dom.create('<div>新建父节点</div>')
dom.wrap(wrap,div4)


console.log(doRemove)
const logRemove=dom.remove(doRemove)
console.log(logRemove)


const son = dom.create('<div>son</div>')
dom.append(empty,son)
console.log(son)

const nodes=dom.empty(window.empty)
console.log(empty)

dom.attr(attribute,'title','hi,i am attr')
console.log(dom.attr(attribute,'title'))

dom.text(text,'新内容')


dom.style(style1,{border:'1px solid red',color:'blue'})
dom.style(style2,'background','green')
console.log(dom.style(style1,'color'))

console.log(dom.class.add(class1,'red'))

let fn = ()=>{console.log('123')}
dom.on(listener,'click',fn)
dom.off(listener,'click',fn)


console.log(dom.find('.red')[0])
const find2Div = dom.find('#find2')[0]
console.log(dom.find('.red',find2Div)[0])


dom.each(each1,(e)=>{console.log(e)})

console.log(dom.index(e3))
