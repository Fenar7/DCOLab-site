document.addEventListener("DOMContentLoaded", function () {
    const contentItems = document.querySelectorAll(".content-item");
    let index = 0;
    flag = 0;
  
    setInterval(() => {

      const currentContent = contentItems[index];
      const nextIndex = (index + 1) % contentItems.length;
      const nextContent = contentItems[nextIndex];

  
      currentContent.classList.remove("active");
      currentContent.classList.add("before");
      nextContent.classList.remove("before");
      nextContent.classList.add("active");


      if(index==1){
        contentItems.forEach((div) => {
            div.classList.remove('before');
        });
      }

      console.log(index)
  
      index = nextIndex;
    }, 10000); 
  });
  
