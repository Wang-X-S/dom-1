const div = dom.create('<td>123</td>')
console.log(div)


dom.after(test,div)

const div2 = dom.create('<span>haha<span>')
dom.before(test2,div2)

const div3 = dom.create('<div>儿子</div>')
dom.append(test2,div3)

const div4 = dom.create('<div>新建父节点</div>')
dom.wrap(wrap,div4)