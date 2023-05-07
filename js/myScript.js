
            var p1 = document.getElementById("p1");
            function show(){
                //alert("Hello");
                // DOM

                //document.getElementById("p1").innerHTML = "Sea Game 2023";
                //document.getElementById("p1").style.display = "none";
                //document.getElementById("image1").src = "../images/css.png";
                //document.getElementById("p1").style.fontSize = "30px";

                let age = 20;
                let name = "Dara";
                const limit = 20;
                var help = true;
                //limit = 23;
                //document.getElementById("p1").innerHTML = limit;
                
                //console.log(typeof help); 
                var names = ["Dara", "Thida", "Seyha"];
                var st1 = {name: "Vannda", gender: "Male", age: 28};

                //console.log(names[0]);
                /*

                dgasdjfgj
                */
               /*
                console.log(st1);
                console.log(st1.name);
                console.log(st1["name"]);

                if(age > 19){
                    console.log("Yes");
                }else{
                    console.log("No");
                }
                */
                
                for(var i=0; i<names.length; i++){
                    //console.log(names[i]);
                }

                var text = "";
                for(let n in names){
                    text += names[n] + "<br>"
                }
                document.getElementById("p1").innerHTML = text;

                for(let v in st1){
                    console.log( v + " >> " + st1[v]);
                }

            }

            function display(text){
                console.log("================");
                console.log(text);
                console.log("================");
            }

            function sum(a, b){
                return a + b;
            }

            function show2(){
                var number = sum(3,4);
                //document.write(number);
                
                p1.innerHTML = number;

                var st = new Student("Dara",23);
                st.setAge(17);
                console.log(st.name + "  " + st.age);
            }