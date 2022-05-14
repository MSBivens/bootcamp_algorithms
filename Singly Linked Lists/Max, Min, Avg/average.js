// SList: Average
// Create average() to return average value

max() {
    var sum = 0;
    var runner = this.head;
    while(runner) {
        sum += runner.value;
        runner = runner.next
    }
    return `avg: ${sum/this.length()}`
}