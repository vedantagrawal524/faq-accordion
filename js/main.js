const questions = document.querySelectorAll(".question");

questions.forEach((question) => {
     const openIcon = question.querySelector(".open");
     const closeIcon = question.querySelector(".close");
     const answer = question.querySelector(".answer");
     const ques = question.querySelector(".ques");

     [openIcon, closeIcon, ques].forEach((trigger) => {
          trigger.addEventListener("click", () => {
               const isOpen = !answer.classList.contains("hide");

               if (isOpen) {
                    answer.classList.add("hide");
                    openIcon.classList.remove("hide");
                    closeIcon.classList.add("hide");
               } else {
                    answer.classList.remove("hide");
                    openIcon.classList.add("hide");
                    closeIcon.classList.remove("hide");
               }
          });
     });
});