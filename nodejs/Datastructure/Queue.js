class Queue {

    constructor() {

        this.arr = [];
        this.front = -1;
        this.rear = -1;
        this.capacity = 0;
    }

    isEmpty() {
        if (this.front == this.rear == 0) {
            return true;
        }
        return false;
    }

    size(){
        return this.rear-this.front;
    }
    enqueue(item) {
        if (this.rear == this.capacity) {
            console.log("Queue Overflowed");
            return;
        }
        if (this.front == -1) {
            this.front++;
        }
        this.arr[++this.rear] = item;
        this.capacity++;
        //  console.log(this.arr);
    } 

    dequeue() {
        if (this.front == -1) {
            console.log("Queue Underflowed");
            return;
        }
        var temp = this.arr[this.front++];

        if (this.front > this.rear) {
            this.front = this.rear = -1;
        }
        return temp;
        // return this.arr.shift();
    }


    display() {
        if (this.front != this.rear) {
            var str = "[ ";
            for (let index = this.front; index < this.rear; index++) {
                str = str + this.arr[index] + " ";

            }
            console.log("Elements in queue is ");
            console.log(str + "]");
        } else {
            console.log("Queue is empty ");
        }
    }
}
module.exports = {
    Queue
}