var botui = new BotUI('my-bot');

botui.message.bot({
    delay: 500,
    loading: true,
    content: 'Hi There! 🖐'
}).then(function() {
    botui.message.bot({
        delay: 1000,
        loading: true,
        content: "My name is Saranesh ManiRatna.K and I'm from Visakhapatnam,AndhraPradesh,India 🇮🇳"
    }).then(function() {
        botui.message.bot({
            delay: 1000,
            loading: true,
            content: '..and I look like this 🤓![my-image](./resources/images/profile-cropped.jpeg)'
        }).then(function() {
            botui.message.bot({
                delay: 1000,
                loading: true,
                content: "I'm currently pursuing my B.tech JuniorYear at GITAM Visakhapatnam with an aggregate of 9.24"
            }).then(function () {
                botui.message.human({
                    delay: 1000,
                    loading: true,
                    content: "Oh! that's nice could you tell me a little more about yourself😲"
                }).then(function() {
                    botui.message.bot({
                        delay: 1000,
                        loading: true,
                        content: "I'd like to define myself as a ~Jack of all trades trying to become a master of One~,a BI and Data Analysis Enthusiast!,a person with a right amount of technical and soft-skill competencies that can perfectly fit your bill."
                    }).then(function() {
                        botui.message.bot({
                            delay: 1000,
                            loading: true,
                            content: "I like applying my knowledge of ML/BI/DS to create applications that are user friendly yet can solve major problems!"
                        }).then(function() {
                        botui.message.bot({
                            delay: 1000,
                            loading: true,
                            content: "Eg.Indian Number Plate Detection,Mask Detector"
                        }).then(function (){
                            botui.message.bot({
                                content: "I have interned twice,during the summer of my sophomore year @BackLiftLabs as UI Developer for android applications and @Kagool during the summer of my junior year where I worked as BI Dev and Powershell asst."
                            }).then(function() {
                                botui.message.human({
                                    delay: 1000,
                                    loading: true,
                                    content: "Impressive 👏 What else do you like to do ?"
                                }).then(function () {
                                    botui.message.bot({
                                        delay: 1000,
                                        loading: true,
                                        content: "I like to program cool things 👨‍💻like this bot 🤖 and...a lot more"
                                    }).then(function () {
                                        botui.message.bot({
                                            delay: 1000,
                                            loading: true,
                                            content: "My skills include Python,PowerBI,Tableau,OpenCV,TeachableMachine,Sci-kit Learn,TensorFlow,Keras,Pandas,Flask,Seaborn,Matplotlib,C++,Bootstrap4,SQL....."
                                        }).then(function() {
                                            botui.message.human({
                                                delay: 1000,
                                                loading: true,
                                                content: "Any personal interests/hobbies😄?"
                                            }).then(function() {
                                            botui.message.bot({
                                            delay: 1000,
                                            loading: true,
                                            content: "Yes a lot,I love to create impact through communities,so I have been an active part of Google DSC,AIESEC,Kalakrithi....and a lot more!"
                                        }).then(function() {
                                            botui.message.bot({
                                            delay: 1000,
                                            loading: true,
                                            content: "My hobbies include cooking,sketching and watching philosophical documentaries😉"
                                        }).then(function() {
                                            botui.message.human({
                                                delay: 1000,
                                                loading: true,
                                                content: "Great! You seem to be a cool guy 👌 but how can I contact you ?"
                                            }).then(function() {
                                                botui.message.bot({
                                                    delay: 1000,
                                                    loading: true,
                                                    content: "Sure! You can !(phone) on [8500.717.519](tel:+91 8500717519)"
                                                })
                                                botui.message.bot({
                                                    delay: 1000,
                                                    loading:true,
                                                    content: "!(envelope) me at [saraneshkanumuri@gmail.com](mailto:saraneshkanumuri@gmail.com)^"
                                                })
                                                botui.message.bot({
                                                    delay: 1000,
                                                    loading:true,
                                                    content: "or you can connect with me on !(linkedin-square) 👉 [here](https://www.linkedin.com/in/saranesh-kanumuri-17a7a5181/)^"
                                                })
                                                botui.message.bot({
                                                    delay: 2000,
                                                    content: "you can check my work here ! 👉 [here](https://github.com/sarnesh444)^"
                                                }).then(function() {
                                                    botui.message.human({
                                                        delay: 1000,
                                                        loading: true,
                                                        content: "Perfect! 👍"
                                                    }).then(function() {
                                                        botui.message.bot({
                                                            delay: 1000,
                                                            loading: true,
                                                            content: "Looking forward to hear from you soon. 🙂"
                                                        });
                                                    });
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
            });
        });
    });
});
});
});
});