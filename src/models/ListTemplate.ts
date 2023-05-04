export class ListTemplate {
    constructor(private container: HTMLUListElement){}
  
    render(item: HasFormatter, heading: string, position: 'start' | 'end'){
      
      
      const li = document.createElement('li');
      
      const h4 = document.createElement('h4');
      h4.innerText = heading;
      if (heading === "payment") {
        h4.style.color = "#069e45";
      }
      li.append(h4);
      
      const p = document.createElement('p');
      p.innerText = item.format();
      li.append(p);
      
      if(position === 'start'){
        this.container.prepend(li);
      } else {
        this.container.append(li);
      }
      
      const buttons = document.querySelector('button') as HTMLButtonElement;
      const element = localStorage.getItem("element");
      element && document.body.classList.add(element);

      localStorage.setItem('addedElement', li.outerHTML);
  }
}