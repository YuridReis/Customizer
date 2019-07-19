const default_customization = {
  color: "black",
  font_size: "1em",
  font_family: "Montserrat",
  background: "white"
};

const user_customization = {
  color: "black",
  font_size: "1em",
  font_family: "Montserrat",
  background: "white",
  reset: function() {
    this.color = default_customization.color;
    this.font_size = default_customization.font_size;
    this.font_family = default_customization.font_family;
    this.background = default_customization.background;
  }
};

const add_item = () => {
  let input_list = document.querySelector(".input_list");
  input_list.addEventListener("keyup", key => {
    if (key.keyCode === 13) {
      let text_set = document.createElement("div");
      let icon_set = document.createElement("div");
      let list_item = document.createElement("div");
      let trash = document.createElement("div");
      let edit = document.createElement("div");
      let completed = document.createElement("div");
      let list_not_completed = document.querySelector(".list_not_completed");
      icon_trash = document.createElement("img");
      icon_edit = document.createElement("img");
      icon_completed = document.createElement("img");

      text_set.classList.add("text_set");
      icon_set.classList.add("icon_set");
      list_item.classList.add("list_item");
      trash.classList.add("trash");
      edit.classList.add("editcompleted");
      completed.classList.add("completed");
      trash.classList.add("icon");
      edit.classList.add("icon");
      completed.classList.add("icon");
      icon_trash.src = "images/icon_trash.png";
      icon_edit.src = "images/icon_edit.png";
      icon_completed.src = "images/icon_completed.png";

      text_set.textContent = input_list.value;
      trash.appendChild(icon_trash);
      edit.appendChild(icon_edit);
      completed.appendChild(icon_completed);
      icon_set.appendChild(trash);
      icon_set.appendChild(edit);
      icon_set.appendChild(completed);
      list_item.appendChild(text_set);
      list_item.appendChild(icon_set);
      list_not_completed.appendChild(list_item);
      input_list.value = "";

      trash.addEventListener("click", function() {
        this.parentNode.parentNode.remove();
      });

      edit.addEventListener("click", function() {
        if (
          this.parentNode.parentNode.parentNode.classList.contains(
            "list_not_completed"
          )
        ) {
          input_list.value = "";
          input_list.value = this.parentNode.parentNode.querySelector(
            ".text_set"
          ).textContent;
          this.parentNode.parentNode.remove();
        }
      });

      completed.addEventListener("click", function() {
        let list_completed = document.querySelector(".list_completed");
        if (
          this.parentNode.parentNode.parentNode.classList.contains(
            "list_not_completed"
          )
        ) {
          list_completed.appendChild(this.parentNode.parentNode);
          this.querySelector("img").src = "images/icon_completed_return.png";
        } else {
          list_not_completed.appendChild(this.parentNode.parentNode);
          this.querySelector("img").src = "images/icon_completed.png";
        }
      });
    }
  });
};

add_item();
