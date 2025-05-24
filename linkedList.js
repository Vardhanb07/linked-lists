class Node {
    constructor(value, nextNode){
        this.value = value
        this.nextNode = nextNode
    }
}
export class linkedList {
    element
    headNode = null
    append(value){
        if(this.headNode == null){
            this.element = new Node(value)
            this.headNode = this.element
            this.tail1 = this.element
        }else {
            let j = this.element
            while(j.nextNode != null){
                j = j.nextNode
            }   
            j.nextNode = new Node(value)
        }
    }
    prepend(value){
        if(this.headNode == null){
            throw new Error("List is empty")
        }else {
            let element1 = new Node(value)
            element1.nextNode = this.headNode
            this.headNode = element1
        }
    }
    size(){
        if(this.headNode == null){
            throw new Error("List is empty")
        }else {
            let j = this.headNode
            let c = 0
            while(j != null){
                j = j.nextNode
                c++
            }
            return c
        }
    }
    head() {
        if(this.headNode == null){
            throw new Error("List is empty")
        }else {
            return this.headNode.value
        }
    }
    tail(){
        if(this.headNode == null){
            throw new Error("List is empty")
        }else {
            let j = this.headNode
            while(j.nextNode != null){
                j = j.nextNode
            }
            return j.value
        }
    }
    at(index){
        if(this.headNode == null){
            throw new Error("List is empty")
        }else {
            let c = 0
            let j = this.headNode
            let value = null
            while(j != null){
                if(c == index){
                    value = j.value
                    break
                }
                c++
                j = j.nextNode
            }
            if(value == null){
                throw new Error("Index not in range")
            }else {
                return value
            }
        }
    }
    pop() {
        if(this.headNode == null){
            throw new Error("List is empty")
        }else {
            let j = this.headNode
            while(j.nextNode.nextNode != null){
                j = j.nextNode
            }
            j.nextNode = null
        }
    }
    contains(value){
        if(this.headNode == null){
            throw new Error("List is empty")
        }else {
            let bool = false
            let j = this.headNode
            while(j != null){
                if(j.value == value){
                    bool = true
                    break
                }
                j = j.nextNode
            }
            return bool
        }
    }
    find(value){
        if(this.headNode == null){
            throw new Error("List is empty")
        }else {
            let index = null
            let c = 0
            let j = this.headNode
            while(j != null){
                if(j.value == value){
                    index = c
                }
                c++
                j = j.nextNode
            }
            return index
        }
    }
    toString(){
        if(this.headNode == null){
            throw new Error("List is empty")
        }else {
            let j = this.headNode
            let nodeValues = []
            while(j != null){
                nodeValues.push(j.value)
                j = j.nextNode
            }
            let cs = ''
            for(let value of nodeValues){
                cs += `( ${value} ) -> `
            }
            cs += 'null'
            return cs
        }
    }
}
