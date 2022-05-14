// SList: Max
// Create method max() to return list's largest value

max() {
    var max = this.head.value;
    var runner = this.head;
    while(runner) {
        if(runner.value > max) {
            max = runner.value;
        }
        runner = runner.next
    }
    return `max: ${max}`
}