function Apple() {
    this.weight = 10;
    this.getWeight = function () {
        return this.weight;
    };

    this.decrease = function () {
        this.weight--;
    };

    this.isEmpty = function () {
        if (this.weight==0)
            return true;
        return false;
    };
}