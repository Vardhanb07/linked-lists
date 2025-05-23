class Node {
    constructor(value, nextNode){
        this.value = value
        this.nextNode = nextNode
    }
}
class linkedList {
    element
    head = null
    tail = null
    append(value){
        if(this.head == null){
            this.element = new Node(value)
            this.head = this.element
            this.tail = this.element
        }else {
            this.element.nextNode = new Node(value)
            this.tail = this.element
        }
    }
    prepend(value){
        if(this.head == null){
            throw new Error("Head is null")
        }else {
            let element1 = new Node(value)
            element1.nextNode = this.element
            this.head = element1
        }
    }
    size(){
        if(this.head == null){
            throw new Error("List is empty")
        }else {
            let j = this.head
            let c = 0
            while(j != null){
                j = j.nextNode
                c++
            }
            return c
        }
    }
    head() {
        if(this.head == null){
            throw new Error("List is empty")
        }else {
            return this.head.value
        }
    }
    tail(){
        if(this.head == null){
            throw new Error("List is empty")
        }else {
            return this.tail.value
        }
    }
    at(index){
        if(this.head == null){
            throw new Error("List is empty")
        }else {
            let c = 0
            let value = null
            let j = this.head
            if(index == 0){
                value = j.value
            }else {
                while(j != null){
                    j = j.nextNode
                    if(c == index){
                        value = j.value
                        break
                    }
                }
            }
            if(value == null){
                throw new Error("Index not in range")
            }else {
                return value
            }
        }
    }
    pop() {

    }
    contains(value){
        if(this.head == null){
            throw new Error("List is empty")
        }else {
            let bool = false
            let j = this.head
            while(j != null){
                if(j.value == value){
                    bool = true
                    break
                }
                j = j.nextNode
            }
        }
    }
    find(value){
        if(this.head == null){
            throw new Error("List is empty")
        }else {
            let index = null
            let c = 0
            let j = this.head
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
        
    }
}
