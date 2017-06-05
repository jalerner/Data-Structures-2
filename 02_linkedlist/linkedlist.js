function  LinkedList() {
    this.head = false;
    this.tail = false;
}

function  Node(inputStr) {
    this.value = inputStr;
    this.next = null;
    this.previous = null;
}

LinkedList.prototype.addToTail = function(inputStr) {
    var newNode = new Node(inputStr);
    if (!this.tail) {
        newNode.previous = false;
        this.tail = newNode;
        this.head = newNode;
    } else {
        this.tail.next = newNode;
        newNode.previous = this.tail;
        this.tail = newNode;
    }
    this.tail.next = false;

}

LinkedList.prototype.addToHead = function(inputStr) {
    var newNode = new Node(inputStr);
    if (!this.tail) {
        newNode.next = false;
        this.head = newNode;
        this.tail = newNode;
    } else {
        newNode.next = this.head;
        this.head.previous = newNode;
        this.head = newNode;
    }
    newNode.previous = false;

}

LinkedList.prototype.removeHead = function() {
    var secondNode = this.head.next;
    if (this.tail != this.head) {
        secondNode.previous = null;
    }
    var firstNode = this.head;
    if (this.tail === this.head) {
        this.tail = false;
        this.head = false;
    } else {
        this.head = this.head.next;
    }
    return firstNode.value;
}

LinkedList.prototype.removeTail = function() {

    var secondToLast = this.tail.previous;
    if (this.tail != this.head) {
        secondToLast.next = null;
    }
    var lastNode = this.tail;
    if (this.tail === this.head) {
        this.tail = false;
        this.head = false;
    } else {
        this.tail = this.tail.previous;
    }
    return lastNode.value;
}

LinkedList.prototype.search = function(input) {
    var pointer = this.head;
    while (pointer !== undefined && pointer !== null && pointer.next !== null) {
        if (typeof(input) === 'function') {
            console.log("here!");
            if (input(pointer.value)) {
                return pointer.value;
            }
        } else {
            if (pointer.value === input) {
                return input;
            }
        }
        console.log(pointer.value);
        pointer = pointer.next;
    }
    return null;
}