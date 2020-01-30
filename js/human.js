function Human(name, gender, weight) {
    this.name = name;
    this.gender = gender;
    this.weight = weight;

    this.isMale = function () {
        if(this.gender=='Male')
            return true;
        return false;
    };

    this.setGender = function (sex) {
        this.gender = sex;
    };

    this.checkApple = function (Apple) {
        return Apple.isEmpty();
    };

    this.eat = function (Apple) {
        if(Apple.getWeight() > 0){
            Apple.decrease();
            this.weight++;
        }
    };

    this.say = function (str) {
        alert(str);
    };

    this.getName = function () {
        return this.name;
    };

    this.setName = function (name) {
        this.name = name;
    };

    this.getWeight = function () {
        return this.weight;
    };

    this.setWeight = function (number) {
        this.weight = number;
    };
}