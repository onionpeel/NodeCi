class Page {
  goto() {
    console.log('im going to another page');
  }

  setCookie() {
    console.log('im setting a cooking');
  }
};

class CustomPage {
  static build() {
    const page = new Page();
    const customPage = new CustomPage(page);

    const superPage = new Proxy(customPage, {
      get: function(target, property) {
        return target[property] || page[property]
      }
    });
    return superPage;
  }

  constructor(page) {
    this.page = page
  }

  login() {
    this.page.goto('localhost:3000');
    this.page.setCookie();
  }
};



const superPage = CustomPage.build();
superPage.login();
superPage.setCookie();
