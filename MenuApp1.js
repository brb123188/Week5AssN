	//Use at least one array. Use at least two classes. Your menu should have the options to create, view, and delete elements.



    class Condiment {
        constructor(type,) {
        this.type = type;
        
    }
    
    describe() {
        return `${this.type}`;
     }
     
    }
    
    class Sandwich {
        constructor(type) {
            this.type = type;
            this.condiments = [];
        }
    
        addCondiment(condiment) {
            if (condiment instanceof Condiment) {
                this.condiments.push(condiment);
        } else {
            throw new Error(`You can only add an instance of a condiment. Argument is not a condiment: ${condiment}`);
        }
    }
    
    describe() {
        return `${this.type} has ${this.condiments.length} condiments.`;
     }
    }
    
    class Menu {
        constructor() {
            this.sandwiches = [];
            this.selectedSandwich = null;
        }
    
        start() {
            let selection = this.showMainMenuOptions();
            while (selection != 0) {
                switch (selection) {
                    case '1':
                        this.createOrder();
                        break;
                        case '2':
                            this.viewOrder();
                            break;
                            case '3':
                                this.deleteOrder();
                                break;
                                case '4':
                                    default:
                                        selection = 0
                }
            
                selection = this.showMainMenuOptions();
            }
    
                alert('Thanks for your order');
                }
    
                showMainMenuOptions() {
                    return prompt(`
                    0) exit
                    1) create order
                    2) view order
                    3) cancel order
                    `);
                }
    
                showSandwichMenuOptions(sandwichInfo){
                    return prompt(`
                    0) back
                    1) choose your condiment
                    2) remove condiments
                    ----------------------
                    ${sandwichInfo}
                    `);
                }
    
                displaySandwiches() {
                    let sandwichString = '';
                    for (let i = 0; i < this.sandwich.length; i++) {
                        sandwichString += i + ') ' + this.sandwiches[i].type + '\n';
                    }
                    alert(sandwichString);
                }
    
                createOrder(){
                    let type = prompt('Enter sandwich type:')
               this.sandwiches.push(new Sandwich(type));
            }
    
            viewOrder() {
                let index = prompt('Enter Sandwich index:')
            if (index > -1 && index < this.sandwiches.length) {
                this.selectedSandwich = this.sandwiches[index];
                let description = 'Sandwich type : ' + this.selectedSandwich.type + '\n';
    
                for (let i = 0; i < this.selectedSandwich.condiments.length; i++) {
                    description += i + ') ' + 'Condiments : ' + this.selectedSandwich.condiments[i].type + '\n';
            }
    
                let selection = this.showSandwichMenuOptions(description);
                switch (selection) {
                    case '1':
                        this.addCondiments();
                        break;
                        case '2':
                            this.removeCondiments();
    
                }
    
            }
        }
        
        removeSandwich() {
            let index = prompt('Enter the index of the Sandwich to remove');
            if (index > -1 && index < this.sandwiches.length) {
                this.sandwiches.splice(index, 1);
            }
        }
    
        addCondiments() {
            let type = prompt('Enter the condiments:');
            this.selectedSandwich.condiments.push(new Condiment(type));
        }
    
        removeCondiments() {
            let index = prompt('Enter the index of the condiments you wish to remove');
            if (index > -1 && index < this.selectedSandwich.condiments.length){
                this.selectedSandwich.condiments.splice(index, 1);
            }
        }
    }
    
    let menu = new Menu();
    menu.start();