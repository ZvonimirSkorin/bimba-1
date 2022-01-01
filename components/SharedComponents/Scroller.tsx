export class Scroller {
  constructor() {}
  static scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) window.scrollTo({ top: window.scrollY + element?.getBoundingClientRect().top - 100, behavior: "smooth" });
  };
}
