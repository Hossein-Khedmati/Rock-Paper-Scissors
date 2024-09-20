const gameContainer = document.querySelector(".container"),
    userResult = document.querySelector(".user-result img"),
    cpuResult = document.querySelector(".cpu-result img"),
    result = document.querySelector(".result"),
    optionImages = document.querySelectorAll(".option-image");

    optionImages.forEach((image,index)=>{
        image.addEventListener("click",(e)=>{
            image.classList.add("active");

            userResult.src= cpuResult.src="images/rock.png"

            optionImages.forEach((image2,index2)=>{
                
                index !== index2 && image2.classList.remove("active");
                
            });


            gameContainer.classList.add("start")


            let time = setTimeout(() => {
            gameContainer.classList.remove("start")

                 // get the source of clicked option image
            let imageSrc = e.target.querySelector("img").src
            // set the user image to the clicked
            userResult.src=imageSrc

            // generate random num between 0 & 2
            let randomNumber = Math.floor(Math.random() * 3);
             
            // create an array of CPU image options 
            let cpuImages = ["images/rock.png","images/paper.png","images/scissor.png"]
            // set a random option to make image random
            cpuResult.src=cpuImages[randomNumber];
            // assign a letter value to the cpu options (R , P , S)
            let cpuValue=["R","P","S"][randomNumber]
            // assign a letter value to the clicked user option
            let userValue=["R","P","S"][index]
            // create an object with all possible outcomes
            let  outComes={
                RR: "مساوی",
                RP: "کامپیوتر برد!",
                RS: "شما بردید!",
                PP: "مساوی",
                PS: "کامپیوتر برد!",
                PR: "شما بردید!",
                SS: "مساوی",
                SR: "کامپیوتر برد!",
                SP: "شما بردید!",
            }

            // outcome value based on user and cou options
            let outComeValue=outComes[userValue + cpuValue];

            // dipslay result 
            result.textContent=userValue === cpuValue ? "مساوی شد!!" : `${outComeValue}`

            // Remove any previous color class
            result.classList.remove("green-text", "red-text");

            // Add color class based on result
            if (outComeValue === "شما بردید!") {
                result.classList.add("green-text"); // green for user win
            } else if (outComeValue === "کامپیوتر برد!") {
                result.classList.add("red-text"); // red for computer win
            }
            }, 2000);
           
        });
    })


    


