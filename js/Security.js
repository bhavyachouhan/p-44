class Security {

    constructor(){

        // Add code to create the input and button elements
        this.acces1 = createInput("code1");
        this.acces1 . position(100,90);
        this.acces1 . style('background','white');

        this.button1 =createButton('check');
        this.button1.position(100,120);
        this.button1.style('background','lightgrey');

        this.acces2 = createInput("code2");
        this.acces2 . position(700,190);
        this.acces2 . style('background','white');

        this.button2 =createButton('check');
        this.button2.position(700,220);
        this.button2.style('background','lightgrey');

        this.acces3 = createInput("code3");
        this.acces3 . position(100,290);
        this.acces3 . style('background','white');

        this.button3 =createButton('check');
        this.button3.position(100,320);
        this.button3.style('background','lightgrey');

    }

    display(){

        // Add code to make the buttons function as expected
        this.button1.mousePressed(()=>{
            if(system.authenticate(accessCode1,this.acces1.value())){
            this.button1.hide();
            this.acces1.hide();
            score++;
        }
        })

        this.button2.mousePressed(()=>{
            if(system.authenticate(accessCode2,this.acces2.value())){
            this.button2.hide();
            this.acces2.hide();
            score++;
        }
        })

        this.button3.mousePressed(()=>{
            if(system.authenticate(accessCode3,this.acces3.value())){
            this.button3.hide();
            this.acces3.hide();
            score++;
        }
        })

    }
}