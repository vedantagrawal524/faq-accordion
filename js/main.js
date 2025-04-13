const questions = document.querySelectorAll(".question");

questions.forEach((question) => {
     const openIcon = question.querySelector(".open");
     const closeIcon = question.querySelector(".close");
     const answer = question.querySelector(".answer");
     const text = question.querySelector(".ques");

     [openIcon, closeIcon, text].forEach((trigger) => {
          trigger.addEventListener("click", () => {
               const isOpen = !answer.classList.contains("hide");

               if (isOpen) {
                    answer.classList.add("hide");
                    openIcon.classList.remove("hide");
                    closeIcon.classList.add("hide");
                    answer.classList.remove("show");
               } else {
                    answer.classList.remove("hide");
                    openIcon.classList.add("hide");
                    closeIcon.classList.remove("hide");
                    answer.classList.add("show");
               }
          });
     });
});
