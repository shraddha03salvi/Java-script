class Node {

    constructor(element) {
        this.element = element;
        this.next = null;
    }
}
class QueueLinked {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    enqueue(element) {
        var n = new Node(element);
        if (this.head == null) {
            this.head = n;
            this.size++;
            return;
        } else {
            var current = this.head;
            while (current.next) {
                current = current.next;
            }
            this.size++;
            current.next = n;
        }


    }
    dequeue() {
        if (this.size == 0) {
            console.log("Queue is empty");
            return;
        }
        var n = this.head.element;
        this.head = this.head.next;
        this.size--;
        return n;
    }

    getelement() {
        var curr = this.head;
        var str = "";
        while (curr) {
            str = str + curr.element;
            if (curr.next != null) {
                str = str + ",";
            }
            curr = curr.next;
        }
        return str;

    }

    size() {
        return this.size;
    }
    isEmpty() {
        if (this.size == 0) {
            return true;
        }
        return false;
    }

    getData() {
        var curr = this.head;
        var str = "";
        while (curr) {
            str = str + curr.element;
            if (curr.next != null) {
                str = str + " ";
            }
            curr = curr.next;
        }
        return str;
    }
    makeBlank() {
        this.head = null;
    }


}
module.exports = {
    QueueLinked
}