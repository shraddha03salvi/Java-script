class Node {
    constructor(item) {
        this.item = item;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
        this.capacity = 0;
    }
    isEmpty() {
        if (this.head == null) {
            return true;
        }
    }
    size() {
        return this.capacity;
    }
    index(element) {
        var count = 0;
        var temp = this.head;
        // iterae over the list 
        while (temp != null) {
            // compare each element of the list 
            // with given element 
            if (temp.element == element)
                return count;
            count++;
            temp = temp.next;
        }
        // not found 
        return -1;
    }
    addLast(item) {
        var node = new Node(item);
        if (this.head == null) {
            this.head = node;
            this.capacity++;
            return;
        }
        var temp = this.head;
        while (temp.next != null) {
            temp = temp.next;
        }
        temp.next = node;
        this.capacity++;
        return;
    }
    search(element) {
        var temp = this.head;
        while (temp != null) {
            if (temp.item == element) {
                return true;
            }
            temp = temp.next;
        }
        return false;
    }
    display() {
        var temp = this.head;
        var show = "";
        while (temp != null) {
            show = show + temp.item;
            if (temp.next != null) {
                show = show + " --> ";
            }
            temp = temp.next;
        }
        console.log(show);
    }
    remove(element) {
        var temp = this.head;
        var prev = this.head;
        if (temp.item == element) {
            this.head = temp.next;
            return true;
        }
        while (temp.item != element) {
            prev = temp;
            temp = temp.next;
        }
        prev.next = temp.next;
        return;
    }
    sort() {
        var temp2 = null;
        do {
            var swapped = 0;
            var temp1 = this.head;
            while (temp1.next != temp2) {
                if (temp1.next.item < temp1.item) {
                    var neww = temp1.next.item;
                    temp1.next.item = temp1.item;
                    temp1.item = neww;
                    swapped = 1
                }
                temp1 = temp1.next;
            }
            temp2 = temp1;
        } while (swapped)
    }

}
module.exports = {
    LinkedList

}