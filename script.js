const open_login_container = () => {
  let login_container = document.querySelector("#login_container");
  login_container.classList.toggle("login_container");
  fade.classList.toggle("fade");
};
const open_sign_up_container = () => {
  let signup_container = document.querySelector("#sign-up_container");
  signup_container.classList.toggle("sign-up_container");
  fade.classList.toggle("fade");
};
const open_contact_container = () => {
  let contact_container = document.querySelector("#contact_container");
  contact_container.classList.toggle("contact_container");
  fade.classList.toggle("fade");
};
const open_about_container = () => {
  let about_container = document.querySelector("#about_container");
  about_container.classList.toggle("about_container");
  fade.classList.toggle("fade");
};

const login = () => {
  let login = document.querySelector("#login");
  let fade = document.querySelector("#fade");
  let to_signup = document.querySelector("#to_signup");
  let login_container = document.querySelector("#login_container");
  let exit_login = document.querySelector("#exit_login");

  login.addEventListener("click", open_login_container);
  fade.addEventListener("click", () => {
    login_container.classList.remove("login_container");
    fade.classList.remove("fade");
  });

  to_signup.addEventListener("click", () => {
    login_container.classList.remove("login_container");
    fade.classList.remove("fade");
    open_sign_up_container();
  });

  exit_login.addEventListener("click", () => {
    login_container.classList.remove("login_container");
    fade.classList.remove("fade");
  });
};

const signUp = () => {
  let sign_up = document.querySelector("#sign-up");
  let signup_container = document.querySelector("#sign-up_container");
  let fade = document.querySelector("#fade");
  let to_login = document.querySelector("#to_login");
  let exit_createa = document.querySelector("#exit_createa");

  sign_up.addEventListener("click", open_sign_up_container);
  fade.addEventListener("click", () => {
    signup_container.classList.remove("sign-up_container");
    fade.classList.remove("fade");
  });

  to_login.addEventListener("click", () => {
    signup_container.classList.remove("sign-up_container");
    fade.classList.remove("fade");
    open_login_container();
  });

  exit_createa.addEventListener("click", () => {
    signup_container.classList.remove("sign-up_container");
    fade.classList.remove("fade");
  });
};

const contact = () => {
  let contact = document.querySelector("#contact");
  let contact_container = document.querySelector("#contact_container");
  let fade = document.querySelector("#fade");
  let exit_contact = document.querySelector("#exit_contact");

  contact.addEventListener("click", open_contact_container);
  fade.addEventListener("click", () => {
    contact_container.classList.remove("contact_container");
    fade.classList.remove("fade");
  });

  exit_contact.addEventListener("click", () => {
    contact_container.classList.remove("contact_container");
    fade.classList.remove("fade");
  });
};

const about = () => {
  let about_l = document.querySelector("#about_l");
  let about_container = document.querySelector("#about_container");
  let fade = document.querySelector("#fade");
  let exit_about = document.querySelector("#exit_about");
  let to_contact = document.querySelector("#to_contact");

  about_l.addEventListener("click", open_about_container);
  fade.addEventListener("click", () => {
    about_container.classList.remove("about_container");
    fade.classList.remove("fade");
  });

  const about_red_button = () => {
    about_v = document.querySelector("#about_v");
    about_v.addEventListener("click", open_about_container);
    fade.addEventListener("click", () => {
      about_container.classList.remove("about_container");
      fade.classList.remove("fade");
    });
  };

  if (document.querySelector("#about_v") != undefined) {
    about_red_button();
  }

  to_contact.addEventListener("click", () => {
    about_container.classList.remove("about_container");
    fade.classList.remove("fade");
    open_contact_container();
  });

  exit_about.addEventListener("click", () => {
    about_container.classList.remove("about_container");
    fade.classList.remove("fade");
  });
};

login();
signUp();
contact();
about();
