var chunlin9527 = {
    // 拆分数组，并组成一个新数组
    chunk: function chunk(array, size) {
        var result = []
        var count = 0
        for (var i = 0; i < array.length; i++) {
            result[i] = [] 
            for (var j = 0; j < size; j++) {
                result[i].push(array[count]) 
                count++
                if (count == array.length) {
                    return result
                }
            }
        }
    },

    // 输出原数组中所有的非假值元素
    compact: function compact(array) {
        var result = []
        return result = array.filter(Boolean)
    },

    // 去除数组前面的n个元素
    drop: function drop(array, n = 1) {
        var result = []
        return result = array.slice(n)
    },

    // 去除数组尾部的n个元素
    dropRight: function dropRight(array, n = 1) {
        var result = []
        var m = array.length - n
        if (m <= 0) {
            return []
        }   else {
            return result = array.slice(0, m)
        }
    },

    // 去除数组中从predicate返回假值开始到尾部的部分
    // dropRightWhile: function dropRightWhile(array, predicate) {

    // },

    // 填充（替换）数组中，从start位置到end位置的值
    fill: function fill(array, value, start = 0, end = array.length) {
        for (var i = start; i < end; i++) {
            array[i] = value
        }
        return array
    },

    // 返回第一个通过predicate判断为真值的元素的索引值
    findIndex: function findIndex(array, predicate, fromIndex = 0) {
        for (var i = fromIndex; i < array.length; i++) {
            if (predicate(array[i])) {
                return i
            }
        }
        return -1
    },

    // 类似findIndex，从右到左判断
    findLastIndex: function findLastIndex(array, predicate, fromIndex = array.length - 1) {
        for (var i = fromIndex; i >= 0; i--) {
            if (predicate(array[i])) {
                return i
            }
        }
        return -1
    },

    // 减少一级数组嵌套深度
    flatten: function flatten(array) {
        var result = []
        for (var i = 0; i < array.length; i++) {
            result = result.concat(array[i])
        }
        return result
    },

    // 将数组递归为一维数组
    flattenDeep: function flattenDeep(array) {
        for (var i = 0; i < array.length; i++) {
            if (array[i].length !== undefined) {
                array = this.flatten(array)
            }  
        }
        return array
    },

    // 减少数组的depth嵌套层级
    flattenDepth: function flattenDepth(array, depth = 1) {
        for (var i = 0; i < depth; i++) {
            var result = this.flatten(array)
            array = result
        }
        return array
    },

    // 数组返回对象
    fromPairs: function fromPairs(pairs) {   
        var result = {}
        for (var i = 0; i < pairs.length; i++) {
            result[pairs[i][0]] = pairs[i][1]
        }
        return result
    },

    // 获取数组第一个元素
    head: function head(array) {
        return array[0]
    },

    // value在数组中的索引值
    indexOf: function indexOf(array, value, fromIndex = 0) {
        if (fromIndex < 0) {
            if (array.lastIndexOf(value) == -1) {
                return -1
            }   else {
                return array.indexOf(value)
            }
        }
        var index = array.slice(fromIndex).indexOf(value)
        if (index == -1) {
            return -1
        }
        return index + fromIndex
    },

    // 去除数组中的最后一个元素
    initial: function initial(array) {
        return array.slice(0, array.length - 1)
    },

    // 将数组中所有元素转换为由separator分隔的字符串
    join: function join(array, separator) {
        return array.join(separator)
    },

    // 获取数组最后一个元素
    last: function last(array) {
        return array[array.length - 1]
    },

    // 从右到左遍历数组，检索value的索引值
    lastIndexOf: function lastIndexOf(array, value, fromIndex) {
        if (array.slice(fromIndex).lastIndexOf(value) == -1 || fromIndex < 0) {
            return -1
        }   else {
            return array.slice(fromIndex).lastIndexOf(value)
        }
    },

    // 反转数组
    reverse: function reverse(array) {
        return array.reverse()
    },

    // 判断value是否是类数组
    isArrayLike: function isArrayLike(value) {
        return  value !== null && typeof value !== 'function' && value.length >= 0
    },

    // 判断value是否是对象
    isObjectLike: function isObjectLike(value) {
        return value !== null && typeof value === 'object'
    },

    // 创建一个具有唯一值的数组，每个值不包含在values数组中
    difference: function difference(array, ...values) {
        var result = []
        var allvalues = [].concat(...values)
        for (var i = 0; i < array.length; i++) {
            if (allvalues.includes(array[i])) {
                continue
            }   else {
                result.push(array[i])
            }
        }
        return result
    },

    // 类似_.difference，迭代器iteratee先迭代
    // differenceBy: function differenceBy(array, values, iteratee) {

    // },

    // 类似_.difference，比较器comparator先比较
    differenceWith: function differenceWith(array, values, comparator) {
        var result = []
        for (var i = 0; i < array.length; i++) {
            for (var j = 0; j < values.length; j++) {
                if (!comparator(array[i], values[j])) {
                    result.push(array[i])
                }
            }
        }
        return result
    },

    // 创建唯一值的数组，包含所有给定数组都包含的元素
    intersection: function intersection(...arrays) {
        var result = []
        var minarray = arrays.reduce((a,b) => {if (b.length < a.length) {return b} return a})   
        for (var i = 0; i < minarray.length; i++) {
            var dight = true
            for (var j = 0; j < arrays.length; j++) {
                if (arrays[j].includes(minarray[i])) {
                    continue
                }   else {
                    dight = false
                    break
                }
            }
            if (dight == true) {
                result.push(minarray[i])
            }
        }
        return result
    },

    // 获取数组的第n个元素，如果n为负数，则返回从数组结尾开始的第n个元素
    nth: function nth(array, n = 0) {
        if (n < 0) {
            return array[array.length - Math.abs(n)]
        }
        return array[n]
    },

    // 移除数组中predicate返回为真值的所有元素
    remove: function remove(array, predicate) {
        return array.filter(val => {return !(predicate(val))})
    },

    // 移除数组中所有和给定值相等的元素
    pull: function pull(array, ...values) {
        return this.remove(array, (val) => {return values.includes(val)})
    },

    // 类似_.pull，区别是这个方法接收一个要移除值的数组
    pullAll: function pullAll(array, values) {
        return this.remove(array, (val) => {return values.includes(val)})
    },

    // 根据索引indexes，移除数组中对应的元素
    pullAt: function pullAt(array, indexes) {
       
    },

    // 使用二进制的方式，检索value值插入到数组中尽可能小的索引位置
    sortedIndex: function sortedIndex(array, value) {
        for (var i = 0; i < array.length; i++) {
            if (value <= array[i]) {
                return i
            }
        }
        return array.length
    },

    // sortedIndexBy: function sortedIndexBy(array, value, iteratee) {

    // },

    // 类似_.indexOf，在已经排序的数组上执行二进制检索
    sortedIndexOf: function sortedIndexOf(array, value) {
        var prev = 0
        var l = array.length
        while (prev < l) {
            var m = Math.floor((prev + l) / 2)
            if (array[m] < value) {
                prev = m + 1
            }   else {
                l = m
            } 
        }
        if (array[prev] == value) {
            return prev
        }   
        return -1
    },

    // 类似于.sortedIndex，返回value值在数组中尽可能大的索引位置
    sortedLastIndex: function sortedLastIndex(array, value) {
        var prev = 0
        var l = array.length
        while (prev < l) {
            var m = Math.floor((prev + l) / 2)
            if (array[m] > value) {
                l = m
            }   else {
                prev = m + 1
            }
        }
        return prev
    },

    // 类似_.lastIndexOf，在已经排序的数组上执行二进制检索
    sortedLastIndexOf: function sortedLastIndexOf(array, value) {
        var prev = 0
        var l = array.length
        while (prev < l) {
            var m = Math.floor((prev + l) / 2)
            if (array[m] > value) {
                l = m
            }   else {
                prev = m + 1
            }
        }
        if (array[prev - 1] == value) {
            return prev - 1
        }
        return -1
    },

    sortedUniq: function sortedUniq(array) {
        return array.reduce((prev, cur) => {
            if (prev.indexOf(cur) == -1) {
                prev.push(cur)
            }
            return prev
        },[])
    },
}