 let counter = 0;
      let count = 0;
      const alertBtn = document.getElementById("alert");
      const incrementBtn = document.getElementById("increment");
      const counterDisplay = document.querySelector(".counter");
      const decrementBtn = document.getElementById("decrement");
      const greetings = document.getElementById("greetings");
      const greetMeBtn = document.getElementById("greet_me");
      const usernameInput = document.getElementById("username");
      const resetBtn = document.getElementById("reset");
      const addParagraphBtn = document.getElementById("add_paragraph");
      const content = document.getElementById("content");

      const isValidName = (name) => {
        const namePattern = /^[a-zA-Z\s]+$/;
        return namePattern.test(name);
      };

      incrementBtn.addEventListener("click", () => {
        counter += 1;
        counterDisplay.textContent = counter;
      });

      decrementBtn.addEventListener("click", () => {
        counter -= 1;
        counterDisplay.textContent = counter;
      });

      alertBtn.addEventListener("click", () => {
        alert("Welcome to Marc Solutions!");
      });

      greetMeBtn.addEventListener("click", () => {
        const username = usernameInput.value.trim();
        if (username === "") {
          greetings.style.color = "red";
          greetings.textContent = "Please enter your name";
        } else if (!isValidName(username)) {
          greetings.style.color = "red";
          greetings.textContent = "Invalid input. Please use only letters";
        } else {
          greetings.style.color = "black";
          greetings.textContent = `How are you today, ${username}?`;
        }
      });

      resetBtn.addEventListener("click", () => {
        location.reload();
      });

      addParagraphBtn.addEventListener("click", () => {
        const newText = document.createElement("p");
        count += 1;
        newText.textContent = `✅ New business update #${count}`;
        content.appendChild(newText);
      });