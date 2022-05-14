// SList: Min
// Create min(node) to return list's smalles values

min() {
    var min = this.head.value;
    var runner = this.head;
    while(runner) {
        if(runner.value < min) {
            min = runner.value;
        }
        runner = runner.next
    }
    return `min: ${min}`
}