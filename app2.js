//2.. write a function which takes your name and displays the greeting with your name

const myGreeting = function(name , thanks) {

        let greetMsg = (`<h3>${name} :</h3>
        Wishing you joy and happiness,  you are an amazing teacher, and you only deserve the best.
        You are the spark, the inspiration, the guide, the candle to my life.<br>
        ${thanks}` );
        return greetMsg;
        }
            let name = `Miss Faiza`;
            let  thanks = `I am deeply thankful that you are my teacher. 
            you are the pillar of our success and in the classroom, you are the best.`;

            let greet = myGreeting(name, thanks);
            document.write(greet);