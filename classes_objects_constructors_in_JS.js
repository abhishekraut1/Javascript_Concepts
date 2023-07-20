class RailwayForm{ // Class

    // Constructor
    constructor(name,trainNo){
        this.name = name;
        this.trainNo = trainNo;
    }
    // Methods
    submit(){
        console.log(this.name+"'s form SUBMITTED for train number "+this.trainNo+".");
    }
    cancel(){
        console.log(this.name+"'s form CANCELED for train number "+this.trainNo+".");
        this.name = 0;
        this.trainNo = 0;
    }
    preview(){
        console.log(`Name: ${this.name}\nTrain Number: ${this.trainNo}`);
    }
}

let abhishekForm = new RailwayForm("Abhishek",123456); // Object abhishekForm
abhishekForm.submit();
abhishekForm.preview();
console.log("-----");
abhishekForm.cancel();
abhishekForm.preview();