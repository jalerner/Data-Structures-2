
function Queue() {
    this.values = [];
    this.head = undefined;
    this.tail = undefined;
}

Queue.prototype.enqueue = function(input) {
    this.tail = input;
    this.values[this.values.length] = this.tail;

}

Queue.prototype.dequeue = function() {
    var retVal;
    if (this.values.length === 1) {
        retVal = this.values[0];
        this.values = [];
    } else if (this.values.length === 0) {
        retVal = undefined;
    } else {
        var newArr = [this.values.length - 1];
        for (var i = 0; i < this.values.length - 1; i++) {
            newArr[i] = this.values[i + 1];
        }
        retVal = this.values[0];
        this.values = newArr;
    }
     return retVal;
    
}

Queue.prototype["size"] = function() {
    return this.values.length;

}
